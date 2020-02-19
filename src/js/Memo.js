import convertData from '../../utils/convertData';
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
    btnClose.addEventListener('click', this.remove.bind(this));

    this.addMemoListItems(this);
    this.setMemoListItems();

    wrap.appendChild(clone);
  };

  add(e, target) {
    e.preventDefault();

    let { top, left } = target.getBoundingClientRect();
    top += 50;
    left += 60;

    const wrap = document.querySelector('#wrap');
    const clone = target.cloneNode(true);
    const btnClose = clone.querySelector('.btn_close');
    const textArea = clone.children[1].children[0];
    const textAreaStyle = textArea.style;
    const width = convertData.toNumber(textAreaStyle.width);
    const height = convertData.toNumber(textAreaStyle.height);

    clone.style.cssText = `top: ${top}px;left: ${left}px`;
    textArea.textContent = '';

    clone.addEventListener('contextmenu', e => this.add(e, clone));
    btnClose.addEventListener('click', this.remove.bind(this));

    this.addMemoListItems({
      content: '',
      width,
      height,
      top,
      left
    });
    this.setMemoListItems();

    wrap.appendChild(clone);
  };
  remove(e) {
    const wrap = document.querySelector('#wrap');

    Array.from(wrap.children).forEach( (iter, idx) => {
      iter.setAttribute('index', idx);
    });

    const index = Number(e.currentTarget.parentNode.parentNode.getAttribute('index'));
    const target = wrap.children[index];
    wrap.removeChild(target);
    this.updateMemoListItems(index);
    
  };

  getMemoListItems() {
    // 현재 momo listItems를 return
    return Memo.listItems;
  }
  addMemoListItems({ content, width, height, top, left }) {
    Memo.listItems.push({ content, width, height, top, left });
  }
  setMemoListItems(listItems = Memo.listItems) {
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }
  updateMemoListItems(index) {
    Memo.listItems = Memo.listItems.filter((item, idx) => idx !== index);
    this.setMemoListItems();
  }
};

export default Memo;