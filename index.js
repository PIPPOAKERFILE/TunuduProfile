const github = document.getElementById("git-hub");
const telegram = document.getElementById("telegram");
github.addEventListener('click',()=>{
    github.src = "./images/connections/click/click-github.png"
    setInterval(() => {
        github.src = "./images/connections/github-icon.png"
    }, 500);
    document.location.href = "https://github.com/Tunud0";
})
telegram.addEventListener('click',()=>{
    telegram.src = "./images/connections/click/telegram-click.png"
    setInterval(() => {
        telegram.src = "./images/connections/telegram-icon.png"
    }, 500);
    document.location.href = "https://t.me/Tunudo";
})
