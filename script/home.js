function callAlertName(){
  var validador = localStorage.getItem('nome')

  if(validador.length == 0 || validador == null){
    swal("Olá! Seja bem vindo ao Achived Happiness", "Para uma melhor experiência nos diga seu nome:", "imgs/logo.png",{
    content: "input",
    })
    .then((value) => {
      localStorage.setItem("nome", value)
        swal({
          title: "Muito bem!",
          text: "Aproveite nossas funcionalidades!",
          icon: "success",
          button: "Continuar",
        })
  })
}
}