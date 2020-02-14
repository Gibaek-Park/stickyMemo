class Memo {
  static listItems = []
  constructor(content, width, height, top, left) {
    this.content = content;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;

    Memo.listItems.push({
      content,
      width,
      height,
      top,
      left,
    });
  }

  static init() {
    if (localStorage.length === 0 || localStorage.getItem('listItems')[0] !== '[') {
      const memo = new Memo('a라는 메모', 200, 200, 200, 200);
      memo.setMemo();
    } else {
      const listItems = JSON.parse(localStorage.getItem('listItems'));
      listItems.forEach(iter => {
        const { content, width, height, top, left } = iter;
        const memo = new Memo(content, width, height, top, left);
        memo.setMemo();
      });
    }
  }

  setMemo() {
    const wrap = document.querySelector('#wrap');

    const temp = document.getElementsByTagName("template")[0];
    const clone = temp.content.cloneNode(true);
    const memo = clone.children[0];
    const cloneWrap = clone.querySelector('.memo');
    const cloneTextArea = cloneWrap.querySelector('.textarea');

    cloneWrap.setAttribute('style', `top:${this.top}px;left:${this.left}px;`);
    cloneTextArea.setAttribute('style', `width:${this.width}px;height:${this.height}px`);
    cloneTextArea.textContent = this.content;

    memo.addEventListener('contextmenu', e => this.setMemoEvent(e, memo)); 
    // Todo event 나누기

    wrap.appendChild(clone);
  }
  setMemoEvent(e, target) {
    e.preventDefault();
    const wrap = document.querySelector('#wrap');

    const { top, left } = target.getBoundingClientRect();
    const clone = target.cloneNode(true);
    clone.style.cssText = `top: ${top + 50}px;left: ${left + 60}px`;

    clone.addEventListener('contextmenu', e => this.setMemoEvent(e, clone) ); 
    
    wrap.appendChild(clone);

  }
  addMemo() {

  }

  getMemoListItems() {
    // 현재 momo listItems를 return
    return Memo.listItems;
  }
  setMemoListItems() {
    // 현재 memo listItems를 localStorage에 저장
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