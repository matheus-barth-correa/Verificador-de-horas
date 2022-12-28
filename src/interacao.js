// codigo de alteração com a base do horario de brasilia//
function carregar() {
var color=document.getElementById('cor')
var msg=document.getElementById('resultado')
var imagem=document.getElementById('foto')
var afirmacao=document.getElementById('resposta')
var data= new Date()
var hora=data.getHours()
// var hora=12//Para mostrar para os outros o processo de troca//
msg.innerHTML=`Agora são ${hora} horas.`
if (hora>= 12 && hora<20) {
    afirmacao.innerHTML=`Boa Tarde`
    imagem.src='src/imagens/Foto Tarde - Editado.png'
    document.body.style.background='rgba(255, 255, 97, 0.671)'
} else if (hora<= 12 && hora>=1) {
    afirmacao.innerHTML=`Bom Dia`
    imagem.src='src/imagens/Foto Manhã - Editado.png'
    document.body.style.background='rgb(141, 249, 253)'
} else {
    afirmacao.innerHTML=`Boa Noite`
    imagem.src='src/imagens/Foto Noite - Editado.png'
    document.body.style.backgroundColor='rgb(73, 52, 52)'
}
} 
// codigo de alteração com a base do horario de brasilia//