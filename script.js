const data = window.portfolioData;

const $ = (selector) => document.querySelector(selector);

function createChipList(items) {
  const wrapper = document.createElement("div");
  wrapper.className = "chip-list";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "pill";
    chip.textContent = item;
    wrapper.appendChild(chip);
  });
  return wrapper;
}

function getProjectPreview(project) {
  if (Array.isArray(project.images) && project.images.length) {
    return { type: "image", src: project.images[0] };
  }
  if (project.image) {
    return { type: "image", src: project.image };
  }
  if (Array.isArray(project.videos) && project.videos.length) {
    return { type: "video", src: project.videos[0] };
  }
  if (project.video) {
    return { type: "video", src: project.video };
  }
  if (project.document) {
    return { type: "image", src: project.document };
  }
  if (project.documentUrl) {
    return { type: "image", src: project.documentUrl };
  }
  if (project.previewDocument) {
    return { type: "image", src: project.previewDocument };
  }
  if (Array.isArray(project.documents) && project.documents.length) {
    return { type: "image", src: project.documents[0] };
  }
  return null;
}

function renderHero() {
  $("#heroName").textContent = data.name;
  $("#heroTitle").textContent = data.title;
  $("#heroIntro").textContent = data.intro;
  $("#aboutText").textContent = data.about;
  $("#footerName").textContent = data.name;

  const metaItems = data.meta || [];
  $("#heroMeta").innerHTML = metaItems.map((item) => `<li>${item}</li>`).join("");
  $("#highlightList").innerHTML = data.highlights
    .map(
      (item) => `
        <div class="highlight-item">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </div>`
    )
    .join("");
}

function renderSkills() {
  const grid = $("#skillsGrid");
  const sections = [
    { title: "Delivery", copy: "Communication, documentation, and stakeholder alignment.", items: data.skills.delivery },
    { title: "Tooling", copy: "The systems I use to keep work organized and reusable.", items: data.skills.tooling },
    { title: "Build", copy: "Hands-on technical execution for analysis, automation, and reporting.", items: data.skills.build }
  ];

  grid.innerHTML = "";
  sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <h3>${section.title}</h3>
      <p class="section-copy">${section.copy}</p>
    `;
    card.appendChild(createChipList(section.items));
    grid.appendChild(card);
  });
}

function renderProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");
  card.dataset.slug = project.slug;

  const media = document.createElement("div");
  media.className = "project-media";
  const preview = getProjectPreview(project);
  if (preview && preview.type === "image") {
    media.innerHTML = `<img src="${preview.src}" alt="${project.title} preview" loading="lazy" />`;
  } else if (preview && preview.type === "video") {
    media.innerHTML = `<video src="${preview.src}" muted playsinline loop autoplay preload="metadata" aria-label="${project.title} preview"></video>`;
  } else {
    media.setAttribute("aria-hidden", "true");
  }

  const body = document.createElement("div");
  body.className = "project-body";
  body.innerHTML = `
    <div class="project-body-top">
      <h3>${project.title}</h3>
    </div>
  `;
  //body.appendChild(createChipList(project.stack));

  const links = document.createElement("div");
  links.className = "project-links";
  const githubLink = document.createElement("a");
  githubLink.href = project.github || "#";
  githubLink.target = "_blank";
  githubLink.rel = "noreferrer";
  githubLink.textContent = "GitHub";
  githubLink.addEventListener("click", (event) => event.stopPropagation());
  links.appendChild(githubLink);

  if (project.demo) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demo;
    demoLink.target = "_blank";
    demoLink.rel = "noreferrer";
    demoLink.textContent = "Live Demo";
    demoLink.addEventListener("click", (event) => event.stopPropagation());
    links.appendChild(demoLink);
  }
  body.appendChild(links);

  card.appendChild(media);
  card.appendChild(body);
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    window.location.href = `project.html?project=${encodeURIComponent(project.slug)}`;
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = `project.html?project=${encodeURIComponent(project.slug)}`;
    }
  });

  return card;
}

function renderProjects() {
  const wrap = $("#projectsWrap");
  wrap.innerHTML = "";

  data.projectGroups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "project-collection project-collection-collapsed reveal";
    section.dataset.expanded = "false";
    section.innerHTML = `
      <div class="project-collection-head">
        <div>
          <p class="eyebrow">${group.eyebrow}</p>
          <h3>${group.title}</h3>
          <p class="section-copy">${group.description}</p>
        </div>
        <button class="project-collection-cta project-collection-toggle" type="button" aria-expanded="false">${group.ctaLabel || "See All"}</button>
      </div>
      <div class="projects-grid"></div>
    `;

    const grid = section.querySelector(".projects-grid");
    const cards = group.projects
      .map((slug) => data.projects.find((project) => project.slug === slug))
      .filter(Boolean)
      .map((project) => renderProjectCard(project));

    cards.forEach((card, index) => {
      card.classList.add("is-hidden");
      grid.appendChild(card);
    });

    const toggle = section.querySelector(".project-collection-toggle");
    toggle.addEventListener("click", () => {
      const expanded = section.dataset.expanded === "true";
      const nextExpanded = !expanded;
      section.dataset.expanded = String(nextExpanded);
      toggle.setAttribute("aria-expanded", String(nextExpanded));
      toggle.textContent = nextExpanded ? "Show Less" : (group.ctaLabel || "See All");
      section.classList.toggle("project-collection-collapsed", !nextExpanded);
      cards.forEach((card) => {
        card.classList.toggle("is-hidden", !nextExpanded);
      });
    });

    wrap.appendChild(section);
  });
}

function renderTimeline(list, selector) {
  const container = $(selector);
  container.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item reveal";
    const bullets = item.bullets || [];
    card.innerHTML = `
      <div class="timeline-top">
        <div>
          <h3>${item.role || item.degree}</h3>
          <p class="meta">${item.company || item.school}</p>
        </div>
        <p class="meta">${item.period || ""}</p>
      </div>
      ${item.location ? `<p class="meta">${item.location}</p>` : ""}
      ${item.details ? `<p class="section-copy">${item.details}</p>` : ""}
    `;
    if (bullets.length) {
      const ul = document.createElement("ul");
      bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    container.appendChild(card);
  });
}

function renderCertifications() {
  const grid = $("#certificationsGrid");
  grid.innerHTML = "";
  data.certifications.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "cert-card reveal";
    card.innerHTML = `
      <h3>${cert.name}</h3>
      <p class="section-copy">${cert.issuer}</p>
    `;
    grid.appendChild(card);
  });
}

function renderContact() {
  $("#contactEmail").textContent = data.contact.email;
  $("#contactEmail").href = `mailto:${data.contact.email}`;
  $("#contactLinkedIn").href = data.contact.linkedin;
  $("#contactGitHub").href = data.contact.github;
  $("#contactLocation").textContent = data.contact.location;
}

function setupNav() {
  const toggle = $("#navToggle");
  const nav = $("#siteNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );
  elements.forEach((el) => observer.observe(el));
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  renderHero();
  renderSkills();
  renderProjects();
  renderTimeline(data.experience, "#experienceList");
  renderCertifications();
  renderTimeline(data.education, "#educationList");
  renderContact();
  setupNav();
  setupReveal();
}

init();
