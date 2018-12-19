$(document).ready(function(){
    $(".btnCalculadoraBinaria").on("click",function(){
        var value = 1138;

        console.log(utils.calculadoraBinaria(value));
    });

    $(".btnArbolDeBusqueda").on("click",function(){
        var value = 21;

        console.log(utils.arbolDeBusqueda(value));
    });
});