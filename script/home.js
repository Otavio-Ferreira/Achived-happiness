function callAlertName(){
  
  var validador = localStorage.getItem('atividade')

  if(validador == 1){
    swal("Continuar!");
  }
  else{
    swal("Olá! Seja bem vindo ao Achived Happiness", "Para uma melhor experiência nos diga seu nome:", "imgs/logo.png",{
    content: "input",
    })
    .then((value) => {
      var id = value.trim();
      if(id.length == 0){
        window.onload()
      }
      else{
        localStorage.setItem("nome", value)
        localStorage.setItem("atividade", 1)
        swal({
          title: "Muito bem!",
          text: "Aproveite nossas funcionalidades!",
          icon: "success",
          button: "Continuar",
        })
      }
    })
  }
}