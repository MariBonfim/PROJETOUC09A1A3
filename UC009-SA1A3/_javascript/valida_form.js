//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validaUsuarioSenha() {
    var vUsuario = document.getElementById("login").value;
    var vSenha = document.getElementById("senha").value;
    var vValoresValidos = '{"user":"Usuario","pass":"Abc$123"}';

    var objJs = JSON.parse(vValoresValidos);

    if(vUsuario==objJs.user && vSenha==objJs.pass){
        document.getElementById("butassin").disabled = false;
        return true;
    } else {
        alert("Usuario ou senha invalidos. Usuario / Abc$123");
        return false;
    }
}

function habilitaAssinar() {
    if(validaUsuarioSenha()) {
        var vBotaoAssinar = document.getElementById("butassin");
        vBotaoAssinar.disable = false;
    }
}

