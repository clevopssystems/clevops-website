# ClevOps SEO Build — Claude Code Instructions

You are the SEO build agent for ClevOps (clevops.co). Your job is to build a programmatic SEO system that helps this website rank across the USA for local service business website design keywords — without creating spam or thin content.

**Read this entire file before doing anything. Follow it exactly.**

---

## Project Context

- **Business:** ClevOps — builds high-converting websites + growth systems for local service businesses in the USA
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion
- **Pattern:** Pages use a `page.tsx` + `_content.tsx` split (see existing pages like `/app/website-for-cleaning-business/`)
- **Goal:** Rank for keywords like "website design for cleaning companies in Dallas" across 50 US cities and 8 niches

---

## Quality Rules — Never Break These

1. **No city-name stuffing.** Never write "Dallas website design Dallas businesses in Dallas." Write naturally.
2. **Every page must have unique value.** Different intro angle, different local context, different FAQ answers.
3. **No fake stats or fabricated results.** Use real copy from the homepage/services page tone.
4. **Every page must have a real CTA** that links to `/contact`.
5. **Use the exact same visual component system** already in the project — do not invent new design patterns.
6. **TypeScript only.** All files must be `.tsx` or `.ts`.
7. **No inline styles.** Tailwind classes only.
8. **Internal links must be real paths** that will exist — do not link to pages not yet built.

---

## Build Order — Follow This Sequence Strictly

### Phase 1: Data Foundation
Build these files first. Nothing else starts until these exist.

1. `data/locations.ts` — all 50 cities
2. `data/niches.ts` — all 8 service niches
3. `data/states.ts` — 10 priority states

### Phase 2: Shared SEO Components
Build reusable components used by all SEO pages.

4. `components/seo/CityPageLayout.tsx`
5. `components/seo/NichePageLayout.tsx`
6. `components/seo/StatePageLayout.tsx`
7. `components/seo/LocalFAQ.tsx`
8. `components/seo/BreadcrumbNav.tsx`
9. `components/seo/InternalLinks.tsx`

### Phase 3: Route Structure
Build the dynamic route pages.

10. `app/locations/page.tsx` — hub page
11. `app/locations/[state]/page.tsx` — state pages
12. `app/locations/[state]/[city]/page.tsx` — city pages
13. `app/website-design/page.tsx` — main service hub
14. `app/website-design/[niche]/page.tsx` — niche pages

### Phase 4: Schema & Technical SEO
15. `components/seo/SchemaMarkup.tsx` — JSON-LD component
16. Update `app/sitemap.ts` to include all new routes

### Phase 5: First Content Pages (Manual, High Quality)
Build these 10 pages with full unique content — no shortcuts:

17. `/locations/texas/dallas`
18. `/locations/texas/houston`
19. `/locations/florida/miami`
20. `/locations/california/los-angeles`
21. `/locations/new-york/new-york-city`
22. `/locations/illinois/chicago`
23. `/locations/georgia/atlanta`
24. `/locations/washington/seattle`
25. `/locations/arizona/phoenix`
26. `/locations/colorado/denver`

---

## Data Files Specification

### `data/locations.ts`

