class Memo {
  static listItems = []
  constructor(content, width, height, top, left, zIndex) {
    this.content = content;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.zIndex = zIndex;

    Memo.listItems.push({
      content,
      width,
      height,
      top,
      left,
      zIndex
    });
  }

  getMemoNodeElement() {
    const temp = document.getElementsByTagName("template")[0];
    const clone = temp.content.cloneNode(true);
    const cloneWrap = clone.querySelector('.memo');
    const cloneTextArea = cloneWrap.querySelector('.textarea');

    cloneWrap.setAttribute('style', `top:${this.top}px;left:${this.left}px;z-Index:${this.zIndex}`);
    cloneTextArea.setAttribute('style', `width:${this.width}px;height:${this.height}px`);
    cloneTextArea.innerText = this.content;

    return clone;
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