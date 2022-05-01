//Cambio de colores en el background
//Array colores
const colors= ["green", "red", "rgba(133,122,200)", "#f15025"];
//Variables HTML
const btn= document.getElementById("btn");
const color = document.querySelector(".color");
//Cambio de color con clic en el boton
btn.addEventListener("click", function(){
    
    //Seleccion random de un numero dentro del array de colores
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
        //Cambio de color en el background
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
//Funcion de numero random
function getRandomNumber(){
    return Math.floor( Math.random()* colors.length) ;
}
/*
Temas vistos
arreglos: es una colección ordenada de datos (tanto primitivos u objetos dependiendo del lenguaje). 
            Los arreglos (matrices) se emplean para almacenar multiples valores en una sola variable, 
            frente a las variables que sólo pueden almacenar un valor (por cada variable).
document.getElementById(): Devuelve una referencia al elemento por su ID.
document.querySelector(): Devuelve el primer elemento del documento (utilizando un recorrido primero 
        en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
addEventListener(): Registra un evento a un objeto en específico.
document.body.style.backgroundColor: Devuelve el nodo del <body> o el nodo del <frameset> del documento.
Math.floor(): Devuelve el máximo entero menor o igual a un número.
Math.random(): La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).
arreglo.length: La propiedad length de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de
                 elementos en esa matriz. 
*/