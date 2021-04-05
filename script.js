
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
  
    inf.classList.add('clicavel');
    let prato=document.querySelector(".comida .selecionado h2").innerHTML;
    let drink=document.querySelector(".bebida .selecionado h2").innerHTML;
    let doce=document.querySelector(".sobremesa .selecionado h2").innerHTML;
    let preçocomida=(document.querySelector(".comida .selecionado .preço").innerHTML).replace(',','.').replace('R$','')
    let preçobebida=(document.querySelector(".bebida .selecionado .preço").innerHTML).replace(',','.').replace('R$','')
    let preçosobremesa=(document.querySelector(".sobremesa .selecionado .preço").innerHTML).replace(',','.').replace('R$','')
    let preçototal=parseFloat(preçocomida) + parseFloat(preçobebida) + parseFloat(preçosobremesa);
    
    
    const texto=`Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${drink}
    - Sobremesa: ${doce}
      Total: R$ ${preçototal.toFixed(2).replace('.',',')}`;
    const textoEncode=encodeURI(texto);
    const link=`https://wa.me/5521971794262?text=${textoEncode}`
    inf.innerHTML=`<a href="https://wa.me/5521971794262?text=${textoEncode}"><p>Fechar pedido</p></a>`

    
   

   
   
}
}


