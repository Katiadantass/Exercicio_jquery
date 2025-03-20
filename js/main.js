$(document).ready(function () {
    // Inicializa o carrossel com a biblioteca slick
    $('#carousel-imagens').slick({
        autoplay: true, // Ativa o autoplay para as imagens
        arrows: false // Desativa as setas de navegação
    });

    // Aplica máscaras aos campos do formulário para garantir o formato correto dos dados
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(DDD) 12345-6789' }); // Máscara para telefone
    $('#cpf').mask('000.000.000-00', { placeholder: '123.456.789-00' }); // Máscara para CPF
    $('#cep').mask('000000-000', { placeholder: '012345-678' }); // Máscara para CEP

    // Validação do formulário com regras específicas para cada campo
    $('form').validate ({
        rules: {
            nome: { required: true }, // Nome é obrigatório
            email: { required: true, email: true}, // E-mail obrigatório e deve estar no formato correto 
            telefone: { required: true }, // Telefone obrigatório 
            cpf: { required: true }, // CPF obrigatório
            endereco: { required: true}, // Endereço obrigatório
            cep: { required: true} // CEP obrigatório
        },
        messages : {
            nome: 'Por favor, insira seu nome', // Mensagem de erro para nome
            email: 'Por favor, insira um e-mail válido', // Mensagem de erro para e-mail
            telefone: 'Por favor, insira seu telefone', // Mensagem de erro para telefone
            cpf: 'Por favor, insira seu CPF', // Mensagem de erro para CPF
            endereco: 'Por favor, insira seu endereço completo', // Mensagem de erro para endereço
            cep: 'Por favor, insira seu CEP' // Mensagem de erro para CEP
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!'); // Exibe mensagem de sucesso
            form.reset(); // Reseta o formulário corretamente
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids(); // Obtém o número de campos inválidos
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`); // Exibe alerta com a quantidade de erros
        }
    }
    });
});