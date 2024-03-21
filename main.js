const botoes = document.querySelectorAll(".botao");
const textos = document.querrSelectorAll(".aba-conteudo")

for(lesi=0;i <botoes.length;i++){
   botoes[i].onclik = function(){

   for(let j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        botoes[j].classList.remove("ativo");
   }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo")
   }
}

const contadores = document.querySelectorA11(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00")
let tempoAtual = new Date();

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
   let tempoAtual = new Date()
   let tempoFinal = tempoObjetivo - tempoAtual;
   let segundos = Math.floor(tempoFinal/1000);
   let minutos = Math.floor(segundos/60);
   let horas =  Math.floor(minutos/60);
   let dias = Math.floor(horas/24);

 segundos %= 60;
 minutos %=60;
 horas %=24;

   return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}