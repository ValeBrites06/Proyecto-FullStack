
function menuPrincipal() { //Definimos función menúPrincipal 
    let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:')); //pedimos al usuario que ingrese la cantidad de alumnos que tiene
    //Declaramos la variable menú, que va dentro del switch
    let menu = parseInt(prompt('Bienvenido! Indique la opción deseada. \n 1.Agregar alumno \n 2.Asignar nota \n 3.Informe de alumno \n 4.Informe completo'));
    let alumnos = []; //Crea un array alumnos con un tamaño igual al numero de alumnos especificado por el usuario
    let notas; // Variable notas, lo tenía como array pero no es necesario porque voy a pedir el valor y va acambiar
    let instanciasEvaluación;

    let ObligatorioA = []; //Array para evaluación ObligatorioA, con el largo del array de alumnos
    let ObligatorioB = []; //Array para evaluación Obligatorio B
    let ObligatorioC = []; //Array para evaluación Obligatorio C
    let PruebaA = []; //Array para evaluación PruebaA
    let PruebaB = []; //Array para evaluación PruebaB
    let PruebaC = []; //Array para evaluación Pruebac
    let Proyecto = []; //Array para evaluación Proyecto
    // definí la variable arriba / let Proyecto = new Array(cantidadAlumnos); //Array para evaluación Proyecto
    // No es necesario, le estoy asignando valores directo en el array / let evaluaciones = [ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto] = prompt('Indique la opción deseada. \n 1.Obligatorio A /n 2.Obligatorio B /n 3.Obligatorio C /n 4.Proyecto A /n 5. Proyecto B /n Proyecto C /Proyecto');


    //console.log(alumnos, alumnos.length);
    //let evaluaciones = [];

    //El switch toma el valor ingresado por el usuario y según esa decisión ejecuta lo que tiene dentro de uno de sus bloques cases
    switch (menu) { //En el switch ponemos la variable
        case 1: // Agregar alumno
            //document.write('asdad');
            agregarAlumno(alumnos, notas, cantidadAlumnos); //Llamamos a la función agregar alumno y agregamos los parametros en los que estamos trabajando
            break;
        case 2: //Agregar nota
            asignarNota(alumnos, notas, cantidadAlumnos, ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto);  //Llamamos a la función agregar nota
            break;
        case 3: //Informe alumno
            informeAlumno(alumnos, notas, cantidadAlumnos); //Llamamos a la función informe alumno
            break;
        case 4: //Informe completo
            informeCompleto(alumnos, notas, cantidadAlumnos); //Llamamos a la función informe completo
            break;
        default: //Mandar al usuario al menú
            menuPrincipal(); //Que vaya de nuevo al menú
            break;
    }
}

function agregarAlumno(alumnos, notas, cantidadAlumnos) { //Función agregar alumno, es necesario llamar a cantidadAlumnos?
    console.log(alumnos.length);
    console.log(cantidadAlumnos);
    //Validaciones
    for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga
        let cedulas = parseInt(prompt('Ingrese la CI de un alumno')); //Declaramos la variable CI y pedimos que ingrese la CI
        console.log(cedulas); //Muestra el valor en la consola
        //Validación: El largo del array alumnos es meyor o igual a la cantidad de alumnos
        if (alumnos.length >= cantidadAlumnos) { // si la cantidad del array alumnos es mayor a la cantidad de alumnos que dijo el profe
            console.log('No hay más lugares para ingresar alumnos'); //Escribir: 
        } else {
            console.log(cedulas);
            //Validación: El largo es diferente de 8
            //Tendría que crear una variable de cedulavalida? 
            if (cedulas.length !== 8) {  //No me está funcionando, le estoy diciendo que el largo de la ci es igual a 8, pero toma que es el número 8 o que son 8 digitos?
                console.log('Ingrese una CI valida');
            } else {
                //Validación: El largo es = 8
                if (cedulas.length === 8) {
                    alumnos.push(cedulas); //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
                console.log('Se ingresó el alumno:' + cedulas); //ver si es necesario o no
                console.log('Ci alumnos:' + alumnos);
                }
            }
        }
    }

    console.log(alumnos);
    menuPrincipal(); //Llamamos a la función menú para que al ingresar las Ci nos muestre el promp

    //return alumnos; // retorna el valor de una variable
}

