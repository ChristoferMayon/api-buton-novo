function enviarMensagem() {
  const numero = document.getElementById("numero").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const tituloBotao = document.getElementById("tituloBotao").value.trim();
  const linkBotao = document.getElementById("linkBotao").value.trim();
  const log = document.getElementById("log");

  if (!numero || !mensagem || !tituloBotao || !linkBotao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  fetch('/api/enviar-mensagem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numero, mensagem, tituloBotao, linkBotao })
  })
  .then(res => res.json())
  .then(data => {
    log.innerText = "✅ Resposta do servidor:\n" + JSON.stringify(data, null, 2);
  })
  .catch(err => {
    log.innerText = "❌ Erro na requisição: " + err.message;
  });
}

