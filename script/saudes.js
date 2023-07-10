function callInformation(){
  var nome = localStorage.getItem("nome")

  swal(`Olá ${nome}! tudo bem?`, "Comece agora a responder um questionário sobre saúdes e no final obtenha um resultado de como melhorar a sua saúde em diversas áreas", "../imgs/saudes.png")
  .then(() => {
    swal("Antes de começar","Buscando o verbete  saúde em dicionários, encontramos definições como ' Estado de bem-estar físico, mental e psicológico' e também 'Expressão usada para desejar bem-estar ou felicidade a alguém, geralmente em brindes ou despedidas'. Pensando literalmente nos siginificados dessa palavra, fica mais fácil entender o conceito de 8 saúdes adotado por especialistas em inteligência emocional.Nessa subdivisão, ter saúde não é apenas a ausência de doença. Várias áreas-chave devem ser bem cuidadas para permanecerem saudáveis.", "../imgs/saudes.png");
  });
}

function sendAnswers(){
  var fisica = document.getElementById('txtFisica').value
  var espiritual = document.getElementById('txtEspiritual').value
  var intelectual = document.getElementById('txtIntelectual').value
  var profissional = document.getElementById('txtProfissional').value
  var financeira = document.getElementById('txtFinanceira').value
  var familiar = document.getElementById('txtFamiliar').value
  var social = document.getElementById('txtSocial').value
  var ecologica = document.getElementById('txtEcologica').value

  localStorage.setItem("txtFisica", fisica)
  localStorage.setItem("txtEspiritual", espiritual)
  localStorage.setItem("txtIntelectual", intelectual)
  localStorage.setItem("txtProfissional", profissional)
  localStorage.setItem("txtFinanceira", financeira)
  localStorage.setItem("txtFamiliar", familiar)
  localStorage.setItem("txtSocial", social)
  localStorage.setItem("txtEcologica", ecologica)

  if(fisica == "" || espiritual == "" || intelectual == "" || profissional == "" || financeira == "" || familiar == "" || social == "" || ecologica == ""){
    swal({
      title: "ERRO!",
      text: "Responda todas as perguntas para obter o resultado!",
      icon: "warning",
      button: "Corrigir",
    });
  }
  else{
    window.location = "resultadoSaude.html"
  }
  
}

function callAnswers(){
  document.getElementById('name').value = localStorage.getItem("nome")
  document.getElementById('fisicaRes').innerText = localStorage.getItem("txtFisica")
  document.getElementById('espiritualRes').innerText = localStorage.getItem("txtEspiritual")
  document.getElementById('intelectualRes').innerText = localStorage.getItem("txtIntelectual")
  document.getElementById('profissionalRes').innerText = localStorage.getItem("txtProfissional")
  document.getElementById('financeiraRes').innerText = localStorage.getItem("txtFinanceira")
  document.getElementById('familiarRes').innerText = localStorage.getItem("txtFamiliar")
  document.getElementById('socialRes').innerText = localStorage.getItem("txtSocial")
  document.getElementById('ecologicaRes').innerText = localStorage.getItem("txtEcologica")
}

