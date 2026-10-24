# Personal CV — David Rey Bali-os

A professional personal curriculum vitae and portfolio website for **David Rey Bali-os**, a **Web Developer and UI/UX Designer** based in Sto. Tomas, Davao del Norte, Philippines. Built from scratch with a light neutral palette, portrait sidebar, rounded information cards, experience timelines, and project gallery.

## Links

- GitHub repository: https://github.com/davidxx22/Personal-CV
- Live Vercel website: https://david-balios-cv.vercel.app/

## Student information

- **Student:** David Rey Bali-os
- **School:** Davao del Norte State College
- **Program:** Bachelor of Science in Information Technology

## Technologies used

- **HTML:** semantic content, sections, navigation, project cards, and accessible image descriptions.
- **CSS:** responsive Grid/Flexbox layouts, neutral palette, hover effects, print styles, and reduced-motion support.
- **JavaScript:** gallery filtering, project dialogs, adaptive sidebar positioning, section reveals, and footer year.
- **Git and GitHub:** source control and meaningful development commits.
- **Vercel:** public static website hosting.

No application framework, package installation, build command, or environment variables are required. The source has no code comments, as requested. Explanations are in [DEVELOPMENT.md](DEVELOPMENT.md).

## Features

- Responsive desktop, laptop, tablet, and mobile layouts with a portrait sidebar and no navigation bar.
- Eight completed projects, filterable into individual and group work.
- Repository and website/project-page links for every project.
- Native project dialogs with keyboard focus management and Escape-to-close behavior.
- Subtle hover effects, smooth scrolling, and section reveals respecting reduced-motion preferences.
- Skip link, visible keyboard focus, image descriptions, and semantic headings.
- Education, experience, completed courses, and working contact links.
- Content and project links remain available without JavaScript.

## Source structure

```text
Personal CV/
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
    └── projects/
```

## Run locally

Open `index.html` directly in a browser, or use VS Code's Live Server extension. For an HTTP preview with Python installed, open a terminal in this folder and run:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Open http://127.0.0.1:5500. Stop the server with **Ctrl+C**. Python only serves the preview; the website itself uses HTML, CSS, and JavaScript.

## Edit the website

- **Text, project cards, contact links, and education:** edit `index.html`.
- **Colors, spacing, typography, animations, and breakpoints:** edit `styles.css`. Shared colors are in `:root`.
- **Project dialog descriptions and behavior:** edit `script.js`. Longer descriptions are in `details`. Keep a card's `data-project` and its button's `data-details` consistent with the matching key.
- **Portrait and previews:** replace files in `assets/`; update paths, image descriptions, and dimensions as needed.
- **New projects:** duplicate a project article, update its content, add a matching detail description, and update the gallery count/label.

## Vercel deployment settings

| Setting               | Value                               |
| --------------------- | ----------------------------------- |
| Framework preset      | Other                               |
| Root directory        | Repository root (`./`)              |
| Build command         | None                                |
| Output directory      | Repository root (`.`), if requested |
| Install command       | None                                |
| Environment variables | None                                |

Once connected, pushing to the production branch triggers a new deployment.

## Meaningful updates

After making and reviewing an actual change:

```powershell
git status
git add index.html styles.css script.js
git commit -m "Improve project descriptions and mobile spacing"
git push
```

Stage only the files changed for that update. Describe your actual work in the message. Never commit credentials or tokens.

## Content and preview notes

- The portrait was supplied by David for public display.
- Website previews were captured from the supplied live links.
- DoneeIt and Financify screenshots come from the supplied group project pages at `zeelll.vercel.app`, maintained by Azel M. Villanueva. These group Android projects link to project pages rather than browser demos.
- SkillBridge shows its public sign-in screen; application access requires an authorized DNSC account.
- Tripon's preview uses clearly labeled demo contributions, not actual financial records.
- Project technologies reflect supplied and checked repositories, including supporting files. They do not imply personal proficiency in every listed language.
- Both Cisco entries are completed Networking Academy courses, not a claim of full CCNA certification. No certificate files or download links are available.

## Validation and submission

Verified on October 24, 2026: anonymous access to the live website and public repository; successful responses for all page assets; mobile navigation; individual/group/all filters; all eight project dialogs and preview images; keyboard Escape and focus restoration; and responsive previews at 320, 390, 768, 1024, and 1440 pixels without horizontal overflow. Actual-device review and email/phone application handling remain student checks.

See [SUBMISSION-CHECKLIST.md](SUBMISSION-CHECKLIST.md) for browser checks, deployment verification, and the two links to submit to the LMS.

## Monochrome redesign

On October 25, 2026, the site was redesigned around the approved black-and-white reference. The update adds a portrait/contact sidebar, white rounded panels, compact education and experience timelines, and grayscale project previews. All eight projects and existing accessible interactions remain. Responsive widths, mobile navigation, filtering, and keyboard dialog behavior were checked again after the redesign.

The navigation bar and mobile menu were removed at the student’s request. The sidebar portfolio link, project links, contact links, and Back to top link remain available.

The current palette uses white page backgrounds and neutral gray accents. The profile portrait and project previews retain their original colors.
