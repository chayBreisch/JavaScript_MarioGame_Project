
let arrayGamer = [];
function getUser() {
    let logInGamerFirstName = getElementById('gamerFirstName').value;
    let logIngamerPassword = getElementById('gamerPassword').value;

}

function logIn() {
    const logInGamerFirstName = document.getElementById('gamerFirstName').value;
    const logIngamerPassword = document.getElementById('gamerPassword').value;
    if (logInGamerFirstName && logIngamerPassword) {

        let arrUsers = localStorage.getItem('gamers');
        let arr = JSON.parse(arrUsers);
        let find = arr.find(user => {
            return user.userName === logInGamerFirstName  && user.password === logIngamerPassword;
        });
        if (!find) {
            alert("you have to sign up");
        }
        else {
            window.location = "../html/levels.html";

        }
    }
}


function signIn() {
    const logInGamerFirstName = document.getElementById('gamerFirstName').value;
    const logIngamerPassword = document.getElementById('gamerPassword').value;

    const arrayGamer = {
        "userName": logInGamerFirstName,
        "password": logIngamerPassword
    };
    const users = JSON.parse(localStorage.getItem('gamers')) || [];
    users.push(arrayGamer);
    localStorage.setItem('gamers', JSON.stringify(users));
    if (logInGamerFirstName && logIngamerPassword) {
        window.location = "../html/levels.html";
    }
}



