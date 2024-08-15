const btnSalvarLancamento = document.querySelector('.btn-salvar-lancamento');

btnSalvarLancamento?.addEventListener('click', () => {
    let categoriaNovoLacamento = categorias[categoriaLancamento.value]; 

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

    if (lancamento.data.length === 0) {
        inputDataVasio.style.display = '';
        dataLancamento.classList.add('erro');
        campoVazio = true;
    } else{
        inputDataVasio.style.display = 'none';
        dataLancamento.classList.remove('erro');
    };

    if (campoVazio) return;   

    const indexLancamentoEditar = localStorage.getItem('lancamentoEditarIndex');

    if (indexLancamentoEditar !== null) {
        lancamentos[indexLancamentoEditar] = lancamento;
        localStorage.removeItem('lancamentoEditarIndex');
    } else {
        lancamentos.push(lancamento);
    }

    salvarLacamento();
    history.back();
});

function exibiCategoriasCriada(categoria, index) {
    let opacity = 80;
    const optionCategoria = document.createElement('option');

    optionCategoria.style.background = (categoria?.cor + opacity);
    optionCategoria.style.color = categoria?.corFonte;
    optionCategoria.setAttribute('value', index);

    optionCategoria.innerHTML = `
        ${categoria?.categoria}
    `

    return optionCategoria;
}

categorias.forEach((categoria,index) => {
    if (!categoria)  return  

    const mostrarCategoriLacamento = exibiCategoriasCriada(categoria, index);
    categoriaLancamento.append(mostrarCategoriLacamento);
});

document.addEventListener('DOMContentLoaded', function (){
    const indexLancamento = localStorage.getItem('lancamentoEditarIndex')
    
    if (indexLancamento !== null) {
        const lancamento = lancamentos[indexLancamento]
        
        document.querySelector('#descricaoLancamento').value = lancamento.descricao
        document.querySelector('#valorLancamento').value = lancamento.valor
        document.querySelector('#tipoLancamento').value = lancamento.tipo
        document.querySelector('#dataLancamento').value = lancamento.data
    }
})