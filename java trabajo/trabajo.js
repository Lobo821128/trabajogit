//Comentarios de una sola linea
alert("Algo esta fallando?")
alert("Estas seguro?");
/*colomentario 
de varias 
lineas*/
//VARIABLES
/*String
Number
123456789
buleanas
true false*/
var nombre="wilmer tobo";
var edad= 30;
var telefono=3507034290;
console.log(edad)
//ARIMETICO
var numero = 54;
numero = numero
alert(numero)
// IM= PESO[KG]/ESTATURA[XL]
var estatura= prompt("Ingreso su estatura en metros");
var peso= prompt("ingreso su peso en Kg");
var resultado=peso/estatura;
alert("Su indice de masa corporal es:" + resultado)




//VERFICACION DE ACCESO A UNA PAGINA WEB
confirm

let iniciarSesion= true;
let tienePermiso= false;
if(iniciarSesion||tienePermiso){alert("Acceso permitido")}
else{ 
    alert ("Acceso denegado")}


    //verficacion de dia de salida a calle
    let esfindeSemana= true
    let tienesdinero=false
    if(esfindeSemana|| tienesdinero) {alert ("puedes salirde rumba")  }
    else {alert("quedate en casa")}
   
    //VERIFICACION DE ELEGIBILIDAD PARA DESCUENTO
    let totalcompra=120;
    let esMiembroPremiun=false;
    if (totalCompra>=100 && esMiembroPremiun) {alert("Tienes derecho a un descuento del 10%") }
        else {alert("No eres elegibre para descuento")}

        //calificacion aprobada
        let calificacion= 14
        if (calificacion<5 && calificacion>0) {
            alert ("calificacion Inficiente")   
        }else if (calificacion===5) {alert("calificacion>=8 && calificacion<=10") }  
        {alert ("Calificacion exelente")} 
            else {alert("calificacion no valida")}
            

    //verificar el numero mayor
    //multiples
    //Numero primo
    //Aceeso a un evento si es mayor de edad
    let fechaNacimiento = new Date(2018, 5, 15);s
let fechaActual = new Date();

let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}

if (edad >= 18) {
    console.log("La persona tiene", edad, "años y puede acceder al evento");
} else {
    console.log("La persona tiene", edad, "años y no puede acceder al evento");
}
/*document.getElementById-utilizar para obtener una referencia a un elemento del documento html mediante su id addeventListener-Para que ocurre en la interfaz del usuario*/


document.addEventListener('DOMContentLoaded',function(){
    var botonColor=document.getElementById('btncolor');
    botonColor.addEventListener('click',funcion()){
        document.body.style.backgroundColor='ligthblue'

       ) };


}