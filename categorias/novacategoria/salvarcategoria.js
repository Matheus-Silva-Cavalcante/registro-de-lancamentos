let categorias = localStorage.categorias ? JSON.parse(localStorage.categorias) : [];

function salvarCategoria() {
    localStorage.setItem('categorias', JSON.stringify(categorias));
};
