"use client"

const BASE_URL = "https://clevops.co"

// ── Per-type data interfaces ─────────────────────────────────────────────────

export interface OrganizationSchemaProps {
  type: "Organization"
}

export interface LocalBusinessSchemaProps {
  type: "LocalBusiness"
  city: string
  state: string
  stateSlug: string
  slug: string
  description: string
}

export interface FAQSchemaProps {
  type: "FAQPage"
  items: Array<{ question: string; answer: string }>
}

export interface BreadcrumbSchemaProps {
  type: "BreadcrumbList"
  items: Array<{ name: string; href?: string }>
}

export interface ServiceSchemaProps {
  type: "Service"
  name: string
  description: string
  serviceType?: string
}

export type SchemaMarkupProps =
  | OrganizationSchemaProps
  | LocalBusinessSchemaProps
  | FAQSchemaProps
  | BreadcrumbSchemaProps
  | ServiceSchemaProps

// ── Schema builders ──────────────────────────────────────────────────────────

function buildSchema(props: SchemaMarkupProps): object {
  switch (props.type) {
    case "Organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ClevOps",
        url: BASE_URL,
        description:
          "ClevOps builds high-converting websites and growth systems for local service businesses across the USA.",
        logo: `${BASE_URL}/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${BASE_URL}/contact`,
        },
      }

    case "LocalBusiness":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `Website Design for Service Businesses in ${props.city}`,
        description: props.description,
        url: `${BASE_URL}/locations/${props.stateSlug}/${props.slug}`,
        provider: {
          "@type": "Organization",
          name: "ClevOps",
          url: BASE_URL,
        },
        areaServed: {
          "@type": "City",
          name: props.city,
          containedInPlace: {
            "@type": "State",
            name: props.state,
          },
        },
        priceRange: "$$",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "999",
        },
      }

    case "FAQPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: props.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          ...(item.href
            ? {
                item: item.href.startsWith("http")
                  ? item.href
                  : `${BASE_URL}${item.href}`,
              }
            : {}),
        })),
      }

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: props.name,
        description: props.description,
        serviceType: props.serviceType ?? "Web Design",
        provider: {
          "@type": "Organization",
          name: "ClevOps",
          url: BASE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "999",
        },
      }
  }
}

// ── Component ────────────────────────────────────────────────────────────────

export function SchemaMarkup(props: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(props)) }}
    />
  )
}
