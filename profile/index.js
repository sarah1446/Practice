const nameInput = document.querySelector('#nameInput');
let profileName; //input통해 입력받은 이름 // getName안에서 선언하고 return하면 console에서 찍힐 줄 알았는데...//const..하면 왜 안되는거지? 함수단위로 작동...?
const loginDd = document.querySelector('.login');
const idDd = document.querySelector('.id');
const followingDd = document.querySelector('.following');
const typeDd = document.querySelector('.type');
const bioDd = document.querySelector('.bio');
const avatar = document.querySelector('.avatar');

nameInput.focus();

const getName = function(e){
    if(e.keyCode !== 13) return;

    profileName = nameInput.value;
    
    const dataFrom = 'https://api.github.com/users/' + profileName;
    fetch(dataFrom)
        .then(blob => blob.json())
        .then((data) => dataDistribution(data));
}

const dataDistribution = function(user) {

    const login = user.login;
    const id = user.id;
    const following = user.following;
    const type = user.type;
    const bio = user.bio;
    const avatarUrl = user.avatar_url

    loginDd.textContent = login;
    idDd.textContent = id;
    followingDd.textContent = following;
    typeDd.textContent = type;
    bioDd.textContent = bio;
    avatar.setAttribute('src',avatarUrl);
}
nameInput.addEventListener('keypress',getName);