```typescript
export interface CityData {
  city: string
  state: string
  stateSlug: string
  slug: string
  population: string
  businessAngle: string        // unique 1-2 sentence local context
  topIndustries: string[]      // 4-5 niches strong in this city
  nearbyCities: string[]       // 3-4 nearby cities for internal links
  localSearchTerm: string      // primary keyword this page targets
  faqAnswers: {
    howLong: string            // unique answer per city
    howMuch: string            // unique answer per city
    whyLocal: string           // unique answer per city
  }
}

export const locations: CityData[] = [
  {
    city: "Dallas",
    state: "Texas",
    stateSlug: "texas",
    slug: "dallas",
    population: "1.3 million",
    businessAngle: "Dallas has one of the fastest-growing home services markets in the US, with cleaning, roofing, and detailing businesses competing hard for the same local searches.",
    topIndustries: ["cleaning companies", "auto detailers", "roofing contractors", "HVAC companies", "landscapers"],
    nearbyCities: ["Fort Worth", "Arlington", "Plano", "Irving"],
    localSearchTerm: "website design for service businesses in Dallas",
    faqAnswers: {
      howLong: "Most Dallas clients are live within 14 days of signing. We build in parallel — design, copy, and systems — so nothing waits on anything else.",
      howMuch: "Our websites start at $999 with a $199/month care plan. For Dallas businesses running $50K+ a year in revenue, that's recovered in a single new client.",
      whyLocal: "Dallas service businesses operate in a dense, competitive market. A generic website doesn't cut through. You need clear positioning, fast load times, and a booking flow that converts mobile traffic — which is the majority of Dallas local searches."
    }
  },
  {
    city: "Houston",
    state: "Texas",
    stateSlug: "texas",
    slug: "houston",
    population: "2.3 million",
    businessAngle: "Houston's sprawling geography means service businesses need strong zip-code-level SEO and a site that clearly communicates service areas.",
    topIndustries: ["cleaning companies", "plumbers", "HVAC companies", "landscapers", "contractors"],
    nearbyCities: ["Sugar Land", "The Woodlands", "Pearland", "Pasadena"],
    localSearchTerm: "website design for service businesses in Houston",
    faqAnswers: {
      howLong: "Houston clients typically launch in 14 days. We run design, automation, and SEO setup simultaneously.",
      howMuch: "Starting at $999 one-time plus $199/month. Houston service businesses typically recover this in 1-2 booked jobs.",
      whyLocal: "Houston is one of the largest service business markets in America. Visibility in your specific service area — not just 'Houston' broadly — is what drives real booked jobs."
    }
  },
  {
    city: "Miami",
    state: "Florida",
    stateSlug: "florida",
    slug: "miami",
    population: "460,000",
    businessAngle: "Miami's bilingual market and high-end residential density creates strong demand for premium cleaning, detailing, and home service businesses with professional online presence.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "med spas", "contractors"],
    nearbyCities: ["Fort Lauderdale", "Hialeah", "Coral Gables", "Doral"],
    localSearchTerm: "website design for service businesses in Miami",
    faqAnswers: {
      howLong: "14-day average launch. Miami clients often need bilingual copy considerations — we factor that into discovery.",
      howMuch: "$999 one-time, $199/month care plan. Miami's premium residential market means one new recurring client often covers months of investment.",
      whyLocal: "Miami customers expect polished, fast, mobile-perfect experiences. A slow or outdated site signals the same about your service — and they'll move to the next result in seconds."
    }
  },
  {
    city: "Los Angeles",
    state: "California",
    stateSlug: "california",
    slug: "los-angeles",
    population: "3.9 million",
    businessAngle: "LA's fragmented neighborhoods mean local service businesses need hyper-targeted digital presence — a generic site won't rank in Santa Monica, Burbank, and Long Beach simultaneously.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "contractors", "med spas"],
    nearbyCities: ["Long Beach", "Burbank", "Pasadena", "Santa Monica"],
    localSearchTerm: "website design for service businesses in Los Angeles",
    faqAnswers: {
      howLong: "14 days from kickoff to live site. LA clients often have multiple service areas — we map those into your SEO structure from day one.",
      howMuch: "Starting at $999 plus $199/month. In LA's market, a single new recurring client covers your first 3-4 months.",
      whyLocal: "LA is the most competitive local services market in the country. If your website doesn't load fast, look premium, and rank for your specific neighborhoods, you're invisible."
    }
  },
  {
    city: "Chicago",
    state: "Illinois",
    stateSlug: "illinois",
    slug: "chicago",
    population: "2.7 million",
    businessAngle: "Chicago's neighborhood-driven culture means local service businesses succeed when they're seen as the go-to for specific areas — Wicker Park, Lincoln Park, Naperville — not just 'Chicago.'",
    topIndustries: ["cleaning companies", "HVAC companies", "contractors", "plumbers", "landscapers"],
    nearbyCities: ["Evanston", "Naperville", "Oak Park", "Schaumburg"],
    localSearchTerm: "website design for service businesses in Chicago",
    faqAnswers: {
      howLong: "14-day average. Chicago businesses with multiple service neighborhoods get a site structure that handles that from launch.",
      howMuch: "$999 one-time, $199/month ongoing. One new contract cleaning client in Chicago typically covers 2-3 months of the care plan.",
      whyLocal: "Chicago's local search market is mature and competitive. Businesses ranking at the top aren't there by accident — they have fast, conversion-focused sites with proper local SEO foundations."
    }
  },
  {
    city: "New York City",
    state: "New York",
    stateSlug: "new-york",
    slug: "new-york-city",
    population: "8.3 million",
    businessAngle: "New York's density means service businesses can build a full client base within a few zip codes — but only if they're visible and trusted online.",
    topIndustries: ["cleaning companies", "contractors", "plumbers", "HVAC companies", "med spas"],
    nearbyCities: ["Brooklyn", "Queens", "Jersey City", "Newark"],
    localSearchTerm: "website design for service businesses in New York City",
    faqAnswers: {
      howLong: "14 days. NYC clients often serve multiple boroughs — we build your service area targeting into the site from the start.",
      howMuch: "$999 one-time plus $199/month. New York's market rates mean a single new cleaning contract often covers 6 months of the plan.",
      whyLocal: "New York customers are skeptical and fast. Your site has 3 seconds to prove you're legitimate. A slow, template-looking website loses that trust immediately."
    }
  },
  {
    city: "Atlanta",
    state: "Georgia",
    stateSlug: "georgia",
    slug: "atlanta",
    population: "498,000",
    businessAngle: "Atlanta's fast suburban expansion has created massive demand for home services — but most local businesses still run on referrals with no digital infrastructure to capture the online demand.",
    topIndustries: ["cleaning companies", "landscapers", "roofing contractors", "HVAC companies", "auto detailers"],
    nearbyCities: ["Sandy Springs", "Marietta", "Decatur", "Alpharetta"],
    localSearchTerm: "website design for service businesses in Atlanta",
    faqAnswers: {
      howLong: "14 days average. Atlanta clients in fast-growing suburbs often need service-area pages — we plan that in discovery.",
      howMuch: "$999 one-time, $199/month. Atlanta's growth market means new clients are available — the question is whether your site captures them.",
      whyLocal: "Atlanta's service business market is growing faster than most cities in the US. The businesses capturing that demand have professional digital presence. The ones missing it are still waiting for referrals."
    }
  },
  {
    city: "Seattle",
    state: "Washington",
    stateSlug: "washington",
    slug: "seattle",
    population: "737,000",
    businessAngle: "Seattle's tech-savvy population has higher expectations for digital experience — a slow or outdated site gets dismissed faster here than almost anywhere else in the US.",
    topIndustries: ["cleaning companies", "landscapers", "contractors", "auto detailers", "HVAC companies"],
    nearbyCities: ["Bellevue", "Tacoma", "Redmond", "Kirkland"],
    localSearchTerm: "website design for service businesses in Seattle",
    faqAnswers: {
      howLong: "14 days. Seattle clients often have strong existing reviews — we make sure your site actually reflects that quality.",
      howMuch: "$999 one-time, $199/month. Seattle's higher household incomes mean service businesses here can command premium rates — your website needs to match.",
      whyLocal: "Seattle customers research before they book. If your site doesn't load fast, look polished, and clearly explain what you do and where, they're already on a competitor's site."
    }
  },
  {
    city: "Phoenix",
    state: "Arizona",
    stateSlug: "arizona",
    slug: "phoenix",
    population: "1.6 million",
    businessAngle: "Phoenix is one of the fastest-growing cities in the US, with year-round demand for HVAC, cleaning, landscaping, and home services driven by constant new residential development.",
    topIndustries: ["HVAC companies", "cleaning companies", "landscapers", "roofing contractors", "plumbers"],
    nearbyCities: ["Scottsdale", "Tempe", "Mesa", "Chandler"],
    localSearchTerm: "website design for service businesses in Phoenix",
    faqAnswers: {
      howLong: "14 days. Phoenix's growth means new potential clients are searching every day — every day without a proper site is missed revenue.",
      howMuch: "$999 one-time, $199/month. Phoenix's HVAC market alone is high enough volume that one new service contract covers months of investment.",
      whyLocal: "Phoenix's relentless residential growth keeps local service demand high. The businesses winning that demand have fast, trustworthy websites with clear booking flows."
    }
  },
  {
    city: "Denver",
    state: "Colorado",
    stateSlug: "colorado",
    slug: "denver",
    population: "715,000",
    businessAngle: "Denver's outdoorsy, quality-conscious demographic expects the same premium experience from service businesses online as they do in person.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Aurora", "Lakewood", "Boulder", "Englewood"],
    localSearchTerm: "website design for service businesses in Denver",
    faqAnswers: {
      howLong: "14 days. Denver clients often expand service areas quickly — we build the site structure to support that from launch.",
      howMuch: "$999 one-time, $199/month. Denver's growing population keeps demand steady — the website is what determines who captures it.",
      whyLocal: "Denver customers are research-oriented and quality-focused. A polished, fast, informative website isn't optional here — it's the baseline expectation."
    }
  },
  {
    city: "San Antonio",
    state: "Texas",
    stateSlug: "texas",
    slug: "san-antonio",
    population: "1.4 million",
    businessAngle: "San Antonio's large family-oriented residential base drives consistent demand for home cleaning, HVAC, and maintenance services year-round.",
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "plumbers", "roofing contractors"],
    nearbyCities: ["Austin", "New Braunfels", "Schertz", "Converse"],
    localSearchTerm: "website design for service businesses in San Antonio",
    faqAnswers: {
      howLong: "14 days from kickoff. San Antonio clients often have strong word-of-mouth — we turn that reputation into a digital asset.",
      howMuch: "$999 one-time, $199/month care plan. San Antonio's volume-friendly market means consistent bookings cover the investment quickly.",
      whyLocal: "San Antonio's service market is driven by trust and reputation. A professional website makes sure your online presence matches the quality of your work."
    }
  },
  {
    city: "Austin",
    state: "Texas",
    stateSlug: "texas",
    slug: "austin",
    population: "961,000",
    businessAngle: "Austin's rapid growth and tech-influenced population means local service businesses face educated, comparison-shopping customers who make fast decisions based on digital presence.",
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"],
    nearbyCities: ["Round Rock", "Cedar Park", "Georgetown", "San Marcos"],
    localSearchTerm: "website design for service businesses in Austin",
    faqAnswers: {
      howLong: "14 days. Austin's competitive market means speed to launch matters — every week without a proper site is captured by a competitor.",
      howMuch: "$999 one-time, $199/month. Austin's premium market rates mean one new client covers the investment immediately.",
      whyLocal: "Austin customers are savvy and fast. They compare options in under 60 seconds. If your site doesn't immediately communicate trust and quality, they move on."
    }
  },
  {
    city: "Las Vegas",
    state: "Nevada",
    stateSlug: "nevada",
    slug: "las-vegas",
    population: "641,000",
    businessAngle: "Las Vegas has a massive hospitality and residential services market — high volume, high expectations, and customers who decide fast.",
    topIndustries: ["cleaning companies", "auto detailers", "HVAC companies", "landscapers", "contractors"],
    nearbyCities: ["Henderson", "North Las Vegas", "Summerlin", "Mesquite"],
    localSearchTerm: "website design for service businesses in Las Vegas",
    faqAnswers: {
      howLong: "14 days. Las Vegas businesses often serve both residential and commercial — we map those separately in the site structure.",
      howMuch: "$999 one-time, $199/month. Las Vegas's high-volume service market means one good month of leads recovers the full investment.",
      whyLocal: "In Las Vegas, people search, compare, and decide quickly. If your website doesn't instantly show trust signals and an easy booking path, you're losing to whoever does."
    }
  },
  {
    city: "Portland",
    state: "Oregon",
    stateSlug: "oregon",
    slug: "portland",
    population: "652,000",
    businessAngle: "Portland's values-driven consumer base responds to authenticity and transparency — service businesses here win when their online presence reflects genuine quality and character.",
    topIndustries: ["cleaning companies", "landscapers", "contractors", "auto detailers", "HVAC companies"],
    nearbyCities: ["Beaverton", "Gresham", "Hillsboro", "Lake Oswego"],
    localSearchTerm: "website design for service businesses in Portland",
    faqAnswers: {
      howLong: "14 days. Portland clients often want their brand personality reflected clearly — we work that into discovery.",
      howMuch: "$999 one-time, $199/month. Portland's loyal customer base means one well-converted lead often becomes a long-term client.",
      whyLocal: "Portland customers research thoroughly before booking. A site that's fast, clear, and reflects your actual business character converts far better than a generic template."
    }
  },
  {
    city: "Nashville",
    state: "Tennessee",
    stateSlug: "tennessee",
    slug: "nashville",
    population: "689,000",
    businessAngle: "Nashville's explosive population growth over the last decade has created relentless demand for home services — and a competitive landscape where digital visibility determines who wins.",
    topIndustries: ["cleaning companies", "contractors", "landscapers", "roofing contractors", "HVAC companies"],
    nearbyCities: ["Brentwood", "Franklin", "Murfreesboro", "Smyrna"],
    localSearchTerm: "website design for service businesses in Nashville",
    faqAnswers: {
      howLong: "14 days average. Nashville's growth means new homeowners are searching for service providers constantly.",
      howMuch: "$999 one-time, $199/month. Nashville's booming residential market means the demand is there — the website determines who captures it.",
      whyLocal: "Nashville is one of the fastest-growing markets in the US. Service businesses here are leaving significant revenue on the table if they're not ranking and converting online."
    }
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    stateSlug: "north-carolina",
    slug: "charlotte",
    population: "874,000",
    businessAngle: "Charlotte's financial sector-driven economy produces a large professional demographic willing to pay premium rates for reliable home and auto services.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "contractors", "HVAC companies"],
    nearbyCities: ["Concord", "Gastonia", "Rock Hill", "Mooresville"],
    localSearchTerm: "website design for service businesses in Charlotte",
    faqAnswers: {
      howLong: "14 days. Charlotte clients in upscale neighborhoods often need their pricing and positioning communicated clearly — we build that into the copy.",
      howMuch: "$999 one-time, $199/month. Charlotte's premium residential market means higher average job values — one new recurring client recovers the investment.",
      whyLocal: "Charlotte's professional demographic judges service businesses by their digital presence before ever making contact. A premium website isn't just nice to have — it's a trust filter."
    }
  },
  {
    city: "San Diego",
    state: "California",
    stateSlug: "california",
    slug: "san-diego",
    population: "1.4 million",
    businessAngle: "San Diego's military, tourism, and residential mix creates year-round demand for premium home and auto services with high expectations for professionalism.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "contractors", "med spas"],
    nearbyCities: ["Chula Vista", "Escondido", "El Cajon", "Oceanside"],
    localSearchTerm: "website design for service businesses in San Diego",
    faqAnswers: {
      howLong: "14 days. San Diego clients often have strong existing reviews — we make sure your website turns that social proof into booked jobs.",
      howMuch: "$999 one-time, $199/month. San Diego's premium coastal market means service rates are higher — the ROI on a proper website is fast.",
      whyLocal: "San Diego customers are mobile-first and quality-conscious. If your site doesn't load instantly and look premium on a phone, you're losing to someone whose does."
    }
  },
  {
    city: "San Francisco",
    state: "California",
    stateSlug: "california",
    slug: "san-francisco",
    population: "815,000",
    businessAngle: "San Francisco's high cost of living means customers are willing to pay premium rates — but only to businesses that project premium credibility online.",
    topIndustries: ["cleaning companies", "auto detailers", "contractors", "med spas", "landscapers"],
    nearbyCities: ["Oakland", "San Jose", "Berkeley", "Daly City"],
    localSearchTerm: "website design for service businesses in San Francisco",
    faqAnswers: {
      howLong: "14 days. SF clients often serve multiple Bay Area neighborhoods — we structure the site to handle that.",
      howMuch: "$999 one-time, $199/month. San Francisco's market rates mean a single new cleaning client can cover months of investment in one job.",
      whyLocal: "San Francisco's tech-saturated population has zero patience for slow or outdated websites. Your digital presence needs to match the premium you're charging."
    }
  },
  {
    city: "Philadelphia",
    state: "Pennsylvania",
    stateSlug: "pennsylvania",
    slug: "philadelphia",
    population: "1.5 million",
    businessAngle: "Philadelphia's dense row-home neighborhoods create natural demand for cleaning, HVAC, plumbing, and maintenance services with hyper-local search patterns.",
    topIndustries: ["cleaning companies", "HVAC companies", "plumbers", "contractors", "landscapers"],
    nearbyCities: ["Camden", "Wilmington", "Cherry Hill", "Norristown"],
    localSearchTerm: "website design for service businesses in Philadelphia",
    faqAnswers: {
      howLong: "14 days. Philly clients often have strong neighborhood reputations — a proper website extends that trust to new customers who don't know them yet.",
      howMuch: "$999 one-time, $199/month. Philadelphia's residential density means consistent demand — the website determines who captures the search traffic.",
      whyLocal: "Philadelphia neighborhoods are tight-knit. Word travels fast. A professional website ensures that when someone is referred to you, what they find online confirms the recommendation."
    }
  },
  {
    city: "San Jose",
    state: "California",
    stateSlug: "california",
    slug: "san-jose",
    population: "1 million",
    businessAngle: "San Jose's Silicon Valley location means even local service businesses are evaluated by tech-caliber standards for digital experience and professionalism.",
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"],
    nearbyCities: ["Sunnyvale", "Santa Clara", "Milpitas", "Fremont"],
    localSearchTerm: "website design for service businesses in San Jose",
    faqAnswers: {
      howLong: "14 days. San Jose clients often have technically savvy customers — your website needs to perform, not just look good.",
      howMuch: "$999 one-time, $199/month. Silicon Valley's household incomes are among the highest in the US — premium positioning on your website unlocks premium rates.",
      whyLocal: "San Jose customers compare options fast and make decisions based on how credible a business looks online. A slow or generic site immediately disqualifies you."
    }
  },
  {
    city: "Jacksonville",
    state: "Florida",
    stateSlug: "florida",
    slug: "jacksonville",
    population: "949,000",
    businessAngle: "Jacksonville's large geographic footprint means service businesses need clear service-area communication online — customers want to know instantly if you cover their neighborhood.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "roofing contractors", "contractors"],
    nearbyCities: ["Orange Park", "St. Augustine", "Fernandina Beach", "Ponte Vedra"],
    localSearchTerm: "website design for service businesses in Jacksonville",
    faqAnswers: {
      howLong: "14 days. Jacksonville clients often cover large service areas — we map that clearly into the site structure.",
      howMuch: "$999 one-time, $199/month. Jacksonville's steady residential growth keeps demand consistent for home services.",
      whyLocal: "Jacksonville is Florida's largest city by area. Without clear service-area pages and fast local search rankings, you're invisible to customers in neighborhoods you could easily serve."
    }
  },
  {
    city: "Fort Worth",
    state: "Texas",
    stateSlug: "texas",
    slug: "fort-worth",
    population: "918,000",
    businessAngle: "Fort Worth's blend of historic neighborhoods and rapid suburban expansion creates layered demand for both residential and commercial service businesses.",
    topIndustries: ["cleaning companies", "landscapers", "roofing contractors", "HVAC companies", "contractors"],
    nearbyCities: ["Arlington", "Keller", "Mansfield", "Euless"],
    localSearchTerm: "website design for service businesses in Fort Worth",
    faqAnswers: {
      howLong: "14 days. Fort Worth clients often have strong relationships in specific neighborhoods — a proper website helps them grow beyond those networks.",
      howMuch: "$999 one-time, $199/month. Fort Worth's growing population means more customers searching online every month.",
      whyLocal: "Fort Worth has a reputation for quality and reliability. Your website needs to communicate those same values from the first second a potential customer lands on it."
    }
  },
  {
    city: "Columbus",
    state: "Ohio",
    stateSlug: "ohio",
    slug: "columbus",
    population: "905,000",
    businessAngle: "Columbus's large student and young professional population creates high demand for cleaning, auto, and maintenance services with strong online booking expectations.",
    topIndustries: ["cleaning companies", "auto detailers", "HVAC companies", "landscapers", "contractors"],
    nearbyCities: ["Dublin", "Westerville", "Grove City", "Hilliard"],
    localSearchTerm: "website design for service businesses in Columbus",
    faqAnswers: {
      howLong: "14 days. Columbus clients benefit from online booking integrations — the city's young demographic expects to book without calling.",
      howMuch: "$999 one-time, $199/month. Columbus's growing professional population is a steady source of recurring service clients.",
      whyLocal: "Columbus's young, tech-comfortable population books services online. If your site doesn't have a clear booking flow, you're sending leads to competitors who do."
    }
  },
  {
    city: "Indianapolis",
    state: "Indiana",
    stateSlug: "indiana",
    slug: "indianapolis",
    population: "887,000",
    businessAngle: "Indianapolis's stable, family-oriented residential base creates reliable demand for home maintenance, cleaning, and landscaping services year-round.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "plumbers"],
    nearbyCities: ["Carmel", "Fishers", "Greenwood", "Lawrence"],
    localSearchTerm: "website design for service businesses in Indianapolis",
    faqAnswers: {
      howLong: "14 days. Indianapolis clients in suburban areas often have strong community reputations — a proper website extends that beyond word of mouth.",
      howMuch: "$999 one-time, $199/month. Indy's stable market means consistent demand for home services — the website determines your share of it.",
      whyLocal: "Indianapolis customers tend to be loyal once they trust you. The challenge is getting that first impression right online — before they ever pick up the phone."
    }
  },
  {
    city: "Seattle",
    state: "Washington",
    stateSlug: "washington",
    slug: "seattle",
    population: "737,000",
    businessAngle: "Seattle's tech-forward population holds local service businesses to a high digital standard — a slow or dated website signals the same about your service quality.",
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"],
    nearbyCities: ["Bellevue", "Tacoma", "Redmond", "Kirkland"],
    localSearchTerm: "website design for service businesses in Seattle",
    faqAnswers: {
      howLong: "14 days. Seattle clients often have strong review profiles — we make sure the website reflects and amplifies that.",
      howMuch: "$999 one-time, $199/month. Seattle's household incomes are above average — service businesses here can command premium rates with a website that matches.",
      whyLocal: "Seattle customers research before they book. A polished, fast website that clearly explains your process and service area is what converts that research into a call."
    }
  },
  {
    city: "Boston",
    state: "Massachusetts",
    stateSlug: "massachusetts",
    slug: "boston",
    population: "675,000",
    businessAngle: "Boston's dense urban core and large student/professional population creates high demand for cleaning, maintenance, and home services with strong digital expectations.",
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "plumbers", "auto detailers"],
    nearbyCities: ["Cambridge", "Somerville", "Quincy", "Newton"],
    localSearchTerm: "website design for service businesses in Boston",
    faqAnswers: {
      howLong: "14 days. Boston clients in competitive neighborhoods need a site that immediately establishes credibility — we build that trust architecture from the start.",
      howMuch: "$999 one-time, $199/month. Boston's premium real estate and household income levels mean service businesses here can justify higher rates — your website needs to support that.",
      whyLocal: "Boston is a dense, competitive market. Customers have options. A professional website that loads fast, communicates clearly, and makes booking easy is what separates the businesses that grow from the ones that stagnate."
    }
  },
  {
    city: "Washington DC",
    state: "Washington DC",
    stateSlug: "washington-dc",
    slug: "washington-dc",
    population: "689,000",
    businessAngle: "DC's government and professional workforce creates stable, premium demand for home cleaning, maintenance, and service businesses with high expectations for reliability.",
    topIndustries: ["cleaning companies", "contractors", "landscapers", "HVAC companies", "plumbers"],
    nearbyCities: ["Arlington", "Bethesda", "Alexandria", "Silver Spring"],
    localSearchTerm: "website design for service businesses in Washington DC",
    faqAnswers: {
      howLong: "14 days. DC clients often serve surrounding Virginia and Maryland suburbs — we structure the site to cover that geography.",
      howMuch: "$999 one-time, $199/month. DC's professional demographic pays premium rates for reliable service — your website needs to communicate that reliability.",
      whyLocal: "DC's professional market is driven by trust and reliability. A premium website establishes that credibility before a customer ever speaks to you."
    }
  },
  {
    city: "Memphis",
    state: "Tennessee",
    stateSlug: "tennessee",
    slug: "memphis",
    population: "618,000",
    businessAngle: "Memphis's large residential market and lower digital competition for local businesses creates an opportunity for service businesses to rank quickly with a properly optimized website.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "roofing contractors"],
    nearbyCities: ["Germantown", "Bartlett", "Collierville", "Southaven"],
    localSearchTerm: "website design for service businesses in Memphis",
    faqAnswers: {
      howLong: "14 days. Memphis clients often find the local search competition is lower — meaning a well-built site can rank faster.",
      howMuch: "$999 one-time, $199/month. Memphis's residential volume means consistent demand — the website is what captures it.",
      whyLocal: "Memphis's service business market is less digitally competitive than larger cities. A proper website built now can rank and generate leads faster than it would in a market like Atlanta or Dallas."
    }
  },
  {
    city: "El Paso",
    state: "Texas",
    stateSlug: "texas",
    slug: "el-paso",
    population: "678,000",
    businessAngle: "El Paso's border city dynamics and large military presence create unique demand for home services with bilingual communication often being a competitive advantage.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Las Cruces", "Ciudad Juárez", "Horizon City", "Socorro"],
    localSearchTerm: "website design for service businesses in El Paso",
    faqAnswers: {
      howLong: "14 days. El Paso clients often benefit from bilingual copy — we factor that into the site structure.",
      howMuch: "$999 one-time, $199/month. El Paso's stable military and residential base means consistent service demand.",
      whyLocal: "El Paso's market responds strongly to local credibility signals. A website that communicates community presence and professional reliability converts well here."
    }
  },
  {
    city: "Detroit",
    state: "Michigan",
    stateSlug: "michigan",
    slug: "detroit",
    population: "620,000",
    businessAngle: "Detroit's revitalizing neighborhoods and strong blue-collar work ethic mean service businesses that communicate reliability and value win the local market.",
    topIndustries: ["auto detailers", "cleaning companies", "contractors", "HVAC companies", "landscapers"],
    nearbyCities: ["Sterling Heights", "Warren", "Dearborn", "Livonia"],
    localSearchTerm: "website design for service businesses in Detroit",
    faqAnswers: {
      howLong: "14 days. Detroit clients in revitalizing neighborhoods often have an opportunity to establish digital dominance early.",
      howMuch: "$999 one-time, $199/month. Detroit's growing residential market means the demand is building — the website gets you in front of it.",
      whyLocal: "Detroit's market values reliability and straight talk. A website that's clear, fast, and professional — without being pretentious — converts best here."
    }
  },
  {
    city: "Louisville",
    state: "Kentucky",
    stateSlug: "kentucky",
    slug: "louisville",
    population: "633,000",
    businessAngle: "Louisville's stable residential market and strong local business culture create a foundation where service businesses with proper digital presence grow steadily.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "plumbers"],
    nearbyCities: ["Lexington", "Jeffersonville", "Elizabethtown", "Bowling Green"],
    localSearchTerm: "website design for service businesses in Louisville",
    faqAnswers: {
      howLong: "14 days. Louisville clients typically have steady existing business — the website opens new customer channels beyond referrals.",
      howMuch: "$999 one-time, $199/month. Louisville's market is steady and reliable — consistent demand with the right digital presence.",
      whyLocal: "Louisville customers are loyal to businesses they trust. A professional website builds that initial trust so new customers who find you on Google feel confident booking."
    }
  },
  {
    city: "Baltimore",
    state: "Maryland",
    stateSlug: "maryland",
    slug: "baltimore",
    population: "569,000",
    businessAngle: "Baltimore's dense neighborhood structure creates hyper-local demand where being the go-to service business in specific areas builds strong recurring revenue.",
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "landscapers", "plumbers"],
    nearbyCities: ["Columbia", "Towson", "Annapolis", "Silver Spring"],
    localSearchTerm: "website design for service businesses in Baltimore",
    faqAnswers: {
      howLong: "14 days. Baltimore clients in specific neighborhoods often benefit from local area targeting — we build that into the SEO structure.",
      howMuch: "$999 one-time, $199/month. Baltimore's residential density means consistent local search volume for service businesses.",
      whyLocal: "Baltimore's tight neighborhood communities mean trust travels fast. A professional website ensures that when someone searches for your service, what they find matches your reputation."
    }
  },
  {
    city: "Oklahoma City",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    slug: "oklahoma-city",
    population: "681,000",
    businessAngle: "Oklahoma City's affordable cost of living and suburban growth create steady demand for home services with relatively lower digital competition than coastal cities.",
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "roofing contractors", "contractors"],
    nearbyCities: ["Edmond", "Norman", "Midwest City", "Moore"],
    localSearchTerm: "website design for service businesses in Oklahoma City",
    faqAnswers: {
      howLong: "14 days. OKC clients often find digital competition is lower — meaning a properly built site can rank and generate leads faster.",
      howMuch: "$999 one-time, $199/month. Oklahoma City's growing suburban market means consistent new homeowners looking for reliable service businesses.",
      whyLocal: "Oklahoma City's market is less saturated digitally than larger metros. Building a proper website now means getting in front of the demand before more competitors do."
    }
  },
  {
    city: "Milwaukee",
    state: "Wisconsin",
    stateSlug: "wisconsin",
    slug: "milwaukee",
    population: "577,000",
    businessAngle: "Milwaukee's industrial heritage and working-class backbone mean service businesses that communicate straightforward value and reliability win the market.",
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "landscapers", "plumbers"],
    nearbyCities: ["Waukesha", "Racine", "Kenosha", "West Allis"],
    localSearchTerm: "website design for service businesses in Milwaukee",
    faqAnswers: {
      howLong: "14 days. Milwaukee clients typically have loyal existing customers — the website opens new acquisition channels.",
      howMuch: "$999 one-time, $199/month. Milwaukee's steady residential base provides consistent service demand year-round.",
      whyLocal: "Milwaukee customers respond to clear value communication. A website that's fast, honest, and makes it easy to book converts better here than anything overly polished or corporate."
    }
  },
  {
    city: "Albuquerque",
    state: "New Mexico",
    stateSlug: "new-mexico",
    slug: "albuquerque",
    population: "562,000",
    businessAngle: "Albuquerque's unique cultural blend and growing tech sector create demand for service businesses that communicate both local roots and professional standards.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Rio Rancho", "Santa Fe", "Bernalillo", "Corrales"],
    localSearchTerm: "website design for service businesses in Albuquerque",
    faqAnswers: {
      howLong: "14 days. Albuquerque clients benefit from local cultural signals in their copy — we incorporate that naturally.",
      howMuch: "$999 one-time, $199/month. Albuquerque's growing market means consistent demand for professional service businesses.",
      whyLocal: "Albuquerque customers support local businesses strongly — but they still search online first. A professional website that feels locally grounded converts better than a generic national template."
    }
  },
  {
    city: "Tucson",
    state: "Arizona",
    stateSlug: "arizona",
    slug: "tucson",
    population: "542,000",
    businessAngle: "Tucson's retirement-heavy and university demographics create distinct demand for home maintenance, cleaning, and auto services with different decision-making patterns.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Marana", "Oro Valley", "Sahuarita", "Sierra Vista"],
    localSearchTerm: "website design for service businesses in Tucson",
    faqAnswers: {
      howLong: "14 days. Tucson clients often serve both the university area and retirement communities — we structure messaging for both.",
      howMuch: "$999 one-time, $199/month. Tucson's steady population provides consistent service demand year-round.",
      whyLocal: "Tucson's market is trust-driven. A professional website that communicates reliability and clear pricing builds the confidence that converts first-time visitors into long-term clients."
    }
  },
  {
    city: "Fresno",
    state: "California",
    stateSlug: "california",
    slug: "fresno",
    population: "542,000",
    businessAngle: "Fresno's Central Valley location and agricultural roots create a pragmatic market where service businesses win by communicating clear value and dependability.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Clovis", "Visalia", "Madera", "Hanford"],
    localSearchTerm: "website design for service businesses in Fresno",
    faqAnswers: {
      howLong: "14 days. Fresno clients often find digital competition in their niche is manageable — a well-built site can rank quickly.",
      howMuch: "$999 one-time, $199/month. Fresno's large residential market provides consistent demand for home and auto services.",
      whyLocal: "Fresno customers value reliability and straight talk. A website that communicates your work clearly, loads fast, and makes booking easy wins here."
    }
  },
  {
    city: "Sacramento",
    state: "California",
    stateSlug: "california",
    slug: "sacramento",
    population: "524,000",
    businessAngle: "Sacramento's government workforce and growing tech spillover from the Bay Area create a stable, professional demographic with high service expectations.",
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"],
    nearbyCities: ["Elk Grove", "Roseville", "Folsom", "Stockton"],
    localSearchTerm: "website design for service businesses in Sacramento",
    faqAnswers: {
      howLong: "14 days. Sacramento clients often serve large suburban footprints — we map service areas clearly in the site structure.",
      howMuch: "$999 one-time, $199/month. Sacramento's growing population keeps service demand steady and expanding.",
      whyLocal: "Sacramento's professional demographic researches before booking. A fast, credible website that clearly explains your process and service area converts that research into revenue."
    }
  },
  {
    city: "Mesa",
    state: "Arizona",
    stateSlug: "arizona",
    slug: "mesa",
    population: "504,000",
    businessAngle: "Mesa's massive suburban residential base and Phoenix Metro growth make it one of the highest-volume local service markets in Arizona.",
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "roofing contractors", "contractors"],
    nearbyCities: ["Chandler", "Gilbert", "Tempe", "Scottsdale"],
    localSearchTerm: "website design for service businesses in Mesa",
    faqAnswers: {
      howLong: "14 days. Mesa clients in the Phoenix Metro often compete with many other local providers — a professional website is the differentiation.",
      howMuch: "$999 one-time, $199/month. Mesa's residential volume means consistent local search demand for every major service niche.",
      whyLocal: "Mesa's large suburban population searches for local services constantly. The businesses capturing that traffic have fast, professional websites with clear booking paths."
    }
  },
  {
    city: "Kansas City",
    state: "Missouri",
    stateSlug: "missouri",
    slug: "kansas-city",
    population: "508,000",
    businessAngle: "Kansas City's heartland business culture values reliability and local pride — service businesses that reflect those values online build loyal, long-term client bases.",
    topIndustries: ["cleaning companies", "landscapers", "contractors", "HVAC companies", "roofing contractors"],
    nearbyCities: ["Overland Park", "Olathe", "Independence", "Lee's Summit"],
    localSearchTerm: "website design for service businesses in Kansas City",
    faqAnswers: {
      howLong: "14 days. Kansas City clients often have strong community reputations — a proper website extends that reach beyond word of mouth.",
      howMuch: "$999 one-time, $199/month. KC's stable residential market means consistent demand for home services year-round.",
      whyLocal: "Kansas City's market rewards businesses that feel genuinely local. A website that communicates community roots alongside professional standards converts better here than anything generic."
    }
  },
  {
    city: "Colorado Springs",
    state: "Colorado",
    stateSlug: "colorado",
    slug: "colorado-springs",
    population: "478,000",
    businessAngle: "Colorado Springs's military population and outdoor culture create steady demand for home and auto services with an appreciation for no-nonsense professionalism.",
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "landscapers", "auto detailers"],
    nearbyCities: ["Pueblo", "Castle Rock", "Parker", "Fountain"],
    localSearchTerm: "website design for service businesses in Colorado Springs",
    faqAnswers: {
      howLong: "14 days. Colorado Springs clients often have reliable existing customers — the website opens digital channels to new ones.",
      howMuch: "$999 one-time, $199/month. Colorado Springs's stable military and growing civilian base provides consistent service demand.",
      whyLocal: "Colorado Springs customers value efficiency and reliability. A website that's fast, clear, and makes booking straightforward converts better than anything overly elaborate."
    }
  },
  {
    city: "Raleigh",
    state: "North Carolina",
    stateSlug: "north-carolina",
    slug: "raleigh",
    population: "467,000",
    businessAngle: "Raleigh's Research Triangle economy drives a highly educated, tech-comfortable demographic with premium service expectations and strong online booking habits.",
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"],
    nearbyCities: ["Durham", "Cary", "Chapel Hill", "Garner"],
    localSearchTerm: "website design for service businesses in Raleigh",
    faqAnswers: {
      howLong: "14 days. Raleigh's growing tech population expects smooth digital experiences — we make sure the booking flow reflects that.",
      howMuch: "$999 one-time, $199/month. Raleigh's premium household incomes mean service businesses can charge more — with a website that supports those rates.",
      whyLocal: "Raleigh's tech-influenced population books online and books fast. A clean, fast website with a seamless booking flow is not optional — it's the baseline."
    }
  },
  {
    city: "Omaha",
    state: "Nebraska",
    stateSlug: "nebraska",
    slug: "omaha",
    population: "486,000",
    businessAngle: "Omaha's business-friendly environment and stable Midwest economy create reliable demand for service businesses with less digital competition than coastal cities.",
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"],
    nearbyCities: ["Lincoln", "Council Bluffs", "Bellevue", "Papillion"],
    localSearchTerm: "website design for service businesses in Omaha",
    faqAnswers: {
      howLong: "14 days. Omaha clients often find ranking for local service keywords is more achievable than in larger metros.",
      howMuch: "$999 one-time, $199/month. Omaha's stable economy means consistent service demand without the extreme competition of coastal markets.",
      whyLocal: "Omaha's market is steady and less saturated digitally. A properly built website here can rank faster and generate leads more predictably than in a market like Chicago or LA."
    }
  },
  {
    city: "Long Beach",
    state: "California",
    stateSlug: "california",
    slug: "long-beach",
    population: "466,000",
    businessAngle: "Long Beach's dense port city environment and diverse neighborhoods create high demand for cleaning, maintenance, and auto services across varied demographics.",
    topIndustries: ["cleaning companies", "auto detailers", "contractors", "landscapers", "HVAC companies"],
    nearbyCities: ["Compton", "Torrance", "Signal Hill", "Carson"],
    localSearchTerm: "website design for service businesses in Long Beach",
    faqAnswers: {
      howLong: "14 days. Long Beach clients often serve both residential and commercial — we structure the site to address both clearly.",
      howMuch: "$999 one-time, $199/month. Long Beach's density means consistent local search volume for service niches.",
      whyLocal: "Long Beach's diverse, dense population searches for local services constantly. A fast, professional website that clearly communicates your service area and booking process captures that traffic."
    }
  },
  {
    city: "Virginia Beach",
    state: "Virginia",
    stateSlug: "virginia",
    slug: "virginia-beach",
    population: "459,000",
    businessAngle: "Virginia Beach's military, tourism, and residential mix create year-round service demand with customers who research carefully before booking.",
    topIndustries: ["cleaning companies", "landscapers", "contractors", "auto detailers", "HVAC companies"],
    nearbyCities: ["Norfolk", "Chesapeake", "Hampton", "Newport News"],
    localSearchTerm: "website design for service businesses in Virginia Beach",
    faqAnswers: {
      howLong: "14 days. Virginia Beach clients often serve multiple Hampton Roads cities — we build service area coverage into the site.",
      howMuch: "$999 one-time, $199/month. Virginia Beach's stable military and residential economy provides consistent service demand.",
      whyLocal: "Virginia Beach customers research before they book. A professional website that loads fast, communicates clearly, and shows local credibility converts that research into revenue."
    }
  },
  {
    city: "Oakland",
    state: "California",
    stateSlug: "california",
    slug: "oakland",
    population: "440,000",
    businessAngle: "Oakland's diverse, rapidly gentrifying neighborhoods create complex service demand where businesses that communicate authentically and professionally win.",
    topIndustries: ["cleaning companies", "contractors", "landscapers", "auto detailers", "HVAC companies"],
    nearbyCities: ["Berkeley", "Hayward", "Fremont", "San Leandro"],
    localSearchTerm: "website design for service businesses in Oakland",
    faqAnswers: {
      howLong: "14 days. Oakland clients serve a fast-changing customer base — a professional website ensures you reach new residents as they move in.",
      howMuch: "$999 one-time, $199/month. Oakland's proximity to San Francisco means service businesses can command Bay Area rates with the right positioning.",
      whyLocal: "Oakland's market is moving fast. New residents are searching for reliable local service businesses. A professional website is how they find you instead of someone else."
    }
  },
  {
    city: "Minneapolis",
    state: "Minnesota",
    stateSlug: "minnesota",
    slug: "minneapolis",
    population: "429,000",
    businessAngle: "Minneapolis's educated, quality-conscious population and harsh winters drive year-round demand for home maintenance, cleaning, and HVAC services.",
    topIndustries: ["cleaning companies", "HVAC companies", "contractors", "landscapers", "auto detailers"],
    nearbyCities: ["Saint Paul", "Bloomington", "Brooklyn Park", "Plymouth"],
    localSearchTerm: "website design for service businesses in Minneapolis",
    faqAnswers: {
      howLong: "14 days. Minneapolis clients often have strong seasonal demand — a proper website with booking automation captures leads even off-hours.",
      howMuch: "$999 one-time, $199/month. Minneapolis's professional demographic pays premium rates for reliable service businesses.",
      whyLocal: "Minneapolis customers are thorough researchers. A website that's fast, informative, and makes booking straightforward converts that research into booked jobs consistently."
    }
  },
  {
    city: "Tulsa",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    slug: "tulsa",
    population: "413,000",
    businessAngle: "Tulsa's oil-influenced economy and residential stability create a market where service businesses with reliable digital presence grow steadily.",
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "contractors", "auto detailers"],
    nearbyCities: ["Broken Arrow", "Owasso", "Bixby", "Jenks"],
    localSearchTerm: "website design for service businesses in Tulsa",
    faqAnswers: {
      howLong: "14 days. Tulsa clients often find local search competition is manageable — a well-built site ranks faster here.",
      howMuch: "$999 one-time, $199/month. Tulsa's stable residential base means consistent demand for home services.",
      whyLocal: "Tulsa's market is less digitally competitive than major metros. A properly built website now gets you in front of consistent local search traffic before the market gets more crowded."
    }
  },
  {
    city: "Arlington",
    state: "Texas",
    stateSlug: "texas",
    slug: "arlington",
    population: "394,000",
    businessAngle: "Arlington sits in the heart of the Dallas-Fort Worth Metroplex, creating a competitive mid-city market where service businesses need clear positioning to stand out.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "contractors", "HVAC companies"],
    nearbyCities: ["Fort Worth", "Grand Prairie", "Mansfield", "Irving"],
    localSearchTerm: "website design for service businesses in Arlington TX",
    faqAnswers: {
      howLong: "14 days. Arlington clients in the DFW Metroplex compete across a large geographic market — we structure the site to own the Arlington-specific search territory.",
      howMuch: "$999 one-time, $199/month. Arlington's DFW Metro location means access to one of the largest service business markets in the US.",
      whyLocal: "Arlington's position in the DFW Metroplex means customers have many options. A fast, professional website with clear local positioning is what makes them choose you."
    }
  },
  {
    city: "Tampa",
    state: "Florida",
    stateSlug: "florida",
    slug: "tampa",
    population: "384,000",
    businessAngle: "Tampa's growing tech economy and beach lifestyle demographics create premium service demand with strong mobile booking expectations.",
    topIndustries: ["cleaning companies", "auto detailers", "landscapers", "HVAC companies", "contractors"],
    nearbyCities: ["St. Petersburg", "Clearwater", "Brandon", "Lakeland"],
    localSearchTerm: "website design for service businesses in Tampa",
    faqAnswers: {
      howLong: "14 days. Tampa's fast-growing professional demographic books online — a smooth booking flow is essential.",
      howMuch: "$999 one-time, $199/month. Tampa's growing market means consistent new potential clients searching for reliable service businesses.",
      whyLocal: "Tampa's tech and professional growth is creating a new tier of premium service demand. A website that looks and performs at that level captures those clients first."
    }
  },
  {
    city: "New Orleans",
    state: "Louisiana",
    stateSlug: "louisiana",
    slug: "new-orleans",
    population: "369,000",
    businessAngle: "New Orleans's unique culture and tourism-driven economy create a market where service businesses that reflect local character build strong community loyalty.",
    topIndustries: ["cleaning companies", "contractors", "landscapers", "HVAC companies", "plumbers"],
    nearbyCities: ["Metairie", "Kenner", "Baton Rouge", "Slidell"],
    localSearchTerm: "website design for service businesses in New Orleans",
    faqAnswers: {
      howLong: "14 days. New Orleans clients often have strong neighborhood reputations — a proper website extends that beyond community word of mouth.",
      howMuch: "$999 one-time, $199/month. New Orleans's residential and commercial mix provides varied service demand.",
      whyLocal: "New Orleans customers are community-oriented. A website that reflects genuine local character while communicating professional standards converts better than anything generic."
    }
  }
]
```

