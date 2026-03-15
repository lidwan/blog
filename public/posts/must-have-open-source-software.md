# Must-Have Open Source Software

I am mildly obsessed with open source software. Not in a "I compile everything from source and distrust pre-built binaries" way more in a "why would I give money to a company for something a nonprofit or community built better, for free" kind of way.

The short case for it: open source software is usually more transparent, often more secure because anyone can audit the code, and doesn't come with a vendor desperately trying to lock you into their ecosystem.

Here's a list of tools I think genuinely deserve a spot on your machine.

## The list

1. Ente Auth (2FA Authenticator)
2. Bitwarden (Password Manager)*
3. Mullvad (VPN)**
4. LocalSend (Secure cross-platform file sharing)
5. Zen (Firefox-based browser)
6. VeraCrypt (Encryption software)
7. Kdenlive (Video editing)
8. Ventoy (Bootable USB media creation)
9. OBS (Video recording and live streaming)
10. HandBrake (Video transcoder)

All of these are free, open source, and cross-platform unless noted otherwise.

If you're somewhere with restricted downloads, remember that as open source software, all of these have their source code and installers available on [GitHub](https://github.com/), which is usually less likely to be blocked.

\* Has a paid version (~$10/year). The free version is good enough for almost everyone.

\*\* Paid only (~$5/month), no free tier.

---

## 1. [Ente Auth](https://ente.io/auth/) Two-Factor Authentication

If you're not using two-factor authentication yet, you really should be. Even if someone gets hold of your password, 2FA means they still can't get in without a second code. And app-based 2FA is significantly more secure than SMS codes, which are vulnerable to SIM-swapping.

Ente Auth is my pick because it does end-to-end encrypted cloud backups, shows you the next upcoming code (genuinely underrated), can import from apps like Google Authenticator, and also works fully offline if you'd rather skip the cloud backup entirely.

## 2. [Bitwarden](https://bitwarden.com/) Password Manager

Reusing passwords across accounts is the digital equivalent of using the same key for your front door, your car, and your safe. If one lock gets picked, everything is compromised.

A password manager means every account gets its own long, random, impossible-to-guess password and you only have to remember one.

Bitwarden specifically offers zero-knowledge end-to-end encryption, unlimited passwords and devices on the free tier, and strong autofill support. If you want to store encrypted files too, that's in the paid version.

## 3. [Mullvad VPN](https://mullvad.net/) VPN (~$5/month, no free tier)

I'll be honest the VPN market is full of sketchy providers that quietly sell your data while loudly claiming they don't. Mullvad is one of the few I actually trust.

They don't know your email or phone number. They give you a random account number when you sign up. They accept cash and cryptocurrency. They have RAM-only infrastructure, so there's nothing to seize. They get independently audited. Their [privacy stance](https://mullvad.net/en/vpn/laws-that-matter) is thorough and they explain it clearly.

Advanced features include obfuscation options like [Shadowsocks](https://mullvad.net/en/blog/introducing-shadowsocks-obfuscation-for-wireguard), [quantum-resistant connections](https://mullvad.net/en/blog/quantum-resistant-tunnels-now-available-on-ios), multi-hop routing, and [DAITA](https://mullvad.net/en/vpn/daita) their defense against AI-guided traffic analysis.

If you're not in Sweden and want an alternative, Proton VPN is Swiss-based and similarly strong though their pricing is less flexible if you want it cheap month-to-month.

One disclaimer worth repeating: a VPN hides what you're doing online, but your ISP can still see that you're using one. Also, use VPNs legally.

## 4. [LocalSend](https://localsend.org/) Cross-platform file sharing

Sending files between your phone and laptop shouldn't require uploading to a server somewhere in the middle. LocalSend is completely peer-to-peer, encrypted, works offline, and supports every major platform. It's fast because the files never leave your local network.

## 5. [Zen Browser](https://zen-browser.app/) Firefox-based browser

Chromium has a near-monopoly on browsers right now, and Google isn't exactly known for looking out for your privacy. Zen is Firefox-based, which means it doesn't have Google baked in and it's also a reason uBlock Origin still works properly here, unlike on Chrome, where Google has been gradually hobbling extension capabilities.

On top of that, Zen has some genuinely nice features: split view, a sidebar, and a quick preview feature they call "Zen Glance." It's still in alpha/beta territory, so if you want something more stable, vanilla [Firefox](https://www.mozilla.org/en-US/firefox/new/) is always there.

## 6. [VeraCrypt](https://veracrypt.fr/en/Home.html) File and disk encryption

Encryption software makes data unreadable to anyone who doesn't have the key. VeraCrypt lets you encrypt individual files, folders, entire drives, or USB sticks. It also supports full disk encryption for your whole system, and has a particularly useful feature: hidden encrypted volumes that exist inside other encrypted volumes handy in situations where you might be pressured to reveal a password.

## 7. [Kdenlive](https://kdenlive.org/en/) Video editing

A solid, capable video editor. Multi-track editing, a wide range of effects and transitions, keyframe animations, good audio controls, and support for basically every format you'll encounter. It handles the job without requiring you to pay for a subscription.

## 8. [Ventoy](https://www.ventoy.net/en/index.html) Bootable USB media creation

Instead of formatting and re-flashing a USB drive every time you need a different ISO, Ventoy lets you put multiple ISOs on one drive and choose at boot. Just copy files in, no configuration required. It supports a vast range of Linux distros, Windows versions, and tools like GParted, and even supports persistent storage for some Linux distributions.

I wrote a [dedicated post](https://blog.loayidwan.com/posts/how-to-install-ventoy-on-a-usb-flash-drive) on setting it up if you want the full walkthrough.

## 9. [OBS](https://obsproject.com/) Screen recording and streaming

Free, no watermarks, no limits. Records in full HD and 4K, streams to YouTube/Twitch/whatever, and lets you mix and layer multiple sources screen, webcam, audio, images. It's the industry standard for a reason.

## 10. [HandBrake](https://handbrake.fr/) Video transcoder

For when you need to convert a video between formats, reduce file sizes without massacring quality, or prep something for a specific device or platform. Supports basically everything in and out, with extensive codec options including H.264, H.265, and VP9.

---

## Final thought

If any of these tools save you time or money, consider supporting the projects behind them. And if someone you know is paying for an inferior product, tell them about the alternative. Open source software wins by word of mouth.

#
