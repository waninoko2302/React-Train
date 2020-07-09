export function calcPages(currentPage, totalPage) {
  const range = Math.min(totalPage, 10);
  const pages = [];

  const start = Math.min(
    totalPage + 1 - range,
    Math.max(1, currentPage - ((range / 2) | 0)),
  );

  const end = start + range;
  for (let i = start; i < end; i++) {
    pages.push(i);
  }

  return pages;
}