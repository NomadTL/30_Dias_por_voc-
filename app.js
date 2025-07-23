function carregarObjetivos() {
  const objetivos = JSON.parse(localStorage.getItem("objetivos")) || [];
  const lista = document.getElementById("listaObjetivos");

  lista.innerHTML = "";
  objetivos.forEach((obj) => {
    const li = document.createElement("li");
    li.textContent = obj;
    lista.appendChild(li);
  });

  if (objetivos.length >= 5) {
    document.getElementById("btnAdicionar").disabled = true;
  }
}

function adicionarObjetivo() {
  const input = document.getElementById("inputObjetivo");
  const texto = input.value.trim();
  if (texto === "") return;

  let objetivos = JSON.parse(localStorage.getItem("objetivos")) || [];
  if (objetivos.length >= 5) return;

  objetivos.push(texto);
  localStorage.setItem("objetivos", JSON.stringify(objetivos));
  input.value = "";
  carregarObjetivos();
}

window.onload = function () {
  const nomeSalvo = localStorage.getItem("nomeUsuario");
  const nomeNoCanto = document.getElementById("userNameCorner");

  if (nomeSalvo) {
    nomeNoCanto.textContent = nomeSalvo;
    nomeNoCanto.style.display = "block";
    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("telaObjetivos").style.display = "flex";

    carregarObjetivos();
  }
};
