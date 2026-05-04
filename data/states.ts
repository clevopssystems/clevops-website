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
    topCities: ["Dallas", "Houston", "San Antonio", "Austin", "Fort Worth"],
    topIndustries: ["cleaning companies", "HVAC companies", "landscapers", "roofing contractors", "auto detailers"]
  },
]
