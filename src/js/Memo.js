import { targetNode } from '../../utils/targetNode';
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
      listItems.forEach(iter => {
        const { content, width, height, top, left } = iter;
        const memo = new Memo(content, width, height, top, left);
        memo.createMemo();
      });
    }
  }

  createMemo() {
    const wrap = document.querySelector('#wrap');
    const temp = document.getElementsByTagName("template")[0];
    const clone = temp.content.cloneNode(true);
    const cloneWrap = clone.querySelector('.memo');
    const btnClose = clone.querySelector('.btn_close');
    const cloneTextArea = cloneWrap.querySelector('.textarea');

    cloneWrap.setAttribute('style', `top:${this.top}px;left:${this.left}px;`);
    cloneTextArea.setAttribute('style', `width:${this.width}px;height:${this.height}px`);
    cloneTextArea.textContent = this.content;

    cloneWrap.addEventListener('contextmenu', e => this.add(e, cloneWrap));
    btnClose.addEventListener('click', e => this.remove(e));
    cloneTextArea.addEventListener('keyup', e => this.editTextArea(e));

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
    const cloneTextArea = clone.children[1].children[0];
    const btnClose = clone.querySelector('.btn_close');
    const textArea = target.children[1].children[0];
    const { width, height } = textArea.getBoundingClientRect();

    clone.style.cssText = `top: ${top}px;left: ${left}px`;
    cloneTextArea.textContent = '';

    clone.addEventListener('contextmenu', e => this.add(e, clone));
    btnClose.addEventListener('click', e => this.remove(e));
    cloneTextArea.addEventListener('keyup', e => this.editTextArea(e));

    this.addMemoListItems({
      content: '',
      width,
      height,
      top,
      left
    });

    wrap.appendChild(clone);
  };
  remove(e) {
    const [index, target] = targetNode(e);

    wrap.removeChild(target);
    this.updateMemoListItems(index);
  };

  editTextArea(e) {
    const content = e.target.textContent;
    const [index, target] = targetNode(e);
    const listItems = Memo.listItems.map((item, idx) => idx === index ? { ...item, content } : item);

    this.setMemoListItems(listItems);
  }

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
};

export default Memo;