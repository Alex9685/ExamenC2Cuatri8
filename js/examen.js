
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
    
    function Calcular(){
        let cantidad= document.getElementById('cantidad').value;
        let MD= document.getElementById('opDestino');
        let Origen = document.getElementById('opOrigen');
        let subtotal=0;
        let comision=0;
        let total=0;
    
        if(Origen.value=="1"){
            switch(MD.value){
                case "1":
                    subtotal=(cantidad/19.85).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "2":
                    subtotal=((cantidad/19.85)*1.35).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "3":
                subtotal=((cantidad/19.85)*0.99).toFixed(2);
                comision=(subtotal*0.03).toFixed(2);
                total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;    
                default:
                    break;    
            }
        }else if(Origen.value=="2"){
            switch(MD.value){
                case "1":
                    subtotal=(cantidad*19.85).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "2":
                    subtotal=(cantidad*1.35).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "3":
                subtotal=(cantidad*0.99).toFixed(2);
                comision=(subtotal*0.03).toFixed(2);
                total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;    
                default:
                    break;    
            }
        }else if(Origen.value=="3"){
            switch(MD.value){
                case "1":
                    subtotal=((cantidad*19.85)/1.35).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "2":
                    subtotal=((cantidad/1.35)).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "3":
                subtotal=((cantidad*0.99)/1.35).toFixed(2);
                comision=(subtotal*0.03).toFixed(2);
                total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;    
                default:
                    break;    
            }
        }else if(Origen.value=="4"){
            switch(MD.value){
                case "1":
                    subtotal=((cantidad*19.85)/0.99).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "2":
                    subtotal=(cantidad/0.99).toFixed(2);
                    comision=(subtotal*0.03).toFixed(2);
                    total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;
                case "3":
                subtotal=((cantidad*1.95)/0.99).toFixed(2);
                comision=(subtotal*0.03).toFixed(2);
                total=(parseFloat(subtotal) + parseFloat(comision)).toFixed(2);
                    break;    
                default:
                    break;    
            }
        }
        document.getElementById('subTotal').value=subtotal;
        document.getElementById('totalComision').value=comision;
        document.getElementById('totalPagar').value=total;
    
    }

    var acumulado=0;
    function Registro(){
        let acumular=document.getElementById('totalPagar').value;
        let parrafo=document.getElementById('tabla');
        let totg= document.getElementById('TotGeneral');
        
        let parrafo2;
        var seleccionada = document.getElementById('opOrigen')[document.getElementById('opOrigen').selectedIndex].text;
        var seleccionada2 = document.getElementById('opDestino')[document.getElementById('opDestino').selectedIndex].text;
        let subtotal=document.getElementById('subTotal').value;
        let comision=document.getElementById('totalComision').value;
        let total=document.getElementById('totalPagar').value;
        let cantidad= document.getElementById('cantidad').value;
        parrafo2=cantidad + " " + seleccionada + " a " + seleccionada2 + " " + subtotal + " "
        + comision + " " + total + "<br>";
        parrafo.innerHTML= parrafo.innerHTML + parrafo2;
    
        acumulado=  parseFloat(acumular) + acumulado ;
        totg.innerText=acumulado;
    }
    

   