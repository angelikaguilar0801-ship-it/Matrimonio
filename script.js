const invitados = {

    "juan aguilar": "💍 Hola Juan, te esperamos a ti, tu esposa e hijos con mucho cariño en nuestra boda. 💕✨ Total asistentes: 4 👨‍👩‍👧‍👦",

    "angelica aguilar": "💐 Hola Angélica Aguilar, te esperamos a ti y a Nicolas con mucho cariño en nuestra boda. 💕🥂 Total asistentes: 2 👩‍❤️‍👨",

    "betty garcia": "🌸 Hola Betty García, te esperamos a ti, tus hijos y yerna para compartir juntos este día tan especial. 💍💕 Total asistentes: 4 👨‍👩‍👧‍👦",

    "aura monrroy": "🌷 Hola Aura Monrroy, te esperamos con mucho cariño en nuestra boda. 💕✨ Será muy especial contar contigo. 🥂 Total asistentes: 1 👰‍♀️",

    "viviana aguilar": "💖 Hola Viviana Aguilar, te esperamos a ti, tu esposo e hijos para celebrar juntos nuestro gran día. 💍🌸 Total asistentes: 4 👨‍👩‍👧‍👦",

    "felix garcia": "🥂 Hola Felix García, te esperamos con mucho cariño en nuestra boda. 💍✨ Será un placer compartir este momento contigo. 💕 Total asistentes: 1",

    "johana aguilar": "🌹 Hola Johana Aguilar, te esperamos a ti y a Pedro para celebrar juntos nuestro día especial. 💍💕 Total asistentes: 2 👩‍❤️‍👨",

    "wilson garcia": "💐 Hola Wilson García, te esperamos a ti, tu esposa e hija para compartir juntos la alegría de nuestra boda. 💕✨ Total asistentes: 3 👨‍👩‍👧",

    "wilson martinez": "🙏 Dios te bendiga, pastor Wilson Martínez. Será una alegría recibirte a ti y a tu esposa en nuestra boda. 💍💕 Total asistentes: 2 👩‍❤️‍👨",

    "fredy garcia": "🌸 Hola Fredy García, te esperamos a ti, tu esposa e hijo para celebrar juntos este día tan especial. 💍🥂 Total asistentes: 3 👨‍👩‍👦",

    "erika rubiano": "💐 Hola Erika Rubiano, te esperamos a ti y a Pamela con mucho cariño en nuestra boda. 💕✨ Total asistentes: 2 👩‍❤️‍👩",

    "libia gomez": "🌷 Hola Libia Gómez, te esperamos a ti, Angela, Angel, Ana, Matias, Marcela y tío Mario para compartir juntos este día tan especial. 💍💕 Total asistentes: 7 👨‍👩‍👧‍👦",

    "edwin rubiano": "💖 Hola Edwin Rubiano, te esperamos a ti y a Ericka para celebrar juntos nuestra boda. 💍🥂 Total asistentes: 2 👩‍❤️‍👨",

    "edna perez": "🌸 Hola Edna Pérez, te esperamos a ti y a tía Flor con mucho cariño en nuestra boda. 💕✨ Total asistentes: 2 👩‍❤️‍👩",

    "walter leon": "💐 Hola Walter León, te esperamos a ti, tu esposa e hijo para compartir juntos la alegría de nuestra boda. 💍💕 Total asistentes: 2 👨‍👩‍👦",

    "sandra mantilla": "🌹 Hola Sandra Mantilla, te esperamos a ti y a tu esposo para celebrar juntos nuestro día especial. 💍💕✨ Total asistentes: 2 👩‍❤️‍👨"

};




function consultarInvitados() {

    const input = document.getElementById("nombre");
    const resultado = document.getElementById("resultado");

    // Obtenemos el nombre escrito
    const nombre = input.value.trim().toLowerCase();

    // Validamos que no esté vacío
    if (nombre === "") {

        resultado.textContent = "Por favor, ingresa tu nombre y apellido.";

        return;
    }


    // Buscamos el nombre en la lista
    if (invitados[nombre] !== undefined) {

        // La respuesta ya es un String
        const mensaje = invitados[nombre];

        resultado.textContent = mensaje;

    } else {

        resultado.textContent =
            "No encontramos ese nombre en la lista. escribelo de nuevo sin tildes o alguna clase de caracter.";

    }
}

