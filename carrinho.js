let carrinho = [];
let total = 0;

function adicionarAoCarrinho() {
    const filmeSelect = document.getElementById("filme");
    const filme = filmeSelect.options[filmeSelect.selectedIndex].text;
    const precoPorDia = parseFloat(filmeSelect.options[filmeSelect.selectedIndex].getAttribute('data-preco'));
    
    const tempo = parseInt(document.getElementById("tempo").value);
    const qualidade = document.getElementById("qualidade").value;

    if (!filme || !tempo || !qualidade) {
        alert("Preencha todos os campos!");
        return;
    }

    const precoTotal = precoPorDia * tempo; // Cálculo com base no número de dias

    const item = {
        filme,
        precoPorDia,
        tempo,
        qualidade,
        precoTotal
    };

    carrinho.push(item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itensCarrinho");
    itensCarrinho.innerHTML = '';

    total = 0;
    
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.filme} - Qualidade: ${item.qualidade} - ${item.tempo} dias - R$ ${item.precoTotal.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        itensCarrinho.appendChild(li);
        total += item.precoTotal;
    });

    document.getElementById('total').innerText = `Total Final: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}