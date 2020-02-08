class Memo {
  constructor(content, width, height, top, left, zIndex) {
    this.content = content;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.zIndex = zIndex;
  }

  getMemoNodeElement() {
    // const form = `<div class="memo" style="top:100px;left:100px">
    const form = `<div class="memo" style="top:${this.top}px;left:${this.left}px;z-Index:${this.zIndex}">
      <div class="header">
        <h1 class="blind">메모장</h1>
        <button class="btn_close"><span class="blind">닫기</span></button>
      </div>
      <div class="content">
        <div class="textarea" contenteditable="true" style="width:${this.width}px;height:${this.height}px">
        ${this.contetn}
        </div>
        <button class="btn_size"><span class="blind">메모장 크기 조절</span></button>
      </div>
    </div>`;

    return form;
  }
  add() {
    // 해당 메모와 같은 크기의 메모를 생성
  }
  remove() {
    // 해당 메모를 삭제
  }
};


export default Memo;