### `data/niches.ts`

```typescript
export interface NicheData {
  name: string
  slug: string
  headline: string
  subheadline: string
  problemAngle: string
  whatWeBuild: string[]
  keyBenefit: string
  icon: string
}

export const niches: NicheData[] = [
  {
    name: "Cleaning Companies",
    slug: "cleaning-business",
    headline: "Website Design for Cleaning Companies",
    subheadline: "Most cleaning business websites look like templates. Yours should look like a business worth booking.",
    problemAngle: "Cleaning is a trust business. Customers let you into their home. Your website needs to establish that trust before they ever pick up the phone — with reviews, clear pricing info, a professional look, and an instant booking path.",
    whatWeBuild: ["Online booking integration", "Service area pages", "Before/after photo sections", "Review showcase", "Instant quote forms", "SMS automation setup"],
    keyBenefit: "Cleaning businesses that switch from a basic template to a conversion-focused site typically see 3x more inquiry volume within 60 days.",
    icon: "🧹"
  },
  {
    name: "Auto Detailing",
    slug: "auto-detailing",
    headline: "Website Design for Auto Detailing Businesses",
    subheadline: "Your work is visual. Your website should be too — with a booking flow that fills your calendar automatically.",
    problemAngle: "Auto detailing is a visual service where premium positioning matters enormously. Customers comparing detailers will choose the one whose website reflects the same care they take with vehicles.",
    whatWeBuild: ["Visual portfolio sections", "Service package pages", "Online booking with deposits", "Before/after galleries", "Mobile-first layout", "Automated booking confirmations"],
    keyBenefit: "Detailing businesses with premium websites consistently attract higher-value clients and command higher prices than competitors with generic sites.",
    icon: "🚗"
  },
  {
    name: "Barbershops",
    slug: "barbershop",
    headline: "Website Design for Barbershops",
    subheadline: "A barbershop's vibe is everything. Your website should feel like walking through the door — before they even make an appointment.",
    problemAngle: "Barbershops live and die by atmosphere and loyalty. Your website should communicate your shop's character immediately — and make booking a cut as frictionless as possible.",
    whatWeBuild: ["Appointment booking integration", "Barber portfolio pages", "Instagram feed integration", "Service menu pages", "Shop atmosphere photography sections", "Review displays"],
    keyBenefit: "Barbershops with strong online booking see significantly fewer no-shows and more new client walk-ins from local search.",
    icon: "✂️"
  },
  {
    name: "Contractors",
    slug: "contractors",
    headline: "Website Design for Contractors",
    subheadline: "Your projects speak for themselves. Your website should make sure potential clients hear them.",
    problemAngle: "Contracting is built on proof. Customers want to see your past work, understand your process, and trust you'll show up and deliver. Your website needs to do all three — immediately.",
    whatWeBuild: ["Project portfolio galleries", "Service area maps", "Quote request flows", "License and insurance display", "Review sections", "Before/after project showcases"],
    keyBenefit: "Contractors with project-focused websites win more quote requests because customers arrive pre-sold on the quality of the work.",
    icon: "🔨"
  },
  {
    name: "Roofing Companies",
    slug: "roofing",
    headline: "Website Design for Roofing Companies",
    subheadline: "Roofing is a high-ticket, high-trust purchase. Your website needs to handle the trust gap before a customer picks up the phone.",
    problemAngle: "Homeowners making roofing decisions are scared of being taken advantage of. Your website's job is to eliminate that fear — with licensing info, reviews, clear pricing guides, and a professional presence that says 'we're legitimate.'",
    whatWeBuild: ["Free inspection offer pages", "Insurance claim guidance pages", "Project galleries", "Financing information sections", "Review aggregation", "Emergency response CTAs"],
    keyBenefit: "Roofing companies with trust-focused websites convert more of their quote visits into signed contracts because the credibility work is done before the meeting.",
    icon: "🏠"
  },
  {
    name: "HVAC Companies",
    slug: "hvac",
    headline: "Website Design for HVAC Companies",
    subheadline: "HVAC customers need you fast. Your website should get them to the phone in under 10 seconds.",
    problemAngle: "HVAC is often an emergency purchase. When someone's AC fails in summer or heat goes out in winter, they're searching and calling fast. Your website needs to convert that urgency — with immediate trust signals and a frictionless contact path.",
    whatWeBuild: ["Emergency service CTAs", "Service area pages", "Maintenance plan pages", "Financing sections", "Seasonal campaign pages", "24/7 availability displays"],
    keyBenefit: "HVAC businesses with emergency-optimized websites capture more of the high-value urgent calls that competitors miss due to slow or confusing sites.",
    icon: "❄️"
  },
  {
    name: "Landscaping Companies",
    slug: "landscaping",
    headline: "Website Design for Landscaping Companies",
    subheadline: "Beautiful work deserves a website that shows it off — and turns those before/afters into booked jobs.",
    problemAngle: "Landscaping is visual proof-driven. A customer won't hire you based on words alone — they want to see your work, understand your process, and know you serve their neighborhood.",
    whatWeBuild: ["Visual project portfolios", "Seasonal service pages", "Service area targeting", "Online quote request flows", "Maintenance plan pages", "Before/after transformation galleries"],
    keyBenefit: "Landscaping companies with strong visual websites command premium rates because customers see the quality before meeting you.",
    icon: "🌿"
  },
  {
    name: "Plumbers",
    slug: "plumbing",
    headline: "Website Design for Plumbing Companies",
    subheadline: "Plumbing emergencies don't wait. Your website should convert urgent visitors in under 10 seconds.",
    problemAngle: "Plumbing is often an emergency. Customers searching for a plumber are stressed, in a hurry, and picking the first company that looks legitimate and responds fast. Your website needs to win that moment.",
    whatWeBuild: ["Emergency contact CTAs above fold", "24/7 availability displays", "Service area pages", "Licensing and insurance displays", "Review sections", "Financing information"],
    keyBenefit: "Plumbing companies with emergency-optimized websites capture significantly more of the high-value urgent calls that drive the most revenue.",
    icon: "🔧"
  }
]
```

