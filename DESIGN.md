# ClevOps visual direction

The approved Phase 1 content, layout, light palette, and typography are the
foundation. Phase 2 adds only the problem statement and ClevOps System scenes.
Do not start Phase 3 until the user approves Phase 2.

## Atmosphere and depth

- Keep most of the site off-white (`#F7F7F4`) with near-black text (`#0D0D0D`).
- Use blue (`#315CFF`) sparingly for actions and meaningful system milestones.
- Use static, low-opacity light fields, thin borders, and soft shadows for depth.
- Keep the hero led by typography. No stock imagery, decorative 3D, particles,
  neon, or floating shapes.
- Use the text ClevOps wordmark until a verified complete brand asset is supplied.

## Motion

- Use the CSS motion tokens for consistent easing, hover timing, and reveal pacing.
- Animate only transforms and opacity. Keep motion brief, deliberate, and finite.
- Content must be readable on first paint and remain visible without JavaScript.
- Play lead-flow progression once on entering the viewport; do not loop or replay
  it on every scroll. Keep the ordered list and its labels accessible throughout.
- Keep hover movement to a couple of pixels. Do not apply hover motion on touch.
- Respect reduced motion, including preference changes during the visit.
- Keep native scrolling. No scroll-jacking, heavy parallax, or animation libraries.
- Avoid permanent `will-change`, timers, and per-frame layout measurements.

## Phase 2 scenes

- Follow the approved hero with a quiet, slightly deeper light surface (`#EEEFEB`).
- Show lost momentum through an interrupted, descending lead journey. Keep the
  copy readable; use broken lines instead of cards or unsupported statistics.
- Bridge to the first near-black scene with a large statement and a continuous
  vertical thread across the surface change. Keep native scrolling throughout.
- Present the six system stages as a single connected horizontal sequence above
  1120px, and a vertical sequence on tablets and phones. Below that threshold the
  six columns are too narrow for the stage descriptions to read well.
- Use IntersectionObserver for finite entry reveals and line activation. All
  text is visible before hydration and without JavaScript; reduced motion keeps
  the complete static system visible, including when changed during the visit.
- Keep Phase 2 styles in `app/components/phase-two.css`. Preserve the approved
  navbar and hero; move only the `our-system` anchor to the full system section.
- No services sections, case studies, footer, extra pages or Phase 3 content.

## Phase 3 services

- Rise out of the near-black system scene into a light surface (`#F2F3EF`) that is
  a shade deeper than the hero, using a gradient band and the continuing thread.
- Lead Generation Systems is the flagship offer and gets the widest, largest
  block. Website Development, SEO and Google/Meta Ads are supporting rows.
- Present capabilities as ruled, connected labels, never equal cards, icon
  grids, bento tiles or bullet lists. Use whitespace, hairlines and typography.
- Automation, CRM, qualification, follow-up and booking belong inside the
  Lead Generation System block, not as standalone services.
- Hover and focus give a row slight contrast, extend one thin blue line and move
  the arrow a few pixels. No scaling, tilt, glow or 3D.
- Keep Phase 3 styles in `app/components/phase-three.css`. The `#services`
  anchor lives on this section; earlier scenes are untouched.
- Reveals reuse the Phase 2 `data-reveal` observer, so all copy is readable
  before hydration, without JavaScript, and under reduced motion.
- No case studies, About, footer or final CTA yet.

## Phase 4 selected work

- Settle one tone deeper than the services scene (`#E8E9E3`) and let the dark
  project plate, not the background, carry the contrast. Keep further near-black
  scenes in reserve for the final CTA.
- One real case study only: Cleaning From The Heart LLC, Seattle. Never publish
  lead, revenue, ranking, traffic or conversion figures that are not measured
  and verified. Outcomes stay qualitative and say so.
- The project title is the largest type in the scene; metadata reads as a
  definition list above it.
- The case study is image-led: the plate is the wider column and carries more
  weight than the narrative beside it. Real work first, explanation second.
- The plate is a restrained browser frame carrying the client's real domain in
  its address chip. With a verified capture it holds a 16:10 screenshot and an
  optional mobile device frame overlapping its lower right; with none it holds
  the code-drawn structure diagram, labelled as a diagram so it is never read
  as the live site. `app/components/case-assets.ts` is the single switch: add
  the capture there and the frame swaps to `next/image` by itself.
- Never publish an invented screenshot, mock dashboard, before/after composite,
  fabricated logo or stock photograph of a project.
- On desktop the plate is `position: sticky` beside the scrolling narrative.
  Below 1121px it becomes an inline block above the narrative, no sticky, no
  scroll-jacking, native scrolling throughout.
- Hover lifts the plate 3px and extends the thin blue line across its top. No
  zoom, perspective, fake browser animation or parallax.
- Keep Phase 4 styles in `app/components/phase-four.css`. The `#work` anchor
  lives on this section and the navbar Work link now resolves to it.
- Anchor ids are unique across the page: `#services` belongs to the services
  section, not the hero strip.

## Phase 5 proof

- Exhale after the dark plate: return to the hero off-white (`#F7F7F4`) through
  a short gradient band and one more length of thread. The scene is calm, light
  and image-led rather than another ruled explanation.
