const sectionLacamentos = document.querySelector('#lancamentos');

function montarLancamento(lancamento, index) {
    let opacity = 80;

    let htmlLancamento = `
        <div id="divContainerLancamento" class="lancamento" onclick="eventoContainerLancamento(this)" data-index="${index}">
            <div class="lancamento-conteudo">
                <div class="lancamento-conteudo__icon ${lancamento.tipo == "entrada" ? "lancamento-conteudo__icon__mais" : "lancamento-conteudo__icon__menos"}">
                    <div class="${lancamento.tipo == "entrada" ? "icon-dinheiro-mais" : "icon-dinheiro-menos"} icon-dinheiro__menos__mais"></div>
                </div>
            </div>

            <div class="informacao">
                <div class="lancamento-conteudo__descricao__valor">
                    <div class="lancamento-conteudo__descricao__data">
                        <div class="lancamento-conteudo__descricao">
                            ${lancamento.descricao}
                        </div>

                        <div class="lancamento-conteudo__data">
                            ${lancamento.data}
                        </div>
                    </div>


                    <div class="lancamento-conteudo__valor">
                        <img src="img/R$.svg">
                        ${lancamento.valor}
                    </div>                    
                </div>

                <div id="lancamentoConteudoCategorias" class="lancamento-conteudo__categoria">
                    <div class="lancamento-conteudo__categorias" 
                        style="background-color: ${lancamento.categoria.cor + opacity}; color: ${lancamento.categoria.corFonte};"
                        >
                            ${lancamento.categoria.categoria}
                        <div class="lancamento-conteudo__categoria__color" style="background: ${lancamento.categoria.cor};"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id='divContainerButton' class="lancamento-conteudo__bnt" style="display: none;">
            <button class="btn-opcao-lancamento btn-editar" data-index="${index}">
                <div class="icon-editor"></div>
            </button>

            <button class="btn-opcao-lancamento btn-lixeira" onclick="eventoExcluirLancamento(this)" data-index="${index}">
                <div class="icon-white"></div>
            </button>
        </div>`;


        let divLancamento = document.createElement('div');
        divLancamento.classList.add('divlancamento');
        
        divLancamento.innerHTML = htmlLancamento;

        return divLancamento;
};


lancamentos.forEach((lancamento, index) => {
    sectionLacamentos.prepend(montarLancamento(lancamento, index));
});


function buscarLancamento(buscarLacamento) {
    //debugger
    document.querySelectorAll('.divlancamento').forEach(elemento => {
        //debugger
        const lancamento = elemento.innerHTML.toLowerCase();

        if (lancamento.indexOf(buscarLacamento.toLowerCase()) > -1) {
            elemento.style.display = '';
        } else {
            elemento.style.display = 'none';
        }
    })
}

btnBuscarLancamento.addEventListener('click', () => {
    //alert()
    buscarLancamento(campoBusca.value);
})


function eventoContainerLancamento(element){     
    let botoesControle = element.parentElement.getElementsByClassName('lancamento-conteudo__bnt')[0];
    
    const lancamentoSelecionado = element.classList.contains('lancamento-ativo');
    const lancamentoAtivo = document.querySelectorAll('.lancamento-ativo');

    if(lancamentoSelecionado){
        element.classList.remove('lancamento-ativo');
        botoesControle.style.display = 'none'

    } else {
        if (lancamentoAtivo.length) {
            lancamentoAtivo.forEach(function(item){
                item.classList.remove('lancamento-ativo')
                 item.parentElement.getElementsByClassName('lancamento-conteudo__bnt')[0].style.display = 'none';
            });

            element.classList.add('lancamento-ativo');
            botoesControle.style.display = ''

        } else {
            element.classList.add('lancamento-ativo');
            botoesControle.style.display = ''
        };    
    }
}

function eventoExcluirLancamento(elemento){
    console.log(elemento.getAttribute('data-index'));
    elemento.getAttribute('data-index')

}