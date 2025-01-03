
var sequencia=0
var fotos=['imgs/obra1.jpeg','imgs/obra2.jpeg','imgs/obra3.jpeg','imgs/obra4.jpeg','imgs/obra5.jpeg']
document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
function fechar_painel(){
    var painel = document.getElementById('painel')
    if (painel.className=='painel_1'){
        painel.className='painel_0'
        document.getElementById('tela_preta').className='tela_preta0'
    }else{
        document.getElementById('tela_preta').className='tela_preta1'
        painel.className='painel_1'
    }
}
function passar(s){
    if(s==1){
        if((sequencia+2)>fotos.length){
            sequencia=0
        }else{
            sequencia++
        }
        document.getElementById('imgs_gg').src=fotos[sequencia]
        document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
    }
    else{
        if ((sequencia-1)==-1){
            sequencia=fotos.length-1
        }else{
            sequencia--
        }
        document.getElementById('imgs_gg').src=fotos[sequencia]
        document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
    }
}