- "Proof over promises": only verifiable material appears here. One named
  client, one real location, one scope, one openable URL. No logo walls, review
  widgets, star graphics, carousels, autoplay or stock portraits.
- The oversized statement is ours and is attributed to ClevOps in full. Never
  style our own words, or any unverified line, as a client quote.
- Vary the scale deliberately: a single raised engagement panel on the white
  surface against three lighter ruled statements. Never six equal cards.
- A missing review is stated as missing. The `.proof-reserve` line is the slot
  for a real testimonial and is replaced by the quote, the person's name, their
  role and the business, never an anonymous or placeholder quote.
- Keep Phase 5 styles in `app/components/phase-five.css`. The `#proof` anchor
  lives on this section; it reuses the Phase 2 `data-reveal` observer, so every
  proof point is readable before hydration, without JavaScript and under
  reduced motion.

## Phase 6 process

- The shortest scene on the page, and deliberately so: the homepage is long by
  this point and Phase 6 is the breath before the final CTA. One heading, one
  supporting sentence, four steps, one paragraph each. Nothing else.
- Settle on `#F1F2ED`, a shade between the proof and services surfaces, with a
  hairline top border rather than a gradient band.
- The opening is two columns, headline against the supporting line and the
  question it answers, so the intro costs one band of height instead of three.
- Four steps on one rail: horizontal above 1120px, vertical below it, matching
  the Phase 4 threshold. Restrained numbering, a 9px node per step and a short
  hairline keyword row. Never four cards, and never more than two keywords per
  step, a third wraps and strands its separator at narrow widths.
- The rail is a connector, not an accent. Its blue pass brightens only while it
  draws and rests at 30% opacity; blue belongs to the nodes.
- Keep Phase 6 styles in `app/components/phase-six.css`. The `#process` anchor
  lives on this section and it reuses the Phase 2 `data-reveal` observer, so
  every step is readable before hydration, without JavaScript, and complete and
  static under reduced motion.
- No About or extra pages. Phase 7 adds the final CTA and the footer.

## Phase 7 final CTA and footer

- The last scene is near-black (`#0D0D0D`), the second and final dark surface,
  held in reserve since Phase 2 for exactly this moment. Off-white text, the
  same blue accent, and a thread carrying down out of the process scene.
- The composition is not the hero's. One full-width statement, a hairline, then
  a single ruled action row: supporting copy left, the two CTAs and the
  "no pressure" line right. Never a centred hero restatement.
- Depth is two static radial fields, one cool wash top-left, one low blue field
  behind the action row. No gradient artwork, particles, 3D or neon. The wash
  fades in once on entry and never loops.
- The closing scene owns the `#start` anchor, which is also where the footer's
  Contact link resolves. It reuses the Phase 2 `data-reveal` observer, so the
  headline and both CTAs are readable before hydration, without JavaScript, and
  complete and static under reduced motion.
- Booking stays centralised: every Book a Call / Book a Strategy Call button on
  the site is the `BookingLink` component reading `NEXT_PUBLIC_BOOKING_URL`. *(Superseded by Phase 14: no booking remains.)*
  Until that variable is set they all render disabled together. Set it once,
  to a GoHighLevel calendar, Calendly or a direct URL, and every CTA goes live.
  Never hardcode a booking URL in a component.
- The footer is one shade lighter (`#111110`) than the closing scene, thin
  dividers, four columns collapsing to two and then one. No newsletter block,
  social icons, partner logos, badges or site map.
- The footer publishes nothing that is not real. Service entries resolve to the
  `#services` section because no individual service pages exist yet; Company
  entries resolve to real sections; About stays inactive with the same
  `aria-disabled` treatment as the navbar, and Privacy and Terms are inert
  placeholders until those routes are built. No email or phone number appears
  until a verified public business address exists, the addresses in `.env` are
  server-side delivery settings, not published contact details.
- The navbar now carries Process alongside Services, Our System and Work, and
  every one of those anchors resolves. About remains the one inactive item.
- Keep Phase 7 styles in `app/components/phase-seven.css`. The only change
  outside it is the narrow-viewport nav rhythm in `globals.css`, needed because
  the navbar gained a fifth link.

## Phase 8 Our System (/our-system)

The first page beyond the homepage. The homepage is approved and unchanged;
this page is a second composition in the same language, not a variation of it.

- **Shared, not duplicated.** The header, footer, buttons, `BookingLink`,
  container, `ScrollScene` reveal observer and every design token are reused
  as they are. `.scene-label` and `.phase-reveal` moved out of
  `phase-two.css` into `globals.css` because they are page-agnostic idioms,
  not Phase 2 styles. The closing scene is still `FinalCta`: it now takes
  optional copy props whose defaults are the approved homepage wording, so the
  homepage renders byte-identically and other pages inherit the composition.
- **Navigation.** Only `/our-system` exists as a route, so Our System points
  at it and every other nav and footer link keeps its homepage section, written
  absolutely (`/#services`, `/#work`, `/#process`, `/#start`) so it
  resolves from any page. Nothing points at a route that has not been built.
  Each item moves to its real route as that page is created. Our System carries
  `aria-current="page"` when it is the current page.
