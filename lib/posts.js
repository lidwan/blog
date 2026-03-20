const posts = [
  {
    id: "i-cant-believe-im-saying-this-get-a-macbook",
    title: "I Can't Believe I'm Saying This: Get a MacBook",
    description:
      "MacBooks now cover every price range, Apple Silicon is absurdly efficient, and the new MacBook Neo is actually repairable. Here's why I can't recommend Windows laptops to non-gamers anymore.",
    file: "/posts/i-cant-believe-im-saying-this-get-a-macbook.md",
    image: "/images/i-cant-believe-im-saying-this-get-a-macbook.png",
    tags: ["apple", "macbook", "windows", "linux", "hardware", "repairability", "performance", "battery life", "neo", "laptop"],
    dateCreated: "March 15, 2026",
    dateModified: "March 15, 2026",
    readingTime: "5 min read",
  },
  {
    id: "self-hosting-the-subscription-detox-i-didnt-know-i-needed",
    title: "Self-Hosting: The Subscription Detox I Didn't Know I Needed",
    description:
      "How subscription fatigue, privacy concerns, and a love of tinkering turned an old laptop and a VPS into a self-hosted stack.",
    file: "/posts/self-hosting-the-subscription-detox-i-didnt-know-i-needed.md",
    image: "/images/self-hosting-the-subscription-detox-i-didnt-know-i-needed.png",
    tags: ["self-hosting", "homelab", "vps", "privacy", "docker"],
    dateCreated: "March 13, 2026",
    dateModified: "March 18, 2026",
    readingTime: "9 min read",
    featured: true,
  },
  {
    id: "ai-in-it-brilliant-terrifying-and-probably-here-to-stay",
    title: "AI in IT: Brilliant, Terrifying, and Probably Here to Stay",
    description:
      "AI is making software work dramatically faster and more accessible, but privacy, security, reliability, and trust still come with serious tradeoffs.",
    file: "/posts/ai-in-it-brilliant-terrifying-and-probably-here-to-stay.md",
    image: "/images/ai-in-it-brilliant-terrifying-and-probably-here-to-stay.png",
    tags: ["AI", "IT", "privacy", "security", "automation", "coding"],
    dateCreated: "March 10, 2026",
    dateModified: "March 10, 2026",
    readingTime: "5 min read",
  },
  {
    id: "how-to-access-Wikipedia-and-more-without-internet",
    title: "How to access Wikipedia and more without internet",
    description:
      "A tool that lets you download and access Wikipedia, docs, and other knowledge databases without an internet connection.",
    file: "/posts/how-to-access-Wikipedia-and-more-without-internet.md",
    image: "/images/how-to-access-Wikipedia-and-more-without-internet.png",
    tags: ["open source", "offline", "kiwix", "docs"],
    dateCreated: "February 16, 2025",
    dateModified: "March 16, 2026",
    readingTime: "3 min read",
  },
  {
    id: "how-to-install-ventoy-on-a-usb-flash-drive",
    title: "How to install Ventoy on a USB flash drive",
    description:
      "A step-by-step guide to installing Ventoy on a USB flash drive, enabling easy multi-boot setup for ISO files.",
    file: "/posts/how-to-install-ventoy-on-a-usb-flash-drive.md",
    image: "/images/how-to-install-ventoy-on-a-usb-flash-drive.png",
    tags: ["ventoy", "iso", "linux", "windows"],
    dateCreated: "January 28, 2025",
    dateModified: "March 16, 2026",
    readingTime: "3 min read",
  },
  {
    id: "top-bashrc-aliases",
    title: "Top .bashrc Aliases to Save Time",
    description:
      "A compact guide to the shell aliases that remove friction from daily terminal work.",
    file: "/posts/top-bashrc-aliases.md",
    image: "/images/top-bashrc-aliases.png",
    tags: ["bash", "aliases", "linux", "productivity"],
    dateCreated: "January 23, 2025",
    dateModified: "March 16, 2026",
    readingTime: "4 min read",
  },
  {
    id: "must-have-open-source-software",
    title: "Must have Open Source software",
    description:
      "A practical shortlist of open-source tools worth keeping in a modern personal setup.",
    file: "/posts/must-have-open-source-software.md",
    image: "/images/must-have-open-source-software.png",
    tags: ["open source", "privacy", "security", "tools"],
    dateCreated: "December 8, 2024",
    dateModified: "March 16, 2026",
    readingTime: "6 min read",
  },
];

export function getFeaturedPost() {
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getLatestPosts() {
  const featuredId = getFeaturedPost()?.id;
  return posts.filter((post) => post.id !== featuredId);
}

export function getPostById(id) {
  return posts.find((post) => post.id === id);
}

export default posts;
