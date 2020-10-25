var nombres = ["Agustin", "María", "Ana", "Pedro"];
console.log (nombres[2]);
nombres [4] = "Carlos";
console.log (nombres[4]);
console.log (nombres.length);
/*
for (var i = 0; i <= nombres.length - 1 ; i++ ){
    console.log (nombres [i]);
}

nombres.forEach ( function (nombre){
    console.log (nombre);
})
*/

nombres.pop();
nombres.shift();
console.log (nombres);