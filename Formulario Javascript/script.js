const uid = document.getElementById("uid");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const nasc = document.getElementById("nasc");
const lic = document.getElementById("lic");
const idade = document.getElementById("idade");

pwd2.addEventListener("input", function () {
  validate(pwd2);
});

pwd.addEventListener('invalid', function () {
  msgPwd();
});

tel.addEventListener('input', function () {
    maskTel();
  });
  
function maskTel() {
    let strTel = tel.value.replace(/\D/g, '');
    if (strTel.length === 0) {
      tel.value = '';
      return;
    }
  
    if (strTel.length <= 2) {
      tel.value = "(" + strTel;
    } else if (strTel.length <= 6) {
      tel.value = "(" + strTel.substring(0, 2) + ") " + strTel.substring(2);
    } else if (strTel.length <= 10) {
      tel.value = "(" + strTel.substring(0, 2) + ") " + strTel.substring(2, 6) + "-" + strTel.substring(6);
    } else if (strTel.length <= 11) {
      tel.value = "(" + strTel.substring(0, 2) + ") " + strTel.substring(2, 7) + "-" + strTel.substring(7);
    } else {
      tel.value = "(" + strTel.substring(0, 2) + ") " + strTel.substring(2, 7) + "-" + strTel.substring(7, 11);
    }
  }

function validate(item) {
  item.setCustomValidity('');
  item.checkValidity();

  if (item === pwd2) {
    if (item.value === pwd.value) {
      item.setCustomValidity('');
    } else {
      item.setCustomValidity('EAI, As Senhas Precisam Ser Identicas');
    }
  }
}

function msgPwd() {
  if (pwd.value === '') {
    pwd.setCustomValidity('OI, Isso Aqui Não Pode Ficar Em Branco');
  } else {
    pwd.setCustomValidity('A senha precisa ter no mínimo 6 caracteres');
  }
}

cpf.addEventListener('input', function () {
  maskCPF();
});

function maskCPF() {
  let strCPF = cpf.value.replace(/\D/g,''); 
  if (strCPF.length < 4) {
    cpf.value = strCPF;
  } else if (strCPF.length < 7) {
    cpf.value = strCPF.substring(0, 3) + '.' + strCPF.substring(3);
  } else if (strCPF.length < 10) {
    cpf.value = strCPF.substring(0, 3) + '.' + strCPF.substring(3, 6) + '.' + strCPF.substring(6);
  } else {
    cpf.value = strCPF.substring(0, 3) + '.' + strCPF.substring(3, 6) + '.' + strCPF.substring(6, 9) + '-' + strCPF.substring(9);
  }
}

nasc.addEventListener('input', function () {
  calcularIdade();
});

function calcularIdade() {
  const dataNasc = new Date(nasc.value);
  const hoje = new Date();
  let idadeCalculada = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNasc = dataNasc.getMonth();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
    idadeCalculada--;
  }

  if (idadeCalculada < 10 || idadeCalculada > 110) {
    idade.value = "Idade inválida";
    idade.setCustomValidity("Idade inválida")
  } else {
    idade.value = idadeCalculada;
    idade.setCustomValidity("")
  }
}
