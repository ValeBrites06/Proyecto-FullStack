for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga

    //La CI del alumno tiene que tener 8 caracteres
    if (cedulas.length !== 8) { //Si el largo de la cedula no es igaul a 8
        document.write ('Ingrese una CI valida'); //Que ingrese una CI valida
    } else { //sino
        if (cedulas >= cantidadAlumnos) { 
            console.log('No hay más lugares para ingresar alumnos');
        } else {
            alumnos.unshift(cedulas); //Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
        } 
    } 

}

for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga
    if (cedulas >= cantidadAlumnos) { 
        console.log('No hay más lugares para ingresar alumnos');
    } else { //sino
        if (cedulas.length !== 8) { //Si el largo de la cedula no es igaul a 8
            document.write ('Ingrese una CI valida'); //Que ingrese una CI valida
        } else {
            alumnos.unshift(cedulas); //Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
        } 
    } 
    //Cómo hacer la validación para verificar que la CI no está en el array?

    //alumnos.push(cedulas); //Agregar cedula al array de alumnos
}
console.log('Alumnos: ' + alumnos);