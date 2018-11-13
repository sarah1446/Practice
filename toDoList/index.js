//input내용입력  엔터  li생성 후 ul안에 넣음  input내용 삭제
const textInput = document.querySelector('.new-diary');
const listBox = document.querySelector('.diary-list');
//const delete ;

const addList = function(e) {
  if (e.keyCode !== 13) return;
  const list = document.createElement('li');
  const text = e.target.value; // textInput.value 같으니까..?
  if (text.length == 0) {
    alert('일정을 적어주세요!');
    return;
  }
  list.innerHTML = `<span>${text}</span><span class='delete'>x</span>`;
  console.log(list);
  listBox.appendChild(list);
  textInput.value = '';

  const dele = list.querySelector('.delete');
  dele.addEventListener('click', function() {
    alert('삭제하시겠습니까?');
    this.closest('li').outerHTML = '';
  });
};

textInput.addEventListener('keypress', addList);
