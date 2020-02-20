export const targetNode = (e) => {
  const wrap = document.querySelector('#wrap');

  Array.from(wrap.children).forEach((iter, idx) => {
    iter.setAttribute('index', idx);
  });

  const index = Number(e.currentTarget.getAttribute('index'));
  const target = wrap.children[index];

  return [index, target];
}