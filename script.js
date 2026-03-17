const form = document.getElementById('form-cadastro');
const listaUl = document.getElementById('lista-clientes');

form.addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria um novo item de lista (li)
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${email}`;

    // Adiciona o item à lista na tela
    listaUl.appendChild(novoItem);

    // Limpa o formulário para o próximo cadastro
    form.reset();
});
