//Arrays: Colecciones ordenadas de elementos
//& se llama ampersam 
//En classroom: Recorrer un array con For para cargarlo para agregar alumno(?)
//console.log = imprime en la consola del navegador
//document.write = imprime en la pantalla
//Indice de un array = posición en la que se encuentra


function menuPrincipal() { //Definimos función menúPrincipal 

    let menu; //Declaramos la variable menú, que va dentro del switch
    menu = parseInt(prompt('Bienvenido! Indique la opción deseada. \n 1.Agregar alumno \n 2.Asignar nota \n 3.Informe de alumno \n 4.Informe completo'));

    let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:')); //pedimos al usuario que ingrese la cantidad de alumnos que tiene
    let alumnos = [ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto] = new Array (cantidadAlumnos); //Crea un array alumnos con un tamaño igual al numero de alumnos especificado por el usuario

    //Creamos un array por cada evaluación, del mismo tamaño que alumnos, para almacenar las notas de cada alumno por evaluación
    let ObligatorioA = [] = new Array (cantidadAlumnos); //Array para evaluación ObligatorioA, con el largo del array de alumnos
    let ObligatorioB = [] = new Array (cantidadAlumnos); //Array para evaluación Obligatorio B
    let ObligatorioC = [] = new Array (cantidadAlumnos); //Array para evaluación Obligatorio C
    let PruebaA = [] = new Array (cantidadAlumnos); //Array para evaluación PruebaA
    let PruebaB = [] = new Array (cantidadAlumnos); //Array para evaluación PruebaB
    let PruebaC = [] = new Array (cantidadAlumnos); //Array para evaluación Pruebac
    let Proyecto = [] = new Array (cantidadAlumnos); //Array para evaluación Proyecto

    //let evaluaciones = [];
    //notas contiene el valor Obligatorio A, Obligatorio B, Obligatorio, Prueba A, Prueba B, Prueba C, Proyecto


    //El switch toma el valor ingresado por el usuario y según esa decisión ejecuta lo que tiene dentro de uno de sus bloques cases
    switch (menu) { //En el switch ponemos la variable
        case 1: // Agregar alumno
            //document.write('asdad');
            agregarAlumno(alumnos); //Llamamos a la función agregar alumno y agregamos los parametros en los que estamos trabajando
            break;

        case 2: //Agregar nota
            asignarNota(alumnos);  //Llamamos a la función agregar nota
            break;

        case 3: //Informe alumno
            informeAlumno(alumnos); //Llamamos a la función informe alumno
            break;

        case 4: //Informe completo
            informeCompleto(alumnos); //Llamamos a la función informe completo
            break;

        default: //Mandar al usuario al menú
            menuPrincipal(); //Que vaya de nuevo al menú
            break;
    }
}

function agregarAlumno(alumnos) { //Función agregar alumno, es necesario llamar a cantidadAlumnos?
    //Creo una variable llamda cedula que vaya dentro del array?
    //alumnos [nota];
    //PARA VALIDAR QUE EL LARGO DE LA CI ESTÉ CORRECTO  //Un for para que pida CI el largo de veces que indica el profe?
    //Si el profe puso que son 10 alumnos, el alrgo del array son 10, creo un for con la variable cantidad alumnos para que pida "10" veces la CI?
    
    let cedulas = parseInt(prompt('Ingrese la CI de un alumno')) //Declaramos la variable CI y pedimos que ingrese la CI

    //Validaciones
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

    //Cuando se ingrese un alumno verificar que no exista
}

