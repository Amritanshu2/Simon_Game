let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];
let p = document.querySelector("h2");
let started = false;let level = 0;
document.addEventListener("keypress", function () {
    if (started == false) {
        
        p.innerText = `Game started Level ${level}`;
        p.style.color = 'red';
        started = true;

        levelup();
    }
})

function btnFlash(btn) {
    
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function levelup() {
    userseq = [];
    level++;
    p.innerText = `Game started Level ${level}`;
    
    let rnd = Math.floor(Math.random()*3);
    let rancol = btns[rnd];
    let ranbtn = document.querySelector(`.${rancol}`);
    gameseq.push(rancol);
    console.log(gameseq);
    btnFlash(ranbtn);
}

function checkAns(idx) {
    console.log("curr level : ", level)
    
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length == gameseq.length){gameseq.res;setTimeout(levelup,1200);}
    }
    else{
        p.innerText = `Game over! Level ${level} Press any key to start`;
        reset();
    }
}

function btnPress(){
    // console.log("pressed");
     let btn = this;
    btnFlash(this);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    started = false;
    gameseq =[];
    userseq = [];
    level = 0;
}