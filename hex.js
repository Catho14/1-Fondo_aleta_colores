//Arreglos hexadecimal
const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#f15025
//Varaibles HTML
const btn= document.getElementById("btn");
const color = document.querySelector(".color");
//Funcion para cambiar el background color
btn.addEventListener("click", function(){
    let hexColor= "#";
    //Ciclo para obtener un valor hexadecimal para el color
    for(let i=0; i < 6 ; i++){
        hexColor += hex[getRandomNumber()];
    }
    //Cambio de color
    color.textContent=hexColor;
    document.body.style.backgroundColor = hexColor;
});

//Obtener numero random
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
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