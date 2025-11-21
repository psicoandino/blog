
// posts.js
// Aquí defines las entradas del blog.
// Para crear una nueva entrada, copia uno de los objetos y cámbiale los datos.

const posts = [
  {
    slug: "bienvenida-al-blog-psicoandino",
    title: "Bienvenida al Blog Psicoandino",
    date: "2025-11-21",
    category: "Psicoandino",
    tags: ["presentación", "identidad", "viaje"],
    excerpt: "Un espacio para registrar el viaje psicoandino: ideas, símbolos, proyectos y experimentos creativos.",
    body: `
      <p>
        Este blog nace como una bitácora: un lugar para anotar el viaje psicoandino,
        tanto en lo creativo como en lo técnico. Aquí pueden convivir bocetos de mundos,
        notas de marketing, ideas para proyectos y reflexiones sueltas.
      </p>
      <p>
        La idea es mantenerlo simple: una estructura estática, alojada en GitHub Pages,
        que se puede editar tocando solo un archivo: <code>posts.js</code>.
      </p>
      <h2>¿Cómo se edita este blog?</h2>
      <ul>
        <li>Abres el archivo <code>posts.js</code> en tu editor.</li>
        <li>Copias un post de ejemplo y lo pegas debajo.</li>
        <li>Cambias <code>slug</code>, <code>title</code>, <code>date</code>, <code>category</code>, etc.</li>
        <li>Escribes el contenido dentro de <code>body</code> usando HTML básico.</li>
      </ul>
      <p>
        Cada vez que subes cambios a GitHub, el blog se actualiza automáticamente.
      </p>
    `
  },
  {
    slug: "notas-sobre-el-mundo-psicoandino",
    title: "Notas sobre el mundo Psicoandino",
    date: "2025-11-22",
    category: "Lore",
    tags: ["lore", "mundo", "conceptos"],
    excerpt: "Algunos apuntes iniciales sobre el universo simbólico psicoandino y cómo podría expandirse.",
    body: `
      <p>
        El mundo psicoandino mezcla cordillera, neón, datos, comercio, símbolos antiguos y
        tecnología actual. No es solo una “estética”, también puede ser una manera de mirar
        los proyectos y las decisiones.
      </p>
      <p>
        Algunas líneas posibles para ir desarrollando en este blog:
      </p>
      <ul>
        <li>Mapas de lugares psicoandinos (ciudades, templos, mercados, ferias).</li>
        <li>Roles e identidades: buscadores, mercaderes, guías, archivistas.</li>
        <li>Objetos: artefactos, talismanes, interfaces, herramientas híbridas.</li>
      </ul>
      <p>
        Cada entrada puede ir profundizando un aspecto. No hace falta que todo esté cerrado,
        la gracia es ir iterando.
      </p>
    `
  }
];
