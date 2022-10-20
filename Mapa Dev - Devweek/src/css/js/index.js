const abas = document.querySelectorAll(".aba")

console.log(abas)

//função
abas.forEach(aba => {
    console.log(aba)
    // 1° Evento - 2° Ação
    aba.addEventListener("click", function(){

        if(aba.classList.contains('selecionado')){
            return 
        }

        console.log('Clicou na Aba', aba);

       selecionarAba(aba)

       showInformacoes(aba)

    })
})

function selecionarAba(aba){

    const abaselecionada = document.querySelector(".aba.selecionado")
    console.log('Aba Selecionada', abaselecionada) 

    //classlist retorna a lista de classe do elemento
    abaselecionada.classList.remove('selecionado')

    aba.classList.add('selecionado')
}

function showInformacoes(aba){
     //remove o conteudo anterior
     const infoselecionada = document.querySelector('.informacao.selecionado')
     infoselecionada.classList.remove('selecionado');
     

     const idelemento = `informacao-${aba.id}`
     
     //mostra a aba selecionada pelo id  
     console.log(aba.id);

     const informacaoaserMostrada = document.getElementById(idelemento)

     informacaoaserMostrada.classList.add('selecionado')
}