- **Surfaces descend through the page:** hero `#F7F7F4`, the breakdown
  `#EEEFEB`, the system scene near-black, the stage detail `#F2F3EF`,
  tailoring `#EDEEE9`, audience `#E8E9E3`, the closing scene near-black.
  Two dark scenes, the same two the homepage allows itself.
- **Transitions are the established set and nothing else:** hairline between
  adjacent light tones, the settle wash plus one crossing thread entering each
  dark scene, the taller rise gradient coming out of one. The thread sits where
  the composition it enters begins, centred into the system scene, at the
  container's left edge into the stage detail and the closing CTA.
- The hero is deliberately not the homepage hero: one left-aligned column of
  copy with the six-stage spine running the full container width beneath it, as
  an overview the rest of the page then explains. It is the only hero-style
  entrance animation on the page; everything below uses the shared observer.
- Section 2 tells the same loss as the homepage but with a different device:
  elapsing time after the enquiry, with the hand-off line degrading between the
  moments a business is expected to respond. Never a grid of problem cards.
- The system scene is the core: above 1120px a sticky rail tracks the stage
  being read while the six panels scroll past it, below that the rail is
  dropped and the panels are a plain vertical sequence. The rail is decorative
  and repeats what each panel already says, so nothing depends on it, on
  JavaScript, or on motion. Active panels are marked by a node and a hairline,
  never by dimming the inactive copy. Native scrolling throughout, the
  observer reads a band across the middle of the viewport and nothing else.
- Under reduced motion the rail rests complete and static rather than tracking
  the scroll, including when the preference changes during the visit.
- The six stages appear twice by design: named in the system scene, explained
  in the stage detail below it. The detail blocks are ruled, connected labels,
  never cards or icon grids.
- Claims stay inside what is actually built. Qualification is explicitly not
  described as AI scoring; attribution is qualified with "where configured";
  GoHighLevel appears once, secondary to the outcomes, and the page is never
  about it. Track carries the only visual in the section and it is a code-drawn
  pipeline structure labelled as a diagram, no dashboard screenshot, no
  invented figures. The audience section names the conditions the system suits
  and says plainly that the listed trades are not the only ones it fits.
- Keep Phase 8 styles in `app/components/our-system.css`, prefixed `os-`.
  1120px is the page's structural threshold, matching the homepage.

## Phase 9 Services (/services)

The services hub, and the second page beyond the homepage. The homepage and
/our-system are approved and unchanged; this is a third composition in the same
language.

- **Shared, not duplicated.** Header, footer, `BookingLink`, `FinalCta`,
  `ScrollScene`, `.container`, `.scene-label`, `.phase-reveal` and every token
  are reused as they are. `FinalCta` takes the services copy through the props
  added in Phase 8, so the homepage and /our-system closings are untouched.
- **Navigation.** Services now points at `/services` and carries
  `aria-current="page"` there; Our System keeps `/our-system`. Work, Process
  and Contact stay on their absolute homepage anchors and About stays inactive.
  The footer's five service entries resolve to their section on `/services`
  (`/services#seo` and so on) rather than to the homepage `#services` band.
- **Surfaces descend:** hero `#F7F7F4`, the index `#EEEFEB`, the flagship
  near-black, the four channel scenes `#F2F3EF`, the connection `#EDEEE9`, the
  starting points `#E8E9E3`, the closing scene near-black. Two dark scenes, the
  same allowance the other two pages take.
- **Transitions are the established set:** hairlines between adjacent light
  tones, the settle wash plus one thread into each dark scene, the taller rise
  gradient coming out of one. Both threads sit at the container's left edge,
  where the compositions they enter begin.
- The hero is neither of the other two: an oversized statement in the left
  column with a quiet numbered index of the page beside it. It is the only
  hero-style entrance animation on the page.
- One numbering system runs the page. The five services are 01–05 and those are
  also the scene numbers, so the index and the section labels agree; the
  connection is 06, the starting points 07 and the closing scene 08. The index
  section itself is unnumbered, because it is the table of contents.
- Lead Generation Systems is the flagship and takes the dark scene. It
  summarises the offer in the established Traffic → Capture → Qualify →
  Follow Up → Book → Track language and then links to `/our-system`; it never
  restates that page. Automation, CRM, qualification, follow-up, booking and
  pipeline tracking are named inside it, never sold as separate services.
- Website, SEO, Google Ads and Meta Ads are compact editorial scenes sharing one
  surface, a marker column and ruled capability rows, not four full-screen
  sections and never cards, icons or bento tiles. The devices that vary are the
  closing note and the demand contrast that ends Meta.
- **Claims stay inside what is true.** SEO is stated as a long-term channel with
  no ranking promise; Google Ads carries no volume or cost guarantee and says
  returns depend on market, competition, budget and job value; link building is
  explicitly not schemes or private networks.
- The connection diagram is code-drawn: four channels on a bus whose stem lands
  exactly on the spine's rail. Below 1120px the channels fold onto that same
  rail so the diagram stays one unbroken line rather than labels floating above
  a connector.
- No service page is linked, because `/services/*` does not exist. The channel
  scenes carry no CTA at all rather than an inert button; the starting-point
  rows point back up the page to the relevant section.
- Keep Phase 9 styles in `app/components/services-page.css`, prefixed `sv-`.
  1120px is the page's structural threshold, matching the other two.
