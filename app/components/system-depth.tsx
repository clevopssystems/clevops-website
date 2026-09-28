/**
 * Sections 4-9 - the six stages again, one block each, in depth. Ruled,
 * connected labels rather than cards or icon grids. Only the Track block
 * carries a visual, and it is a code-drawn structure diagram labelled as one,
 * never a screenshot or an invented dashboard.
 */
type Layer = {
  index: string;
  name: string;
  headline: string;
  body: string[];
  listHeading: string;
  items: { term: string; detail: string }[];
  note?: string;
  diagram?: boolean;
};

export const pipeline = ["New", "Contacted", "Qualified", "Booked", "Won"];

export const layers: Layer[] = [
  {
    index: "01",
    name: "Traffic",
    headline: "Demand is bought, earned, or already arriving.",
    body: [
      "Before adding spend, it is worth knowing which of those three a business is actually short of. Some need more demand. Many already have enough and lose it further down.",
      "Where new demand is needed, the channel is chosen for how the service is bought: whether people search for it at the moment they need it, or have to be shown it first.",
    ],
    listHeading: "Channels we work with",
    items: [
      {
        term: "Google Ads",
        detail:
          "Reaches people searching for the service now. Usually the fastest route to enquiries that already have intent behind them.",
      },
      {
        term: "Meta Ads",
        detail:
          "Creates demand instead of waiting for it. Suits offers that can be understood quickly and a clearly defined service area.",
      },
      {
        term: "SEO",
        detail:
          "Builds visibility that compounds. Slower to start, and it does not stop the moment a budget is paused.",
      },
      {
        term: "Existing website traffic",
        detail:
          "Most sites already receive visitors. Converting more of them costs nothing further in media.",
      },
      {
        term: "Referrals and direct",
        detail:
          "Word of mouth still arrives as a form, a call or a message, and deserves exactly the same handling as paid demand.",
      },
    ],
    note:
      "Not every business needs every channel. A company with steady referrals and a weak follow-up process does not need more traffic, it needs the rest of the system. We start from where the demand already is.",
  },
  {
    index: "02",
    name: "Capture",
    headline: "Traffic only matters if the next step is clear.",
    body: [
      "A visitor decides in seconds whether a business does what they need, covers where they are, and is worth contacting. The page has to answer that before it asks for anything.",
      "So the site or landing page is built around one action. Everything else on the page supports that action, or it is not on the page.",
    ],
    listHeading: "What conversion depends on",
    items: [
      { term: "The page", detail: "One page, one decision, no competing calls to action." },
      { term: "Offer clarity", detail: "What you do, who it is for, where you do it, and what happens next." },
      { term: "Lead forms", detail: "Short enough to finish on a phone, structured enough to be useful afterwards." },
      { term: "Mobile experience", detail: "Most local service traffic is mobile, so the mobile layout is the primary one." },
      { term: "Tracking", detail: "Form submissions, calls and key clicks recorded as events rather than estimated." },
      { term: "Attribution", detail: "Where it can be configured, the enquiry carries its source into the CRM with it." },
    ],
  },
  {
    index: "03",
    name: "Qualify",
    headline: "Sorting the enquiry before it costs anyone time.",
    body: [
      "Enquiries are not equal. Some are outside the service area, some are for work you do not take, and some are months away from a decision.",
      "Qualification puts that assessment at the front, where it is cheap, using questions the enquiry itself can answer.",
    ],
    listHeading: "What leads can be sorted on",
    items: [
      { term: "Form questions", detail: "A small number of deliberate questions, chosen for what they let you decide." },
      { term: "Service area", detail: "Location checked against where you actually work, before anyone drives anywhere." },
      { term: "Project type", detail: "The kind of job, so the right person or calendar receives it." },
      { term: "Budget", detail: "A range, where asking for one suits the service and the market." },
      { term: "Urgency", detail: "Ready now, planning for next quarter, or gathering quotes." },
      { term: "Business-specific criteria", detail: "Property type, access, volume, contract length: whatever actually decides fit for you." },
    ],
    note:
      "Qualification logic is written for your business. We do not claim AI lead scoring. The criteria are the ones you already use to judge whether a job is worth quoting, applied consistently to every enquiry instead of some of them.",
  },
  {
    index: "04",
    name: "Follow Up",
    headline: "Responding in minutes, every time, without anyone remembering to.",
    body: [
      "The outcome is simple: nobody who enquires is left without a reply, and nobody who goes quiet is quietly dropped.",
      "That is a workflow problem more than a software one. The sequences run on their own, and a person steps in for the part that needs a person.",
    ],
    listHeading: "What the workflow does",
    items: [
      { term: "Instant acknowledgement", detail: "The enquiry is answered immediately, so interest is not left to cool." },
      { term: "SMS", detail: "A short, direct message on the channel people actually read." },
      { term: "Email", detail: "Longer detail, confirmation, and the nurture that follows if the timing is not now." },
      { term: "Missed-call follow-up", detail: "A missed call triggers a message rather than ending the conversation." },
      { term: "Reminders", detail: "Before a booked appointment, and for internal follow-ups that are due." },
      { term: "Lead routing", detail: "The right enquiry reaches the right person, with the context attached." },
      { term: "Pipeline movement", detail: "Stages update as things happen, rather than during a weekly clean-up." },
      { term: "Sales visibility", detail: "Whoever sells can see what is open, what is waiting and what has gone quiet." },
    ],
    note:
      "Depending on the client, this infrastructure may be built using platforms such as GoHighLevel and other CRM and automation tools. The platform matters far less than the behaviour it produces, and we will work with what you already run where that makes sense.",
  },
  {
    index: "05",
    name: "Book",
    headline: "From interested to a time in the calendar.",
    body: [
      "Once a lead is qualified and responsive, the remaining friction is scheduling. Most of it comes from two people trying to agree a time by message.",
      "Booking removes that exchange for the prospects who are ready, and leaves the rest in follow-up until they are.",
    ],
    listHeading: "How booking works",
    items: [
      { term: "Direct calendar booking", detail: "The prospect picks from real availability instead of waiting on a callback." },
      { term: "Routing", detail: "Job type, location or value sends the booking to the correct calendar or person." },
      { term: "Confirmation", detail: "Immediate confirmation with the details, so the appointment feels committed to." },
      { term: "Reminders", detail: "Timed reminders before the appointment, to reduce quiet no-shows." },
      { term: "Rescheduling", detail: "A changed plan moves the appointment rather than ending it." },
    ],
    note:
      "Booking does not replace a sales conversation and does not make a lead say yes. It makes sure the conversation actually happens, with someone who has already been qualified.",
  },
  {
    index: "06",
    name: "Track",
    headline: "Knowing what produced the work.",
    body: [
      "Once every lead enters the same pipeline, questions that used to be opinions become answerable: where enquiries came from, how many were worth having, and how many turned into appointments.",
      "That is what makes the next decision about spend or effort an evidence-based one.",
    ],
    listHeading: "What is recorded",
    items: [
      { term: "Source", detail: "Which channel or campaign the enquiry came from." },
      { term: "Lead status", detail: "New, contacted, qualified, unqualified or dormant." },
      { term: "Pipeline stage", detail: "Where the opportunity currently sits in your process." },
      { term: "Booked appointment", detail: "Whether a conversation was scheduled, and whether it happened." },
      { term: "Conversion events", detail: "The actions that matter, recorded consistently rather than inferred." },
      { term: "Campaign attribution", detail: "Where platforms and consent allow it to be configured end to end." },
    ],
    diagram: true,
    note:
      "What you can see depends on what is genuinely connected. We will tell you which parts of attribution are reliable for your setup and which are estimates, rather than presenting a dashboard that implies more certainty than exists.",
  },
];

