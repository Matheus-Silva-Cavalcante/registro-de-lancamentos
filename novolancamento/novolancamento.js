const btnSalvarLancamento = document.querySelector('.btn-salvar-lancamento');

btnSalvarLancamento.addEventListener('click', () => {
    let categoriaNovoLacamento = categorias[categoriaLancamento.value];    

    console.log(categorias[categoriaLancamento.value] )

    const lancamento = {
        descricao: descricaoLancamento.value,
        valor: valorLancamento.value,
        tipo: tipoLancamento.value,
        categoria: categoriaNovoLacamento,
        data: dataLancamento.value
    };
       
    
    let campoVazio = false;

    if (lancamento.descricao.length === 0) {
        inputDescricaoVasio.style.display = '';
        descricaoLancamento.classList.add('erro');
        campoVazio = true;
    } else{
        inputDescricaoVasio.style.display = 'none';
        descricaoLancamento.classList.remove('erro');
    };

    if (lancamento.valor.length === 0) {
        inputValorVasio.style.display = '';
        valorLancamento.classList.add('erro');
        campoVazio = true;
    } else {
        inputValorVasio.style.display = 'none';
        valorLancamento.classList.remove('erro');
    };

    // if (lancamento.categoria.length === 0) {
    //     selectCategoriaVasia.style.display = '';
    //     categoriaLancamento.classList.add('erro');
    //     campoVazio = true;
    // } else {
    //     selectCategoriaVasia.style.display = 'none';
    //     categoriaLancamento.classList.remove('erro');
    // };

    if (lancamento.data.length === 0) {
        inputDataVasio.style.display = '';
        dataLancamento.classList.add('erro');
        campoVazio = true;
    } else{
        inputDataVasio.style.display = 'none';
        dataLancamento.classList.remove('erro');
    };

    if (campoVazio) return;   

    lancamentos.push(lancamento);
    salvarLacamento();
    history.back();
});

console.log(categorias);

function exibiCategoriasCriada(categoria, index) {
    console.log(index);
    let opacity = 80;
    const optionCategoria = document.createElement('option');

    optionCategoria.style.background = (categoria.cor + opacity);
    optionCategoria.style.color = categoria.corFonte;
    optionCategoria.setAttribute('value', index);

    optionCategoria.innerHTML = `
        ${categoria.categoria}
    `

    return optionCategoria;
}

categorias.forEach((categoria,index) => {
    const mostrarCategoriLacamento = exibiCategoriasCriada(categoria, index);
    categoriaLancamento.append(mostrarCategoriLacamento);
    console.log(categoria);
});