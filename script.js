function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}

function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio1() {
    limpiarResultado();
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let mensaje = "";
    if (nota < 75) {
        mensaje = "Usted Necesita Mejorar";
    } else if (nota < 80) {
        mensaje = "Bueno";
    } else if (nota < 91) {
        mensaje = "Muy Bueno";
    } else if (nota <= 100) {
        mensaje = "Usted está en Excelencia Académica";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    document.getElementById("resultado").textContent = mensaje;
}


function ejercicio2() {
    limpiarResultado();
    
    let edad = parseFloat(prompt("Ingrese su edad"));

    let mensaje = "";
    if (edad >= 18) {
        mensaje = "Usted es mayor de edad";
    } else if (edad <= 17) {
        mensaje = "Usted es menor de edad";
    } else {
        mensaje = "Ingrese un valor válido";
    }

    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio3() {
    limpiarResultado();
    
    let precio = parseFloat(prompt("Ingrese el precio del ticket"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento"));
    let mensaje = "";

    // Realizar procedimiento
    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        mensaje = "Ya que usted tiene menos de 12 obtiene un descuento del 40%, por lo tanto solo debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let canti = precio * 0.30;
            let des = precio - canti;
            mensaje = "Ya que usted tiene más de 13 y menos de 21 y es estudiante, obtiene un descuento del 30%, por lo tanto solo debe pagar " + des + "$";
        } else {
            mensaje = "Lo siento, pero usted no es estudiante, por lo tanto no puede obtener este descuento. Debe pagar el precio normal que es de " + precio + "$";
        }
    } else if (edad >= 60) {
        let cantid = precio * 0.60;
        let descu = precio - cantid;
        mensaje = "Ya que usted tiene más de 60, obtiene un descuento del 60%, por lo tanto solo debe pagar " + descu + "$";
    } else {
        mensaje = "Si usted no tiene menos de 21 o más de 60, no obtiene ningún descuento, por lo tanto debe pagar el ticket completo que sería " + precio + "$";
    }

    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio4() {
    limpiarResultado();
    
    // Declarar Variable
    let base = 2;
    let altura = 4;

    // Operación
    let area = (base * altura) / 2;

    // Mostrar el resultado
    let mensaje = "El resultado es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio5() {
    limpiarResultado();
    
    // Declarar Variable
    let base = 2;
    let altura = 4;

    // Realizamos el proceso 
    let perimetro = 2 * (base + altura);

    // Para mostrar resultado
    let mensaje = "El resultado es: " + perimetro;
    document.getElementById("resultado").textContent = mensaje;
}


function ejercicio6() {
    limpiarResultado();
    
    // Declarar Variables
    let lado1 = 4;
    let lado2 = 4;

    // Realizamos el proceso
    let area = lado1 * lado2;

    // Para mostrar resultado
    let mensaje = "El resultado es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio7() {
    limpiarResultado();
    
    // Calcular que categoría pertenece +35 A, >=21-<=34 B, <21 C
    let nombre = prompt("Ingrese su nombre");
    let asistencia = parseFloat(prompt("Ingrese su cantidad de asistencias"));

    let mensaje = "";
    if (asistencia >= 35) {
        mensaje = nombre + " usted es un estudiante de categoría A";
    } else if (asistencia > 21 && asistencia < 35) {
        mensaje = nombre + " usted es un estudiante de categoría B";
    } else if (asistencia >= 0 && asistencia < 21) {
        mensaje = nombre + " usted es un estudiante de categoría C";
    } else {
        mensaje = "Unidad no válida";
    }

    document.getElementById("resultado").textContent = mensaje;
}

function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio8() {
    limpiarResultado();
    
    // Declarar Variables
    let basemayor = 2;
    let basemenor = 4;
    let altura = 4;

    // Realizamos el proceso 
    let area = ((basemayor + basemenor) * altura) / 2;

    // Para mostrar resultado
    let mensaje = "El resultado es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio9() {
    limpiarResultado();
    
    // Convertir Dólares a Lempiras
    const tasaCambio = 24;
    const dolares = 1500;

    // Proceso para convertir
    const convertir = dolares * tasaCambio;

    // Resultado
    const mensaje = dolares + " dólares son " + convertir + " lempiras";
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio10() {
    limpiarResultado();
    
    // Convertir Lempiras a Dólares
    let lempiras = 8560;
    let tasaCambio = 24; // Tasa de cambio de Lempiras a Dólares

    // Proceso para convertir
    let convertir = lempiras / tasaCambio;

    // Resultado
    let mensaje = lempiras + " lempiras son " + convertir.toFixed(2) + " dólares";
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio11() {
    limpiarResultado();
    
    // Declarar Variables
    let C = 40;
    
    // Operación
    let F = (C * 9/5) + 32;
    
    // Resultado
    let mensaje = C + " grados Celsius son " + F + " grados Fahrenheit";
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio12() {
    limpiarResultado();
    
    // Calcular el área de un círculo
    let radio = 10;
    let area = Math.PI * (radio * radio);

    // Imprimir los resultados
    let mensaje = "El área de un círculo con un radio de " + radio + " es igual a " + area;
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio13() {
    limpiarResultado();
    
    const radio = 5; // Ejemplo de valor para el radio
    const perimetro = 2 * Math.PI * radio; // Cálculo del perímetro
    
    const mensaje = "El perímetro de un círculo con un radio de " + radio + " es de: " + perimetro;
    document.getElementById("resultado").textContent = mensaje;
}

function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio14() {
    limpiarResultado();
    
    // Calcular el promedio de 4 notas
    const nota1 = 98;
    const nota2 = 88;
    const nota3 = 94;
    const nota4 = 90;

    // Realizamos la operación
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);

    // Imprimir el resultado
    alert("El resultado es: " + promedio);

    const mensaje = "El promedio de las 4 notas (" + nota1 + "%, " + nota2 + "%, " + nota3 + "%, " + nota4 + "%) es de: " + promedio;
    document.getElementById("resultado").textContent = mensaje;
}


function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio15() {
    limpiarResultado();
    // Metros a centímetros y viceversa

    // Declarar variables
    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
    let unidad = prompt("Ingrese la unidad que desea convertir (m para metros, cm para centímetros)");

    // Realizar procedimiento
    let mensaje = "";
    if (unidad === "m") {
        let cm = cantidad * 100;
        mensaje = `${cantidad} metros equivalen a ${cm} centímetros`;
    } else if (unidad === "cm") {
        let m = cantidad / 100;
        mensaje = `${cantidad} centímetros equivalen a ${m} metros`;
    } else {
        mensaje = "Unidad de medida no válida";
    }

    document.getElementById("resultado").textContent = mensaje;
}
