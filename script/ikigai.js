function callIki(){
  var nome = localStorage.getItem("nome")
  var validador = localStorage.getItem('atividade')

  if(validador == 1){
    swal(`Olá ${nome}! tudo bem?`, "Comece agora a responder um questionário e no final obtenha o seu Ikigai", "../imgs/car3.png")
    .then(() => {
      swal("Antes de começar","Ikigai é uma palavra japonesa que significa 'razão de viver', 'objeto de prazer para viver' ou 'força motriz para viver'. Existem várias teorias sobre essa etimologia. De acordo com os japoneses, todos têm um ikigai. E descobrir qual é o seu requer uma profunda e, muitas vezes, extensa busca de si mesmo.", "../imgs/car3.png");
    });
  }
  else{
    swal({
      title: "ERRO!",
      text: "Para ter acesso as nossas funcionalidades é necessário informar o nome!",
      icon: "warning",
      button: "Ok",
    })
    .then(() => {
      window.location = "../index.html"
    })
  }

  document.getElementById('txt1').value = localStorage.getItem("txt1")
  document.getElementById('txt2').value = localStorage.getItem("txt2")
  document.getElementById('txt3').value = localStorage.getItem("txt3")
  document.getElementById('txt4').value = localStorage.getItem("txt4")
  document.getElementById('txt5').value = localStorage.getItem("txt5")
  document.getElementById('txt6').value = localStorage.getItem("txt6")
  document.getElementById('txt7').value = localStorage.getItem("txt7")
  document.getElementById('txt8').value = localStorage.getItem("txt8")
}

function sendAnswersIki(){
  var txt1 = document.getElementById('txt1').value
  var txt2 = document.getElementById('txt2').value
  var txt3 = document.getElementById('txt3').value
  var txt4 = document.getElementById('txt4').value
  var txt5 = document.getElementById('txt5').value
  var txt6 = document.getElementById('txt6').value
  var txt7 = document.getElementById('txt7').value
  var txt8 = document.getElementById('txt8').value

  localStorage.setItem("txt1", txt1)
  localStorage.setItem("txt2", txt2)
  localStorage.setItem("txt3", txt3)
  localStorage.setItem("txt4", txt4)
  localStorage.setItem("txt5", txt5)
  localStorage.setItem("txt6", txt6)
  localStorage.setItem("txt7", txt7)
  localStorage.setItem("txt8", txt8)

  if(txt1 == "" || txt2 == "" || txt3 == "" || txt4 == "" || txt5 == "" || txt6 == "" || txt7 == "" || txt8 == ""){
    swal({
      title: "ERRO!",
      text: "Responda todas as perguntas para obter o resultado!",
      icon: "warning",
      button: "Corrigir",
    });
  }
  else{
    window.location = "resultadoIkigai.html"
  }
}

function callAnswersIki(){
  document.getElementById('txtNome').value = localStorage.getItem("nome")
  document.getElementById('txt1').innerText = localStorage.getItem("txt1")
  document.getElementById('txt2').innerText = localStorage.getItem("txt2")
  document.getElementById('txt3').innerText = localStorage.getItem("txt3")
  document.getElementById('txt4').innerText = localStorage.getItem("txt4")
  document.getElementById('txt5').innerText = localStorage.getItem("txt5")
  document.getElementById('txt6').innerText = localStorage.getItem("txt6")
  document.getElementById('txt7').innerText = localStorage.getItem("txt7")
  document.getElementById('txt8').innerText = localStorage.getItem("txt8")
}