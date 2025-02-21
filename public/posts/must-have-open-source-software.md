# Must have Open Source software

### why Open Source?

- Well, because it offers transparency and community-driven innovation.
- It’s (usually) more secure since its source code is open and available for anyone to see and critique, allowing experts worldwide to inspect, identify, and fix vulnerabilities quickly. Unlike closed-source software, which relies on the vendor's security practices.

## Table of Contents

1. Ente Auth (2fa Authenticator)
2. Bitwarden (Password manager)*
3. Mullvad (VPN)**
4. Localsend (Secure Cross-platform file sharing)
5. Zen (Firefox based browser)
6. VeraCrypt (Encryption software)
7. Kdenlive (Video editing)
8. Ventoy (Bootable USB media creation)
9. OBS (Video recording and live streaming)
10. HandBrake (Video transcoder)

All are Free, Open source and Cross-platform unless otherwise specified.

Have a problem downloading any of them because of restrictions? since they are all open source their code and installation files and instructions are also available on [GitHub](https://github.com/) which shouldn’t be restricted.

\* Has a paid Version (10$ / year), Free version is good enough for almost everyone.

** Paid only (w/o free version) at ~5$ / mo

---

## 1. [Ente Auth](https://ente.io/auth/) (Two-Factor Authentication app)

### Two-Factor Authentication:

- (2fa) adds an extra layer of security by requiring a second verification step on top of your password. Even if someone gets your password, they can't access your accounts without the 2FA code.

- Using 2fa Authentication apps instead of SMS-based 2fa is more secure since they aren’t susceptible to SIM-swapping or interception.

Ente Auth provides:

- end-to-end encrypted cloud backups
- the ability to view the next code (extremely underrated feature)
- the ability to import your existing 2fa codes from various apps e.g. Google Authenticator
- the ability to use in offline mode with no online backup

## **2. [Bitwarden](https://bitwarden.com/) (Password Manager)**

### Password Management:

- Reusing passwords is risky—if one account is breached, others are too. A password manager ensures every account has a unique password.

- Password managers help create and store long, complex passwords that are nearly impossible to guess or crack.

Bitwarden provides:

- Zero knowledge, end-to-end encryption cloud backup
- the ability to store Unlimited passwords, unlimited devices (even on the free plan)
- the ability to Generate, share, and autofill strong passwords and passkeys.
- the abilitty Securely encrypt files (paid version only)

## **3. [Mullvad VPN](https://mullvad.net/)  (VPN)** — Paid ~5$ / mo

### VPN:

- A VPN masks your IP address and location, making it harder for websites, advertisers, and hackers to track you.
- Access content, streaming services, or websites that maybe be restricted in your region.

- A VPN hides your internet traffic from your ISP preventing them from knowing what websites you access.
- VPNs encrypt your internet traffic, protecting sensitive data (like passwords and payment info) on public Wi-Fi.

Mullvad VPN provides:

- No logging, Anonymous payments (Cash, Cryptocurrencies, …) , and Anonymous accounts, they give you a random account number when you first make an account and that’s it, they don’t even know your email or phone number
- Five different devices on the same account
- Advanced features such as Obfuscation ([Shadowsocks](https://mullvad.net/en/blog/introducing-shadowsocks-obfuscation-for-wireguard) or UDP-over-TCP), [Quantum-resistant connections](https://mullvad.net/en/blog/quantum-resistant-tunnels-now-available-on-ios), multi-hops, API access via Bridges,  [Defense Against AI-guided Traffic Analysis](https://mullvad.net/en/vpn/daita), and [DNS queries through encrypted tunnel](https://mullvad.net/en/help/dns-leaks)
- [RAM-only infrastructure](https://mullvad.net/en/blog/2023/9/20/we-have-successfully-completed-our-migration-to-ram-only-vpn-infrastructure)
- [Independent audits](https://mullvad.net/en/blog/infrastructure-audit-completed-by-radically-open-security)
- The only potential downside is that they are based in Sweden, they do explain why it shouldn’t matter in [this blog post](https://mullvad.net/en/vpn/laws-that-matter) written by them, but if you’re still on the edge you could also try Proton VPN, it is Swiss based and has a lot of the same futures, but they don’t have a cheap monthly plan, you’d have to pay 12-24 months up-front to get the discounted price

Disclaimer: Using a VPN app does NOT hide the fact that you’re using a VPN from your ISP or the authorities, they can’t know what you’re doing but they do know you’re using a VPN.

Please use VPNs in accordance with the law in your country, don’t break any laws or ToS for any services.

## **4. [Localsend](https://localsend.org/) (Secure cross-platform file sharing)**

### File Sharing:

- Since files never leave your local network, there’s no risk of data exposure to external servers or third parties.
- faster than cloud-based services, especially for large files.

- Perfect for offline environments or when internet connectivity is limited or unavailable.

Localsend provides:

- The file transfer is completely peer-to-peer.
- End-to-end encryption.
- Cross-platform compatibility (Linux, macOS, iOS, Android, and Windows)

## **5. [Zen browser](https://zen-browser.app/) (Firefox based browser)**

### Browsers:

Your browser is your gateway to the internet, and choosing one with strong security features helps protect against malware, tracking, and data breaches. 

- Should work well with your operating system and not significantly degrade performance.
- Limits tracking, offers strong ad-blocking capabilities, and has private browsing modes.

- Supports security-enhancing extensions like HTTPS Everywhere, uBlock Origin, or Privacy Badger.
- Has phishing protection, sandboxing, HTTPS enforcement, and pop-up blockers.

Zen browser provides:

- Open source and based on Firefox (an open source web browser)
- Not based on Chromium and does NOT have google spyware baked in
- Since google has no control over Firefox, Ad block extentions like uBlock Origin work fully unlike on chromium based web browsers like Google Chrome
- Highly customizable
- Features like split view, side bar, quick view (i.e. zen glance)
- Stable for an alpha (i.e. beta) version, for a more stable browser consider vanilla [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## **6. [VeraCrypt](https://veracrypt.fr/en/Home.html) (File or partition encryption)**

### Encryption software:

Encryption software protects sensitive data by making it unreadable to unauthorized users.

Veracrypt provides:

- Encrypting files, folders, or entire drives, safeguarding personal and sensitive information from unauthorized access.
- Creating an encrypted volume on a USB drive for secure data transportation.
- Full disk encryption to encrypt your system protecting all data in case of theft or loss.
- Creating hidden encrypted volumes within standard ones, which can be useful in high-risk situations like being forced to open the encrypted volume

## **7. [Kdenlive](https://kdenlive.org/en/) (Video editing)**

Kdenlive provides:

- Multi-track editing, a variety of effects and transitions, keyframe animations, and powerful audio controls
- Handling almost all video and audio formats without requiring additional plugins
- Flexible layouts and options for configuring the interface to suit your workflow

## **8. [Ventoy](https://www.ventoy.net/en/index.html) (Bootable USB media creation)**

Bootable media creation tools allow you to prepare USB drives for installing or running operating systems or performing diagnostics

Ventoy provides:

- Unlike traditional tools, Ventoy enables you to load multiple ISO files on a single USB drive without repeatedly formatting
- Just copy ISO files to the USB drive—no need for additional configuration
- Vast range of operating systems, including Linux distros, Windows versions, and even tools like GParted
- Persistent storage for some Linux distributions, enabling you to save files and settings across sessions

Take a look at [my blog post](https://blog.loayidwan.com/#/posts/how-to-install-ventoy-on-a-usb-flash-drive) about installing Ventoy on a USB drive if you are interested.

## **9. [OBS](https://obsproject.com/) (Video recording and live streaming)**

OBS provides:

- Completely free with no watermarks or limitations
- Full HD and even 4K video recording at customizable frame rates
- Seamless integrates with platforms like YouTube, Twitch, and Facebook Live
- Combine video from your webcam, screen, images, and audio sources to create dynamic content

## **10. [HandBrake](https://handbrake.fr/) (Video transcoding)**

Video transcoders allow you to convert videos from one format to another, optimize file sizes, or prepare them for specific devices or platforms

HandBrake provides:

- support for almost all video formats, including MP4, MKV, and WebM, and offers extensive codec options like H.264, H.265, and VP9
- Balancing file size and video quality, allowing you to reduce file sizes without noticeable quality loss

---

## Final thoughts:

Please consider supporting open source software you like and use, also tell your loved ones about them.

#