function asignarNota(alumnos, notas) {
    //Array que pida las notas y las guarde en el array de cada alumno
    //Verificar que al agregar la nota sea correcta
    //Cargar la nota dentro de cada elemeno alumno
    let cedulas = prompt ('Ingrese la CI del alumno para asignarle una nota'); //Pedir que ingrese una CI
    
    //pedir ci del alumno, traer el array de alumnos
    //Pedir nota, traer el array de notas y guardar la nota adentro
    //SWITCH para las instancias de evaluación
    let = instanciasEvaluación; //Declaramos las instancias de evaluación
    instanciasEvaluación = parseInt(prompt('Seleccione una instancia de evaluación: \n 1.Obligatorio A \n 2.Obligatorio B \n 3.Obligatorio C \n 4.Prueba A \n 5.Prueba B \n 6.Prueba C \n 7.Proyecto'))
    let nota //Declaramos la variable nota para usar en el case

    //Agregar instancia evaluación al switch?

    switch(instanciasEvaluación) {  
        //Un switch o un if else? ObligatorioA, ObligatorioB, ObligatorioC, PruebaA, PruebaB, PruebaC, Proyecto
        case 1: //Obligatorio A, maximo 10
            nota = parseInt (prompt('Ingrese una nota para el obligatorio A')); //Pide la nota
            //Tenemos que pedir que ingrese la CI y guarde los datos ingresados oara esa CI
            
            if (nota <= 10) { //Si nota es menor o igual a 10
                ObligatorioA.push(nota); //Agrega la nota ingresada al obligatorio A 
            } else { //Sino
                console.log('Ingrese una nota valida'); //Mostrar mensaje
                //Agregar un for??? No, porque no necesito iterar nada
            }
            break;

        case 2: //Obligatorio B, máximo 10
            nota = parseInt (prompt('Ingrese una nota para el obligatorio B')); // pode la nota para el ob. A
            if (nota <= 10) { // Si la nota es menor o igual a 10
                ObligatorioB.push(nota); //Ingresar nota en Obligatiorio V
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            break;

        case 3: //Obligatorio C, máximo 20
            nota = parseInt (prompt('Ingrese una nota para el obligatorio C')); //Pide la nota para el Ob. C
            if (nota <= 20) { //Si la nota es menor o igual a 20
                ObligatorioC.push(nota); // Ingresar nota en Ob. C
            } else { // Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            break;

        case 4: //Prueba A: Máximo 10 
            nota = parseInt (prompt('Ingrese una nota para la prueba A')); //Pide la nota oara la prueba A
            if (nota <= 10) { //Si la nota es menor o igual a 10
                PruebaA.push(nota); // Ingresar nota en prueba A
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            break;

        case 5: //Prueba B: Máximo 10
            nota = parseInt (prompt('Ingrese una nota para la prueba B')); //Pide na nota
            if (nota <= 10) { //Si la nota es menor o igual a 10
                PruebaB.push(nota); //Ingresar nota en Prueba B
            } else { //Sino
                document.write('Ingrese una nota valida'); //Mostrar mensaje
            }
            break;

        case 6: //Prueba C, máximo 10 
            nota = parseInt (prompt('Ingrese una nota para la prueba C')); //Pide la nota para la prueba C
            if (nota <= 10) { //Si la nota es menor o igual a 10
                PruebaC.push(10); //Ingresar nota en Prueba C
            } else {
                document.write('Ingrese una nota valida'); //Mostrar mensaje 
            }
            break;
        case 7: //Proyecto, máximo 30 
            Proyecto = parseInt (prompt('Ingrese una nota para el Proyecto')); //Pide la nota para el proyecto
            if (nota <= 30) { //Si la nota es menor o igual a 30
                Proyecto.push(nota); //
            } else {
                document.write('Ingrese una nota valida');
            }
            break;
        default: // Mandar al usuario al menú
           menuPrincipal();
           break;
    }

    alumnos.slice(); //Cómo traer un valor de cada array que esté asociado al alumno

}

function informeAlumno(alumnos) {
    parseInt(prompt('Ingrese la CI del alumno del que desea el informe'));
    //Pedir la CI de un alumno

    //Que traiga el array de los alumnos, junto con el array de notas
    //Para acceder a los elementos individuales de un array usando el indice (posición)
    //Si no tiene una nota en alguna evaluación que se muestre el campo vacío

    //slice(inicio, fin): Devuelve una copia superficial de una porción del array en un nuevo array.

    slice(cedulas);

    console.log(alumnos + notas);
    //console.log();



    //Calcular porcentaje, agregar un if para validar que esté  la CI en el array alumnos
    let total = 0;
    let suma = ObligatorioA[alumnos] + ObligatorioB[alumnos] + ObligatorioC[alumnos] + PruebaA[alumnos] + PruebaB[alumnos] + PruebaC[alumnos] + Proyecto[alumnos];

    alumnos.slice(cantidadAlumnos); //Está bien que traiga el largo de cantidad de alumnos?
}

function informeCompleto(alumnos) {
    //Agregar info
    //Mostrar los datos que contiene el array de alumnos, junto con los elementos del array notas de todos los alumnos
}

menuPrincipal();

//Llamar a las funciones