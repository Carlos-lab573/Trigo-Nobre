
function mostrarCategoria(categoria) {
  const categorias = document.querySelectorAll('.produtos');
  categorias.forEach(cat => cat.style.display = 'none');
  document.getElementById(categoria).style.display = 'grid';
}

let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
  const existente = carrinho.find(item => item.nome === produto);
  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({ nome: produto, preco, quantidade: 1 });
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById('itens-carrinho');
  container.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const linha = document.createElement('p');
    linha.textContent = `${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
    container.appendChild(linha);
    total += item.preco * item.quantidade;
  });

  if (carrinho.length === 0) {
    container.innerHTML = '<p>Você ainda não adicionou produtos.</p>';
  }

  document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
