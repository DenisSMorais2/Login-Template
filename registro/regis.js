        // função para validar o email
        function validarEmail(email) {
            // Expressão regular para validar o email
            var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
          }
        
          // função para validar o formulário
          function validarFormulario() {
            // Captura o valor dos campos de email e senha
            var email = document.getElementsByName("email")[2].value;
            var senha = document.getElementsByName("password")[3].value;
        
            // Verifica se o email é válido
            if (!validarEmail(email)) {
              alert("Por favor, insira um email válido.");
              return false;
            }
        
            // Verifica se a senha tem mais de 8 caracteres
            if (senha.length >=8 && senha.length>=16) {
              alert("A senha deve ter no mininmo 8 e no máximo 16 caracteres.");
              return false;
            }
        
            // Caso tudo esteja correto, o formulário é enviado
            return true;
          }
        
          // adiciona o evento de clique no botão de login
          var botaoLogin = document.querySelector(".btn-login");
          botaoLogin.addEventListener("click", function(evento) {
            evento.preventDefault(); // evita o comportamento padrão do botão
            validarFormulario(); // chama a função de validação do formulário
          });    