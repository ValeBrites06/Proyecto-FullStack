
let notas = []; // Array vacío que gaurda las notas
let alumnos = []; // Array alumnos que guarda las deculas de los alumnos
function menuPrincipal() { //Definimos función menúPrincipal 
    //Declaramos la variable menú, que va dentro del switch
    let menu = parseInt(prompt('Bienvenido! Indique la opción deseada. \n 1.Agregar alumno \n 2.Asignar nota \n 3.Informe de alumno \n 4.Informe completo'));

    //El switch toma el valor ingresado por el usuario y según esa decisión ejecuta lo que tiene dentro de uno de sus bloques cases
    switch (menu) { //En el switch ponemos la variable
        case 1: // Agregar alumno
            let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:')); //pedimos al usuario que ingrese la cantidad de alumnos que tiene
            agregarAlumno(alumnos, cantidadAlumnos, notas); //Llamamos a la función agregar alumno y agregamos los parametros en los que estamos trabajando
            //Pide la cantidad de alumnos para agregar y llama a la funcion Agregar alumnos con los parametros
            break;
        case 2: //Agregar nota
            asignarNota(alumnos, notas);  //Llamamos a la función agregar nota
            //Llama a la función asignarNota para asignarle una nota a un alumno
            break;
        case 3: //Informe alumno
            informeAlumno(alumnos, notas); //Llamamos a la función informe alumno
            //Llama a la función infromeAlumno (Gnera un informe de un alumno especifico con sus notas)
            break;
        case 4: //Informe completo
            informeCompleto(alumnos, notas); //Llamamos a la función informe completo
            //Llama a la función informeCompleto (genera un informe de todos los alumnos y sus notas)
            break;
        default: //Mandar al usuario al menú
            menuPrincipal(); //Que vaya de nuevo al menú
            console.log('Ingrese una opción valida');
            //Llama a la función principal
            break;
    }
}

function agregarAlumno(alumnos, cantidadAlumnos, notas) { //Función agregar alumno, es necesario llamar a cantidadAlumnos?
    console.log(alumnos.length); //Largo del array alumnos
    console.log(cantidadAlumnos); //Cantidad de alumnos
    //Validaciones

    //Bucle for para pedir las cedulas de los alumnos hasta que complete el largo de alumnos que ingresó el profesor
    for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga
        let cedulas = prompt('Ingrese la CI de un alumno'); //Declaramos la variable CI y pedimos que ingrese la CI
        //Pide la CI del almuno y la guarda en la variable cedulas
        console.log(cedulas); //Muestra el valor de cedulas en la consola
        //Validación: El largo del array alumnos es meyor o igual a la cantidad de alumnos
        if (alumnos.length >= cantidadAlumnos) { // si la cantidad del array alumnos es mayor a la cantidad de alumnos que dijo el profe
            console.log('No hay más lugares para ingresar alumnos'); //Escribir: 
        } else {
            console.log(cedulas);
            if (cedulas.length !== 8) {  //Valida que la ci tenga 8 caracteres
                console.log('Ingrese una CI valida');
            } else {
                alumnos.push(cedulas); //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
                //Si pasan las validaciónes agrega la ci en el array alumnos
                let instanciasEvaluación = new Array(7); //Creamos array con el largo de 7 elementos / posicicones
                for (let i = 0; i < alumnos.length; i++) {
                    if (alumnos[i] === cedulas) {
                        notas[i] = instanciasEvaluación;
                    } // En el for aspociamos el array indice del alumno correspondiente en notas
                }
                console.log('Se ingresó el alumno:' + cedulas); //ver si es necesario o no
                console.log('Ci alumnos:' + alumnos); //Muestra las ci de los alumnos en la consola
                console.log(notas);//Muestra las notas en la consola
            }
        }
    }

    //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0

    menuPrincipal(); //Llamamos a la función menú para que al ingresar las Ci nos muestre el promp
}

