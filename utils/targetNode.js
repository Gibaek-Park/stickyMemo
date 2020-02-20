export const targetNode = (e) => {
  const wrap = document.querySelector('#wrap');

  Array.from(wrap.children).forEach((iter, idx) => {
    iter.setAttribute('index', idx);
  });

  const index = Number(e.target.parentNode.parentNode.getAttribute('index'));
  const target = wrap.children[index];

  return [index, target];
}