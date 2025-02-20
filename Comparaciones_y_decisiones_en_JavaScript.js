let calificacion = Math.floor(Math.random()*101);
console.log('La calificacion del estudiante es:'+ calificacion)
if (calificacion >= 90){
    console.log('Excelente')
}
else if(calificacion >=75 && calificacion <=89){
    console.log('Bien')
}
else if( calificacion >= 60 || calificacion <= 74){
    console.log('Suficiente')
}
else{
    console.log('El estudiante no aprueba')
}