- Verified at 320, 375, 768, 1024, 1280 and 1440: no horizontal overflow at any
  width, every reveal readable under reduced motion and without JavaScript, and
  a visible focus ring on every link including the index and starting rows.

## Phase 10 Work (/work)

The portfolio page, and the third route beyond the homepage. The homepage,
/our-system and /services are approved and unchanged; this is a fourth
composition in the same language, and the most visual of the four.

- **Shared, not duplicated.** Header, footer, `BookingLink`, `FinalCta`,
  `ScrollScene`, `.container`, `.scene-label`, `.phase-reveal` and every token
  are reused as they are. `FinalCta` takes the work copy through the Phase 8
  props. The client's live URL now lives once in `case-assets.ts` as
  `PROJECT_URL` / `PROJECT_DOMAIN`, imported by both the homepage case study
  and this page, so the two can never drift apart.
- **Navigation.** Work now points at `/work` in both the navbar and the
  footer's Company column, and carries `aria-current="page"` there. Process and
  Contact stay on their absolute homepage anchors and About stays inactive.
  The homepage keeps its `#work` section and its closing "See Our Work" anchor;
  nothing there changed.
- **Surfaces descend:** hero `#F7F7F4`, the featured project `#EEEFEB`, the
  delivery list `#EDEEE9`, the architecture scene near-black, the SEO and
  conversion scenes `#F2F3EF`, the growth foundation `#EDEEE9`, the summary and
  more-work band `#E8E9E3`, the closing scene near-black. Two dark scenes, the
  same allowance the other three pages take.
- **Transitions are the established set:** hairlines between adjacent light
  tones, the settle wash plus one thread at the container's left edge into each
  dark scene, the taller rise gradient coming out of one.
- The hero is none of the other three: a masthead. One oversized statement
  across the full container, the position and the two actions beneath it, then
  a ruled ledger carrying the featured project's real metadata. It is the only
  hero-style entrance animation on the page. The page's own action, View
  Featured Project, leads the row, but `BookingLink` keeps the blue primary,
  because blue means booking everywhere else on the site.
- **One real case study, and it says so.** Cleaning From The Heart LLC,
  Seattle. Scene 09 states plainly that more work is being documented rather
  than filling the band with invented projects, fake logos, stock imagery or a
  portfolio grid. Outcomes in scene 07 are qualitative and carry the line
  "Performance figures are published only when measured and verified."
- The plate is the Phase 4 browser frame scaled up: larger chrome, larger
  diagram type, and the wider of the two columns. Above 1120px it is
  `position: sticky` beside the scrolling challenge narrative; below that it is
  an inline block above it. No sticky, no scroll-jacking, native scrolling
  throughout. It reads the same `case-assets.ts` switch as the homepage, so
  adding the verified capture there swaps both pages at once.
- Scene 04 carries the page's second visual: a code-drawn diagram of how the
  service architecture is organised, by the role each level plays. It is
  labelled as a diagram twice, in the caption above it and in the note below
  it, and is never a page-by-page map of the live site.
- **Claims stay inside what is true.** The SEO scene makes no ranking claim and
  says why. The conversion scene states explicitly that automated
  qualification, CRM workflows and follow-up sequences are part of the wider
  ClevOps system and are not claimed for this project, which covers the website
  side of the lead flow.
- Keep Phase 10 styles in `app/components/work-page.css`, prefixed `wk-`.
  1120px is the page's structural threshold, matching the other three.
- Verified at 320, 375, 768, 1024, 1280 and 1440: no horizontal overflow at any
  width, sticky active only above 1120px, every reveal readable before
  hydration, without JavaScript and under reduced motion.

## Phase 11 Process (/process)

The fourth route beyond the homepage, and the shortest page on the site. The
homepage, /our-system, /services and /work are approved and unchanged; this is
a fifth composition in the same language.

- **Shared, not duplicated.** Header, footer, `BookingLink`, `FinalCta`,
  `ScrollScene`, `.container`, `.scene-label`, `.phase-reveal` and every token
  are reused as they are. `FinalCta` takes the process copy through the Phase 8
  props, so the other closings are untouched.
- **Navigation.** Process now points at `/process` in both the navbar and the
  footer's Company column, and carries `aria-current="page"` there. Contact
  stays on its absolute homepage anchor and About stays inactive. The homepage
  keeps its `#process` breath scene; nothing there changed.
- **Deliberately short.** This page answers one question, what happens after
  you book a call, so it is the shortest of the five by measurement, not by
  intention alone: 9790px at 1280 against 14198px for /our-system. Twelve
  briefed sections are composed as eight scenes; compatible steps share a
  surface rather than each taking a full screen.
- **Surfaces descend:** hero `#F7F7F4`, the overview `#EEEFEB`, Discovery and
  Strategy `#EDEEE9`, Build `#E8E9E3`, Connect & Test near-black, Launch and
  Optimize `#F2F3EF`, working together `#EDEEE9`, timelines `#E8E9E3`, the
  closing scene near-black. Two dark scenes, the same allowance every other
  page takes.
- **Transitions are the established set:** hairlines between adjacent light
  tones, the settle wash plus one thread at the container's left edge into each
  dark scene, the taller rise gradient coming out of one.