export function SystemDepth() {
  return (
    <section className="os-depth" aria-labelledby="os-depth-heading">
      <div className="os-depth-rise" aria-hidden="true">
        <span className="os-depth-thread" />
      </div>

      <div className="container">
        <div className="os-depth-intro phase-reveal" data-reveal="">
          <div>
            <p className="scene-label"><span>03</span> Inside each stage</p>
            <h2 id="os-depth-heading">What each stage actually involves.</h2>
          </div>
          <p className="os-depth-description">
            The same six stages, in detail. This is the part that decides whether
            the system is something your business runs on, or something it works
            around.
          </p>
        </div>

        <div className="os-layers">
          {layers.map((layer) => (
            <article className="os-layer" data-reveal="" key={layer.name} aria-labelledby={`os-layer-${layer.index}`}>
              <div className="os-layer-marker">
                <span className="os-layer-node" aria-hidden="true" />
                <p className="os-layer-index">{layer.index}</p>
                <h3 id={`os-layer-${layer.index}`}>{layer.name}</h3>
              </div>

              <div className="os-layer-body">
                <p className="os-layer-headline">{layer.headline}</p>
                {layer.body.map((paragraph) => (
                  <p className="os-layer-copy" key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}

                <p className="os-list-heading">{layer.listHeading}</p>
                <dl className="os-layer-list">
                  {layer.items.map((item) => (
                    <div className="os-layer-row" key={item.term}>
                      <dt>{item.term}</dt>
                      <dd>{item.detail}</dd>
                    </div>
                  ))}
                </dl>

                {layer.diagram && (
                  <figure className="os-pipeline" aria-labelledby="os-pipeline-caption">
                    <figcaption className="os-pipeline-caption" id="os-pipeline-caption">
                      Diagram: pipeline structure, not live data
                    </figcaption>
                    <ol className="os-pipeline-track" role="list">
                      {pipeline.map((stage) => (
                        <li className="os-pipeline-stage" key={stage}>
                          <span className="os-pipeline-line" aria-hidden="true" />
                          <span className="os-pipeline-node" aria-hidden="true" />
                          <span className="os-pipeline-name">{stage}</span>
                        </li>
                      ))}
                    </ol>
                  </figure>
                )}

                {layer.note && <p className="os-layer-note">{layer.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
