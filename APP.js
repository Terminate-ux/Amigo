const listaAmigos = []; // Lista para almacenar los nombres de los amigos

// Función para añadir un nombre a la lista
function agregarAmigo() {
    const entrada = document.getElementById("amigo"); // Obtener el campo de entrada
    const nombreAmigo = entrada.value.trim(); // Obtener el valor y eliminar espacios extra

    if (nombreAmigo === "") { // Validar si el campo está vacío
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta
        return; // Salir de la función
    }

    listaAmigos.push(nombreAmigo); // Agregar el nombre a la lista
    mostrarListaAmigos(); // Actualizar la lista en la página
    entrada.value = ""; // Limpiar el campo de entrada
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const ulListaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento UL
    ulListaAmigos.innerHTML = ""; // Limpiar el contenido actual

    // Usar un bucle for
    for (let i = 0; i < listaAmigos.length; i++) {
        const elemento = document.createElement("li"); // Crear un nuevo elemento de lista
        elemento.textContent = listaAmigos[i]; // Asignar el nombre del amigo al elemento
        ulListaAmigos.appendChild(elemento); // Agregar el elemento a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) { // Validar que la lista no esté vacía
        alert("La lista está vacía. Agrega al menos un nombre."); // Mostrar alerta
        return; // Salir de la función
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Generar un índice aleatorio
    const amigoSeleccionado = listaAmigos[indiceAleatorio]; // Obtener el amigo secreto

    const ulResultado = document.getElementById("resultado"); // Obtener el elemento de resultado
    ulResultado.innerHTML = ""; // Limpiar el contenido actual

    // Mostrar el amigo secreto
    const elementoResultado = document.createElement("li");
    elementoResultado.innerHTML = "El amigo secreto es: <strong>" + amigoSeleccionado + "</strong>";
    ulResultado.appendChild(elementoResultado); // Agregar el resultado a la página
}

