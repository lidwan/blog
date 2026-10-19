# **My Self-Hosted DNS Died at 1 AM, So I Moved to NextDNS**

There is a very specific kind of broken that only happens when DNS goes down.

The Wi-Fi is connected. The router is happy. Every device shows full bars. And yet nothing loads, because none of them can turn a domain name into an IP address anymore.

That was my entire house one morning. And if I am being honest, the root cause was a setup I was very proud of.

## The setup I was proud of

For a while, all of my DNS ran through [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome), self-hosted on a cloud instance. I mentioned it in my [self-hosting post](/posts/self-hosting-the-subscription-detox-i-didnt-know-i-needed), and on paper, it was a pretty solid setup.

It ran semi-publicly. The resolver was reachable from the internet, but only over DNS-over-TLS (DoT) on port 853. Plain DNS on port 53 was closed, because an open resolver on the public internet is basically an invitation for every scanner and DDoS reflection botnet on the planet.

The real gatekeeping came from AdGuard Home's client IDs. In case you did not know, AdGuard Home can identify encrypted DNS clients using a client ID, and for DoT that ID is sent as a subdomain in the TLS server name. So instead of pointing a device at `dns.domain.tld`, you point it at `yourclientid.dns.domain.tld`, and AdGuard knows exactly who is asking. I generated a very long, random string for each client ID, long enough that nobody is guessing it by accident, or on purpose. AdGuard Home was configured to only answer requests carrying one of those client IDs, so a request without one got no answer at all.

Then I put [fail2ban](https://github.com/fail2ban/fail2ban) on top of it. Any IP that reached AdGuard Home without a client ID it recognized got banned. Not after five tries. Not after three. One. A stranger got exactly one attempt, and after that, the server simply stopped existing for them. The only way in was the correct client ID.

Before trusting it with anything important, I tested it properly. Ads were blocked. Trackers were blocked. DNS resolved reliably, and the latency was good. Everything worked exactly the way I wanted it to.

So I did what any confident self-hoster would do: I set it as the default DNS for all of my personal devices and my entire home network.

One instance. In one location. Serving the whole house.

You can probably see where this is going.

## 1 AM

At around 1 AM, the instance had an issue.

I was asleep. Everyone in the house was asleep. And while we slept, every device on the home network, along with every personal phone and laptop we use, quietly lost the ability to resolve anything.

I found out the way most people find out about a DNS outage: I woke up, and the internet "did not work."

## The backup was fine. The cloud was not.

This is the part where good habits were supposed to save the day.

I had backups of the instance. The plan was simple: restore the latest backup, let it boot, and move on with my morning.

Then I went to restore it and found out that my cloud provider was out of capacity for that instance size in that location.

The backup was fine. There was just nowhere to put it.

That left me with two options, and I did not love either of them:

1. **Restore onto a larger instance.** Bigger instances were available, but AdGuard Home is very lightweight, and paying extra every month for CPU and RAM that a DNS resolver will never touch felt ridiculous.
2. **Move to a different cloud provider.** That meant spending hours migrating my setup somewhere else and testing everything all over again.

Neither of those is a fun decision to make before breakfast.

## The quick fix

First things first: the house needed working DNS again.

I spun up a local AdGuard Home instance on my home server and pointed the home network at it. That brought DNS back for everything at home, ads were blocked again, and the internet "started working."

But that only solved the problem while we were at home.

## Why I did not just keep it at home

The obvious question is: why not keep AdGuard Home on the home server and call it a day?

Because the whole point of the semi-public DoT setup was being able to use it on my phone outside the house.

A home-only resolver works great while you are on home Wi-Fi. The moment you leave, your phone needs a way back home to reach it, which means keeping a tunnel connected all the time. And I already know exactly what that costs. In my self-hosting post, I mentioned that a phone connected to NetBird used 38% of its battery just idling overnight. Keeping a VPN connected 24/7 just so DNS works is not a trade I am willing to make.

A DoT resolver on the public internet avoided all of that. The phone's built-in Private DNS setting talks to it directly, from anywhere, with no tunnel required.

So moving it home for good was off the table. The local instance was a band-aid while I figured out a more permanent solution.

## Weighing the options

So I sat down and weighed things honestly.

Self-hosting DNS in the cloud gave me a lot of control, and it worked beautifully, right up until it did not. But DNS is not like most of the services I run. If Speedtest Tracker goes down overnight, nobody notices. If ChangeDetection misses a check, the world keeps turning. If DNS goes down, everything goes down with it, for everyone in the house, all at once.

Doing it properly would mean more than one resolver, ideally in different locations or with different providers, plus failover, plus monitoring that actually wakes someone up. In other words, I would be building a small, highly available DNS service for one household.

I have built a [highly available DNS resolver on AWS](/posts/building-a-highly-available-dns-resolver-on-aws-with-unbound-auto-scaling-nlb-and-cloudwatch) before, and it was a great learning project. It is also not something I want to run, maintain, and pay for just so my family can browse the internet without ads.

So I made a decision I did not expect to make: I stopped self-hosting my DNS.

## Moving to NextDNS

I moved to [NextDNS](https://nextdns.io/), a managed DNS service.

It gives me almost the same ad, tracker, and analytics blocking I had with AdGuard Home, with much better uptime than a single cloud instance in a single location. And because it supports encrypted DNS out of the box, my phone stays protected outside the house without a VPN connected. That was the entire point of the original setup, and NextDNS gives it to me without the 1 AM risk.

It is not perfect, though.

Sometimes the latency is worse than what I had with my own resolver. And sometimes the logs and analytics stop working for a short while.

Those are real downsides, and I do notice them. But they are the kind of downsides I can live with. A few extra milliseconds here and there is a lot better than waking up to a house full of devices with no DNS.

## What I learned

- **A backup is only as good as the place you can restore it to.** I had the backup. I did not have the capacity to restore it where I wanted, at the size I wanted.
- **Know your single points of failure.** One instance, in one location, serving every device in the house is a single point of failure, no matter how well it is configured.
- **Not everything should be self-hosted.** Some services are fun to run yourself. DNS is the dependency everything else sits on.
- **A home server is a great fallback.** Being able to spin up AdGuard Home locally got the house back online while I figured out the long-term fix.

## Final thoughts

I still love self-hosting. Most of my stack still runs on hardware I control, and that is not changing anytime soon.

But this outage taught me that the question is not just "can I host this myself?" It is also "what happens when this breaks while I am asleep?"

For most of my services, the answer is "not much." For DNS, the answer was "everything stops."

I said it about Coolify, and apparently I needed to learn it twice: sometimes the best lesson from doing something yourself is learning when to let someone else handle it. DNS is now one of those things, and at least I can sleep knowing it will most likely not fail in the middle of the night.
