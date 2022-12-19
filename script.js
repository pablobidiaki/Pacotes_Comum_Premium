let contagem = 0

function mudarPacotes(){
    contagem += 1

    if(contagem %2 == 1){
        document.querySelector('.basico-anual').classList.add('off')
        document.querySelector('.prof-anual').classList.add('off')
        document.querySelector('.master-anual').classList.add('off')

        document.querySelector('.basico-mensal').classList.remove('off')
        document.querySelector('.prof-mensal').classList.remove('off')
        document.querySelector('.master-mensal').classList.remove('off')
    } else{
        document.querySelector('.basico-anual').classList.remove('off')
        document.querySelector('.prof-anual').classList.remove('off')
        document.querySelector('.master-anual').classList.remove('off')

        document.querySelector('.basico-mensal').classList.add('off')
        document.querySelector('.prof-mensal').classList.add('off')
        document.querySelector('.master-mensal').classList.add('off')
    }

}