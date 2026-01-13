let hunger = 100;
let sleep = 100;
let fun = 100;

document.getElementById("stat1").innerHTML = hunger;
document.getElementById("stat2").textContent = sleep;
document.getElementById("stat3").textContent = fun;

if (hunger === 70){
    document.getElementById(chat).innerHTML = "feed me";
}

function statUpdate(){
    document.getElementById(stat1).textContent = hunger;
    document.getElementById(stat2).textContent = sleep;
    document.getElementById(stat3).textContent = fun;
}


function feed(){
    hunger += 20;
    if (hunger > 100){
        hunger = 100;
    }
    statUpdate()
}

function nap(){
    sleep += 20;
    if (sleep > 100){
        sleep = 100
    }
    statUpdate()
}

function play(){
    fun += 20;
    if (fun > 100){
        fun = 100;
    }
    statUpdate()
}

document.getElementById(chat).innerHTML = "hello world";

setInterval(time, 3000);
function time(){
    hunger -= 1;
    sleep -= 1;
    fun -= 1;
    age += 1;

    statUpdate()
}
console.log(hunger)