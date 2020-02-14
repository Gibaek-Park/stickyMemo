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
    const memo = clone.children[0];
    const cloneWrap = clone.querySelector('.memo');
    const cloneTextArea = cloneWrap.querySelector('.textarea');

    cloneWrap.setAttribute('style', `top:${this.top}px;left:${this.left}px;`);
    cloneTextArea.setAttribute('style', `width:${this.width}px;height:${this.height}px`);
    cloneTextArea.textContent = this.content;

    memo.addEventListener('conte내tmenu', e => this.addMemoEvent(e, memo));
    this.setMemoListItems(this);

    wrap.appendChild(clone);
  };

  addMemoEvent(e, target) {
    e.preventDefault();

    let { top, left } = target.getBoundingClientRect();
    top += 50;
    left += 60;

    const wrap = document.querySelector('#wrap');
    const clone = target.cloneNode(true);

    const textAreaStyle = clone.children[1].children[0].style;
    const width = convertData.toNumber(textAreaStyle.width);
    const height = convertData.toNumber(textAreaStyle.height);

    clone.style.cssText = `top: ${top}px;left: ${left}px`;

    clone.addEventListener('contextmenu', e => this.addMemoEvent(e, clone));
    this.setMemoListItems({
      content: '',
      width,
      height,
      top,
      left
    });

    wrap.appendChild(clone);

  }

  getMemoListItems() {
    // 현재 momo listItems를 return
    return Memo.listItems;
  }
  setMemoListItems({ content, width, height, top, left }) {
    Memo.listItems.push({ content, width, height, top, left });
    localStorage.setItem('listItems', JSON.stringify(Memo.listItems));
  }
  add() {
    // 해당 메모와 같은 크기의 메모를 생성
  }
  remove() {
    // 해당 메모를 삭제
  }
  update() {
  }
};



export default Memo;