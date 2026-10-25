const profileSidebar = document.querySelector(".profile-sidebar");

function positionProfileSidebar() {
  const height = profileSidebar.getBoundingClientRect().height;
  const top = Math.min(24, window.innerHeight - height - 24);
  profileSidebar.style.setProperty("--profile-top", `${top}px`);
}

positionProfileSidebar();
window.addEventListener("resize", positionProfileSidebar);
if ("ResizeObserver" in window) {
  new ResizeObserver(positionProfileSidebar).observe(profileSidebar);
}

const filterBar = document.querySelector(".project-filters");
const filterButtons = [...filterBar.querySelectorAll("button")];
const projectCards = [...document.querySelectorAll(".project-card")];
const showMoreProjects = document.querySelector(".show-more-projects");
const featuredProjects = new Set(["sideform", "tripon", "verde", "sakyan"]);
let activeFilter = "all";
let projectsExpanded = false;
filterBar.hidden = false;

function updateProjects() {
  projectCards.forEach((card) => {
    const match = activeFilter === "all" || card.dataset.category === activeFilter;
    const visible = match && (activeFilter !== "all" || projectsExpanded || featuredProjects.has(card.dataset.project));
    card.hidden = !visible;
    if (visible) card.classList.remove("is-pending");
  });
  showMoreProjects.hidden = activeFilter !== "all";
  showMoreProjects.textContent = projectsExpanded ? "Show less" : "Show more";
  showMoreProjects.setAttribute("aria-expanded", String(projectsExpanded));
}

showMoreProjects.addEventListener("click", () => {
  projectsExpanded = !projectsExpanded;
  updateProjects();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    projectsExpanded = false;
    filterButtons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    updateProjects();
  });
});
updateProjects();

const details = {
  sideform:
    "An apparel e-commerce theme designed for a Shopify online store. Its clean layout and product displays help visitors explore the clothing collection through a user-friendly shopping experience.",
  tripon:
    "A progressive web app for tracking group trip savings. Members can record contributions, monitor payments, and keep shared financial records organized. The preview uses the application’s clearly labeled sample tracker.",
  barbershop:
    "A business website showcasing a barbershop’s services and team. Visitors can explore grooming options and barber profiles, then find contact information to connect with their preferred barber.",
  sakyan:
    "A car rental marketplace connecting customers with rental providers across Davao and Mindanao. The project helps customers find, compare, and book vehicles while supporting rental businesses in managing their operations.",
  skillbridge:
    "A capstone OJT placement decision support system. It assesses students’ skills and recommends companies and positions aligned with their strengths and areas of specialization.",
  verde:
    "A web-based café ordering system that allows customers to browse food and beverages, select menu items, and place orders through a digital kiosk interface.",
  doneeit:
    "An Android student productivity application for organizing tasks, tracking progress, and managing academic activities. The linked project page includes app screenshots and an Android release.",
  financify:
    "An Android personal finance application for tracking income and expenses, allocating budgets, and reviewing spending. The linked project page includes app screenshots and an Android release.",
};

const dialog = document.querySelector(".project-dialog");
const dialogContent = document.querySelector("#dialog-content");
let dialogTrigger = null;

if (typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-details]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => {
      const key = button.dataset.details;
      const card = button.closest(".project-card");
      const image = card.querySelector(".project-image img");
      const links = card.querySelectorAll(".project-actions a");
      const body = document.createElement("div");
      body.className = "dialog-body";
      const heading = document.createElement("h2");
      heading.id = "dialog-title";
      heading.textContent = card.querySelector("h3").textContent;
      const category = document.createElement("p");
      category.className = "eyebrow";
      category.textContent =
        card.querySelector(".project-meta > span").textContent + " · COMPLETED";
      const description = document.createElement("p");
      description.textContent = details[key];
      const preview = image.cloneNode();
      preview.className =
        "dialog-image" +
        (key === "doneeit" || key === "financify" ? " is-app" : "");
      preview.loading = "eager";
      body.append(category, heading, description);
      if (key === "skillbridge") {
        const note = document.createElement("p");
        note.className = "dialog-note";
        note.textContent =
          "The public preview shows the sign-in screen. Access to the system is restricted to authorized DNSC accounts.";
        body.append(note);
      }
      body.append(card.querySelector(".project-tech").cloneNode(true));
      const actions = document.createElement("div");
      actions.className = "button-row";
      links.forEach((link, index) => {
        const copy = link.cloneNode(true);
        copy.className =
          index === 0 ? "button button-primary" : "button button-text";
        actions.append(copy);
      });
      body.append(actions);
      dialogContent.replaceChildren(preview, body);
      dialogTrigger = button;
      document.body.classList.add("modal-open");
      dialog.showModal();
    });
  });
}

document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  dialogTrigger?.focus();
});

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = [...document.querySelectorAll(".reveal")];
let revealObserver;

function configureReveals() {
  revealObserver?.disconnect();
  revealElements.forEach((element) => element.classList.remove("is-pending"));
  document.body.classList.remove("motion-ready");
  if (motionPreference.matches || !("IntersectionObserver" in window)) return;
  document.body.classList.add("motion-ready");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-pending");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06 },
  );
  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top >= window.innerHeight)
      element.classList.add("is-pending");
    revealObserver.observe(element);
  });
}

configureReveals();
motionPreference.addEventListener("change", configureReveals);

document.querySelector("#current-year").textContent = new Date().getFullYear();
