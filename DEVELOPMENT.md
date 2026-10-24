# Understanding the CV website

## Design decisions

The redesigned layout follows the approved black-and-white reference: a portrait and contact sidebar, rounded white information cards on a pale canvas, compact timelines, and a project gallery. The grayscale treatment is applied through CSS, preserving the original image files. Its content and implementation were created for David's approved CV rather than copied from a downloaded template.

The introduction identifies David and his focus. About explains his background and career objective. Skills show tools without unverified proficiency scores. Projects provide concrete examples. Journey combines education, relevant experience, and completed training. Contact provides email, phone, and profile links.

## How the files work together

`index.html` contains the structure and content: one main heading, section headings, eight project cards, local images, and actual links. Keeping content in HTML lets visitors read it and follow links if JavaScript is unavailable.

`styles.css` controls presentation. Variables in `:root` hold the palette. CSS Grid arranges the sidebar/content shell, skills, projects, and timeline entries; Flexbox aligns navigation and buttons. Media queries change columns and spacing on narrower screens. The sidebar stacks above the content, the gallery becomes one column, and navigation becomes a toggle menu on phones. The desktop profile sidebar has its own scroll area so every contact link remains reachable on short screens.

`script.js` adds interactions after content loads. The `defer` attribute lets the HTML finish parsing before the script accesses elements.

## Mobile navigation

The toggle changes `aria-expanded`, its accessible label, and the navigation's open class. Closed mobile navigation is inert, so hidden links cannot receive keyboard focus. Selecting a link, clicking outside, or pressing Escape closes it. A media query listener updates navigation when the browser crosses the mobile breakpoint.

## Project filters

Each project has a `data-category`: `individual` or `group`. Buttons compare that value with their `data-filter` value and set unmatched cards to `hidden`. Status text announces the visible count. There are three individual and five group projects.

## Project dialogs

Detail buttons identify entries in `details`. The script uses card content to build a dialog containing the preview, title, description, technologies, and links. It creates elements and assigns text with `textContent` rather than inserting untrusted HTML.

The native `dialog` element provides modal keyboard behavior. Escape closes it, scrolling behind it is locked, and focus returns to the opening button. Browsers without dialog support retain normal project content and links.

## Reveals and navigation state

`IntersectionObserver` checks when sections enter the viewport. It reveals content once and updates the current navigation link. Content remains visible if observers are unavailable. Visitors requesting reduced motion receive content without reveal movement or smooth scrolling.

## Accessibility choices

- A skip link goes to main content; keyboard focus is visible.
- Meaningful images have descriptions; decorative icons are hidden from assistive technology.
- Filters expose their pressed state and announce a live status message.
- New-tab links announce that behavior and use `rel="noopener noreferrer"`.
- Email and phone actions use `mailto:` and `tel:` to open the visitor's configured application.
- CSS includes print styles and reduced-motion support.

## Preparing for the instructor discussion

Be ready to explain how the interview shaped the content; why the monochrome sidebar and card layout suits the new reference; how semantic HTML, Grid, Flexbox, and media queries create the design; how filters, dialogs, and mobile navigation work; and how accessibility choices improve usability.

GitHub stores the source and history; Vercel hosts the public website. Real commits record setup, implementation, interactions, and documentation/deployment work. Inspect them with:

```powershell
git log --oneline
```
