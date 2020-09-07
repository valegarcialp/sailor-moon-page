var intento = 1;
var pista = "";
var resCorrect = "serenity"
var getData = function(){
    var resp = document.getElementById("respuesta").value;
    var pista = document.getElementById("pista");

    if(resp.toLowerCase()==resCorrect){
        pista.innerHTML="muy bien";
        alert("Correcto!!!");
    }else if(resp.toLowerCase()!=resCorrect && intento==1){
        pista.innerHTML="pista: su nombre empieza con s"
        alert("Incorrecto, quedan 2 intentos");
        intento=2;
    }else if(resp.toLowerCase()!=resCorrect && intento==2){
        pista.innerHTML="pista: su nombre empieza con s y termina con y";
        alert("Incorrecto, queda 1 intento");
        intento=3;
    }else if(resp.toLowerCase()!=resCorrect && intento==3){
        alert("Perdiste, que poco sabes!");
    }
     
   
   
   
   
     
    
        
    
    
}

