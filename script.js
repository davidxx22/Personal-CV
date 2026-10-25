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

const sectionMenu = document.querySelector(".section-menu");
const sectionLinks = [...sectionMenu.querySelectorAll("a")];
const menuSections = sectionLinks.map((link) =>
  document.querySelector(link.getAttribute("href")),
);
let sectionUpdatePending = false;

function updateCurrentSection() {
  const marker = Math.max(160, sectionMenu.getBoundingClientRect().bottom + 24);
  let current = 0;
  menuSections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= marker) current = index;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    current = sectionLinks.length - 1;
  }
  sectionLinks.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  sectionUpdatePending = false;
}

function scheduleSectionUpdate() {
  if (sectionUpdatePending) return;
  sectionUpdatePending = true;
  window.requestAnimationFrame(updateCurrentSection);
}

window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
window.addEventListener("resize", scheduleSectionUpdate);
window.addEventListener("load", scheduleSectionUpdate);
updateCurrentSection();
