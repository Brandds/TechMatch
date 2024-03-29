URL =
  "https://824f0b64-78bc-4944-b935-0f7db8d53d61-00-2od22dn2afmgx.kirk.replit.dev/usuarios";
let mensagerSucc = document.getElementById("mensagerSucc");
mensagerSucc.style.display = "none";
mensagerSucc.style.color = "green";
let mensagerErr = document.getElementById("mensagerErr");
mensagerErr.style.color = "red";
mensagerErr.style.display = "none";
let iconSucc = document.querySelector(".loader");
iconSucc.style.display = "none";

let form = document.getElementById("form");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  let userName = document.getElementById("userName").value;
  let userSenha = document.getElementById("userSenha").value;

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let qtt = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].login == userName && data[i].senha === userSenha) {
          let campoName = document.getElementById("userName");
          let bordDiv = document.getElementById("wrapper");
          let campoSenha = document.getElementById("userSenha");
          bordDiv.style.borderColor = "green";
          mensagerSucc.style.display = "block";
          campoName.style.borderColor = "green";
          campoSenha.style.borderColor = "green";
          campoSenha.style.color = "green";
          campoName.style.color = "green";
          iconSucc.style.display = "block";

          console.log("Usuario nao encontrado ");

          setTimeout(() => {
            bordDiv.style.borderColor = "";
            mensagerSucc.style.display = "none";
            campoName.style.borderColor = "";
            campoSenha.style.borderColor = "";
            campoName.value = "";
            campoSenha.value = "";
            iconSucc.style.display = "none";
            window.location.href = `./carrossel.html?id=${encodeURIComponent(
              i
            )}`;
          }, 4000);
          break;
        }
        qtt++;
        if (qtt == data.length) {
          let campoName = document.getElementById("userName");
          let campoSenha = document.getElementById("userSenha");
          let bordDiv = document.getElementById("wrapper");

          bordDiv.style.borderColor = "red";
          mensagerErr.style.display = "block";
          campoName.style.borderColor = "red";
          campoSenha.style.borderColor = "red";
          campoSenha.style.color = "red";
          campoName.style.color = "red";

          console.log("Usuario nao encontrado ");

          setTimeout(() => {
            bordDiv.style.borderColor = "";
            mensagerErr.style.display = "none";
            campoName.style.borderColor = "";
            campoSenha.style.borderColor = "";
            campoName.value = "";
            campoSenha.value = "";
          }, 2000);
        }
      }
    });
});

function validarNome() {
  var nome = document.getElementById("userName").value;

  if (nome.trim() === "") {
    document.getElementById("erroNome").innerHTML =
      "Por favor, informe o nome.";
  } else {
    document.getElementById("erroNome").innerHTML = "";
  }
}

function validarSenha() {
  var senha = document.getElementById("userSenha").value;

  if (senha.trim() === "") {
    document.getElementById("erroSenha").innerHTML =
      "Por favor, informe a senha.";
  } else {
    document.getElementById("erroSenha").innerHTML = "";
  }
}
