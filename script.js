var botaoTema = document.getElementById('tema');

botaoTema.addEventListener('click', function () {
  var raiz = document.documentElement;
  var escuro = raiz.getAttribute('data-theme') === 'dark';
  if (escuro) {
    raiz.removeAttribute('data-theme');
  } else {
    raiz.setAttribute('data-theme', 'dark');
  }
  botaoTema.textContent = escuro ? 'Modo escuro' : 'Modo claro';
});

document.getElementById('ano').textContent = new Date().getFullYear();