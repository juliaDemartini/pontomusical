function menuOnClick() {
        const menuBar = document.getElementById("menu-bar");
        const nav = document.getElementById("nav");
        const menuBg = document.getElementById("menu-bg");

        if (menuBar && nav && menuBg) {
            // Alterna as classes que fazem a animação e mostram o menu
            menuBar.classList.toggle("change");
            nav.classList.toggle("change");
            menuBg.classList.toggle("change-bg");
            console.log("Menu clicado!"); // Isso ajuda a testar no F12
        } else {
            console.error("Erro: Algum elemento do menu não foi encontrado.");
        }
    }