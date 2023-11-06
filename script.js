function verifica(){
    valor1=Number(document.querySelector("#cantLogo1").value)
    valor2=Number(document.querySelector("#cantLogo2").value)
    valor3=Number(document.querySelector("#cantLogo3").value)

    suma=valor1+valor2+valor3
    if(suma>10){
        alert("No puede llevar mas de 10 stickers")
    }else{
        alert("Usted lleva "+suma+" stickers")
    }
}
