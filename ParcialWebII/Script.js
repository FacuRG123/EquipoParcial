// Selecciona todos los links de la navbar
const links = document.querySelectorAll('.navbar-nav .nav-link');

// Obtiene la ruta actual de la página (solo el nombre del archivo)
const currentPage = window.location.pathname.split("/").pop();

// Recorre todos los links
links.forEach(link => {
  const linkPage = link.getAttribute('href');

  // Marca como activo el link cuya ruta coincide con la página actual
  if (linkPage === currentPage || (linkPage === "#" && currentPage === "")) {
    link.classList.add('nav-selected');
  } else {
    link.classList.remove('nav-selected');
  }

  // Opcional: si quieres la animación de "bajar" al hacer clic en la misma página
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('nav-selected'));
    link.classList.add('nav-selected');
  });
});
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase().trim();

  let targetId = '';

  if(query.includes('small')) {
    targetId = 'small-cafe-section';
  } else if(query.includes('big')) {
    targetId = 'big-coffee-section';
  } else if(query.includes('milk')) {
    targetId = 'coffee-with-milk-section';
  }

  if(targetId) {
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('No se encontró la sección.');
  }
});