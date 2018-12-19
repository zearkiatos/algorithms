function calculadoraBinaria_test(inputValue,outValue){
    var resultado = utils.calculadoraBinaria(inputValue); 
        
        return (resultado==outValue)?true:false;
}
 
test("calculadoraBinaria_test",function () {
    //Init
    var input = "1138";
    var out = "10001110010";

    ok(calculadoraBinaria_test(input,out),"Resultado");
});