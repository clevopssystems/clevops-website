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
