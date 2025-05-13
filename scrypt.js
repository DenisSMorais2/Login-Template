// Função para validar o email usando expressão regular
function validarEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Função para validar o formulário
function validarFormulario() {
  var email = document.getElementsByName("email")[0].value.trim();
  var senha = document.getElementsByName("password")[0].value;

  if (!validarEmail(email)) {
      alert("Por favor, insira um email válido.");
      return false;
  }

  if (senha.length < 8 || senha.length > 16) {
      alert("A senha deve ter no mínimo 8 e no máximo 16 caracteres.");
      return false;
  }

  // Se tudo estiver correto, redireciona
  window.location.href = 'principal/tarefa.html';
  return true;
}

// Adiciona evento ao botão de login
var botaoLogin = document.querySelector(".btn-login");
botaoLogin.addEventListener("click", function(evento) {
  evento.preventDefault(); // Evita o comportamento padrão do botão
  validarFormulario();
});
