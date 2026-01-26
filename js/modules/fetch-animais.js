import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      if (!animaisResponse.ok) throw new Error("Erro ao buscar os dados");

      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      if (!numerosGrid) return;

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      initAnimaNumeros();
    } catch (erro) {
      console.log("Erro no fetch de animais:", erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  fetchAnimais("../../animaisapi.json");
}
