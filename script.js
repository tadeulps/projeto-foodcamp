//function selecionar(){
  //const elemento=document.querySelector(".opcoes");
  //elemento.classList.toggle('selecionado')
//}
let teste1=parseInt(0);
let teste2=parseInt(0);
let teste3=parseInt(0);
function selecionarComida(classeBotao){
  const comida = document.querySelector(".comida .selecionado");
  if(comida!==null){
    
    comida.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  teste1=1;
  final()
  
}
function selecionarBebida(classeBotao){
  const selecionado = document.querySelector(".bebida .selecionado");
  if(selecionado!==null){
    selecionado.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  teste2=2;
  final()
}
function selecionarSobremesa(classeBotao){
  const selecionado = document.querySelector(".sobremesa .selecionado");
  if(selecionado!==null){
    selecionado.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  teste3=3;
  final()
  
}

function final(){
  if(teste1==1 && teste2==2 && teste3==3){
    const inf =document.querySelector(".botao");
    inf.innerHTML='<a href="https://www.google.com.br/">Fechar pedido</a>'
    inf.classList.add('clicavel');


}
}