function asignarNota(alumnos, notas) {
    //Array que pida las notas y las guarde en el array de cada alumno

    //Si el alumno C está en la posición 5 del array alumnos, la nota para ese alumno debe estar en la posición 5 del array de cada evaluación
    let cedulas = prompt('Ingrese la CI del alumno para asignarle una nota'); //Pedir que ingrese una CI
    console.log("cedulas y notas" + cedulas, notas);
    let instanciasEvaluación = parseInt(prompt('Seleccione una instancia de evaluación: \n 1.Obligatorio A \n 2.Obligatorio B \n 3.Obligatorio C \n 4.Prueba A \n 5.Prueba B \n 6.Prueba C \n 7.Proyecto'));
    //Pide la cedula de un alumno y la instancia de evaluación para asignarle una nota

    //SWITCH para las instancias de evaluación
    let tipoNota;

    switch (instanciasEvaluación) {   //Ver si están bien las notas
        case 1:
            tipoNota = 'ObligatorioA'; //En el array instanciasEvaluación va a estar en la posición 0
            let notaIngresadaObA = parseInt(prompt('Ingrese una nota para el obligatorio A'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            } //Asignamos una nota específica a la posición correspondiente del araray notas del alumno
            //  Validamos que la nota ingresada esté en el rango correcto

            console.log(notas);
            //Me falta ingresar la nota en el array
            break;
        case 2:
            tipoNota = 'ObligatorioB'; //Posicón 1
            let notaIngresadaObB = parseInt(prompt('Ingrese una nota para el obligatorio B'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }
            break;
        case 3:
            tipoNota = 'ObligatorioC';
            let notaIngresadaObC = parseInt(prompt('Ingrese una nota para el obligatorio C'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }

            console.log(notas);
            break;
        case 4:
            tipoNota = 'PruebaA';
            let notaIngresadaPbA = parseInt(prompt('Ingrese una nota para la prueba A'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }

            console.log(notas);
            break;
        case 5:
            tipoNota = 'PruebaB';
            let notaIngresadaPbB = parseInt(prompt('Ingrese una nota para la prueba B'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }

            console.log(notas);
            break;
        case 6:
            tipoNota = 'PruebaC';
            let notaIngresadaPbC = parseInt(prompt('Ingrese una nota para la prueba C'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 10) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }

            console.log(notas);
            break;
        case 7:
            tipoNota = 'Proyecto';
            let notaIngresadaProyectoB = parseInt(prompt('Ingrese una nota para el Proyecto'));
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === cedulas) {
                    if (notaIngresada >= 0 && notaIngresada <= 30) {
                        console.log(notaIngresada);
                        notas[i][0] = notaIngresada;
                        console.log(notas[i]);
                    }
                }
            }

            console.log(notas);
            break;
        default:
            document.write('Instancia de evaluación no válida.');
            return;
    }
    menuPrincipal();
}

function informeAlumno() {
    //FALTA 
}

function informeCompleto(alumnos, notas) {
    console.log("Informe completo del grupo:");

    // Recorremos todos los alumnos en el array
    for (let i = 0; i < alumnos.length; i++) {
        let cedula = alumnos[i];
        let total = 0; // Inicializamos el puntaje total del alumno
        let informe = "Alumno: " + cedula + "\n";
        //Busca cada alumno y genera un informe detallado con la CI y las notas de cada evaluación


        // Instancias de evaluación y sus nombres
        let instancias = ['Obligatorio A', 'Obligatorio B', 'Obligatorio C', 'Prueba A', 'Prueba B', 'Prueba C', 'Proyecto'];
        // Verificamos las notas ingresadas para el alumno actual
        for (let j = 0; j < notas[i].length; j++) {
            if (notas[i][j] !== undefined) { // Solo mostramos las notas que ya fueron ingresadas
                informe += instancias[j] + ": " + notas[i][j] + "\n";
                total += notas[i][j]; // Sumamos la nota al total
            }
        }
        //Asocia cada posición de las notas con su respectiva instancia de evaluación y la agrega al informe
        //Calcula el puntaje total del alumno y lo pone en el informe

        // Agregamos el puntaje total al informe
        informe += "Total: " + total + " / 100\n";
        document.write(informe);
        console.log(informe); // Mostramos el informe del alumno en la consola
    }

    // Retornamos al menú principal
    menuPrincipal();
}

menuPrincipal();