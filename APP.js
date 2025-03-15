// Lista para almacenar los nombres de los amigos
const listaDeAmigos = [];

// Función para añadir un nombre a la lista
function agregarNombre() {
  const entrada = document.getElementById("campoNombre");
  const nombre = entrada.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  listaDeAmigos.push(nombre); // Añadimos el nombre a la lista
  actualizarLista(); // Actualizamos la lista visible
  entrada.value = ""; // Limpiamos el campo de texto
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
  const listaEnPantalla = document.getElementById("listaAmigos");
  listaEnPantalla.innerHTML = ""; // Limpiamos la lista actual

  // Recorremos la lista de amigos y los mostramos
  listaDeAmigos.forEach((amigo) => {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    listaEnPantalla.appendChild(elementoLista);
  });
}

// Función para sortear un amigo secreto
function sortearAmigoSecreto() {
  if (listaDeAmigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSecreto = listaDeAmigos[indiceAleatorio];

  const resultadoEnPantalla = document.getElementById("resultado");
  resultadoEnPantalla.textContent = `El amigo secreto es: ${amigoSecreto}`;
}
