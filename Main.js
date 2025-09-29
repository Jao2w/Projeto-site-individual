function mostrarCuriosidades() {
  const curiosidades = [
    "A série começou como curtas no The Tracey Ullman Show.",
    "Homer trabalha na Usina Nuclear de Springfield.",
    "O criador, Matt Groening, deu nomes dos membros da própria família aos personagens.",
    "Os personagens são amarelos para se destacar na TV.",
    "A voz original de Bart é feita por uma mulher (Nancy Cartwright)."
  ];

  const lista = document.getElementById('lista-curiosidades');
  
  // Evita duplicar curiosidades
  if (lista.children.length > 0) return;

  curiosidades.forEach((curiosidade) => {
    const li = document.createElement('li');
    li.textContent = curiosidade;
    lista.appendChild(li);
  });
}

