function cadastrarColaborador() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cargo = document.getElementById("cargo").value;
    var nivel = document.getElementById("nivel").value;

    if (nome && email && cargo && nivel) {
        var tabela = document.getElementById("tabelaColaboradores").getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow();

        var celNome = novaLinha.insertCell(0);
        var celEmail = novaLinha.insertCell(1);
        var celCargo = novaLinha.insertCell(2);
        var celNivel = novaLinha.insertCell(3);

        celNome.innerHTML = nome;
        celEmail.innerHTML = email;
        celCargo.innerHTML = cargo;
        celNivel.innerHTML = nivel;

        // Exibir mensagem de sucesso
        alert("Colaborador cadastrado com sucesso!");

        // Limpar os campos do formulário
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("nivel").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