### `data/states.ts`

```typescript
export interface StateData {
  name: string
  slug: string
  abbreviation: string
  marketAngle: string
  topCities: string[]
  topIndustries: string[]
}

export const states: StateData[] = [
  {
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    marketAngle: "Texas's massive population, business-friendly environment, and year-round construction growth make it one of the highest-demand markets for local service businesses in the US.",
    topCities: ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth", "El Paso", "Arlington"],
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "roofing contractors", "auto detailers"]
  },
  {
    name: "California",
    slug: "california",
    abbreviation: "CA",
    marketAngle: "California's premium household incomes and high digital expectations mean local service businesses need top-tier online presence to compete — and reward those that have it with premium rates.",
    topCities: ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Fresno", "Sacramento", "Oakland", "Long Beach"],
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "med spas"]
  },
  {
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    marketAngle: "Florida's year-round warm weather, growing population, and tourism economy create consistent high-volume demand for cleaning, landscaping, HVAC, and home services.",
    topCities: ["Miami", "Jacksonville", "Tampa"],
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "roofing contractors", "auto detailers"]
  },
  {
    name: "New York",
    slug: "new-york",
    abbreviation: "NY",
    marketAngle: "New York's density, premium real estate, and high household incomes create a market where a single service business with proper digital presence can build a full recurring revenue client base.",
    topCities: ["New York City"],
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "plumbers", "auto detailers"]
  },
  {
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    marketAngle: "Illinois's Chicago-centered economy and vast suburban residential base create strong year-round demand across every major home service niche.",
    topCities: ["Chicago"],
    topIndustries: ["cleaning companies", "contractors", "HVAC companies", "landscapers", "plumbers"]
  },
  {
    name: "Georgia",
    slug: "georgia",
    abbreviation: "GA",
    marketAngle: "Georgia's explosive population growth — led by Atlanta's expansion — has created one of the highest-demand service business markets in the Southeast.",
    topCities: ["Atlanta"],
    topIndustries: ["cleaning companies", "roofing contractors", "landscapers", "contractors", "HVAC companies"]
  },
  {
    name: "Washington",
    slug: "washington",
    abbreviation: "WA",
    marketAngle: "Washington's tech-heavy economy and premium household incomes create high expectations for local service businesses — and reward those that meet those expectations with loyal, high-value clients.",
    topCities: ["Seattle"],
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"]
  },
  {
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    marketAngle: "Arizona's year-round warm weather and among the fastest population growth in the US create relentless demand for HVAC, landscaping, cleaning, and home services.",
    topCities: ["Phoenix", "Tucson", "Mesa"],
    topIndustries: ["HVAC companies", "cleaning companies", "landscapers", "roofing contractors", "contractors"]
  },
  {
    name: "Colorado",
    slug: "colorado",
    abbreviation: "CO",
    marketAngle: "Colorado's quality-conscious, outdoor-oriented population and growing Front Range metro areas create premium demand for home and auto services.",
    topCities: ["Denver", "Colorado Springs"],
    topIndustries: ["cleaning companies", "landscapers", "HVAC companies", "contractors", "auto detailers"]
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    marketAngle: "North Carolina's Research Triangle tech boom and Charlotte financial sector growth have created premium residential markets with strong service business demand.",
    topCities: ["Charlotte", "Raleigh"],
    topIndustries: ["cleaning companies", "landscapers", "auto detailers", "contractors", "HVAC companies"]
  }
]
```

