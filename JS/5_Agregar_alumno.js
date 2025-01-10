
function menuPrincipal() { //Definimos función menúPrincipal 
    let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:')); //pedimos al usuario que ingrese la cantidad de alumnos que tiene
    //Declaramos la variable menú, que va dentro del switch
    let alumnos = []; //Crea un array alumnos con un tamaño igual al numero de alumnos especificado por el usuario
    let menu = parseInt(prompt('Bienvenido! Indique la opción deseada. \n 1.Agregar alumno \n 2.Asignar nota \n 3.Informe de alumno \n 4.Informe completo'));
    let proyecto = new Array(cantidadAlumnos); //Array para evaluación Proyecto
    let notas = [];
    //console.log(alumnos, alumnos.length);
    //let evaluaciones = [];

    //El switch toma el valor ingresado por el usuario y según esa decisión ejecuta lo que tiene dentro de uno de sus bloques cases
    switch (menu) { //En el switch ponemos la variable
        case 1: // Agregar alumno
            //document.write('asdad');
            agregarAlumno(alumnos, notas, cantidadAlumnos); //Llamamos a la función agregar alumno y agregamos los parametros en los que estamos trabajando
            break;

        case 2: //Agregar nota
            asignarNota(alumnos, notas);  //Llamamos a la función agregar nota
            break;

        case 3: //Informe alumno
            informeAlumno(alumnos, notas); //Llamamos a la función informe alumno
            break;

        case 4: //Informe completo
            informeCompleto(alumnos, notas); //Llamamos a la función informe completo
            break;

        default: //Mandar al usuario al menú
            menuPrincipal(); //Que vaya de nuevo al menú
            break;
    }
}

function agregarAlumno(alumnos, notas, cantidadAlumnos) { //Función agregar alumno, es necesario llamar a cantidadAlumnos?
    console.log('alumnos', alumnos.length);
    console.log('cantidad de alumnos:' + cantidadAlumnos);
    

    //Validaciones
    for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga
        let cedulas = parseInt(prompt('Ingrese la CI de un alumno')); //Declaramos la variable CI y pedimos que ingrese la CI
        //si no hay más lugares en el array alumnos 

        //Ver si es necesaria la linea de if alumnos.length >= cantidadAlumnos
        if (alumnos.length >= cantidadAlumnos) { // si la cantidad del array alumnos es mayor a la cantidad de alumnos que dijo el profe
            console.log('No hay más lugares para ingresar alumnos'); //Escribir: 
        } else {
            console.log(cedulas);
            if (cedulas.length !== 8) {  
                console.log('Ingrese una CI valida');
            } else {

                if (cedulas.length === 8) {
                    //For para buscar la CI ingresada en el array de alumnos

                    for (let f = 0; f < alumnos.length; f++) { // variable, comparación, las evecs que itera
                        if (alumnos[f] === cedulas) {
                            console.log('La CI ya está ingresada');
                            return;
                        }
                    }
                    alumnos.push(cedulas); //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
                    console.log('Se ingresó el alumno:' + cedulas); //ver si es necesario o no
                    console.log('Ci alumnos:' + alumnos);
                }
            }
        }
    }

    console.log('CI Alumnos: ' + alumnos);

    //Ingresar la cedula (elemento) en el array alumnos
    //alumnos[cedulas] = cedulas;
    //return alumnos; // retorna el valor de una variable
}

//agregar un for para rellenar el array con valores y dentro el for
//Cómo hacer la validación para verificar que la CI no está en el array?
//slice();
menuPrincipal();

//Si tengo que agregar una nota a diferentes evaluaciones (Evaluacion a, evaluación b...) cómo debería hacerlo?
//Aería:  pedir el numero de la ci,

 // if (nota < 0 && nota > notaMaxima) {
    //     console.log('Nota no válida.');
    //     return;
    // }

    // console.log('Notas' + notas);

    // alumnos.slice(); //Cómo traer un valor de cada array que esté asociado al alumno
    // let informeAlumno = (ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto);
    // return informeAlumno; //Retorna la variable informe Alumno que tiene dentro los arrays por cada evaluación
    // //Return: Retorna el valor de una variable (Es una clausula de los metodos(metodo y función))