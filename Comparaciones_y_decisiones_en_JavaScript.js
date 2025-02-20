let calificacion = Math.floor(Math.random()*101);
console.log('La calificacion del estudiante es:'+ calificacion)
if (calificacion >= 90){
    console.log('Excelente')
}
else if(calificacion <=89 && calificacion >=75){
    console.log('Bien')
}
else if( calificacion <= 74 && calificacion >= 60){
    console.log('Suficiente')
}
else{
    console.log('El estudiante no aprueba')
}
