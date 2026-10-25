# Personal CV — David Rey Bali-os

A professional personal Curriculum Vitae (CV) and portfolio website for **David Rey Bali-os**, a **Web Developer / UI & UX Designer** and fourth-year Bachelor of Science in Information Technology student at **Davao del Norte State College**. Built from scratch using HTML, CSS, and JavaScript, with a white background, neutral accents, a formal portrait sidebar, and rounded information cards.

## Submission links

- **GitHub repository:** [personal-cv](https://github.com/davidxx22/personal-cv)
- **Live Vercel website:** [davidreybali-os.vercel.app](https://davidreybali-os.vercel.app/)
- **Vercel project name:** `davidreybali-os`

## Technologies used

- **HTML:** semantic sections, headings, project cards, links, and a native screenshot dialog.
- **CSS:** Grid and Flexbox layouts, responsive media queries, hover effects, section-reveal styling, print styles, and reduced-motion support.
- **JavaScript:** project filtering and expansion, screenshot galleries, active-section navigation, sidebar positioning, section reveals, and the footer year.
- **Git and GitHub:** version control, public source, and real development commits.
- **Vercel:** static website hosting and automatic deployment from `main`.

No framework, package installation, build command, or environment variables are required. The source code has no comments as requested; implementation explanations are in [DEVELOPMENT.md](DEVELOPMENT.md).

## Current website

- Formal profile photo, name, career title, introduction, and GitHub, LinkedIn, Facebook, and Upwork icons.
- Plain-text phone, email, and location in the profile card; the portrait has no slideshow.
- About Me and career objective; experience; education; and two Cisco Networking Academy course completions.
- Technical and professional skills with local technology logos and no invented proficiency percentages.
- Desktop section navigation with current-section highlighting. Navigation is hidden at **768px and below**; visitors scroll and can use Back to top.
- Eight completed projects. The initial view shows **SIDEFORM, Tripon, Verde Café Kiosk, and Sakyan**. Show more reveals all eight; Show less restores the four featured projects.
- Individual and Group filters display three and five projects respectively. Returning to All projects restores the featured view.
- Every project has a Source link to its GitHub repository. Website project images open their live sites; DoneeIt and Financify images open local screenshot galleries.
- **DoneeIt:** 13 screenshots. **Financify:** 4 screenshots. The dialog has vertically centered side arrows, a counter, keyboard arrow controls, Escape to close, and focus restoration.
- A dark contact card with Gmail browser-compose links, a mobile dialer link, and four social profile icons. The Start a conversation button also opens Gmail.
- Hover color changes, smooth scrolling, section reveals, visible keyboard focus, a skip link, and reduced-motion support.

## File structure

```text
personal-cv/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── README.md
├── DEVELOPMENT.md
├── SUBMISSION-CHECKLIST.md
└── assets/
    ├── favicon.svg
    ├── portrait.jpg
    ├── icons/
    │   └── LICENSE-devicon.txt
    └── projects/
        ├── doneeit/
        ├── financify/
        └── project preview images
```

## Run locally

Open `index.html` in a browser or use VS Code Live Server. For an HTTP preview with Python installed, run this from the project folder:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Open [localhost:5500](http://127.0.0.1:5500). Stop the server with **Ctrl+C**. Python only serves the preview; it is not a website dependency.

## Edit the website

- **Content and links:** edit `index.html`.
- **Colors, typography, spacing, and responsive layout:** edit `styles.css`. Shared colors are in `:root`.
- **Featured projects and filters:** edit `featuredProjects` and `updateProjects()` in `script.js`; keep the HTML `data-project` and `data-category` values consistent.
- **App screenshot galleries:** edit `screenshotGalleries` in `script.js` and place images in the matching project asset folder.
- **Portrait and previews:** replace files in `assets/` and update image paths, descriptions, and dimensions as needed.
- **New projects:** duplicate a project article, update its source and preview link, and review this documentation's project totals and filter descriptions.

Without JavaScript, all eight cards and their source links remain readable. The DoneeIt and Financify preview links open their first image directly; interactive filters, expansion, and screenshot browsing require JavaScript.

## Deployment and Git workflow

Vercel uses the **Other** framework preset, repository root, no build/install command, and no environment variables. Production deploys from `main` in the connected `personal-cv` repository. `vercel.json` enables clean URLs and basic response headers.

After a real, reviewed change, stage the files you changed, make a descriptive commit, and push:

```powershell
git status
git add index.html styles.css script.js
git commit -m "Improve project descriptions and mobile spacing"
git push origin main
```

For documentation-only changes, stage the Markdown files instead. Verify the new deployment before submitting. The old website address, `david-balios-cv.vercel.app`, redirects to the current address; use the current submission links above.

## Content and asset notes

- David supplied the formal portrait. It remains static and in its original colors.
- Website preview images were captured from the supplied live links.
- DoneeIt and Financify screenshots come from the supplied group project pages maintained by Azel M. Villanueva: [DoneeIt](https://zeelll.vercel.app/projects/doneeit) and [Financify](https://zeelll.vercel.app/projects/financify). The CV displays local screenshot copies rather than redirecting visitors to that portfolio.
- SkillBridge's public preview is a sign-in screen; system access requires an authorized account.
- Tripon's preview uses labeled demo contributions rather than actual financial records.
- Project technology lists reflect supplied and checked repository contents, including supporting files. They do not claim personal proficiency in every listed language.
- The Cisco entries are completed Networking Academy courses, not a claim of full CCNA certification. Certificate files are unavailable, and there are no certificate download links.
- Skill logos come from [Devicon](https://github.com/devicons/devicon), with its MIT license in `assets/icons/LICENSE-devicon.txt`. The Liquid icon comes from [Shopify's Liquid documentation](https://shopify.github.io/liquid/). Text labels accompany the logos.

## Validation and submission

Browser checks have covered 320, 390, 768, 1024, and 1440px widths, project filtering/expansion, navigation visibility, and screenshot dialog controls. Public access to the current GitHub and Vercel links has been verified. Actual-device behavior, external social profile access, and the final student content review remain manual submission checks.

Use [SUBMISSION-CHECKLIST.md](SUBMISSION-CHECKLIST.md) before submitting both links. Read [DEVELOPMENT.md](DEVELOPMENT.md) to prepare to explain the implementation to the instructor.
