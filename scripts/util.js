let utils = {
    calculadoraBinaria : function(value){
        var result ="";
        var delta = 0;
        var division = 0;
        while(value>=1){
            delta = value%2;
            value =value/2;
            
            if(delta<1)
                result = "0"+result;
            else
                result =  "1"+result;

        }

        return result;
    }
};