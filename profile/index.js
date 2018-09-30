const nameInput = document.querySelector('#nameInput');
const loginDd = document.querySelector('.login');
const idDd = document.querySelector('.id');
const followingDd = document.querySelector('.following');
const typeDd = document.querySelector('.type');
const bioDd = document.querySelector('.bio');
const avatar = document.querySelector('.avatar');

nameInput.focus();

const getName = function(e){
    if(e.keyCode !== 13) return;
    const profileName = nameInput.value;
    const dataFrom = `https://api.github.com/users/${profileName}`;
    fetch(dataFrom)
        .then(blob => blob.json())
        .then((data) => distributionDate(data));
}

const distributionDate = function(user) {

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