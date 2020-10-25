/*
var nombre = "agustin";
var estado = "soltero";
estado = "casado";

if (estado === "casado"){
    alert ("gil casado");
}else{
    alert ("buenardo");
}
*/
/*
var mes = 6;
switch (mes){
    case 1:
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    default:
        alert("mes invalido");
}
*/
// Ejercicio de sentencias
/*
Pablo, notas : 14 , 8, 16;
Maria notas : 12 , 10, 10;

Calcular: promedio, indicar cual tiene el mayor promedio , y si está aprobado, con promedio mayor a 13. 
*/

var notaPablo1 = 14, notaPablo2 =19, notaPablo3 = 16, notaMaria1 = 12, notaMaria2 = 18, notaMaria3 = 10;
var promPablo, promMaria;
promPablo = (notaPablo1 + notaPablo2 + notaPablo3)/3;
promMaria = (notaMaria1 + notaMaria2 + notaMaria3)/3;
alert ("El promedio de Pablo es: " + promPablo);
if (promPablo > 13){
    alert ("Pablo Aprobo");
}else{
    alert ("Pablo Reprobo");
}
alert ("El promedio de Maria es: " + promMaria);
if (promMaria > 13){
    alert ("Maria Aprobo");
}else{
    alert ("Maria Reprobo");
}
if (promPablo > promMaria){
    alert ("Pablo tiene mayor promedio");
}else if (promPablo < promMaria){
    alert ("Maria tiene mayor promedio");
}else {
    alert ("Maria y Pablo tienen igual promedio");
}