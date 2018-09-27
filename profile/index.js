
const nameInput = document.querySelector('#nameInput');
const resultBtn = document.querySelector('#resultBtn');
let profileName; //input통해 입력받은 이름 // getName안에서 선언하고 return하면 console에서 찍힐 줄 알았는데...
//let dataFrom;

nameInput.focus();

//누구의 데이터 받을지 이름 받기
let getName = function(e){
    if(e.keyCode === 13){
        profileName = nameInput.value;
        //dataFrom = 'https://api.github.com/users/' + profileName;
        console.log(profileName);
        //return profileName;
        //return dataFrom; //전역에 선언해서 return 불필요?
    }
    let dataFrom = 'https://api.github.com/users/' + profileName;
    fetch(dataFrom)
        .then(blob => blob.json())
        .then(data => obj = data);
}
nameInput.addEventListener('keypress',getName);


let obj;
let dataDistribution = function() {

    const login = obj.login;
    const id = obj.id;
    const following = obj.following;
    const type = obj.type;
    const bio = obj.bio;
    const avatarUrl = obj.avatar_url

    const loginDd = document.querySelector('.login');
    loginDd.textContent = login;

    const idDd = document.querySelector('.id');
    idDd.textContent = id;

    const followingDd = document.querySelector('.following');
    followingDd.textContent = following;

    const typeDd = document.querySelector('.type');
    typeDd.textContent = type;

    const bioDd = document.querySelector('.bio');
    bioDd.textContent = bio;

    const avatarShow = document.querySelector('.avatar').setAttribute('src',avatarUrl);
}
resultBtn.addEventListener('click', dataDistribution);
