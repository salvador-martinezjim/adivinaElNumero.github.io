function crearAleatorio(min,max){
  
    secreto=Math.floor(Math.random()*(max-min+1))+min;
    return secreto;
}
var boton=document.getElementById("boton");
var accion=document.getElementById("adivina");
var pensamiento=document.getElementById("pensamiento");
var misterio=document.getElementById("misterio");
var muestra=document.getElementById("confirmacion");
var salir=document.getElementById("cierre");

var intentos=0;
var numero1;
var numero2;
var mayor;
var menor;
var usuario;
var secreto;


function ocultarPresentacion(){
    document.getElementById("presentacion").style.display="none";
    document.getElementById("titulo").style.display="block";
    document.getElementById("peticion").style.display="block";

}

boton.addEventListener("click",ocultarPresentacion);

function mostrarNumeros(){
var caja1=document.getElementById("izquierda");
var caja2=document.getElementById("derecha");

numero1=parseInt(caja1.value);
numero2=parseInt(caja2.value);

if(numero1>numero2){
    mayor=numero1;
    menor=numero2;
}
else{
    mayor=numero2;
    menor=numero1;
}
crearAleatorio(menor,mayor);
document.getElementById("peticion").style.display="none";

muestra.innerHTML="Ya pensé un número entre " + menor + " y " + mayor + "<br>" + "Adivina cuál es:";
  
document.getElementById("listo").style.display="block";
misterio.style.display="block";
}

accion.addEventListener("click",mostrarNumeros);

function jugar(){
    
    
    usuario=parseInt(pensamiento.value);
    var beredicto=document.getElementById("beredicto");
    var pista=document.getElementById("pista");
     var imprimir=document.getElementById("desarrollo");
     if(secreto==usuario){
        beredicto.innerHTML="CORRECTO" + "<br>" + "El número secreto es: ";
        if(intentos<5){
           imprimir.innerHTML="Te tomaste: " + intentos + " intentos"+"<br>"+ "MUY BIEN! Y FELIZ CUMPLEAÑOS";
        }
        if(intentos>=5 && intentos<=10){
            imprimir.innerHTML="Te tomaste: " + intentos +" intentos"+"<br>"+ "Nada Mal Y FELIZ CUMPLEAÑOS";
        }
        if(intentos>10){
            imprimir.innerHTML="Te tomaste: " + intentos+" intentos" +"<br>"+ "Que pesimo pero FELIZ CUMPLEAÑOS";
        }
        misterio.value=secreto;
        document.getElementById("listo").style.display="none";
        muestra.style.display="none";
        pista.style.display="none";
        salir.style.display="block";

     }
     else{
       console.log(secreto);
        if(usuario>secreto){
            beredicto.innerHTML="INCORRECTO";
            pista.innerHTML="PISTA: El número secreto es menor a " + usuario;
            
        }
        if(usuario<secreto){
            beredicto.innerHTML="INCORRECTO";
            pista.innerHTML="PISTA: El número secreto es mayor a " + usuario;
        }
        intentos++;
     }
    
}

var probar=document.getElementById("probar");
probar.addEventListener("click",jugar);

function reinicio(){
    location.reload();
}



