function encerrarSessao(){
 
  swal({
    title: "Tem certeza que quer encerrar essa sessão?",
    text: "Você terá que iniciar tudo novamente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Sessão encerrada!", {
        icon: "success",
      });
      localStorage.setItem("nome", "")

    } else {
      swal("A sessão não foi encerrada!");
    }
    window.location = `../index.html`
  });
}

function encerrarSessaoHome(){
 
  swal({
    title: "Tem certeza que quer encerrar essa sessão?",
    text: "Você terá que iniciar tudo novamente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Sessão encerrada!", {
        icon: "success",
      });
      localStorage.setItem("nome", "")

    } else {
      swal("A sessão não foi encerrada!");
    }
    window.onload() 
  });
}