- The hero is none of the other four: the oversized statement holds the left
  column and a compact rail of the six stages sits beside it, bracketed into
  the three phases of an engagement, before we build, building, after launch.
  The grouping is the information. One rail runs unbroken behind the phase
  labels; the labels carry an exact height so one custom property keeps every
  node and the rail in step rather than guessing at a line box.
- One numbering system runs the page. The six stages are 01–06 and those are
  the scene numbers too; working together is 07, timelines 08 and the closing
  scene 09. The overview is unnumbered, because it is the contents page for the
  numbers below it, and its em-dash marker is `aria-hidden`.
- The overview rail is six steps on one connector: horizontal above 1120px,
  vertical below. The blue pass brightens only while it draws and rests at 30%;
  blue belongs to the nodes.
- Connect & Test takes the dark scene because it is the technical moment, and
  its checks are stated as checks. **No pass rates, QA scores or any other
  figure we do not measure.** Timelines names the shape of each kind of project
  and says plainly that a date comes after we have seen the scope, never
  "7 days / 14 days / 30 days". Launch is described as a starting point, with
  no promise of a perfect first week. Communication describes scope, milestones
  and approval points without inventing a reporting cadence or a Slack channel.
- Keep Phase 11 styles in `app/components/process-page.css`, prefixed `pr-`.
  1120px is the page's structural threshold, matching the other four.
- Verified in a browser at 320, 375, 768, 1024, 1280 and 1440: `scrollWidth`
  equals `clientWidth` and no element crosses the viewport at any width; the
  hero rail nodes sit within 1px of their rows throughout; all 81 revealed
  elements are present and fully opaque with JavaScript disabled and under
  reduced motion.

## Phase 12 About (/about)

The fifth route beyond the homepage, and the page that has to make the company
feel human without inventing a history for it. The homepage, /our-system,
/services, /work and /process are approved and unchanged; this is a sixth
composition in the same language.

- **Shared, not duplicated.** Header, footer, `BookingLink`, `FinalCta`,
  `ScrollScene`, `.container`, `.scene-label`, `.phase-reveal` and every token
  are reused as they are. `FinalCta` takes the about copy through the Phase 8
  props, so the other closings are untouched.
- **Navigation.** About now points at `/about` in both the navbar and the
  footer's Company column, and carries `aria-current="page"` there. It was the
  one inactive item on the site, so every navbar and Company link now resolves
  to a route of its own. Only the individual service pages and the legal pages
  are still unbuilt, and those remain as they were. `/book-a-call` does not
  exist yet: booking stays centralised in `BookingLink`.
- **Shorter than /our-system, by measurement.** 9262px at 1280 against 14198px
  for /our-system and 9790px for /process. Ten briefed sections are composed as
  eight scenes plus the hero and the closing CTA; compatible ideas share a
  surface rather than each taking a full screen.
- **Surfaces descend:** hero `#F7F7F4`, why we exist `#EEEFEB`, what we believe
  `#E8E9E3`, the growth chain near-black, what we do and who it suits `#F2F3EF`,
  the founder `#EDEEE9`, how we operate and what we do not do `#E8E9E3`, the
  closing scene near-black. Two dark scenes, the same allowance every other
  page takes.
- **Transitions are the established set:** hairlines between adjacent light
  tones, the settle wash plus one thread at the container's left edge into each
  dark scene, the taller rise gradient coming out of one.
- The hero is none of the other five: the statement is the whole composition.
  A two-tier headline puts the premise in the dimmed heading grey and gives the
  conclusion full weight; a ruled row holds the supporting copy against the two
  actions; a short principles rail names what the page is about to argue. The
  premise and the conclusion are one sentence, so the space between them is
  explicit and the block only breaks the line.
- One numbering system runs the page: why we exist 01, what we believe 02, the
  growth chain 03, what we do 04, who we work best with 05, the founder 06, how
  we operate 07, what we do not do 08 and the closing scene 09.
