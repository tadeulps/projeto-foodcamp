//function selecionar(){
  //const elemento=document.querySelector(".opcoes");
  //elemento.classList.toggle('selecionado')
//}

function selecionarComida(classeBotao){
  const selecionado = document.querySelector(".comida .selecionado");
  if(selecionado!==null){
    selecionado.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
}
//const seletor = "." + classeBotao;
//const botao = document.querySelector(seletor);
//botao.classList.add('selecionado');
function selecionarBebida(classeBotao){
  const selecionado = document.querySelector(".bebida .selecionado");
  if(selecionado!==null){
    selecionado.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
}
function selecionarSobremesa(classeBotao){
  const selecionado = document.querySelector(".sobremesa .selecionado");
  if(selecionado!==null){
    selecionado.classList.remove('selecionado')
  }
  const seletor = "." + classeBotao;  
  const botao=document.querySelector(seletor);
  botao.classList.toggle('selecionado');
}