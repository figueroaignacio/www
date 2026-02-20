export function getReadingTime(body: any): number {
  if (!body || !body.root || !body.root.children) return 0;

  let text = '';

  const traverse = (node: any) => {
    if (node.text) {
      text += node.text + ' ';
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  };

  traverse(body.root);

  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 200);
  return time;
}
