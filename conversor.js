function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valoEemBerryNumerico = parseFloat(valor);

    var valorEmRealNumerico = valoEemBerryNumerico * 17;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
    
}
