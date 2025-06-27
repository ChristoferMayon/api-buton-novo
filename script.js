
const instanceId = "3E35940B51C1C013896CD24EFB273D33";
const instanceToken = "EBD857C4A382BEE196399FA6";
const numero = "5541995810993";

function enviarMensagem() {
  const mensagem = document.getElementById("mensagem").value;
  const log = document.getElementById("log");

  const payload = {
    phone: numero,
    message: mensagem,
    buttonActions: [
      {
        id: "1",
        type: "URL",
        url: "https://seusite.com",
        label: "Visitar Site"
      },
      {
        id: "2",
        type: "CALL",
        phone: "5541999999999",
        label: "Ligar Agora"
      }
    ]
  };

  fetch(`https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/send-button-actions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    log.innerText = "✅ Mensagem enviada com sucesso:\n" + JSON.stringify(data, null, 2);
  })
  .catch(error => {
    log.innerText = "❌ Erro ao enviar: " + error.message;
  });
}
