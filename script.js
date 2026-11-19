
const invitados = {

    "oscar diaz": "💍 Hola Óscar Díaz, te esperamos a ti, tu esposa e hijos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 4 👨‍👩‍👧‍👦",

    "jorge mantilla": "💐 Hola Jorge Mantilla, te esperamos a ti y a tu hija con mucho cariño en nuestra boda. 💕✨ Total asistentes: 2 👨‍👧",

    "felix vivas": "🥂 Hola Félix Vivas, te esperamos a ti, tu esposa e hijos para celebrar juntos nuestro gran día. 💍💕 Total asistentes: 5 👨‍👩‍👧‍👦",

    "erzon moya": "🌸 Hola Erzon Moya, te esperamos a ti, tu esposa e hijos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 4 👨‍👩‍👧‍👦",

    "yurikza brito": "🌷 Hola Yurikza Brito, te esperamos a ti y a tu mamá para compartir juntos este día tan especial. 💍💕 Total asistentes: 2 👩‍👧",

    "paula roa": "💖 Hola Paula Roa, te esperamos a ti y a tu familia con mucho cariño en nuestra boda. 💕✨ Total asistentes: 3 👨‍👩‍👧‍👦",

    "dulce rincon": "🌹 Hola Dulce Rincón, te esperamos con mucho cariño en nuestra boda. 💍💕 Será muy especial contar contigo. Total asistentes: 1 👰‍♀️",

    "octavio camacho": "💐 Hola Octavio Camacho, te esperamos a ti, tu esposa e hijas para celebrar juntos nuestro gran día. 💕✨ Total asistentes: 4 👨‍👩‍👧‍👦",

    "marcela rivera": "🌸 Hola Marcela Rivera, te esperamos a ti y a tu mamá con mucho cariño en nuestra boda. 💍💕 Total asistentes: 2 👩‍👧",

    "yurani urrego": "💖 Hola Yurani Urrego, te esperamos a ti y a tus hijas para compartir juntos este día tan especial. 💕✨ Total asistentes: 3 👩‍👧‍👧",

    "silvia villamizar": "🌷 Hola Silvia Villamizar, te esperamos con mucho cariño en nuestra boda. 💍💕 Será un placer contar contigo. Total asistentes: 1 👰‍♀️",

    "jeisson ortiz": "🥂 Hola Jeisson Ortiz, te esperamos a ti y a tu hijo para celebrar juntos nuestro gran día. 💍💕 Total asistentes: 2 👨‍👦",

    "sneider sierra": "🌹 Hola Sneider Sierra, te esperamos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 1",

    "erika sierra": "💐 Hola Erika Sierra, te esperamos a ti y a tu hija con mucho cariño en nuestra boda. 💍💕 Total asistentes: 2 👩‍👧",

    "david ortiz": "💖 Hola David Ortiz, te esperamos a ti, Suny Hernández e hijo para compartir juntos este día tan especial. 💕✨ Total asistentes: 3 👨‍👩‍👦",

    "erickson perez": "🌸 Hola Erickson Pérez, te esperamos a ti y a Karem Duque con mucho cariño en nuestra boda. 💍💕 Total asistentes: 2 👩‍❤️‍👨",

    "elmer tafur": "🌷 Hola Elmer Tafur, te esperamos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 1",

    "manuel carrascal": "💐 Hola Manuel Carrascal, te esperamos a ti y a tu mamá para celebrar juntos nuestro gran día. 💍💕 Total asistentes: 2 👨‍👩‍👦",

    "jhon gonzalez": "🥂 Hola Jhon González, te esperamos a ti y a tu esposa con mucho cariño en nuestra boda. 💕✨ Total asistentes: 2 👩‍❤️‍👨",

    "cristina aguilar": "🌹 Hola Cristina Aguilar, te esperamos a ti y a tu esposo para compartir juntos este día tan especial. 💍💕 Total asistentes: 2 👩‍❤️‍👨",

    "wilson gelves": "💖 Hola Wilson Gelves, te esperamos a ti, tu esposa e hijos para celebrar juntos nuestro gran día. 💍💕 Total asistentes: 4 👨‍👩‍👧‍👦",

    "cristian rincon": "🌸 Hola Cristian Rincón, te esperamos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 1",

    "jhonatan centeno": "🌷 Hola Jhonatan Centeno, te esperamos con mucho cariño en nuestra boda. 💍💕 Total asistentes: 1",

    "hernesto mendoza": "💐 Hola Hernesto Mendoza, te esperamos a ti, tu esposa e hijo para celebrar juntos este día tan especial. 💕✨ Total asistentes: 3 👨‍👩‍👦",

    "jorge ardila": "🥂 Hola Jorge Ardila, te esperamos a ti, tu esposa e hijas con mucho cariño en nuestra boda. 💍💕 Total asistentes: 4 👨‍👩‍👧‍👧",

    "anderson ardila": "🌹 Hola Anderson Ardila, te esperamos a ti y a Jessica Lizarazo para compartir juntos nuestro gran día. 💕✨ Total asistentes: 2 👩‍❤️‍👨",

    "ruby chaparro": "💖 Hola Ruby Chaparro, te esperamos a ti y a tu esposo con mucho cariño en nuestra boda. 💍💕 Total asistentes: 2 👩‍❤️‍👨",

    "leidy hernandez": "🌸 Hola Leidy Hernández, te esperamos a ti, tu esposo e hijos para celebrar juntos este día tan especial. 💕✨ Total asistentes: 3 👨‍👩‍👧",

    "henry chaparro": "🌷 Hola Henry Chaparro, te esperamos a ti, tu esposa e hijos con mucho cariño en nuestra boda. 💍💕 Total asistentes: 3 👨‍👩‍👧"

};


// Cargar automáticamente los nombres en el selector
const selector = document.getElementById("nombre");

Object.keys(invitados)
    .sort((a, b) => a.localeCompare(b))
    .forEach(nombre => {

        const opcion = document.createElement("option");

        opcion.value = nombre;

        opcion.textContent = nombre
            .split(" ")
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
            .join(" ");

        selector.appendChild(opcion);

    });


function consultarInvitados() {

    const input = document.getElementById("nombre");
    const resultado = document.getElementById("resultado");

    const nombre = input.value;

    if (nombre === "") {
        resultado.textContent = "Por favor, selecciona tu nombre.";
        return;
    }

    if (invitados[nombre] !== undefined) {

        resultado.textContent = invitados[nombre];

    } else {

        resultado.textContent = "No encontramos ese nombre en la lista.";

    }

}


