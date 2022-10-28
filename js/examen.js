
function Mover(Origen){
    let MD= document.getElementById('opDestino');
    
    if(Origen.value=="1"){
        MD.options[1]=new Option('Dolar Estadounidense','1');
        MD.options[2]=new Option('Dolar Canadiense','2');
        MD.options[3]=new Option('Euro','3');
    }else if(Origen.value=="2"){
        MD.options[1]=new Option('Peso Mexicano','1');
        MD.options[2]=new Option('Dolar Canadiense','2');
        MD.options[3]=new Option('Euro','3');
    }else if(Origen.value=="3"){
        MD.options[1]=new Option('Peso Mexicano','1');
        MD.options[2]=new Option('Dolar Estadounidense','2');
        MD.options[3]=new Option('Euro','3');
    }else if(Origen.value=="4"){
        MD.options[1]=new Option('Peso Mexicano','1');
        MD.options[2]=new Option('Dolar Estadounidense','2');
        MD.options[3]=new Option('Dolar Canadiense','3');
    }
    }
    
   