export interface CityData {
  city: string
  state: string
  stateSlug: string
  slug: string
  population: string
  businessAngle: string
  topIndustries: string[]
  nearbyCities: string[]
  localSearchTerm: string
  faqAnswers: {
    howLong: string
    howMuch: string
    whyLocal: string
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
]
