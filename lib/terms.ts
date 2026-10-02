// Website Terms & Conditions, from SATO_Website_Terms_and_Conditions.docx (Draft v1.0).
// Internal drafting notes in that document (legal-review reminders, the footer-links
// note in section 25) are intentionally not published here.

type Block = string | { list: string[] };
export type TermsSection = { title: string; blocks: Block[] };

export const termsUpdated = "2 October 2026";

export const termsSections: TermsSection[] = [
  {
    title: "Introduction",
    blocks: [
      "These Terms & Conditions (“Terms”) govern your access to and use of the SATO Ramen Bowl website and related digital services operated by Nutricore Foods Private Limited (“SATO”, “we”, “us” or “our”).",
      "By accessing, browsing or using the website, you acknowledge that you have read and understood these Terms and agree to be bound by them. If you do not agree with these Terms, please do not use the website.",
    ],
  },
  {
    title: "About SATO",
    blocks: [
      "SATO Ramen Bowl is a food and restaurant brand operated by Nutricore Foods Private Limited. The website may provide information about SATO, its food menu, outlets, experiences, collaborations, community initiatives, franchise opportunities and online ordering options.",
    ],
  },
  {
    title: "Acceptable use",
    blocks: [
      {
        list: [
          "Use the website only for lawful purposes.",
          "Do not attempt unauthorised access to the website, systems, databases or administrative areas.",
          "Do not introduce malicious code, viruses, scraping tools or technologies intended to disrupt the website.",
          "Do not impersonate another person or submit false information.",
        ],
      },
    ],
  },
  {
    title: "Website information",
    blocks: [
      "We make reasonable efforts to keep website information accurate and current. However, menu items, prices, outlet timings, availability, promotions, photographs, descriptions and other information may change from time to time.",
      "Website content is provided for general information and does not guarantee that a particular item, outlet, promotion or service will be available at a particular time.",
      "Food photographs are for presentation purposes. Actual presentation, portion appearance and plating may vary.",
    ],
  },
  {
    title: "Menu, pricing and availability",
    blocks: [
      {
        list: [
          "Menu items and availability may vary by outlet.",
          "Prices should be read together with applicable taxes, charges or fees stated at the time of ordering.",
          "An item may be temporarily unavailable due to stock or operational reasons.",
          "SATO may modify, add, remove or discontinue menu items without prior notice.",
          "Special offers and limited-time items may have additional terms.",
          "If an ordering platform displays different pricing, fees, taxes or availability, the information shown at the point of order applies to that transaction.",
        ],
      },
    ],
  },
  {
    title: "Online orders and third-party platforms",
    blocks: [
      "The website may contain links, buttons or integrations that direct you to third-party ordering, delivery, payment, mapping or other services.",
      "Where an order is completed through a third-party platform, that platform’s terms, privacy policy, cancellation policy, payment rules and other conditions may also apply.",
      "SATO is not responsible for technical failures or interruptions of third-party platforms. Delivery times may depend on delivery partners, location, weather, traffic and operational conditions.",
      "Users should review the final order summary before completing payment.",
    ],
  },
  {
    title: "Payments",
    blocks: [
      "Where online payment is available, payments may be processed through third-party payment service providers. You are responsible for providing accurate payment and billing information and completing payment through an authorised payment method.",
    ],
  },
  {
    title: "Cancellations, refunds and complaints",
    blocks: [
      "Food orders are prepared against customer orders. Cancellation, refund, replacement and complaint handling will depend on the circumstances of the order and the applicable ordering channel.",
      "If you receive an incorrect, missing, damaged or otherwise problematic order, contact SATO or the ordering platform as soon as reasonably possible with the order details.",
    ],
  },
  {
    title: "Allergens and food information",
    blocks: [
      "SATO provides menu descriptions and ingredient-related information for customer guidance. Customers with food allergies, intolerances or specific dietary requirements should contact the relevant outlet before ordering.",
      "Although reasonable food-safety controls may be followed, SATO cannot guarantee an environment completely free from traces of every allergen. Customers with severe allergies should exercise appropriate caution and communicate their requirements before ordering.",
    ],
  },
  {
    title: "Intellectual property",
    blocks: [
      "Unless otherwise stated, the SATO name, logos, trademarks, brand identity, menu artwork, illustrations, photographs, graphics, written content, layouts, designs, videos, slogans and other website materials are owned by or licensed to Nutricore Foods Private Limited.",
      "You must not copy, reproduce, modify, distribute, publish, sell, license or commercially exploit SATO content without prior written permission. Unauthorised use of SATO brand assets may result in appropriate legal action.",
    ],
  },
  {
    title: "User-submitted content",
    blocks: [
      "If you submit photographs, reviews, testimonials, comments, suggestions, ideas or other content to SATO through the website or related channels (“User Content”), you confirm that you have the right to submit it.",
      "By submitting User Content, you grant SATO a non-exclusive, royalty-free, worldwide permission to use, reproduce, display, publish and adapt that content for legitimate brand, marketing, community and communication purposes, subject to applicable law.",
      "SATO may remove or decline to publish content that is unlawful, abusive, misleading, offensive, infringing or otherwise inappropriate.",
    ],
  },
  {
    title: "Reviews and feedback",
    blocks: [
      "Reviews and feedback should reflect genuine customer experiences. Users must not submit misleading, fabricated, defamatory, abusive or fraudulent reviews.",
      "SATO may respond to, moderate or report content where appropriate.",
    ],
  },
  {
    title: "Links to other websites",
    blocks: [
      "The website may contain links to third-party websites, including ordering platforms, social media, maps, payment services, collaboration partners or other external resources. These are provided for convenience. Third-party services are subject to their own terms and policies.",
    ],
  },
  {
    title: "Franchise information",
    blocks: [
      "Any franchise information published on the website is for preliminary information and enquiry purposes only. Website content relating to investment, setup, support, commercial structure, returns or timelines does not by itself constitute a franchise offer, acceptance, promise of revenue, guarantee of profitability or binding agreement.",
      "A franchise relationship, if approved, will be governed by a separate written agreement and formally accepted commercial terms.",
      "Prospective franchise partners should independently evaluate the investment, location, operating requirements, costs, risks and applicable legal obligations before entering into an agreement.",
    ],
  },
  {
    title: "Collaborations and partnerships",
    blocks: [
      "Submission of a collaboration enquiry does not create an obligation on SATO to accept, publish, fund, sponsor or proceed with the proposal. Any commercial collaboration may be subject to separate written confirmation.",
    ],
  },
  {
    title: "Privacy",
    blocks: [
      "Personal information submitted through forms, enquiries, ordering links or other website functions may be handled in accordance with SATO’s Privacy Policy.",
    ],
  },
  {
    title: "Website availability and security",
    blocks: [
      "We aim to keep the website available and functional, but do not guarantee uninterrupted or error-free availability. Maintenance, updates, hosting issues, network failures, security incidents and other circumstances may temporarily affect access.",
      "Users are responsible for maintaining the security of their own devices, accounts, passwords and internet connection.",
    ],
  },
  {
    title: "Disclaimer",
    blocks: [
      "To the extent permitted by applicable law, website information is provided on an “as available” basis. SATO does not represent that every piece of website content will always be complete, current, uninterrupted or error-free.",
      "Nothing in these Terms is intended to exclude or restrict any consumer right or legal protection that cannot lawfully be excluded or restricted.",
    ],
  },
  {
    title: "Limitation of liability",
    blocks: [
      "To the extent permitted by applicable law, SATO shall not be responsible for indirect, incidental, special or consequential losses arising from use of the website or third-party services.",
      "Nothing in these Terms is intended to limit liability where such limitation is prohibited by applicable law.",
    ],
  },
  {
    title: "Indemnity",
    blocks: [
      "To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities or reasonable costs arising from your unlawful use of the website, violation of these Terms, infringement of third-party rights or misuse of website services.",
    ],
  },
  {
    title: "Changes to these Terms",
    blocks: [
      "SATO may update these Terms from time to time to reflect changes to the website, business operations, services or legal requirements. Updated Terms will be published with a revised effective date.",
      "Your continued use of the website after updated Terms are published constitutes acceptance of the updated Terms to the extent permitted by law.",
    ],
  },
  {
    title: "Governing law and jurisdiction",
    blocks: [
      "These Terms shall be governed by the applicable laws of India. Subject to applicable law, disputes arising in connection with the website or these Terms shall be subject to the jurisdiction of the competent courts at Ahmedabad, Gujarat.",
    ],
  },
];
