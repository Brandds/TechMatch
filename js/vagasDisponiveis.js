let params = new URLSearchParams(location.search);
let id = params.get("id");
let namee = document.getElementById("a-Carrossel");
let aPerfil = document.getElementById("a-Perfil");
let aForum = document.getElementById("a-Forum");
aForum.href = `Forum.html?id=${id}`;
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
namee.href = `carrossel.html?id=${id}`;
URLVagas =
  "https://824f0b64-78bc-4944-b935-0f7db8d53d61-00-2od22dn2afmgx.kirk.replit.dev/vagas";

let URLuser =
  "https://824f0b64-78bc-4944-b935-0f7db8d53d61-00-2od22dn2afmgx.kirk.replit.dev/usuarios";
let dadosUser = [];

fetch(URLuser)
  .then((response) => response.json())
  .then((data) => {
    dadosUser.push(data);
  });

function carregarVagas() {
  let divVaga = document.getElementById("job-list");
  let strVaga = "";
  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;

      cont = 0;
      for (let i = 0; i < vagas.length; i++) {
        if (vagas[i].status) {
          if (cont % 3 === 0) {
            strVaga += `<div class="row justify-content-center">`;
          }
          strVaga += `
                            <div class="col-sm-12 col-md-3 mb-4 px-3">
                                <div class="card job-card">
                                    <div class="card-body d-flex flex-column align-items-center justify-content-center p-3">
                                        <h3 class="card-title mb-3">${vagas[i].nomeVaga}</h3>
                                        <span class="card-text">${vagas[i].nomeVaga}</span>
                                        <span class="card-text">${vagas[i].filtro}</span>
                                        <a onclick="getVaga(${i});" class="btn btn-light btn-sm m-3" data-bs-toggle="modal" data-bs-target="#vaga-modal">Saber Mais</a>
                                    </div>
                                </div>
                            </div>
                `;
          if ((cont + 1) % 3 === 0 || cont + 1 === vagas.length) {
            strVaga += "</div>";
          }
          cont++;
        }
      }

      divVaga.innerHTML = strVaga;
    });
}

function getVaga(id) {
  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;
      vaga = vagas[id];

      const modalBody = document.getElementById("vagaModalBody");
      modalBody.innerHTML = `
          <h5>${vaga.nomeVaga} - ${vaga.nomeVaga}</h5>
          <p>${vaga.filtro}</p>
          <p>${vaga.descricao}</p>
          <h5>Contato</h5>
          <strong>E-mail:</strong> <p class="d-inline">${dadosUser[0][2].email}</p><br>
          <strong>Telefone:</strong> <p class="d-inline">${dadosUser[0][1].telefone}</p>
          
        `;
    });
}

carregarVagas();
