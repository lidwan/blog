export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[*_`]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getHeadingsFromMarkdown(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^##\s+/.test(line) || /^###\s+/.test(line))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const title = line.replace(/^###?\s+/, "").replace(/[*_`]/g, "").trim();

      return {
        level,
        title,
        id: slugify(title),
      };
    });
}

export function flattenText(node) {
  if (typeof node === "string") {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map(flattenText).join("");
  }

  if (node?.props?.children) {
    return flattenText(node.props.children);
  }

  return "";
}
