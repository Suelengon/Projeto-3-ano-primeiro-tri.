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


