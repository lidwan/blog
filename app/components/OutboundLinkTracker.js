"use client";

import { useEffect } from "react";

function tagExternalLinks(root = document) {
  root.querySelectorAll("a[href]").forEach((a) => {
    if (a.host !== window.location.host && !a.getAttribute("data-umami-event")) {
      a.setAttribute("data-umami-event", "outbound-link-click");
      a.setAttribute("data-umami-event-url", a.href);
    }
  });
}

export default function OutboundLinkTracker() {
  useEffect(() => {
    tagExternalLinks();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === "A") tagExternalLinks(node.parentElement);
            else if (node.querySelectorAll) tagExternalLinks(node);
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
