$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
        
    });
        $('.lista-veiculos button').click(function() {
            const destino = $('#contato')
            const nomeVeiculos= $(this).parent().find('h3').text();

            $('#veiculo-interesse').val(nomeVeiculos);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })
});