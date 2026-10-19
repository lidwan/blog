# **I Self-Hosted Ente and It Replaced My Photo Backup System**

For a long time, [Immich](https://github.com/immich-app/immich) was my photo app.

Before anything else, let me be clear: Immich is amazing. It is one of the most impressive open-source projects in the entire self-hosting world, and I would still recommend it in a heartbeat to anyone trying to get away from Google Photos.

But at some point, I took an honest look at my setup and realized something slightly embarrassing: I had too many local copies of my media.

My photos and videos already lived in more places than I would like to admit. And Immich was one more copy, on one more service, that I had to maintain, update, and keep an eye on.

I did not need another copy. I definitely did not need another copy that needed maintenance.

So I stopped using it. Not because it was bad, quite the opposite, but because it was solving a problem I did not really have anymore.

## What I actually wanted

Once Immich was gone, I knew what I was looking for:

- **An Immich or Google Photos-like experience**, with proper apps for Android and Mac.
- **Media stored in the cloud**, so I have an offsite copy that does not depend on anything in my house surviving.
- **End-to-end encryption**, so whoever stores my media cannot actually see it.
- **Relatively cheap**, because storage bills have a way of quietly growing every month.

Usually, you get to pick two or three of those. Most polished photo clouds are convenient, but they can see everything you upload. Encrypted storage is great, but it rarely comes with a nice photo app on top.

That is when I remembered [Ente](https://github.com/ente-io/ente).

## Why Ente

I was already familiar with Ente because of Ente Auth, which is the very first item on my [must-have open-source software](/posts/must-have-open-source-software) list.

Ente Photos is an open-source, end-to-end encrypted alternative to Google Photos. Your files are encrypted on your device before they are uploaded, so the server, and whatever storage sits behind it, only ever sees encrypted data.

Ente does offer its own hosted plans, but the entire stack is open source, server included. That means I could run the server myself and point it at whatever S3-compatible object storage I wanted.

And that is exactly what I did.

## My setup

### Storage: Backblaze B2

For storage, I went with a [Backblaze B2](https://www.backblaze.com/cloud-storage) bucket.

B2 currently costs **$6.95 per TB per month**, billed for what you actually store, and the first 10 GB are free. Egress is also free up to three times your average monthly storage, which matters for a photo library that occasionally needs to be downloaded in full, like when setting up a new device or a local export (more on that in a bit).

The best part is that Backblaze never sees my photos. Since everything is encrypted on my devices before it is uploaded, all B2 holds is a bucket full of encrypted blobs. They store my data without being able to look at it, which is exactly how I think cloud storage should work.

### The Ente server

With the bucket ready, I installed the Ente server and pointed it at B2.

Ente comes as a whole stack, which surprised me in a good way. The same server that handles Ente Photos also handles Ente Auth.

### Ente Auth finally syncs

Before this, I used Ente Auth completely offline, with no sync at all. That is great for privacy, but it also means every device keeps its own separate set of codes.

Now my Ente Auth apps sync through my own server. My 2FA codes are end-to-end encrypted, backed up, and in sync across devices, and the only server involved is one that I run.

I did not set out to fix my 2FA setup. It just came along for free.

## The Mac app is great

The Ente Mac app ended up being one of my favorite parts of the whole setup, mainly because of two features.

### Watch folders

I have the Mac app watching some folders. Anything new that lands in them gets uploaded to Ente automatically, with each watched folder synced to its own album.

No manual uploads, no remembering to drag things into the app. If it lands in the folder, it ends up in Ente.

### Continuous export

This is the one that genuinely changed my setup.

The Ente desktop app can export your entire library to a local folder and then keep that export in sync as new photos and videos are added. I have it export-syncing my whole library to a local SSD.

The export contains the original files, organized into folders by album, with their metadata saved next to them. So that SSD is not some proprietary backup format. It is a regular, browsable copy of my entire library that updates itself.

One small tip from Ente's docs: do not export into a folder you are also watching for uploads. That is a very efficient way to create duplicates.

## Ente replaced my local backup system too

This is the part I did not expect.

I went looking for an encrypted photo cloud. What I ended up with also replaced my local backup system.

Without really planning it, I now have:

- **An offsite backup in the cloud**, stored on B2 and end-to-end encrypted.
- **A local backup on an SSD**, kept up to date automatically by the Mac app.
- **Synced 2FA codes** through Ente Auth.
- **Proper photo apps** on Android and Mac that feel like Immich or Google Photos.

Before, I had several copies of my media that I had to manage. Now, Ente manages them for me.

## Access from anywhere with NetBird

All of this is connected through my self-hosted [NetBird](https://github.com/netbirdio/netbird) network, the same mesh VPN I wrote about in my [self-hosting post](/posts/self-hosting-the-subscription-detox-i-didnt-know-i-needed).

That means I can access my library and sync from anywhere, safely, with NetBird's access policies deciding which devices are allowed to talk to the Ente server.

So my photos end up with two layers of protection: NetBird controls who can reach the server, and end-to-end encryption means the data is unreadable to anyone who does not hold the keys, including the storage provider.

## Final thoughts

I genuinely love this setup.

Immich is still an incredible project, and if you want a full self-hosted Google Photos replacement running on your own hardware, it is hard to beat. My problem was never a lack of features. It was too many copies and too much maintenance.

Ente solved that in a way I did not expect. I got an encrypted offsite backup, a local SSD backup that maintains itself, photo apps I actually enjoy using, and synced 2FA codes as a bonus. All of it is backed by cheap object storage that cannot see what it is storing.

Sometimes the best addition to your stack is the one that lets you remove something else.
