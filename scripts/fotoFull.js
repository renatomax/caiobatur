let btnAvancar = document.querySelector(".avancar");
let btnAnterior = document.querySelector(".anterior");
let imgFull = document.querySelector(".imgExibicao");
let telafull = document.querySelector(".fullFotos");
let abreFotos = document.querySelector(".btnFotos");

let indexFotoExibicao = 1;

function trocaImagem() {
  let valorPronto = verificaIndexFotos();
  imgFull.setAttribute("src", `style/fotos/foto${valorPronto}.jpg`);
}

function verificaIndexFotos() {
  if (indexFotoExibicao < 1) {
    indexFotoExibicao = 40;
  } else if (indexFotoExibicao > 40) {
    indexFotoExibicao = 1;
  }
  return indexFotoExibicao;
}

btnAvancar.addEventListener("click", () => {
  indexFotoExibicao++;
  trocaImagem();
});

btnAnterior.addEventListener("click", () => {
  indexFotoExibicao--;
  trocaImagem();
});

telafull.addEventListener("click", (event) => {
  if (event.target == telafull) {
    telafull.classList.add("removeFull");
  }
});

abreFotos.addEventListener("click", () => {
  telafull.classList.remove("removeFull");
});
