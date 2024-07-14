const github = document.getElementById("git-hub");
const telegram = document.getElementById("telegram");
const twitch = document.getElementById("twitch");
const x = document.getElementById("x");
github.addEventListener("click",(e)=>{
    window.location.href = "https://github.com/Tunud0"
});
telegram.addEventListener("click",()=>{
    window.location.href = "https://t.me/Tunudo";
});
twitch.addEventListener("click",()=>{
    window.location.href = "https://www.twitch.tv/tunud0_";
});
x.addEventListener("click",()=>{
    window.location.href = "https://x.com/Tunud0";
})

const dspfp = document.getElementById("discord-pfp");
document.addEventListener("DOMContentLoaded", async ()=>{
    await fetch("https://discordlookup.mesalytic.moe/v1/user/1122586453499727922")
    .then(res => res.json())
    .then((res)=>{
        dspfp.src = res.avatar.link
        document.getElementById("ds-name").innerHTML = res.username
    });
})