function asignarNota(alumnos, notas, cantidadAlumnos, ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto) {
    //Array que pida las notas y las guarde en el array de cada alumno

    //Si el alumno C está en la posición 5 del array alumnos, la nota para ese alumno debe estar en la posición 5 del array de cada evaluación
    let cedulas = prompt('Ingrese la CI del alumno para asignarle una nota'); //Pedir que ingrese una CI

    instanciasEvaluación = parseInt(prompt('Seleccione una instancia de evaluación: \n 1.Obligatorio A \n 2.Obligatorio B \n 3.Obligatorio C \n 4.Prueba A \n 5.Prueba B \n 6.Prueba C \n 7.Proyecto'));
    let nota; //Declaramos la variable nota para usar en el case

    //SWITCH para las instancias de evaluación
    switch (instanciasEvaluación) { // El switch solo puede tener una variable
        case 1:  //Para el obligatorio A
            //Pedir la CI del alumno
            ///HACER VALIDACIONES DE LAS NOTAS, SI ESTÁ ENTRE ESTOS VALORES, PUSH EN EL ARRAY
            nota = parseInt(prompt('Ingrese una nota para el obligatorio A')); //Pide la nota
            //Tenemos que pedir que ingrese la CI y guarde los datos ingresados oara esa CI

            if (nota >= 0 && nota <= 10) { //Si nota es menor o igual a 10
                ObligatorioA.push(nota); //Agrega la nota ingresada al obligatorio A 
                console.log(nota);
            } else { //Sino
                console.log('Ingrese una nota valida'); //Mostrar mensaje
                //Agregar un for??? No, porque no necesito iterar nada
            }
            console.log('Cedula:' + alumnos + ' Nota Ob. A' + ObligatorioA);
            break;
        case 2:  //Para obligatorio B
            nota = parseInt(prompt('Ingrese una nota para el obligatorio B')); // pode la nota para el ob. A
            if (nota >= 0 && nota <= 10) { // Si la nota es menor o igual a 10
                ObligatorioB.push(nota); //Ingresar nota en Obligatiorio V
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            console.log('Cedula: ' + alumnos + 'Nota Ob. B' + ObligatorioB);
            break;
        case 3:  //Para el obligatorio C
            nota = parseInt(prompt('Ingrese una nota para el obligatorio C')); //Pide la nota para el Ob. C
            if (nota >= 0 && nota <= 20) { //Si la nota es menor o igual a 20
                ObligatorioC.push(nota); // Ingresar nota en Ob. C
            } else { // Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            console.log('Cedula' + alumnos + 'Nota Ob. C');
            break;
        case 4:  //Para la Prueba A
            //Prueba A: Máximo 10 
            nota = parseInt(prompt('Ingrese una nota para la prueba A')); //Pide la nota oara la prueba A
            if (nota >= 0 && nota <= 10) { //Si la nota es menor o igual a 10
                PruebaA.push(nota); // Ingresar nota en prueba A
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            console.log('Cedula' + alumnos + 'Nota Prueba A');
            break;
        case 5:  //Para la Prueba B
            nota = parseInt(prompt('Ingrese una nota para la prueba B')); //Pide La nota
            if (nota >= 0 && nota <= 10) { //Si la nota es menor o igual a 10
                PruebaB.push(nota); //Ingresar nota en Prueba B
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            console.log('Cedula' + alumnos + 'Nota Prueba B');
            break;
        case 6:  //Para la Prueba C
            nota = parseInt(prompt('Ingrese una nota para la prueba C')); //Pide la nota para la prueba C
            if (nota >= 0 && nota <= 10) { //Si la nota es menor o igual a 10
                PruebaC.push(); //Ingresar nota en Prueba C
            } else {
                document.write('Ingrese una nota valida'); //Mostrar mensaje 
            }
            console.log('Cedula' + alumnos + 'Nota Prueba C');
            break;
        case 7:  //Para el Proyecto
            Proyecto = parseInt(prompt('Ingrese una nota para el Proyecto')); //Pide la nota para el proyecto
            if (nota >= 0 && nota <= 30) { //Si la nota es menor o igual a 30
                Proyecto.push(nota); //
            } else {
                document.write('Ingrese una nota valida');
            }
            document.write('Cedula' + alumnos + 'Nota Proyecto');
            break;
        default:
            document.write('Ingrese una evaluación existente');
            // Mandar al usuario al menú
            //menuPrincipal(); Depues lo descomento
            break;
    }

    console.log('Notas' + nota);

    alumnos.slice(); //Cómo traer un valor de cada array que esté asociado al alumno
    let informeAlumno = (ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto);
    return informeAlumno; //Retorna la variable informe Alumno que tiene dentro los arrays por cada evaluación
    //Return: Retorna el valor de una variable (Es una clausula de los metodos(metodo y función))
}

menuPrincipal();