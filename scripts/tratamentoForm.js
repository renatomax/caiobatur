let btnEnviaAgs = document.querySelector("#btnEnvia");
let nomePessoaAgencia = document.querySelector("#nomePessoa");
let nomeAgencia = document.querySelector("#nomePessoa");
let numeroPessoaAgencia = document.querySelector("#nomePessoa");
let bunnerEstadoAg = document.querySelector(".estadoForm");

let mensagemTudoAG = "Tudo certo!<br>Entraremos em contato ";
let mensagemFaltouForm =
  "Parece que o formulário não foi preenchido corretamente.<br> Verifique os dados fornecidos.";

btnEnviaAgs.addEventListener("click", () => {
  if (
    numeroPessoaAgencia.value &&
    nomeAgencia.value &&
    nomePessoaAgencia.value
  ) {
    var formulario = $("#meuForm");
    // adiciona um evento de envio ao formulário
    formulario.submit(function (event) {
      // previne o comportamento padrão do formulário, que é recarregar a página
      event.preventDefault();
      // pega os dados do formulário em formato JSON
      var dados = formulario.serialize();
      // faz uma requisição AJAX para o Formspree usando o método POST
      $.ajax({
        url: formulario.attr("action"), // pega a URL do Formspree do atributo action do formulário
        method: "POST",
        data: dados,
        dataType: "json",
        success: function () {
          // se a requisição for bem sucedida, mostra uma mensagem de confirmação
          bunnerEstadoAg.classList.remove("sai-estado-formm-priv");
          bunnerEstadoAg.children[0].innerHTML = mensagemTudoAG;
          bunnerEstadoAg.style.backgroundColor = "rgba(211, 226, 211, 0.9)";
          setTimeout(() => {
            adicionaEmSegundos(bunnerEstadoAg);
          }, 8000);
          // limpa os campos do formulário
          formulario[0].reset();
        },
        error: function () {
          // se a requisição falhar, mostra uma mensagem de erro"
          alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
        },
      });
    });
  } else {
    var formularioteste = document.querySelector("#form2");
    formularioteste.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    bunnerEstadoAg.classList.remove("sai-estado-formm-priv");
    bunnerEstadoAg.children[0].innerHTML = mensagemFaltouForm;
    bunnerEstadoAg.style.backgroundColor = "rgba(204, 165, 165, 0.9)";
  }
});

function adicionaEmSegundos(element) {
  element.classList.add("sai-estado-formm-priv");
}
