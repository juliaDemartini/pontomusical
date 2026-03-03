let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('#slides img').length;

// Função para mudar o slide
function moveSlide(direction) {
    currentIndex += direction;

    // Lógica de loop infinito
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();
    resetAutoPlay(); // Reinicia o timer quando o usuário clica manualmente
}

// Atualiza a posição visual
function updateSlidePosition() {
    const offset = currentIndex * 100;
    slides.style.transform = `translateX(-${offset}%)`;
}

// Automação: Passar slide a cada 5 segundos
let autoPlayInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Adiciona um evento de clique ao botão com id "direcionar01"
document.getElementById("direcionar01").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "sobre.php";
});

// Adiciona um evento de clique ao botão com id "direcionar02"
document.getElementById("direcionar02").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "solicitacoes.php";
});

// Adiciona um evento de clique ao botão com id "direcionar04"
document.getElementById("direcionar04").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "listarProjRepro.php";
});

// Adiciona um evento de clique ao botão com id "direcionar05"
document.getElementById("direcionar05").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "gerenciarUsuarios.php";
});

// Adiciona um evento de clique ao botão com id "direcionar01"
document.getElementById("direcionar01").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "sobre.php";
});

// Adiciona um evento de clique ao botão com id "direcionar02"
document.getElementById("direcionar02").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "solicitacoes.php";
});

// Adiciona um evento de clique ao botão com id "direcionar04"
document.getElementById("direcionar04").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "listarProjRepro.php";
});

// Adiciona um evento de clique ao botão com id "direcionar05"
document.getElementById("direcionar05").addEventListener("click", function() {
    // Redireciona para a outra página
    window.location.href = "gerenciarUsuarios.php";
});

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

}
