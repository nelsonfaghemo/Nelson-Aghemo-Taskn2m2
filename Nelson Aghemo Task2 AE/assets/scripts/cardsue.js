const $contenedor = document.getElementById(`cards-container`);

const datosCards = data.eventos;

const card = datosCards[0];

let template = "";

function crearCard(card) {
  return `<a href="./details/1.html"> <div class="card">
          <img
            src="${card.image}"
            alt="img"
          />
          <h3>${card.name}</h3>
          <span>${card.category}</span>
          <span>${card.description}</span>
        </div> </a> 
`;
}

for (let card of datosCards) {
  const fechaBase = new Date(data.fechaActual);
  const fechaCard = new Date(card.date);
  if (fechaBase < fechaCard) {
    template += crearCard(card);
  }
}

$contenedor.innerHTML = template;
