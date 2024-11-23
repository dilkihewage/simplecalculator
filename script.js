function fn0(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 0;
}

function fn1(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 1;
}
function fn2(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 2;
}
function fn3(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 3;
}
function fn4(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 4;
}
function fn5(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 5;
}
function fn6(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 6;
}
function fn7(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 7;
}
function fn8(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 8;
}
function fn9(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 9;
}
function feraser(){
    let previous =document.getElementById("display").innerHTML;
    let erasedpre = previous.slice(0,-1);
    document.getElementById("display").innerHTML =erasedpre;
}

let op;
let firstSave;
function fAD(){
    firstSave =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
     op =1;

}
function fMN(){
   firstSave =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
    op =2;
    
}
function fML(){
   firstSave =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
    op =3;
    
}
function fDV(){
   firstSave =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
     op =4;
    
}
function fEQ(){
    let secondSave =document.getElementById("display").innerHTML;
    if (op == 1){
    document.getElementById("display").innerHTML =parseInt(firstSave)+parseInt(secondSave);}
    if (op == 2){
        document.getElementById("display").innerHTML =parseInt(firstSave)-parseInt(secondSave);}
    
     if (op == 3){
            document.getElementById("display").innerHTML =parseInt(firstSave)*parseInt(secondSave);}
     if (op == 4){
                document.getElementById("display").innerHTML =parseInt(firstSave)/parseInt(secondSave);}
                      
     } 
     function fAC(){
        document.getElementById("display").innerHTML ="0";
        op =0; 

     }
