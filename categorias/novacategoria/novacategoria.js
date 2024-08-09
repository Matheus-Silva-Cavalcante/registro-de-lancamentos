const btnSalvarNovaCategoria = document.querySelector('.btn-salvar-categoria');

btnSalvarNovaCategoria?.addEventListener('click', () => {

    //const novoId = categorias.length > 0 ? categorias[categorias.length - 1].id + 1 : 1;

    const categoria = {
        //id: novoId,
        categoria:  textoCategoria.value,
        cor: corCategoria.value,
        corFonte: definirCorFonte(corCategoria.value)
    };

    let campoVazio = false

    if (categoria.categoria.length === 0) {
        inputCategoriaVasio.style.display = '';
        textoCategoria.classList.add('erro');
        campoVazio = true
    } else {
        inputCategoriaVasio.style.display = 'none';
        textoCategoria.classList.remove('erro');
    }

    if(campoVazio) return;

    categorias.push(categoria);
    salvarCategoria();
    history.back();    
});

function definirCorFonte(background){
    var hex = background;
    var r, g, b, lum;

    hex = hex.replace('#', '');

    r = parseInt(hex.substr(0, 2), 16);
    g = parseInt(hex.substr(2, 2), 16);
    b = parseInt(hex.substr(4, 2), 16);

    lum = (r * 299 + g * 587 + b * 114) / 1000;

    if (lum > (255 / 2)) {
        return '#000000'
    } else {
        return '#ffffff'
    };
};
