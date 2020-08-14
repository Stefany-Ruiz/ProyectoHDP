//JavaScript Document

//funcion hasta que sea llamada
//function nombredelaFuncion(){}
function ejecuta(){
     //detecte los elementos p
     //objeto document que hace referencia al documento html
     //tiene sus propiedades o metodos
     //entre corchetes [] especifica que etiqueta p en concreto quiero especificar
     document.getElementsByTagName("p")[0].onclick=saludo;
     /*Nuestro documento detecte un elemento por el nombre name de la etiqueta
     que me identifica las p. Es un array o matriz esta en la posicion 0
     sera la que encuentre primero en mi documento y al pulsar en ella que se ejecute la funcion saludo*/
     
}
function saludo(){
alert("Hello WORD!");
}

//cuando cargue la ventana ejecute la funcion que esta despues de =
window.onload=ejecuta;