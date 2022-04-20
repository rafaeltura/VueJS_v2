let vue_lanche = new Vue(
    {
        el: app,
        data: {
            tipoPao: 'gergelim',
            saladas: ['alface'],
            molhos: ['ketchup', 'mostarda', 'maionese'],
            tipoHamburguer: 'bovino',
            etapa: 1,
            nome: '',
            endereco: '',
            novoPedidoAutomatico: _ => setTimeout(() => {
                vue_lanche.novoPedido();
            }, 7000)
        },
        methods: {
            fazerPedido () {
                if(this.tipoPao && this.tipoHamburguer){
                    this.etapa = 2;
                    return;
                }
                alert('Você precisa selecionar um tipo de pão e um tipo de hamburguer!');
            },
            confirmarPedido () {
                if( this.nome.trim() && this.endereco.trim() ){
                    this.etapa = 3;
                    this.novoPedidoAutomatico()
                    return;
                }
                alert('Você precisa informar seu nome e endereço!');
            },
            novoPedido () {
                this.etapa = 1;
                this.resetarForm();
            },
            resetarForm () {
                this.tipoPao = 'gergelim';
                this.saladas = ['alface'];
                this.molhos = ['ketchup', 'mostarda', 'maionese'];
                this.tipoHamburguer = 'bovino';
                this.etapa = 1;
                this.nome = '';
                this.endereco = '';
            },
        },
        computed: {
            pao () {
                switch(this.tipoPao){
                    case 'australiano':
                        return ['./imagens/pao_australiano_superior.png', './imagens/pao_australiano_inferior.png'];
                    case 'gergelim':
                        return ['./imagens/pao_gergelim_superior.png', './imagens/pao_gergelim_inferior.png'];
                    default:
                        return ['./imagens/padrao/pao_superior.png', './imagens/padrao/pao_inferior.png'];
                }
            },
            alface () {
                if ( this.saladas.includes('alface') ) {
                    return './imagens/alface.png';
                }
                return './imagens/padrao/alface.png';
            },
            ketchup () {
                if ( this.molhos.includes('ketchup') ) {
                    return './imagens/ketchup.png';
                }
                return './imagens/padrao/molho.png';
            },
            mostarda () {
                if ( this.molhos.includes('mostarda') ) {
                    return './imagens/mostarda.png';
                }
                return './imagens/padrao/molho.png';
            },
            maionese () {
                if ( this.molhos.includes('maionese') ) {
                    return './imagens/maionese.png';
                }
                return './imagens/padrao/molho.png';
            },
            hamburguer () {
                switch(this.tipoHamburguer){
                    case 'bovino':
                        return './imagens/bovino.png';
                    case 'frango':
                        return './imagens/frango.png';
                    case 'soja':
                        return './imagens/soja.png';
                    default:
                        return './imagens/padrao/hamburguer.png';
                }
            }
        }
    }
)