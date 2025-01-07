
let notas = [];
let alumnos = []; //Crea un array alumnos con un tamaño igual al numero de alumnos especificado por el usuario
function menuPrincipal() { //Definimos función menúPrincipal 
    //Declaramos la variable menú, que va dentro del switch
    let menu = parseInt(prompt('Bienvenido! Indique la opción deseada. \n 1.Agregar alumno \n 2.Asignar nota \n 3.Informe de alumno \n 4.Informe completo'));
    // Variable notas, lo tenía como array pero no es necesario porque voy a pedir el valor y va acambiar
    //let cedulas = parseInt(prompt('Ingrese la CI de un alumno')); //Declaramos la variable CI y pedimos que ingrese la CI

    // definí la variable arriba / let Proyecto = new Array(cantidadAlumnos); //Array para evaluación Proyecto
    // No es necesario, le estoy asignando valores directo en el array / let evaluaciones = [ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto] = prompt('Indique la opción deseada. \n 1.Obligatorio A /n 2.Obligatorio B /n 3.Obligatorio C /n 4.Proyecto A /n 5. Proyecto B /n Proyecto C /Proyecto');


    //console.log(alumnos, alumnos.length);
    //let evaluaciones = [];

    //El switch toma el valor ingresado por el usuario y según esa decisión ejecuta lo que tiene dentro de uno de sus bloques cases
    switch (menu) { //En el switch ponemos la variable
        case 1: // Agregar alumno
            //document.write('asdad');
            let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:')); //pedimos al usuario que ingrese la cantidad de alumnos que tiene
            agregarAlumno(alumnos, cantidadAlumnos, notas); //Llamamos a la función agregar alumno y agregamos los parametros en los que estamos trabajando

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

function agregarAlumno(alumnos, cantidadAlumnos, notas) { //Función agregar alumno, es necesario llamar a cantidadAlumnos?
    console.log(alumnos.length); //
    console.log(cantidadAlumnos);
    //Validaciones

    for (let a = 0; a < cantidadAlumnos; a++) { //variable alumnos empieza en 0, va a tener tantos elementos como el profe diga
        let cedulas = prompt('Ingrese la CI de un alumno'); //Declaramos la variable CI y pedimos que ingrese la CI

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
                alumnos.push(cedulas); //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
                let instanciasEvaluación = new Array(7); //Creamos array con el largo de 7 elementos / posicicones
                for (let i = 0; i < alumnos.length; i++) {
                    if (alumnos[i] === cedulas) {
                        notas[i] = instanciasEvaluación;
                    }
                }
                console.log('Se ingresó el alumno:' + cedulas); //ver si es necesario o no
                console.log('Ci alumnos:' + alumnos);
                console.log(notas);
            }
        }
    }

    //alumnos.push(cedulaAgregarA); //unshift. Agrega un elemento(cedula) al principio del array(alumnos), al usar unshift el numero ingresado queda en la posición 0
    //console.log('Se ingresó el alumno:' + cedulas); //ver si es necesario o no
    //console.log('lista alumnos:' + alumnos);

    //console.log(alumnos);
    menuPrincipal(); //Llamamos a la función menú para que al ingresar las Ci nos muestre el promp

    //return alumnos; // retorna el valor de una variable
}

function asignarNota(alumnos, notas) {
    //Array que pida las notas y las guarde en el array de cada alumno

    //Si el alumno C está en la posición 5 del array alumnos, la nota para ese alumno debe estar en la posición 5 del array de cada evaluación
    let cedulas = prompt('Ingrese la CI del alumno para asignarle una nota'); //Pedir que ingrese una CI
    console.log("cedulas y notas" + cedulas, notas);
    let instanciasEvaluación = parseInt(prompt('Seleccione una instancia de evaluación: \n 1.Obligatorio A \n 2.Obligatorio B \n 3.Obligatorio C \n 4.Prueba A \n 5.Prueba B \n 6.Prueba C \n 7.Proyecto'));

    //SWITCH para las instancias de evaluación
    let tipoNota;

    switch (instanciasEvaluación) {
        case 1:
            tipoNota = 'ObligatorioA'; //En el array instanciasEvaluación va a estar en la posición 0
            let notaIngresada = parseInt(prompt('Ingrese una nota para el obligatorio A'));
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
            document.getElementById("root").innerHTML = `<pre>${JSON.stringify(notas,null,2)}</pre>`
            //Me falta ingresar la nota en el array
            break;
        case 2:
            tipoNota = 'ObligatorioB'; //Posicón 1
            notaMaxima = 10;
            break;
        case 3:
            tipoNota = 'ObligatorioC';
            notaMaxima = 20;
            break;
        case 4:
            tipoNota = 'PruebaA';
            notaMaxima = 10;
            break;
        case 5:
            tipoNota = 'PruebaB';
            notaMaxima = 10;
            break;
        case 6:
            tipoNota = 'PruebaC';
            notaMaxima = 10;
            break;
        case 7:
            tipoNota = 'Proyecto';
            notaMaxima = 30;
            break;
        default:
            document.write('Instancia de evaluación no válida.');
            return;
    }
    menuPrincipal();

    // if (nota < 0 && nota > notaMaxima) {
    //     console.log('Nota no válida.');
    //     return;
    // }

    // console.log('Notas' + notas);

    // alumnos.slice(); //Cómo traer un valor de cada array que esté asociado al alumno
    // let informeAlumno = (ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto);
    // return informeAlumno; //Retorna la variable informe Alumno que tiene dentro los arrays por cada evaluación
    // //Return: Retorna el valor de una variable (Es una clausula de los metodos(metodo y función))
}

function informeAlumno(alumnos, notas) {
    let cedula = prompt('Ingrese la cédula del alumno para ver sus notas:');
    let inicio; //Para buscar en una posición del array

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === cedula) {
            inicio = i; //E,íeza por 0 e itera 
            break;
        }
    }

    if (index === undefined) {
        console.log('Alumno no encontrado.');
        return;
    }

    let total = 0;
    let informe = 'Alumno: ' + cedula + '\n';

    let instancias = ['ObligatorioA', 'ObligatorioB', 'ObligatorioC', 'PruebaA', 'PruebaB', 'PruebaC', 'Proyecto'];

    let alumnoEncontrad; // Variable para indicar si el alumno fue encontrado

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === cedula) {
            alumnoEncontrado = cedula; // El alumno fue encontrado
            break; // Sale del ciclo una vez encontrado
        }
    }

    if (!alumnoEncontrado) { // Si no se encontró el alumno, muestra el mensaje
        console.log('Alumno no encontrado.');
        return;
    }

    informe += 'Total: ' + total + ' / 100';
    console.log(informe);
}

menuPrincipal();