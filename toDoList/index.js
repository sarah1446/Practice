//input내용입력  엔터  li생성 후 ul안에 넣음  input내용 삭제
const textInput =  document.querySelector('.new-diary');
const listBox = document.querySelector('.diary-list');


const addList = function(e){
        if (e.keyCode !== 13) return;
        //console.log(e.keyCode);
        // console.log(e.target.value);
        const list = document.createElement('li');
        const text = e.target.value; // textInput.value 같으니까..?
        //console.log(text);
        //console.dir(list);
        list.textContent = text;
        console.log(list);
        listBox.appendChild(list);
        textInput.value = ''; //왜 innerText로 하면 안되지?
    }

textInput.addEventListener('keypress',addList);