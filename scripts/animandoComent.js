const comentarios = document.querySelectorAll(".cometarioBox");

let indexComentarioAnimado = 0;

function comentarioAnimado() {
  comentarios[indexComentarioAnimado].style.animation =
    "sobeComentario 20s linear backwards";
  comentarios[indexComentarioAnimado].style.left = randomBetween(0, 80) + "px";
  chamandoProxComent();
}

function chamandoProxComent() {
  if (indexComentarioAnimado == comentarios.length - 1) {
    indexComentarioAnimado = 0;
  } else {
    indexComentarioAnimado++;
  }

  setTimeout(() => {
    comentarioAnimado();
  }, randomBetween(5000, 7000));
}

window.addEventListener("animationend", (event) => {
  if (event.animationName == "sobeComentario") {
    let elemento = event.target;
    elemento.style.animation = "";
  }
});

comentarioAnimado();

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
