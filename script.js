let game = true;

let hunger = 100;
let sleep = 100;
let fun = 100;

const thoughts = [
    "I'm happy",
    "I'm hungry",
    "I'm bored",
    "I'm sleepy",
    "I'm sad"
];

document.getElementById("music").loop = true;
document.getElementById("music").play();

function statUpdate(){
    document.getElementById("stat1").textContent = hunger;
    document.getElementById("stat2").textContent = sleep;
    document.getElementById("stat3").textContent = fun;
}
statUpdate();


function feed(){
    if (game == true){
    hunger += 20;
    }
    if (hunger > 100){
        hunger = 100;
    }
    statUpdate()
}

function nap(){
    if (game == true){
    sleep += 20;
    }
    if (sleep > 100){
        sleep = 100
    }
    statUpdate()
}

function play(){
    if (game == true){
        fun += 20;
    }
    if (fun > 100){
        fun = 100;
    }
    statUpdate()
}

setInterval(time, 3000);
function time(){
    if (fun == 0){
        game = false;
    }if (hunger == 0){
        game == false;
    }if (sleep == 0){
        game == false;
    }

    if (game === true){
        hunger -= 1;
        sleep -= 1;
        fun -= 1;

        statUpdate()
    }
}

const c = document.getElementById("chat");
const e = document.getElementById("entity");
let emote = 0;

setInterval(exp, 100);
function exp(){
    if (hunger <= 70){
        if (hunger <= 30){
            c.textContent = thoughts[4];
        }else{
        c.textContent = thoughts[1];
        
        }
    }else if(fun <= 70){
        if (fun <= 30){
            c.textContent = thoughts[4]
        }else{
        c.textContent = thoughts[2];
        }
    }else if (sleep <= 70){
        if (sleep <= 30){
            c.textContent = thoughts[4]
        }else{
        c.textContent = thoughts[3];
        }
    }else{
        c.textContent = thoughts[0];
        c.src = 'sprites/tamagotchi.png';
    }
}

