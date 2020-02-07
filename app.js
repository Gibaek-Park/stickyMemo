function Memo(title, content, width, height, zIndex, keyIndex) {
  this.title = title
  this.content = content
  this.width = width
  this.height = height
  this.zIndex = zIndex
  this.keyIndex = keyIndex
};

const a = new Memo('a', 'a라는 메모', '200px', '200px', '0', '0');
const b = new Memo('b', 'b라는 메모'.padStart(8, '1'), '200px', '200px', '1', '1');