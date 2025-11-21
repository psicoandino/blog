
// script.js
// Lógica básica del blog: listado de posts, vista de post individual, categorías y archivo.

const listView = document.getElementById("view-list");
const postView = document.getElementById("view-post");
const aboutView = document.getElementById("view-about");
const postList = document.getElementById("post-list");
const postContainer = document.getElementById("post-container");
const categoryList = document.getElementById("category-list");
const archiveList = document.getElementById("archive-list");

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}

function renderPostList(filter = {}) {
  postList.innerHTML = "";

  let filtered = [...posts];

  if (filter.category) {
    filtered = filtered.filter((p) => p.category === filter.category);
  }

  // Ordenar por fecha descendente
  filtered.sort((a, b) => (a.date < b.date ? 1 : -1));

  filtered.forEach((post) => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.dataset.slug = post.slug;
    card.innerHTML = `
      <h2 class="post-card-title">${post.title}</h2>
      <div class="post-card-meta">
        ${formatDate(post.date)} · ${post.category}
      </div>
      <p class="post-card-excerpt">${post.excerpt}</p>
      <div class="post-card-tags">
        ${(post.tags || [])
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("")}
      </div>
    `;
    card.addEventListener("click", () => {
      navigateToPost(post.slug);
    });
    postList.appendChild(card);
  });
}

function renderCategories() {
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();
  categoryList.innerHTML = "";

  const allItem = document.createElement("li");
  allItem.innerHTML = `<a href="#inicio">Todas las categorías</a>`;
  allItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    showView("list");
    renderPostList();
  });
  categoryList.appendChild(allItem);

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#categoria-${encodeURIComponent(cat)}">${cat}</a>`;
    li.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      showView("list");
      renderPostList({ category: cat });
    });
    categoryList.appendChild(li);
  });
}

function renderArchive() {
  const groups = {};

  posts.forEach((p) => {
    const [year, month] = p.date.split("-");
    const key = `${year}-${month}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  });

  const entries = Object.entries(groups).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  archiveList.innerHTML = "";

  entries.forEach(([key, group]) => {
    const [year, month] = key.split("-");
    const label = `${year} · ${month}`;
    const li = document.createElement("li");
    li.textContent = `${label} (${group.length})`;
    archiveList.appendChild(li);
  });
}

function navigateToPost(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    showView("list");
    return;
  }

  postContainer.innerHTML = "";

  const back = document.createElement("div");
  back.className = "back-link";
  back.innerHTML = "← Volver a las entradas";
  back.addEventListener("click", () => {
    window.location.hash = "#inicio";
    showView("list");
  });

  const title = document.createElement("h1");
  title.textContent = post.title;

  const meta = document.createElement("div");
  meta.className = "post-meta";
  meta.textContent = `${formatDate(post.date)} · ${post.category}`;

  const body = document.createElement("div");
  body.className = "post-body";
  body.innerHTML = post.body;

  postContainer.appendChild(back);
  postContainer.appendChild(title);
  postContainer.appendChild(meta);
  postContainer.appendChild(body);

  showView("post");
  window.location.hash = `#post/${post.slug}`;
}

function showView(name) {
  listView.classList.remove("active");
  postView.classList.remove("active");
  aboutView.classList.remove("active");

  if (name === "post") {
    postView.classList.add("active");
  } else if (name === "about") {
    aboutView.classList.add("active");
  } else {
    listView.classList.add("active");
  }
}

// Navegación básica por hash
function handleHashChange() {
  const hash = window.location.hash;

  if (hash.startsWith("#post/")) {
    const slug = hash.replace("#post/", "");
    navigateToPost(slug);
  } else if (hash === "#acerca") {
    showView("about");
  } else {
    showView("list");
    renderPostList();
  }
}

// Nav superior
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const view = link.dataset.view;
    if (view === "about") {
      e.preventDefault();
      window.location.hash = "#acerca";
      showView("about");
    } else if (view === "list") {
      e.preventDefault();
      window.location.hash = "#inicio";
      showView("list");
    }
  });
});

// Init
renderCategories();
renderArchive();
renderPostList();
handleHashChange();

window.addEventListener("hashchange", handleHashChange);
