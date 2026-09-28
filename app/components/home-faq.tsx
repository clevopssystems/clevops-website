import { Plus } from "./home-icons";

/**
 * Every answer restates something the site already commits to elsewhere,
 * /process, /services and the proof standard, so the FAQ adds no new claim.
 * Native <details> keeps it working without JavaScript.
 */
const questions = [
  {
    q: "What happens after I send a project enquiry?",
    a: "We review what you sent (where things stand today, what you are trying to achieve and the services you are interested in) and reply with the most sensible next step. If we work together, the project starts with discovery: how your business currently attracts, handles and converts opportunities. From there we design the acquisition and conversion system around the way you actually sell, connect and test the pieces, and launch it as one working process.",
  },
  {
    q: "Do you only run ads, or build websites too?",
    a: "Both, and the parts in between. ClevOps brings together websites, SEO, Google and Meta Ads and the lead system behind them (capture, qualification, CRM workflows, follow-up and booking) so they work as one process instead of sitting across different agencies, tools and teams.",
  },
  {
    q: "Can you guarantee rankings or a number of leads?",
    a: "No. We do not promise search positions, because nobody controls them, and what a campaign returns depends on your market, competition, budget and job value. What we commit to is the work: the structure, tracking and follow-up that give every lead a better chance of becoming a booked conversation.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope. We will not quote a delivery date before we understand the work. You get a timeline for your scope once we have seen what is involved, not a fixed number of days chosen before anyone looked.",
  },
  {
    q: "Why don't you publish client results?",
    a: "Because we only publish figures that are measured and verified. Leads, rankings, traffic and revenue get published once they are tracked and attributed to the work, not before.",
  },
];

export function HomeFaq() {
  return (
    <section className="hm-section hm-faq" id="faq" aria-labelledby="hm-faq-heading">
      <div className="container hm-faq-grid">
        <div className="hm-faq-head phase-reveal" data-reveal="">
          <p className="hm-label">Questions</p>
          <h2 id="hm-faq-heading">
            Frequent <span className="hm-dim">questions.</span>
          </h2>
        </div>
        <div className="hm-faq-list phase-reveal" data-reveal="">
          {questions.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>
                <span>{item.q}</span>
                <span className="hm-faq-icon"><Plus size={18} /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
