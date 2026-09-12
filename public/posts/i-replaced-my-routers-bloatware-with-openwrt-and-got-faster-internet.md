# **I Replaced My Router's Bloatware With OpenWrt and Got Faster Internet**

My router finally got OpenWrt support, and naturally, I decided to install it.

I could have stayed with the OEM firmware. It worked. It had the usual glossy interface, a handful of settings, and probably several things running in the background that I never asked for. But the hardware was capable, OpenWrt was now supported, and I wanted to see what the router could do when it was not being treated like a locked appliance.

Also, I like making perfectly functional devices more complicated for fun.

## The non-serial installation adventure

The normal "upload the firmware and hope for the best" route was not available to me. I was installing OpenWrt without serial access, which turned a firmware upgrade into a small archaeological expedition.

I had to:

1. Start with an older signed OEM firmware version.
2. Use a tool to repack it and enable telnet.
3. Flash that vulnerable version to the router.
4. Telnet into the router.
5. Flash OpenWrt from there.

It took me about an hour of trying, reading, retrying, and wondering whether the next reboot would give me a router or a very expensive paperweight.

The repacked firmware step was particularly surreal. I was deliberately taking an old vendor image, modifying it just enough to expose telnet, and then using that temporary foothold to replace the firmware entirely. No serial console. No comforting stream of boot logs. Just Ethernet, a terminal, and the quiet realization that I should probably have checked the recovery process one more time.

But it worked. OpenWrt booted, and the router lived to tell the story.

## OpenWrt feels like a real operating system

After the installation, I took some time to configure everything properly.

I set up proper VLANs, and even the guest Wi-Fi got its own VLAN. That might sound like a small detail, but it was a huge upgrade from treating the router like a sealed box with a few settings I was allowed to touch.

I also got dashboards showing information I simply could not obtain before. Instead of guessing what the router was doing, I could actually see more of what was happening on my network.

There was another improvement I did not expect: the temperature. Under the OEM firmware, the router used to get very hot, hot enough that I would sometimes wonder whether it was slowly cooking its own hardware. After switching to OpenWrt, it is barely warm to the touch. I do not have perfectly scientific before-and-after temperature logs, but the difference is obvious.

That is the part I enjoy most about OpenWrt. It does not just give you a different interface. It gives you control. The router starts feeling less like an appliance that happens to sit between your devices and the internet, and more like an actual piece of network infrastructure that you can understand and shape.

And then came the unexpected part: the internet got faster.

## The speed test plot twist

I tested this with a wired connection through the same upstream router, keeping the comparison as consistent as possible. For reference, I pay for a connection rated at **300 Mbps download and 150 Mbps upload**.

Here is what I saw:

On the OEM firmware, the wired test reached **240 Mbps down and 105 Mbps up**. With OpenWrt, it reached **320 Mbps down and 160 Mbps up**, which is above my 300/150 plan. Basic ping stayed the same, but the connection behaved completely differently under load: jitter went from all over the place to a steady **0.7 ms** in both directions, download latency fell from a stable **43 ms average to 5 ms**, and upload latency dropped from a very unstable **120 ms average, with spikes up to 700 ms, to a stable 3 ms**.

The extra throughput was nice, but the latency change was the real shock. Whatever the OEM firmware was doing, it was doing something very weird around upload latency.

## Faster, more visible, and safer

The performance improvement would have been enough to make me happy, but the better network control is what made the whole experiment feel worthwhile.

My guest Wi-Fi is properly separated onto its own VLAN. That means guests get internet access without getting a free guided tour of the rest of my network. I have more visibility through the dashboards, more control over how traffic is organized, and fewer mysterious things happening behind a glossy OEM interface.

My network is safer, more secure, and faster. That is a pretty good return on an hour of firmware-related stress.

It also feels like I gave the router a second life. The hardware was still capable; it just needed software that was willing to let it do more. OpenWrt turned it from a limited appliance into something I actually enjoy managing.

## Final thoughts

Installing OpenWrt without serial access was definitely a journey. Repacking an old OEM firmware version, enabling telnet, flashing a vulnerable image, and then using that access to install OpenWrt is not the kind of process I would describe as relaxing.

But once it was installed and configured, the result was awesome.

I got proper VLANs, a dedicated VLAN for guest Wi-Fi, dashboards with information I could not see before, better download and upload speeds, dramatically better latency, and a network that feels much more under my control.

So, thank you to the [OpenWrt team](https://openwrt.org/) and everyone who contributes to the project. You took hardware that the OEM could not be bothered to keep updated or improve and gave it a new life.

That is the magic of open source sometimes. A router that looked finished suddenly had plenty left to give.
