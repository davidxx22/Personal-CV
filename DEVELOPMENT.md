# Understanding the CV website

## Purpose and design

The website presents David Rey Bali-os's profile, education, skills, completed projects, experience, training, and contact information. Its original implementation adapts the approved reference into a formal portrait sidebar and rounded information cards. The current appearance uses a white background and neutral accents, with color retained in photos, project images, technology logos, status badges, and link hover states.

The technologies are HTML, CSS, and JavaScript, without a framework or build system. Explanations are kept in this document because the student requested source code without comments.

## Files and responsibilities

- `index.html` contains the content, semantic headings, desktop section links, eight project cards, source links, and native screenshot dialog. It also loads CSS and JavaScript.
- `styles.css` contains color variables, typography, Grid/Flexbox layouts, responsive breakpoints, hover effects, reveal styles, print rules, and reduced-motion rules.
- `script.js` adds project filtering/expansion, active navigation, screenshot browsing, section reveals, sidebar positioning, and the current footer year. `defer` lets HTML parse before the script runs.
- `assets/` holds the portrait, favicon, technology logos, project previews, and app screenshots.
- `vercel.json` holds static hosting settings for clean URLs and response headers.

## Responsive layout and sidebar

CSS Grid places the profile sidebar beside the main content on wider screens. At 700px and below, the profile stacks above the content. Skills, projects, and timeline layouts also adapt at their own breakpoints.

The profile photo is static. Phone, email, and location inside the profile card are plain text. A format-detection meta tag discourages mobile browsers from converting them into automatic links.

On desktop, the profile uses sticky positioning. `positionProfileSidebar()` measures its height and chooses an offset that keeps the bottom reachable in shorter viewports. Resize and load events, plus `ResizeObserver`, recalculate it when dimensions change. It does not change the profile offset on every scroll. A bottom-spacing adjustment is disabled at 1100px and below and capped at 24px on larger screens to avoid excess blank space.

## Navigation

Above 768px, the sticky section menu links to About Me, Experience, Education, Training, Skills, Projects, and Contact. At 768px and below, the entire menu is hidden, including its earlier hamburger controls. Visitors scroll through the content and use Back to top.

`updateCurrentSection()` compares section positions with a marker below the menu. It sets `aria-current="location"` on one link, which CSS highlights. Scroll events schedule this work through `requestAnimationFrame` rather than running repeated updates in the same frame. HTML anchor links provide navigation, and CSS scroll padding leaves room for the sticky menu.

## Project filtering and expansion

Every project has `data-project` and `data-category` values. There are three individual projects and five group projects.

`featuredProjects` identifies SIDEFORM, Tripon, Verde, and Sakyan. On the initial All projects view, `updateProjects()` shows those four. Show more reveals all eight; Show less returns to four. Individual displays all three individual projects, and Group displays all five group projects. Choosing a filter resets expansion; Show more is only visible for All projects.

Cards are hidden with the HTML `hidden` property. Filter buttons expose their state through `aria-pressed`, and Show more exposes expansion through `aria-expanded` and `aria-controls`.

All eight cards are in the HTML. With JavaScript disabled, the cards and links remain available while interactive controls stay hidden.

## Project previews

The six website project images link to their public websites in new tabs. Every card has a GitHub Source link. Source text turns blue on hover without an underline; the cards no longer have Details buttons or separate Live website text links.

DoneeIt and Financify are Android app projects. Their image links point to local screenshot files, and JavaScript intercepts a normal click to open the site's screenshot dialog. Visitors stay on this CV. `screenshotGalleries` lists 13 DoneeIt screenshots and four Financify screenshots.

`renderScreenshot()` updates the image, description, and counter. `changeScreenshot()` moves forward/backward and wraps at the ends. Plain left/right arrows sit beside the screenshot, centered vertically. Left/Right keyboard keys also change the image. The counter uses a polite live status announcement.

The native `dialog` element handles modal focus. Escape or the close button closes it; background scrolling is locked while open; focus returns to the preview link afterward. If native dialog support is unavailable or JavaScript is disabled, the link opens the first screenshot directly.

## Contact actions

The dark contact card contains working actions, separate from the profile card's plain contact text:

- The email address and Start a conversation button open Gmail browser compose in a new tab with David's email as the recipient. The visitor may need to sign in to Gmail.
- The phone number uses `tel:+639120261599` to request the visitor's dialer or calling application. Device behavior depends on available applications.
- GitHub, LinkedIn, Facebook, and Upwork appear as icon links with accessible names.

The contact location is one line. Email and phone text change color on hover without an underline.

## Animation and accessibility

`IntersectionObserver` reveals marked content once it enters the viewport. CSS provides subtle card/button hover effects and smooth scrolling. The removed personal-photo slideshow is not part of the submitted site.

`prefers-reduced-motion` disables smooth scrolling/reveal movement for visitors who request less animation. A preference change reconfigures reveals. Content remains visible if observers are unavailable.

Other accessibility measures include a skip link, visible keyboard focus, semantic headings, image descriptions, hidden decorative icons, labeled social controls, and native dialog keyboard behavior. Final checks on an actual phone and another browser are still useful, particularly for contact actions and browser-added formatting.

## Source control and deployment

- Repository: [davidxx22/personal-cv](https://github.com/davidxx22/personal-cv)
- Production website: [davidreybali-os.vercel.app](https://davidreybali-os.vercel.app/)
- Vercel project: `davidreybali-os`; production branch: `main`.

GitHub preserves the source and real change history. Vercel publishes the static files after pushes to the connected branch. No backend or database is required for this CV. Renaming the repository preserved its history; the local Git remote uses the current repository URL. The previous website address redirects to the new one.

## Preparing for the instructor discussion

Be ready to demonstrate and explain:

1. How the approved content and layout represent your actual background.
2. How HTML sections, headings, links, and image descriptions organize the CV.
3. How Grid, Flexbox, and media queries adapt the layout to different screens.
4. How filters, Show more, active navigation, and screenshot controls use JavaScript.
5. How reduced motion, keyboard focus, and native dialog behavior support accessibility.
6. How real commits record changes and how GitHub connects to Vercel deployment.

Review the history with `git log --oneline`. Read the implementation alongside this guide so you can explain the code you submit.
