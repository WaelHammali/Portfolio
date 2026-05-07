const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waelhammali.vercel.app";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wael Hammali",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    jobTitle: "Software Engineering Student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Ecole Nationale d'Ingenieurs de Tunis (ENIT)",
      url: "https://www.enit.utm.tn",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    email: "wael.hammali@etudiant-enit.utm.tn",
    sameAs: [
      "https://github.com/WaelHammali",
      "https://www.linkedin.com/in/wael-hammali-993100360/",
    ],
    knowsAbout: [
      "Cloud Security",
      "Cybersecurity",
      "Computer Vision",
      "RAG Architecture",
      "Network Automation",
      "Terraform",
      "Ansible",
      "Python",
      "Next.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wael Hammali — Portfolio",
    url: BASE_URL,
    description:
      "Portfolio of Wael Hammali, software engineering student at ENIT specializing in Cloud, AI, and Cybersecurity.",
    author: {
      "@type": "Person",
      name: "Wael Hammali",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
