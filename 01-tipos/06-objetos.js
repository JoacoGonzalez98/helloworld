// Personaje

let nombre = "Joaquín";
let edad = 26;
let sexo = "Masculino";

let personaje = {
    nombre: "Joaquín",
    edad: 26,
    sexo: "Masculino",
};
console.log(personaje);
console.log(personaje.edad);
console.log(personaje['sexo']);

personaje.edad = 20;

personaje['edad'] = 20;

delete personaje.sexo;
console.log(personaje);