- The growth chain takes the dark scene because it is the argument the rest of
  the page rests on. It is a code-drawn diagram, labelled as one, of the six
  links a customer moves through, horizontal above 1120px, vertical below,
  like every other rail on the site. The four limits beneath it ("more ad spend
  cannot fix a poor landing page") are the same point said plainly and make no
  claim about anybody's results.
- **The founder section carries only what is verified.** A name, a role and
  what the company was built around. No years in business, client count, team
  size, certification, award, office or revenue figure. Until a real photograph
  is registered in `founder-asset.ts` the portrait column is a labelled
  placeholder plate, never a stock portrait, an avatar or a generated face,
  which is exactly what scene 08 says we do not do. That file is the single
  switch, in the same shape as `case-assets.ts`: add the photo and the plate
  becomes a `next/image` on its own.
- Scene 07 turns a small operation into a straight answer rather than implying
  a larger one, no "full-service agency", no team claim. Scene 04 names the
  four capability areas in one line each and links to `/services` instead of
  restating it; scene 05 names the fit conditions and says the listed trades
  are examples rather than limits, matching the audience section on
  /our-system.
- Keep Phase 12 styles in `app/components/about-page.css`, prefixed `ab-`.
  1120px is the page's structural threshold, matching the other five.
- Verified in a browser at 320, 375, 768, 1024, 1280 and 1440: `scrollWidth`
  equals `clientWidth` and no element crosses the viewport at any width; all 65
  revealed elements are present and fully opaque with JavaScript disabled and
  under reduced motion.

## Hero glass system (revision pass)

The hero is the one scene that sits over moving footage, so readability there
is bought by frosted surfaces rather than by covering the video. Four surfaces
carry that treatment and they all draw from one set of tokens declared on
`.hero`, so they read as panes of the same glass rather than four unrelated
cards: the text pane, the pipeline pane, the secondary action and the service
strip.

- Tokens: `--glass-fill` / `--glass-fill-soft` (white gradients, 38/27/32% and
  34/23/28%), `--glass-blur` / `--glass-blur-soft` (`blur(26px) saturate(138%)`
  and `blur(20px) saturate(130%)`), `--glass-border` / `--glass-border-soft`
  (white at 42% and 34%), `--glass-shadow` / `--glass-shadow-soft`.
- Every pane leads with an inset top highlight before its drop shadow. That lit
  edge is what makes a pane read as a physical sheet instead of a tinted
  rectangle; it is not optional decoration.
- The fills stay under 40% white on purpose. The brief is a frosted pane that
  the footage still shows through, not a milky card. If a surface seems to need
  more white, raise the blur first.
- The text pane and the service strip both bleed by `--glass-bleed`, so their
  padding cancels out and the type inside keeps the container's left edge.
  The bleed is always smaller than `--page-gutter`, so no pane can overflow.
- The secondary action keeps the standard button footprint and `--radius`. It
  gets the glass so it stops disappearing over footage, not to become a second
  primary button.

**Declare `backdrop-filter` only, never hand-write `-webkit-backdrop-filter`
next to it.** Next's CSS pipeline adds the prefix itself, and when both are
present in the source it collapses the pair down to the prefixed property
alone, which current Chrome no longer honours. The blur is then silently
dropped in the browser while still looking correct in the stylesheet. The
`@supports` fallback at the end of the hero block covers engines with no
backdrop-filter at all by trading the blur for a little more white.

## Whole-page rules (refinement pass)

These were settled by reading the finished homepage as one composition. They
apply across all phases and override anything narrower above.

- **Transitions follow the surface change, not habit.** Adjacent light tones
  meet on a hairline (hero → problem, services → work, proof → process,
  CTA → footer). A large light-to-light step gets a short rise carrying the
  thread (work → proof). Entering a dark scene, the light surface settles under
  a 0 → 5% black wash and one thread crosses the cut (problem → system,
  process → CTA). Coming out of a dark scene gets the taller rise gradient
  (system → services). No other transition devices, that is the whole set.
- The crossing thread sits wherever the composition it enters begins: centred
  into the system scene, at the container's left edge into the closing CTA.
- **One body tone.** Paragraph text on light surfaces is `--color-body`, and
  `#b4b7b0` on dark. Section labels, captions and metadata are `#5e615a`; a
  dimmed span inside a large heading is `#70736d`. Do not introduce further
  near-identical greys, if a new tone seems needed, it is probably one of
  these three.
- **One soft accent on dark.** `--color-accent-soft` (`#98adff`) is the only
  light-blue: scene-label numerals on dark and footer link hover. `#315cff`
  stays the action and node blue everywhere.
- Section descriptions under an `h2` are capped at 540px so the three light
  scenes read as one system. Section `h2` is `clamp(42px, 5vw, 68px)` at
  weight 490; the opening statement, the two dark scenes and the process
  breath are the deliberate exceptions to that size.
- **Spacing earns its place.** Section padding, the gap before a ruled block
  and the gap between blocks are the three rhythms; they were tightened by
  roughly 10% through the middle of the page so that the space that remains
  reads as hierarchy rather than as default margin. The hero, the dark system
  scene and the closing CTA stay the most spacious moments by design.
- The case study's optional mobile capture is a corner accent: a cropped
  9:16 device at roughly a fifth of the frame width, so a real desktop
  screenshot stays the dominant visual. See `case-assets.ts` for the switch.

## Homepage redesign (2026-09-25)

The homepage was recomposed on a user-supplied agency reference layout, keeping
the approved ClevOps copy. It supersedes the Phase 2–7 homepage composition
above; those sections still describe the other pages' shared idioms.

- Order: video hero with a glass system panel → service strip → service cards →
  dark problem/system scene with glass stage tiles → near-black process with a
  CTA row → selected build → proof → FAQ → video closing scene → shared footer.
- Components are `home-*.tsx`, styles are `app/components/home.css`, prefixed
  `hm-` and scoped under `.hm-page`. The dark header, pill buttons and the rest
  apply to the homepage only; other routes are unchanged. The old homepage
  components (`hero.tsx`, `problem-statement.tsx`, `clevops-system.tsx`,
  `services.tsx`, `work.tsx`, `proof.tsx`, `process.tsx`, phase-two–six CSS) are
  no longer imported by any route.
- Where the reference relies on things ClevOps does not have, the slot carries
  the real equivalent: no logo wall (a typographic service strip), no stat
  tiles (system stages), no star ratings or review cards (engagement facts and
  publishing standards, plus the reserve line), no quote form (the call agenda
  and `BookingLink`), no Instagram or social bands.
- Card visuals are code-drawn, carry no figures and are `aria-hidden`.
- FAQ answers only restate commitments already made on /process, /services and
  in the proof standard. It uses native `<details>`, so it works without JS.
- Verified at 320, 375, 768, 1024, 1280 and 1440: no horizontal overflow, and
  every reveal is fully visible without JavaScript and under reduced motion.

## Inner-page redesign (2026-09-26)

/our-system, /services, /work, /process and /about were recomposed in the
homepage's theme, on the Leed Agency inner-page patterns: a short dark hero with
a glass side panel, light / grey / dark bands, numbered hairline cell grids,
ruled rows, numbered step rails, split scenes with a sticky argument column, an
inline "not sure where to start" row, and the homepage's video closing scene.

- **The homepage is not touched by any of this.** The kit lives in
  `app/components/site-ui.css` (prefix `ui-`, scoped under `.ui-page`) and
  `app/components/ui.tsx`. Only the five inner pages import them; the homepage
  keeps `home.css` and its `home-*.tsx` components unchanged.
- **Copy is imported, not retyped.** Each page imports its content arrays from
  the earlier phase components (now `export`ed), so the approved wording stays
  byte-identical. Copy that lived inline in JSX (heroes, intros, the four
  service channels) was carried over verbatim. The arrays in `system-stages.tsx`
  are copied instead, because it is a client module.
- The earlier page components and their stylesheets (`our-system.css`,
  `services-page.css`, `work-page.css`, `process-page.css`, `about-page.css`,
  `final-cta.tsx`) are no longer rendered by any route. They remain on disk as
  the source of the exported content.
- Content rules are unchanged: no metrics, ratings, logos or testimonials. The
  founder column is still the labelled placeholder until `founder-asset.ts`
  registers a real photograph, and the case plate still reads `case-assets.ts`.
- Verified at 320, 375, 768, 1024, 1280 and 1440: no horizontal overflow on any
  page, and every reveal is fully visible without JavaScript and under reduced
  motion.

## Phase 14 Start a Project (/start-a-project), replaces Phase 13

The site no longer converts through booked calls. Every primary CTA is
"Start a Project" and leads to a project enquiry form; the form's submit is
"Request a Proposal". Earlier phase notes that mention `BookingLink`,
`booking.ts` or `/book-a-call` are historical: those files are deleted.

- **One link component.** `app/components/project-link.tsx` exports
  `ProjectLink` (default label "Start a Project", `source` → `data-cta`) and
  `PROJECT_PAGE`. On `/start-a-project` the navbar button gets
  `aria-current="page"` and jumps to `#project-form`.
- **Removed:** `/book-a-call`, `booking.ts`, `booking-link.tsx`,
  `booking-calendar.tsx`, `book-page.css`, the `NEXT_PUBLIC_BOOKING_URL` /
  `NEXT_PUBLIC_BOOKING_MODE` reads and the CSP frame-src exception (now plain
  `frame-src 'self'`). `/book-a-call` 308-redirects to `/start-a-project`
  (`next.config.ts`) and is out of the sitemap.
- **Copy rule.** Wording about ClevOps' own conversion never promises a call,
  a calendar or a response time; the next step is "the most sensible next
  step" (email questions, proposal, audit or conversation). Appointment
  booking as part of the *client systems ClevOps builds* is product language
  and stays.
- **Page.** One light scene, `sp-` prefix in `app/components/start-page.css`:
  argument left (sticky above 1120px, headline, lead, three-step "What
  happens next", reassurance), the form right on a white card. Headings inside
  are scoped `.ui-page .sp-*` so the kit's `.ui-page h2` display size cannot
  reach them.
- **Form** (`project-form.tsx`, client). Two fieldsets: About you (name,
  business, email, required phone, optional website), The project (services
  checkboxes, details textarea, optional budget select). Phone is `type=tel`,
  any country: optional leading +, digits/spaces/dots/dashes/brackets, max 30
  characters and 7–15 digits. No contact-preference question (removed
  2026-09-27).
  Honeypot `referralCode`. Validates with the same parser as the server
  (`enquiry-validation.ts` over `enquiry-options.ts`), keeps values until a
  200, guards double submission, focuses the first invalid field, announces
  errors via `role="alert"`, then swaps to an inline success message and
  focuses it. No thank-you page.
- **API** `app/api/leads/route.ts` (POST only): same-origin check, JSON only,
  16 KB body cap, server-side validation, honeypot answered as a silent 200,
  per-IP limit of 5 well-formed submissions per 15 minutes (in-memory, per
  instance on serverless; see `rate-limit.ts`). Emails go through Resend's REST
  API with `RESEND_API_KEY` read server-side only. The ClevOps notification
  (`LEADS_NOTIFY_EMAIL` from `LEADS_FROM_EMAIL`, Reply-To = the lead) is
  critical: if it fails the request returns 500 and the visitor retries. The
  auto-reply (`AUTO_REPLY_FROM_EMAIL`) is best-effort: a failure is logged
  and the submission still succeeds.
- Verified 2026-09-27: lint, typecheck, build; 320–1440 on every route with no
  overflow; keyboard order, radio arrows, focus rings, reduced motion; API
  400/403/405/413/415/429/500 paths; one real send accepted by Resend.

## Production audit (2026-09-27)

- Removed 33 files unreachable from any route (old homepage/booking-era
  components and their stylesheets) and the dead rules they left in
  globals.css, phase-seven.css and site-ui.css. home.css still carries unused
  `hm-vis-*` illustration rules; left in place because the homepage is
  user-owned.
- Added app/robots.ts (disallows /api/), a summary Twitter card, and minimal
  Organization + WebSite JSON-LD in the root layout. No OG image yet.
- The homepage system section background now loads background-2560.jpg (382 KB) instead
  of the 5607px original (1.9 MB, still in public/). HeroVideo pauses while off
  screen.
- CSP frame-src is now none; X-Powered-By is off.
- Lead API: X-Real-IP is preferred for rate limiting, aborted uploads return
  400, and bidi control characters are stripped. The rate limiter is still
  per-instance; replace it with a persistent one before paid traffic.

## Services hub on the Leed services layout (2026-09-28)

/services was cut down to the reference's structure: short hero (no side
panel), five photo cards, a 3 × 2 problem grid with the fix for each, the
inline "still not sure" row, then the usual closing scene.

- New `services-hub.tsx` + `services-hub.css` (prefix `svh-`, loaded by
  /services only). `site-ui.css`, `ui.tsx` and every other page are untouched.
- The flagship detail, the four channel scenes and the connection diagram left
  the hub; they already live on `/services/[slug]`. Cards and problem links go
  to those pages. Each card keeps its old section id, so `/services#seo` links
  (e.g. from /about) still land on the right service.
- Card copy is the approved `services-index` summaries. The problem grid is the
  four approved `startingPoints` plus two new ones (ad spend without
  enquiries → Google Ads; can't tell what's working → Lead Generation System).
- The reference's "projects we've shipped" gallery was not carried over: there
  is no verified client work to show. The reference's inline quote form was
  not either: /start-a-project stays the single enquiry route.
- Verified at 320–1440: no horizontal overflow.

## Legal pages (/privacy, /terms), 2026-09-28

- One light scene per page, `lg-` prefix in `app/components/legal-page.css`,
  loaded by those two routes only on top of the site-ui kit. The structure is
  shared in `app/components/legal.tsx`: title block with Last updated / Applies
  to, then a numbered contents list beside the text (sticky above 1120px,
  stacked above it below, one column under 640px). Text measure is capped at
  720px. No reveals, no footage, no motion.
- **Business details live in `app/components/legal-details.ts`** (finalised
  2026-09-28 from the owner's brief): ClevOps, an independent agency operated
  from Pakistan by its founder, Zain; governing law Pakistan; hosting Vercel
  (from public DNS); email provider Google (Gmail). ClevOps is never called
  an LLC, Ltd or registered company, and no address, court or registration
  number is published. The draft's "To be confirmed" markers are gone.
- **Official contact email:** `CONTACT_EMAIL` in `legal-details.ts`
  (clevops.systems@gmail.com, confirmed by the owner 2026-09-28) for
  general, privacy, deletion and legal enquiries. The contact block links it
  with a prefilled subject. clevops.co has no MX record, so the auto-reply
  (sent from the verified Resend domain) carries `CONTACT_EMAIL` as its
  Reply-To; verified via the Resend API on a real send. The lead
  notification's Reply-To is still the lead.
- Retention: /privacy states up to 12 months after the last meaningful
  interaction for enquiries that don't proceed, deleted by hand from Gmail
  (a consumer Gmail account has no auto-delete). Nothing enforces it.
- /start-a-project carries one privacy notice under the submit button
  (`.sp-privacy` in `start-page.css`); no consent checkbox, fields unchanged.
- JSX gotcha seen here: text after a link or `{value}` that starts with a
  space *and* contains an entity such as `&ldquo;` lost its leading space in
  the build. Use an explicit `{" "}` there.
- The Privacy Policy describes the data flow as the code has it: enquiry →
  `app/api/leads` → two emails through Resend, no database, IPs only in the
  in-memory rate limiter, no cookies, analytics or third-party scripts.
  **If analytics, conversion tracking, a CRM hand-off or a database is added,
  /privacy must be updated in the same change.**
- Footer Privacy and Terms are now real links (styles in `phase-seven.css`);
  both routes are in the sitemap with `lastModified` set to the Last updated
  date.
- Verified: lint, typecheck, build; both routes 200 with their own title,
  description and canonical and one h1; no Set-Cookie and no cookies or
  storage in the browser; 320–1440 with no horizontal overflow; footer links
  navigate from /, /about, /privacy and /terms; every internal link on the
  site returns 200.

## Future scenes (not implemented yet)

- Conversion tracking on the enquiry success state (not added yet; update
  /privacy section 5 first).

- Vary layout, spacing, and related background tones as the story progresses.
- Use generous pauses and occasional full-width moments, rather than repeating
  a heading, three cards, and a button in every section.
- Reserve further near-black scenes for a significant case study or the final
  CTA. Use off-white text and the same blue accent.
- Keep the commercial outcome clear: traffic becomes qualified leads and booked
  appointments through one connected sales system.
- Check responsive layout, keyboard access, reduced motion, and performance
  whenever extending the visual language.
