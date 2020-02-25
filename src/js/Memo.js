import { types as TYPES } from '../types'

class Memo {
  static listItems = []
  constructor(content, width, height, top, left) {
    this.content = content;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
  }

  static init() {
    if (localStorage.length === 0 || localStorage.getItem('listItems')[0] !== '[') {
      const memo = new Memo('a라는 메모', 200, 200, 200, 200);
      memo.createMemo();
    } else {
      const listItems = JSON.parse(localStorage.getItem('listItems'));
      listItems.forEach((iter, idx) => {
        const { content, width, height, top, left } = iter;
        const memo = new Memo(content, width, height, top, left);
        memo.createMemo(idx);
      });
    }
  }

  createMemo(idx) {
    const wrap = document.querySelector('#wrap');
    const temp = document.getElementsByTagName("template")[0];
    const clone = temp.content.cloneNode(true);
    const cloneWrap = clone.querySelector('.memo');
    const cloneHeader = cloneWrap.querySelector('.header');
    const btnClose = cloneWrap.querySelector('.btn_close');
    const cloneTextArea = cloneWrap.querySelector('.textarea');
    const btnSize = cloneWrap.querySelector('.btn_size');

    cloneWrap.setAttribute('style', `top:${this.top}px;left:${this.left}px;`);
    cloneWrap.setAttribute('index', idx);
    cloneTextArea.setAttribute('style', `width:${this.width}px;height:${this.height}px`);
    cloneTextArea.textContent = this.content;

    cloneWrap.addEventListener('contextmenu', e => this.add(e, cloneWrap));
    cloneWrap.addEventListener('click', e => this.setPosition(e));
    cloneHeader.addEventListener('dragstart', e => this.memoDragStart(e), false);
    cloneHeader.addEventListener('dragend', e => this.memoDragEnd(e), false);
    btnClose.addEventListener('click', e => this.remove(e));
    cloneTextArea.addEventListener('keyup', e => this.editTextArea(e));
    btnSize.addEventListener('mousedown', e => this.memoSizeDragStart(e));
    btnSize.addEventListener('mouseup', e => this.memoSizeDragEnd(e));
    btnSize.addEventListener('mousemove', e => this.memoSizeDrag(e));

    this.addMemoListItems(this);

    wrap.appendChild(clone);
  };

  add(e, target) {
    e.preventDefault();

    let { top, left } = target.getBoundingClientRect();
    top += 50;
    left += 60;

    const wrap = document.querySelector('#wrap');
    const clone = target.cloneNode(true);
    const cloneHeader = clone.querySelector('.header');
    const cloneTextArea = clone.children[1].children[0];
    const btnClose = clone.querySelector('.btn_close');
    const textArea = target.children[1].children[0];
    const btnSize = clone.querySelector('.btn_size');
    const { width, height } = textArea.getBoundingClientRect();
    const MaxIndex = wrap.children.length;

    clone.setAttribute('style', `top:${top}px;left:${left}px`);
    clone.setAttribute('index', MaxIndex);
    cloneTextArea.textContent = '';

    clone.addEventListener('contextmenu', e => this.add(e, clone));
    clone.addEventListener('click', e => this.setPosition(e));
    cloneHeader.addEventListener('dragstart', e => this.memoDragStart(e));
    cloneHeader.addEventListener('dragend', e => this.memoDragEnd(e));
    btnClose.addEventListener('click', e => this.remove(e));
    cloneTextArea.addEventListener('keyup', e => this.editTextArea(e));
    btnSize.addEventListener('dragstart', e => this.memoSizeDragStart(e));
    btnSize.addEventListener('dragend', e => this.memoSizeDragEnd(e));

    this.addMemoListItems({
      content: '',
      width,
      height,
      top,
      left
    });

    wrap.appendChild(clone);
  };
  setPosition(e) {
    const wrap = document.querySelector('#wrap');
    const target = e.currentTarget;
    const index = Number(target.getAttribute('index'));

    if (typeof wrap.children[index] !== 'undefined' && wrap.children[index] === target) {
      const textArea = target.querySelector('.textarea');
      const content = textArea.textContent;

      wrap.appendChild(target);
      textArea.focus();
      textArea.textContent = content;

      this.sortMemoListItems(index);
    }
  };

  remove(e) {
    if (Memo.listItems.length > 1) {
      const target = e.target.parentNode.parentNode;
      const index = Number(target.getAttribute('index'));

      wrap.removeChild(target);
      this.updateMemoListItems(index);
      this.sortMemoListItems(index, TYPES.DELETE);
    }
  };
  editTextArea(e) {
    const content = e.target.textContent;
    const index = Number(e.target.parentNode.parentNode.getAttribute('index'));
    const listItems = Memo.listItems.map((item, idx) => idx === index ? { ...item, content } : item);

    this.setMemoListItems(listItems);
  };
  memoDragStart(e) {
    this.prevTop = e.pageY;
    this.prevLeft = e.pageX;
  };
  memoDragEnd(e) {
    const target = e.currentTarget.parentNode;
    const targetTop = target.offsetTop;
    const targetLeft = target.offsetLeft;
    const top = e.pageY - this.prevTop + targetTop;
    const left = e.pageX - this.prevLeft + targetLeft;
    target.style = `top:${top}px;left:${left}px`;
    const index = Number(target.getAttribute('index'));
    const listItems = Memo.listItems.map((item, idx) => idx === index ? { ...item, top, left } : item);

    this.setMemoListItems(listItems);
  };
  memoSizeDragStart(e) {
    this.isDrawing = true;
  };
  memoSizeDragEnd(e) {
    this.isDrawing = false;
  };
  memoSizeDrag(e) {
    if (this.isDrawing) {
      const target = e.target.previousElementSibling;
      const memo = target.parentNode.parentNode;
      const top = memo.offsetTop;
      const left = memo.offsetLeft;

      target.style.width = e.pageX - left - 15 + 'px';
      target.style.height = e.pageY - top - 25 + 'px'
    }
  };

  getMemoListItems() {
    return Memo.listItems;
  };
  addMemoListItems({ content, width, height, top, left }) {
    const listItems = Memo.listItems.concat({ content, width, height, top, left });
    this.setMemoListItems(listItems);
  };
  updateMemoListItems(index) {
    const listItems = Memo.listItems.filter((item, idx) => idx !== index);
    this.setMemoListItems(listItems);
  };
  setMemoListItems(listItems = Memo.listItems) {
    Memo.listItems = listItems;
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };
  sortMemoListItems(index, type) {
    let newArr = [];
    let tempVal = {};
    const wrap = document.querySelector('#wrap');
    // index 재 정의 겸 listItems 재 정렬

    if (type !== TYPES.DELETE) {
      Array.from(wrap.children).forEach((iter, idx) => {
        iter.setAttribute('index', idx);
      });

      Memo.listItems.forEach((item, idx) => {
        if (idx === index) {
          tempVal = item;
        } else {
          newArr.push(item);
        }
      });

      Object.keys(tempVal).length > 0 && newArr.push(tempVal);

      this.setMemoListItems(newArr);
    }

  };

};

export default Memo;