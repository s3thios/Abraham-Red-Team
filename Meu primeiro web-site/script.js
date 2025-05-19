const btnMenu = document.getElementById("btnMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

btnMenu.addEventListener("click", () => {
  menuPrincipal.classList.toggle("aberto");
});

const submenus = document.querySelectorAll(".has-submenu > a");

submenus.forEach((item) => {
  item.addEventListener("click", (e) => {
    const li = item.parentElement;
    const aberto = li.classList.contains("aberto");
    document.querySelectorAll(".has-submenu").forEach((el) =>
      el.classList.remove("aberto")
    );
    if (!aberto) li.classList.add("aberto");
  });
});

const itensMenu = document.querySelectorAll(".item-menu");

itensMenu.forEach((item) => {
  item.addEventListener("click", () => {
    itensMenu.forEach((el) => el.classList.remove("selecionado"));
    item.classList.add("selecionado");
  });
});

// Formulário de Contato - popup apenas para efeito visual
const form = document.getElementById("formContato");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
    form.reset();
  }, 3000);
});
