const friends = [];

// Función para adicionar un nombre a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const name = input.value.trim();

  if (name === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  friends.push(name);
  actualizarListaAmigos();
  input.value = ""; // Limpia el campo de texto
}

// Función para actualizar la lista visible en la página
function actualizarListaAmigos() {
  const friendsList = document.getElementById("listaAmigos");
  friendsList.innerHTML = "";

  friends.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    friendsList.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (friends.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * friends.length);
  const amigoSecreto = friends[randomIndex];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
