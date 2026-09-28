/**
 * Section 2: why leads get lost. The homepage tells this as a descending
 * staircase; here it is told as elapsing time after the enquiry, with the
 * hand-off line degrading between the moments where a business is expected to
 * respond. The seven breakdowns read as a ruled editorial list, not cards.
 */
export const moments = [
  { time: "Minute 0", state: "Enquiry submitted" },
  { time: "Minute 5", state: "No response yet" },
  { time: "Hour 1", state: "Call missed" },
  { time: "Day 1", state: "Follow-up forgotten" },
  { time: "Day 3", state: "Lead has moved on" },
];

export const breakdowns = [
  {
    term: "Slow response",
    detail:
      "Interest is highest in the first few minutes. A reply that arrives hours later is answering a different question.",
  },
  {
    term: "Missed calls",
    detail:
      "A call placed while a crew is on site rarely gets returned, and nothing picks the conversation back up.",
  },
  {
    term: "Inconsistent follow-up",
    detail:
      "Someone gets three messages, someone else gets none, and no one can say which leads are still open.",
  },
  {
    term: "Poor qualification",
    detail:
      "Time goes into enquiries outside the service area, outside the scope, or nowhere near ready to buy.",
  },
  {
    term: "Disconnected tools",
    detail:
      "The website, the inbox, the phone and the spreadsheet each hold part of the story and none of them talk.",
  },
  {
    term: "No clear booking path",
    detail:
      "A qualified prospect who is ready now still has to wait for a callback to agree a time.",
  },
  {
    term: "Weak tracking",
    detail:
      "Without lead source and outcome in one place, spend decisions come down to impressions rather than evidence.",
  },
];

export function SystemBreakdown() {
  return (
    <section className="os-breakdown" aria-labelledby="os-breakdown-heading">
      <div className="container">
        <div className="os-breakdown-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>01</span> Where it breaks</p>
            <h2 id="os-breakdown-heading">
              Generating the lead is not the hard part. <span>Managing what happens next is.</span>
            </h2>
          </div>
          <div className="os-breakdown-context phase-reveal" data-reveal="">
            <p>
              Most businesses invest in the top of the process. More traffic,
              more campaigns, more enquiries. That part is well understood, and
              it is usually not where the money is lost.
            </p>
            <p>
              The loss happens quietly, in the hours after an enquiry arrives,
              when responding depends on someone being free, remembering, and
              having the full picture in front of them.
            </p>
          </div>
        </div>

        <figure className="os-decay" aria-labelledby="os-decay-caption">
          <figcaption className="os-decay-caption" id="os-decay-caption">
            What an unmanaged enquiry looks like over time
          </figcaption>
          <ol className="os-decay-track" role="list">
            {moments.map((moment) => (
              <li className="os-decay-moment" data-reveal="" key={moment.time}>
                <span className="os-decay-line" aria-hidden="true" />
                <span className="os-decay-node" aria-hidden="true" />
                <span className="os-decay-time">{moment.time}</span>
                <span className="os-decay-state">{moment.state}</span>
              </li>
            ))}
          </ol>
        </figure>

        <div className="os-breakdown-list-wrap">
          <p className="os-list-heading phase-reveal" data-reveal="">
            The seven places it usually goes wrong
          </p>
          <dl className="os-breakdown-list">
            {breakdowns.map((item) => (
              <div className="os-breakdown-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="os-breakdown-bridge">
          <p className="phase-reveal" data-reveal="">
            None of this is a traffic problem. <span>It is a system problem.</span>
          </p>
          <span className="os-bridge-thread" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
