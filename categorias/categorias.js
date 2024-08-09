const areaConteudoCategoria = document.querySelector('.area-conteudo')

// function exibiCategorias(categoria) {
//     const divCategorias = document.createElement('div');
//     divCategorias.classList.add('area-conteudo__categoria');
//     divCategorias.style.background = categoria.cor;
//     divCategorias.style.color = categoria.corFonte;
//     divCategorias.innerHTML = `
//         <div class="categoria">
//             ${categoria.categoria}
            
//             <div class="categoria__color"></div>
//         </div>

//         <div class="categoria-editar__excluir">
//             <button class="categoria-editar btn-editar__excluir">
//                 <div class="icon-editor"></div>
//             </button>

//             <button class="categoria-excluir btn-editar__excluir">
//                 <div class="icon-white"></div>
//             </button>
//         </div>
//     `

//     return divCategorias;
// };

function exibiCategorias(categoria) {
    //debugger
    console.log(categoria)
    let opacity = 80; // hex
    const divAreaCategorias = document.createElement('div');
    divAreaCategorias.classList.add('area-conteudo__categoria');
    
    const divCategoria = document.createElement('div');
    divCategoria.classList.add('categoria');
    divCategoria.style.background = (categoria.cor + opacity);
    divCategoria.style.color = categoria.corFonte;
    
    divCategoria.innerHTML = `
        ${categoria.categoria}                
    `    
    
    const divCategoriaCor = document.createElement('div');
    divCategoriaCor.classList.add('categoria__color');

    divCategoria.append(divCategoriaCor);
    
    divCategoriaCor.style.background = categoria.cor;
    divCategoriaCor.style.color = categoria.corFonte;    
    
    const divContainerButton = document.createElement('div');
    divContainerButton.classList.add('categoria-editar__excluir');
    divContainerButton.style.display = 'none';
    
    divContainerButton.innerHTML = `
        <button class="categoria-editar btn-editar__excluir">
            <div class="icon-editor"></div>
        </button>
        
        <button id="btnExcluirCategoria" class="categoria-excluir btn-editar__excluir">
            <div class="icon-white"></div>
        </button>
    `;

    // divAreaCategorias.innerHTML =`
    //     <div class="categoria-editar__excluir" style="display: none;">
    //         <button class="categoria-editar btn-editar__excluir">
    //             <div class="icon-editor"></div>
    //         </button>
            
    //         <button id="btnExcluirCategoria" class="categoria-excluir btn-editar__excluir">
    //             <div class="icon-white"></div>
    //         </button>
    //     </div>
    // `;

    divAreaCategorias.prepend(divCategoria);
    divAreaCategorias.append(divContainerButton);

    divCategoria.onclick = () => {
        const contemClass = divCategoria.classList.contains('categoria-ativo');
        const categoriaAtiva = document.querySelectorAll('.categoria-ativo');

        categoriaAtiva.forEach(elemento => {
            elemento.classList.remove('categoria-ativo');
            elemento.nextElementSibling.style.display = 'none'
        });
        
        if (contemClass) {
            divContainerButton.style.display = 'none';
            divCategoria.classList.remove('categoria-ativo');
        } else {
            divCategoria.classList.add('categoria-ativo');
            divContainerButton.style.display = '';
        }
        //debugger
        // const contemClass = divCategoria.classList.contains('categoria-ativo');
        // const categoriaAtiva = document.querySelectorAll('.categoria-ativo');

        // categoriaAtiva.forEach(elemento => {
        //     elemento.classList.remove('categoria-ativo');
        // });
        
        // if (contemClass) {
        //     //debugger
        //     divContainerButton.style.display = 'none';
        //     return
        // }

        // divCategoria.classList.add('categoria-ativo');

        // divContainerButton.style.display = '';
    } 

    const btnExcluirCategoria = divContainerButton.querySelector('#btnExcluirCategoria');
    btnExcluirCategoria.onclick = () => {
        divAreaCategorias.remove();
    };

    return divAreaCategorias;
};

categorias.forEach(categoria => {
    const categoriaGerada = exibiCategorias(categoria);
    areaConteudoCategoria.append(categoriaGerada);
});
