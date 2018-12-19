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
    },
    arbolDeBusqueda: function(value){
        var orderArray = new Array();
        var leftArray = new Array();
        var rightArray = new Array();
        var result = false;
        orderArray = [1,1,2,3,5,8,13,21,34,55];
        if(orderArray[orderArray.length/2-1]==value )
            return true;

        if(orderArray[orderArray.length/2]==value)
            return true;

            for(var i=0;i<orderArray.length;i++){
                if(i<orderArray.length/2-1){
                    leftArray.push(orderArray[i]);
                }
                    
                else
                  rightArray.push(orderArray[i]);
            }

            if(leftArray[leftArray.length-1]<value)
                for(var l=0;l<leftArray.length-1;l++)
                    if(leftArray[l]==value)
                        return true;
            else
                for(var r=1;r<rightArray.length;r++)
                    if(rightArray[r]==value)
                        return true;
            

        return false;

    }

};