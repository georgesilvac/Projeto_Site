const imagens = document.querySelectorAll('.imagens-soltas-trabalhos img');
const modal = document.getElementById('myModal');
const img01 = document.getElementById('img01');
const close = document.querySelector('.close');

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        modal.style.display = 'block';
        img01.src = imagem.dataset.image; // Use o atributo data-image para obter a URL da imagem
        img01.classList.add('zoom'); // Adiciona uma classe para o efeito de zoom
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    img01.classList.remove('zoom'); // Remove a classe de zoom
});

console.log(imagens)