---

## Page Templates Specification

### City Page (`app/locations/[state]/[city]/page.tsx`)

Must include:
- `generateMetadata()` function with unique title/description per city using `CityData`
- JSON-LD schema: `LocalBusiness`, `FAQPage`, `BreadcrumbList`
- H1: `Website Design for Local Businesses in {city}, {state}`
- Subheadline using `businessAngle`
- Problem section (why most {city} service business sites fail)
- Industries section listing `topIndustries` with brief descriptions
- What ClevOps builds (use existing services copy, adapted for city)
- FAQ section using `faqAnswers` data
- Internal links to: state page, 2-3 nearby city pages, main `/website-design` page, `/contact`
- CTA to `/contact`
- Breadcrumbs: Home > Locations > {State} > {City}

### State Page (`app/locations/[state]/page.tsx`)

Must include:
- `generateMetadata()` with state-specific title/description
- H1: `Website Design for Local Businesses in {state}`
- State market angle paragraph
- Grid of top cities with links
- Industries served in this state
- CTA to `/contact`
- Internal links to all city pages for this state

### Niche Page (`app/website-design/[niche]/page.tsx`)

Must include:
- `generateMetadata()` with niche-specific title/description
- H1 from `NicheData.headline`
- Problem angle section
- What we build list
- Key benefit callout
- City links: top 5-8 cities where this niche is strong
- CTA to `/contact`
- Internal links to `/website-design` hub and `/contact`

