export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://printxdxb.ae";

export const SITE_NAME = "PrintX DXB";

export const HOME_SEO = {
  title: "Custom Enamel Pins in Dubai UAE | PrintX DXB",
  description:
    "custom enamel pins, lapel pins and metal badges in Dubai UAE. Get premium quality designs, fast delivery and competitive prices today. Order Now !",
};

export const QUOTE_SEO = {
  title: "Get a Custom Pin Quote Dubai UAE | PrintX DXB",
  description:
    "Request a quote for custom enamel pins, lapel pins and metal badges in Dubai UAE. Configure your design online and get a fast response from PrintX DXB.",
};

export const CATEGORY_SEO = {
  "hard-enamel-pins": {
    title: "Custom Hard Enamel Pins Dubai UAE | PrintX DXB",
    description:
      "custom hard enamel pins in Dubai UAE with premium quality finishes, vibrant colors and fast delivery. Perfect for brands, events and teams. Quote Now !",
  },
  "soft-enamel-pins": {
    title: "Custom Soft Enamel Pins Dubai UAE | PrintX DXB",
    description:
      "custom soft enamel pins in Dubai UAE with vibrant colors, durable finishes and fast delivery. Ideal for brands, events and promotions. Buy Now !",
  },
  "die-struck-pin-badges": {
    title: "Custom Die Struck Pin Badges UAE | PrintX DXB",
    description:
      "custom die struck pin badges in Dubai UAE with premium metal finishes, sharp detailing and fast delivery. Perfect for brands and events. Purchase Now !",
  },
  "3d-cast-pin-badges": {
    title: "Custom 3D Cast Pin Badges UAE | PrintX DXB",
    description:
      "custom 3D cast pin badges in Dubai UAE with high-detail metal finish and durable quality. Perfect for branding, events and promotions. Get Now !",
  },
  "photo-dome-pins": {
    title: "Custom Epoxy Pins Dubai UAE | PrintX DXB",
    description:
      "custom epoxy pins in Dubai UAE with glossy finish, vibrant colors and durable coating. Perfect for branding, events and promotional use. Get today !",
  },
  "trading-pin-badges": {
    title: "Custom UV Pins Dubai UAE | PrintX DXB",
    description:
      "custom UV pins in Dubai UAE with high-resolution printing, vibrant colors and premium finish. Ideal for branding, events and promotions. Order Now !",
  },
};

export const CATEGORY_SLUGS = Object.keys(CATEGORY_SEO);

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({ title, description, path }) {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logo-web.png"),
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

export function buildFaqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildServiceJsonLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}
