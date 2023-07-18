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

      localStorage.removeItem("nome");
      localStorage.removeItem("atividade");
      localStorage.removeItem("txtFisica");
      localStorage.removeItem("txtEspiritual");
      localStorage.removeItem("txtSocial");
      localStorage.removeItem("txtFinanceira");
      localStorage.removeItem("txtFamiliar");
      localStorage.removeItem("txtEcologica");
      localStorage.removeItem("txtIntelectual");
      localStorage.removeItem("txtProfissional");
      localStorage.removeItem("txt1");
      localStorage.removeItem("txt2");
      localStorage.removeItem("txt3");
      localStorage.removeItem("txt4");
      localStorage.removeItem("txt5");
      localStorage.removeItem("txt6");
      localStorage.removeItem("txt7");
      localStorage.removeItem("txt8");

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
      localStorage.removeItem("nome");
      localStorage.removeItem("atividade");
      localStorage.removeItem("txtFisica");
      localStorage.removeItem("txtEspiritual");
      localStorage.removeItem("txtSocial");
      localStorage.removeItem("txtFinanceira");
      localStorage.removeItem("txtFamiliar");
      localStorage.removeItem("txtEcologica");
      localStorage.removeItem("txtIntelectual");
      localStorage.removeItem("txtProfissional");
      localStorage.removeItem("txt1");
      localStorage.removeItem("txt2");
      localStorage.removeItem("txt3");
      localStorage.removeItem("txt4");
      localStorage.removeItem("txt5");
      localStorage.removeItem("txt6");
      localStorage.removeItem("txt7");
      localStorage.removeItem("txt8");

    } else {
      swal("A sessão não foi encerrada!");
    }
    window.onload() 
  });
}