---

## Sitemap Update

Update `app/sitemap.ts` to include:
- All city pages: `/locations/{stateSlug}/{citySlug}`
- All state pages: `/locations/{stateSlug}`
- All niche pages: `/website-design/{nicheSlug}`
- `/locations` hub
- `/website-design` hub

Import from data files and map to sitemap entries.

---

## Schema Component

Create `components/seo/SchemaMarkup.tsx` as a client component that accepts schema type and data, renders a `<script type="application/ld+json">` tag.

Support these schema types:
- `Organization` (for homepage)
- `LocalBusiness` (for city pages)
- `FAQPage` (for city and niche pages)
- `BreadcrumbList` (for all inner pages)
- `Service` (for niche pages)

---

## What NOT to Do

- Do not generate placeholder copy like "Lorem ipsum" or "[Insert city name here]"
- Do not create identical pages that just swap city names — use the unique `businessAngle` and `faqAnswers` per city
- Do not add dependencies not already in `package.json`
- Do not modify `app/layout.tsx`, `app/globals.css`, or any existing pages
- Do not create new UI components — use existing ones from `components/ui/`
- Do not create more than one H1 per page
- Do not link to pages that don't exist yet

---

## Running Order for Claude Code

When starting a new session, ask: "Which phase should I work on?"

Then execute only that phase completely before stopping.

After each file is created, confirm it compiles without errors using the project's TypeScript config before moving to the next file.

After Phase 3 is complete, run `npm run build` to verify no build errors before continuing.
