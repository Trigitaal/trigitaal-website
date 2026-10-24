// Sluit het mobiele menu na het kiezen van een onderdeel op de pagina.
document.querySelectorAll('#mainNavbar a').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('mainNavbar');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
