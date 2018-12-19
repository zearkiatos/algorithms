function calculadoraBinaria_test(inputValue,outValue){
    var resultado = utils.calculadoraBinaria(inputValue); 
        
        return (resultado==outValue)?true:false;
}

function arbolDeBusqueda_test(inputValue,outValue){
    var resultado = utils.arbolDeBusqueda(inputValue); 
        
        return (resultado==outValue)?true:false;
}
 
test("TestUnit",function () {
    //Init
    var input = "1138";
    var out = "10001110010";

    ok(calculadoraBinaria_test(input,out),"calculadoraBinaria_test");

        //Init
         var input2 = 21;
         var out2 = true;
    
        ok(arbolDeBusqueda_test(input2,out2),"arbolDeBusqueda_test");
});
