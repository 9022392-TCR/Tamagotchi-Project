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

setInterval(gameover, 100)
function gameover(){
    if (fun == 0){
        game = false;
    }if (hunger == 0){
        game = false;
    }if (sleep == 0){
        game = false;
    }
}

setInterval(time, 3000);
function time(){
    if (game === true){
        hunger -= 1;
        sleep -= 1;
        fun -= 1;

        statUpdate()
    }
}

setInterval(age, 60000);
function age(){
    if (game === true){
        age += 1;

        statUpdate()
    }
}

const c = document.getElementById("chat");
const e = document.getElementById("entity");
let emote = 0;

setInterval(exp, 100);
function exp(){
    if (game === true){
        if (hunger <= 70){
            if (hunger <= 30){
                c.textContent = thoughts[4];
                emote = 4;
           }else{
            c.textContent = thoughts[1];
            emote = 1;
            }
        }else if(fun <= 70){
            if (fun <= 30){
                c.textContent = thoughts[4];
                emote = 4;
            }else{
            c.textContent = thoughts[2];
            emote = 2;
            }
        }else if (sleep <= 70){
            if (sleep <= 30){
                c.textContent = thoughts[4]
                emote = 4;
            }else{
            c.textContent = thoughts[3];
            emote = 3;
            }
        }else{
            c.textContent = thoughts[0];
            emote = 0;
        }
    }else{
        emote = 5;
    }
}

setInterval(feel, 100);
function feel(){
    switch(emote){
        case 1:
            e.src = "sprites/tamagotchiHungry.png";
            break;
        case 2:
            e.src = "sprites/tamagotchiBored.png";
            break;
        case 3:
            e.src = "sprites/tamagotchiSleepy.png";
            break;
        case 4:
            e.src = "sprites/tamagotchiSad.png";
            break;
        case 5:
            c.textContent = "";
            e.src = "";
            e.alt = "";
            document.getElementById("end").textContent = "GAME OVER";
            break;
        default:
            e.src = "sprites/tamagotchi.png";
            break;
    }
}