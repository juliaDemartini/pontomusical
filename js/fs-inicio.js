// --- CONFIGURAÇÃO DO CARROSSEL ---
let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('#slides img').length;
let autoPlayInterval;

// Função para mudar o slide (direção: 1 para frente, -1 para trás)
function moveSlide(direction) {
    currentIndex += direction;

    // Lógica de loop infinito: da última volta para a primeira e vice-versa
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();
    resetAutoPlay(); // Reinicia o cronômetro para evitar pulos bruscos
}

// Atualiza a posição visual no CSS
function updateSlidePosition() {
    if (slides) {
        const offset = currentIndex * 100;
        slides.style.transform = `translateX(-${offset}%)`;
    }
}

// Gerenciamento do Auto-Play (5 segundos)
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Inicia o carrossel assim que a página carrega
startAutoPlay();


// --- MENU HAMBÚRGUER ---
function menuOnClick() {
    const menuBar = document.getElementById("menu-bar");
    const nav = document.getElementById("nav");
    const menuBg = document.getElementById("menu-bg");

    if (menuBar && nav && menuBg) {
        menuBar.classList.toggle("change");
        nav.classList.toggle("change");
        menuBg.classList.toggle("change-bg");
    }
}


// --- REDIRECIONAMENTOS DE BOTÕES ---
// Mapeamento de IDs e seus respectivos links para evitar código repetitivo
const links = {
    "direcionar01": "sobre.php",
    "direcionar02": "solicitacoes.php",
    "direcionar04": "listarProjRepro.php",
    "direcionar05": "gerenciarUsuarios.php",
    "logoutBtn": "logout.php" // Exemplo caso queira adicionar o logout aqui
};

// Aplica o evento de clique automaticamente para todos os IDs acima
Object.keys(links).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = links[id];
        });
    }
});
