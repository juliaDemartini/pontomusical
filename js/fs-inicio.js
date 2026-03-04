import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// --- CONFIGURAÇÃO FIREBASE ---
const auth = getAuth();
const db = getDatabase();

// 1. Verificação de Login e Nível de Acesso (Admin ou Músico)
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    try {
      // Busca o papel (role) do usuário no Banco de Dados
      const roleSnap = await get(ref(db, `users/${uid}/role`));
      const role = roleSnap.val();

      if (!role) {
        alert("Erro: usuário sem permissão definida. Contate o administrador.");
        await signOut(auth);
        window.location.href = "login.html";
        return;
      }

      // Mostra o card de cadastro APENAS se for administrador
      const adminCard = document.getElementById("cardCadastroUsuario");
      if (adminCard) {
        adminCard.style.display = (role === "admin") ? "block" : "none";
      }

    } catch (error) {
      console.error("Erro ao buscar permissões:", error);
      alert("Erro ao carregar dados do usuário.");
    }
  } else {
    // Se não houver usuário logado, redireciona para a tela de login
    window.location.href = "login.html";
  }
});

// 2. Lógica do Botão de Logout
// Usamos o DOMContentLoaded para garantir que o botão já existe na tela quando o script rodar
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById("logoutBtn");
    
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await signOut(auth);
                // Redireciona para index.html (isso fará o carrossel resetar para a img 1)
                window.location.href = "index.html";
            } catch (error) {
                console.error("Erro ao deslogar:", error);
            }
        });
    }
});

  