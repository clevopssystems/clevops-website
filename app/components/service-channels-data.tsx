import type { ReactNode } from "react";
import type { RowItem } from "./ui";

/**
 * The four channel services, written once and read by both the /services hub
 * and each service page under /services/[slug].
 */
export type Channel = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  body: ReactNode;
  listHeading: string;
  rows: RowItem[];
  note?: ReactNode;
};

export const channels: Channel[] = [
  {
    id: "website-development",
    index: "02",
    label: "Website Development",
    title: <>Websites built around what you want customers <span className="ui-dim">to do next.</span></>,
    lead: (
      <>
        A website is not a brochure with better typography. It is where every
        other channel sends people, and the point at which interest either
        becomes an enquiry or quietly ends.
      </>
    ),
    body: (
      <>
        We start from the decision a visitor is trying to make, then build the
        structure, pages and paths that help them make it, and the
        tracking that shows whether it worked. Design serves that argument
        rather than the other way round.
      </>
    ),
    listHeading: "What the build covers",
    rows: [
      { term: "Strategy and architecture", detail: "What the site has to prove, who it is proving it to, and the page structure that carries the argument in the right order." },
      { term: "UX and conversion paths", detail: "A clear next action on every page, with the friction between interest and enquiry removed rather than decorated." },
      { term: "Mobile performance", detail: "Most local service traffic arrives on a phone on a poor connection. The site is built for that first, not adapted to it afterwards." },
      { term: "Technical SEO foundations", detail: "Crawlable structure, clean markup, sensible URLs and metadata, so search work later builds on something solid." },
      { term: "Tracking and CRM integration", detail: "Forms, calls and events wired into analytics and into your CRM, so an enquiry lands somewhere it can actually be worked." },
    ],
    note: (
      <>
        A website is a business asset with a job to do. When it is not producing
        enquiries, that is a structural problem before it is a visual one.
      </>
    ),
  },
  {
    id: "seo",
    index: "03",
    label: "SEO",
    title: <>Build visibility that <span className="ui-dim">compounds over time.</span></>,
    lead: (
      <>
        Search is the channel where the work done this quarter keeps paying in
        the next one. It is also the slowest, and any honest description of it
        has to say so.
      </>
    ),
    body: (
      <>
        The work is making your site genuinely the best answer to the searches
        that matter to your business, then making that easy for a search engine
        to establish. We do not promise positions, because nobody controls them.
      </>
    ),
    listHeading: "Where the work goes",
    rows: [
      { term: "Technical SEO", detail: "Crawling, indexing, speed, structure and the errors that quietly hold a site back before content is even considered." },
      { term: "Search intent", detail: "Separating searches made by someone ready to buy from searches made by someone reading, and writing for each accordingly." },
      { term: "On-page and content structure", detail: "Pages built around one subject each, with the headings and depth that make what the page answers unambiguous." },
      { term: "Internal linking", detail: "The relationship between your pages made explicit, so both readers and crawlers can see which pages matter most." },
      { term: "Local SEO", detail: "Your Google Business Profile, service-area and location pages, and the consistency of your details across the places that get checked." },
      { term: "Authority", detail: "Earning relevant mentions and links where they genuinely exist to be earned. No bought link schemes or private networks." },
    ],
    note: (
      <>
        SEO is a long-term channel. It usually takes months to move, and on its
        own it is not the right answer when a business needs enquiries this
        quarter, that is what paid media is for.
      </>
    ),
  },
  {
    id: "google-ads",
    index: "04",
    label: "Google Ads",
    title: <>Capture active demand at the moment <span className="ui-dim">people are searching.</span></>,
    lead: (
      <>
        Someone typing &ldquo;emergency plumber near me&rdquo; has already
        decided they need the service. The only question left is who they call.
      </>
    ),
    body: (
      <>
        Google Ads is the fastest route into that moment and the easiest place
        to waste money when the account is not built around intent. The target
        is qualified enquiries at a cost that makes sense for your job value,
        not clicks, and not impressions.
      </>
    ),
    listHeading: "How the account is built",
    rows: [
      { term: "Intent and keyword strategy", detail: "Which searches signal a buyer, which signal research, and which are worth excluding before they cost anything." },
      { term: "Campaign structure", detail: "Campaigns and ad groups organised so budget, geography and message can be controlled per service rather than averaged together." },
      { term: "Landing-page alignment", detail: "The page answers the search. A click on one specific service does not land on a homepage and ask the visitor to start again." },
      { term: "Conversion tracking", detail: "Forms and calls measured properly, so optimisation runs on enquiries instead of on whichever keyword collected the most clicks." },
      { term: "Lead-quality optimisation", detail: "Feeding back what happened after the enquiry (booked, out of area, out of scope) so spend moves toward the work you want." },
      { term: "Remarketing where it fits", detail: "For considered purchases with a longer decision, staying present with people who already visited. Not every business needs it." },
    ],
    note: (
      <>
        What a campaign returns depends on your market, competition, budget and
        job value. If the numbers look unlikely to work, we will say so before
        anything is spent.
      </>
    ),
  },
  {
    id: "meta-ads",
    index: "05",
    label: "Meta Ads",
    title: <>Create demand before someone <span className="ui-dim">starts searching.</span></>,
    lead: (
      <>
        Nobody opens Facebook or Instagram looking for a contractor. Meta works
        by interrupting attention with an offer worth stopping for.
      </>
    ),
    body: (
      <>
        That makes the offer and the creative the campaign, far more than the
        targeting settings. It also makes follow-up essential: a Meta lead was
        not looking for you a minute earlier, so what happens after the enquiry
        does much of the work.
      </>
    ),
    listHeading: "What the campaign involves",
    rows: [
      { term: "Audience strategy", detail: "Who the offer is for, where they are, and which signals are worth targeting on rather than guessing at a demographic." },
      { term: "Offer positioning", detail: "A reason to act now that stands up in front of a cold audience. This is usually the difference between a campaign working and not." },
      { term: "Creative and messaging", detail: "Ads that earn the stop and then say something specific, run in enough variations to learn what the audience responds to." },
      { term: "Destination and lead forms", detail: "A landing page or an in-platform lead form, chosen for the trade-off between volume and lead quality in your market." },
      { term: "Tracking", detail: "Pixel and conversion events set up so the platform optimises toward enquiries and you can see what each campaign produced." },
      { term: "Follow-up connection", detail: "Leads routed straight into the CRM and into a sequence that responds immediately, because interrupted interest cools quickly." },
    ],
  },
];
