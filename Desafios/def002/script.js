function verificar(){
    var ano = document.getElementById('ano')
    var sexo = document.getElementsByClassName('sexo')
    var imagem = document.querySelector('#imagem')
    var n1 = Number(ano.value)
    var s = sexo.value

    imagem.innerHTML = s
}