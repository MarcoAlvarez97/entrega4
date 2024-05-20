const input = document.getElementById("pokemon-input");
const button = document.getElementById("pokemon-button");
const card = document.getElementById("pokemon-card");

button.addEventListener("click", () => {
  const id = input.value;
  if (!id) {
    mostrarError("Debes ingresar un ID de Pokémon");
    return;
  }
  buscarPokemon(id);
});
function buscarPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      mostrarPokemon(data);
    })
    .catch((error) => {
      mostrarError("No se encontró el Pokémon con ese ID");
      console.error(error);
    });
}
function mostrarPokemon(pokemon) {
  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("pokemon-card");

  const nombre = document.createElement("h2");
  nombre.textContent = pokemon.name;

  const tipo = document.createElement("p");
  tipo.textContent = `Tipo: ${pokemon.types[0].type.name}`;

  const altura = document.createElement("p");
  altura.textContent = `Altura: ${pokemon.height * 0.1} m`;

  const peso = document.createElement("p");
  peso.textContent = `Peso: ${pokemon.weight * 0.1} kg`;

  const imagen = document.createElement("img");
  imagen.src = pokemon.sprites.front_default;

  cardPokemon.appendChild(nombre);
  cardPokemon.appendChild(tipo);
  cardPokemon.appendChild(altura);
  cardPokemon.appendChild(peso);
  cardPokemon.appendChild(imagen);

  card.innerHTML = "";
  card.appendChild(cardPokemon);
}
function mostrarError(mensaje) {
  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("pokemon-card");

  const error = document.createElement("p");
  error.textContent = mensaje;

  cardPokemon.appendChild(error);

  card.innerHTML = "";
  card.appendChild(cardPokemon);
}
