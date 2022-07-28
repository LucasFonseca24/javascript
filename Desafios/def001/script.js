var res = document.querySelector('#horario')
var imagem = document.querySelector('#imagem')
var body = document.querySelector('body')
var hora = new Date().getHours()

res.innerHTML = (`Agora são ${hora} horas`)

if(hora >= 0 && hora <= 6 ){
    imagem.innerHTML = ('<img src="imagens/madrugada.jpg" alt="foto de paisagem"  class="b"> </img>')
    body.style.backgroundColor = 'gray'}
else if(hora < 12 && hora > 6){
    imagem.innerHTML = ('<img src="imagens/amanhecer.jpg" alt="foto de paisagem"  class="b"> </img>')
    body.style.backgroundColor = 'rgb(206, 255, 133)'
}else if(hora < 18){
    imagem.innerHTML = ('<img src="imagens/tarde.jpg" alt="foto de paisagem"  class="b"> </img>')
    body.style.backgroundColor = 'rgb(224, 172, 75)'
}
else{
    imagem.innerHTML = ('<img src="imagens/noite.jpg" alt="foto de paisagem"  class="b"> </img>')
    body.style.backgroundColor = 'rgb(94, 92, 92)'
}