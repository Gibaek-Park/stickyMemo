import Memo from './js/Memo';
import './css/Memo.css';

const wrap = document.querySelector('#Wrap');

if (localStorage.length === 0 || localStorage.getItem('listItems')[0] !== '[') {
  const memo = new Memo('a라는 메모', 200, 200, 200, 200, 0);
  wrap.innerHTML = memo.getMemoNodeElement();
} else {
  let el = '';
  const listItems = JSON.parse(localStorage.getItem('listItems'));
  listItems.forEach(iter => {
    const { content, width, height, top, left, zIndex } = iter;
    const memo = new Memo(content, width, height, top, left, zIndex);
    el = el + memo.getMemoNodeElement();
  });
  wrap.innerHTML = el;
}

// modck data

// const localStorageItem = [
//     {
//       content: 'a라는 메모',
//       width: 200,
//       height: 200,
//       top: 200,
//       left: 200,
//       zIndex: 0
//     },
//     {
//       content: 'b라는 메모',
//       width: 200,
//       height: 200,
//       top: 500,
//       left: 500,
//       zIndex: 1
//     }
//   ]

// localStorage.setItem('listItems', JSON.stringify(localStorageItem));