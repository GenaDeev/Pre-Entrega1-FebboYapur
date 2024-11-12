let niños = 0;
let adolescentes = 0;
let adultos = 0;
let mayores = 0;

while (true) {
    let entrada = prompt("Ingresa una edad o escribe 'salir' para terminar:");
    if (entrada.toLowerCase() === 'salir') {
        break;
    }
    let edad = parseInt(entrada);
    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa una edad válida.");
        continue;
    }
    if (edad >= 0 && edad <= 12) {
        niños++;
    } else if (edad >= 13 && edad <= 19) {
        adolescentes++;
    } else if (edad >= 20 && edad <= 64) {
        adultos++;
    } else if (edad >= 65) {
        mayores++;
    }
}

alert(`Clasificación de edades: Niños (0-12): ${niños}, Adolescentes (13-19): ${adolescentes}, Adultos (20-64): ${adultos}, Mayores (65+): ${mayores}`);
