const Piedra= "Piedra";
const Papel= "Papel";
const Tijeras= "Tijeras";

const Empate= 0;
const Ganador= 1;
const Perdedor= 2;

let isplaying = false;

const PiedraBtn = document.getElementById("Piedra");
const PapelBtn = document.getElementById("Papel");
const TijerasBtn = document.getElementById("Tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

PiedraBtn.addEventListener("click",()=> {
    play(Piedra);
});

PapelBtn.addEventListener("click",() =>{
    play(Papel)
});

TijerasBtn.addEventListener("click",() =>{
    play(Tijeras) 
});

function play (userOption){
    if(isplaying) return;

    isplaying= true;

    userImg.src="C:\Users\LEIDY LOPEZ\Desktop\mayo laboratorios\ " + userOption + ".jpg";

    resultText.innerHTML= "Elige!";

    const interval= setInterval(function(){
        const machineOption= calcMachineOption();
        machineImg.srg= "C:\Users\LEIDY LOPEZ\Desktop\mayo laboratorios\ " + machineOption + ".jpg";   
       },200);

       setTimeout(function () {
        
        clearInterval(inverval);

        const machineOption= calcMachineOption();
        const result= calcResult(userOption,machineOption);

        machineImg.src="C:\Users\LEIDY LOPEZ\Desktop\mayo laboratorios\ " + machineOption +".jpg";

        switch (result){
            case Empate:
                resultText.innerHTML= "Empatado!";
                break;
            case Ganador:
                resultText.innerHTML="Ganaste!";
                break;
            case Perdiste:
                resultText.innerHTML="Perdiste";
                break;

        }
        isplaying=false;

       },2000);

}
 
function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijeras;

        }

 }

 function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return Empate;

    } else if (userOption === Piedra) {

        if (machineOption === Papel) return Perdedor;
        if (machineOption === Tijeras) return Ganador;

    } else if (userOption === Papel) {

        if (machineOption === Tijeras) return Perdedor;
        if (machineOption === Piedra) return Ganador;

    } else if (userOption === Tijeras) {

        if (machineOption === Piedra) return Perdedor;
        if (machineOption === Papel) return Ganador;


    }
}








