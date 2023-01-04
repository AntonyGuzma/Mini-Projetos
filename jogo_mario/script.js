const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const nuvem = document.querySelector(".clouds")
const again = document.querySelector("button")

const jump = () =>{
    mario.classList.add('jump')

    //vai resetar a função retirando a class jump
    setTimeout(() => {
         mario.classList.remove('jump')
    }, 500)
}


var soma = 1

//vai fazer a verificação em 10ms para ver se a barra encostou no mario
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') //com esse get  a gente tem acesso a todos os estilos computados nesse caso a posição das coordenadas em relação ao bottom
    const nuvemPosition = +window.getComputedStyle(nuvem).left.replace('px', '')//com esse get  a gente tem acesso a todos os estilos computados nesse caso a posição das coordenadas em relação a left
    const score = document.querySelector("h3")

    //condição para parar o jogo caso o mario encoste no obstaculo 
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {
        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'imagens/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '60px';

        again.style.display = 'block'

        clearInterval(loop) //quando finalizar o jogo o loop para de rodar

    }else{
        soma = soma + 1;
        score.innerText =  `Score - ${soma}`
    }

}, 10);

document.addEventListener('keydown', jump); //QUando pressionar o teclado(keydown), a função jump irá fazer o personagem pular


//Ao clicar em Fim a pagina da refresh e o jogo reinicia do zero
again.addEventListener('click', () => {
    location.reload()
})