import "./FAQSection.css";

const commonFAQs = [
  {
    question: "Do I need an account or API to use NameGenX?",
    answer:
      "No. NameGenX name suggestions are generated locally in your browser. You can use the tools without an account or a generation API.",
  },
  {
    question: "Are generated names guaranteed to be available?",
    answer:
      "No. Suggestions are creative starting points only. Check platform handles, domain names, trademarks, and business registrations independently before using a name.",
  },
  {
    question: "Can I save or copy the ideas I like?",
    answer:
      "Yes. Where supported, use the Copy and Save actions. Favorites are stored in this browser and are not synced to an account.",
  },
];

const getGeneratorFAQs = (generator) => {
  const isBusinessOrBrand = ["business", "brand"].includes(generator.id);
  const firstQuestion = isBusinessOrBrand
    ? `How does the ${generator.title.toLowerCase()} work?`
    : `How does the ${generator.title.toLowerCase()} create suggestions?`;

  return [
    {
      question: firstQuestion,
      answer: isBusinessOrBrand
        ? "Enter a keyword, then select an industry, naming style, and result count. Brand names can also use a tone and optional second keyword. The browser combines your choices into name ideas without calling an API."
        : "Enter a keyword, choose a naming style and result count, then generate. Suggestions are created locally from the selected generator's name patterns and word lists.",
    },
    {
      question: "Can I generate names without entering a keyword?",
      answer:
        "Yes. You can leave the keyword blank on generators that allow it to get ideas from their built-in word lists. The business and brand generators require a keyword so suggestions reflect your input.",
    },
    ...commonFAQs.slice(1),
  ];
};

const getCategoryFAQs = (category) => [
  {
    question: `Which tools are included in ${category.title.toLowerCase()}?`,
    answer: `${category.description} The available tools are listed on this page; open a generator card to use it.`,
  },
  {
    question: "Do these category tools require a backend?",
    answer:
      "No. The name generators run in your browser and do not require a generation API or account.",
  },
  ...commonFAQs.slice(1),
];

const pageFAQs = {
  home: [
    {
      question: "Do I need an account to use the generator?",
      answer:
        "No. NameGenX is built for instant access, so you can generate ideas without creating an account.",
    },
    {
      question: "Can I generate multiple styles from one keyword?",
      answer:
        "Yes. Choose a generator, enter a keyword, and select from the available naming styles and result counts.",
    },
    ...commonFAQs.slice(1),
  ],
  catalog: [
    {
      question: "How do I find the right name generator?",
      answer:
        "Browse the generator cards by category or search by a topic such as gaming, brand, baby, pet, or social media.",
    },
    {
      question: "Do all listed generators work locally?",
      answer:
        "Yes. Name suggestions are produced in the browser. No name-generation API or backend is needed.",
    },
    ...commonFAQs.slice(1),
  ],
  search: [
    {
      question: "What can I search for?",
      answer:
        "Search by generator name, category, keyword, or project type. Try terms such as business, gaming, pet, or podcast.",
    },
    {
      question: "Why did my search return no tools?",
      answer:
        "Try a shorter or broader search term, or open All Generators to browse the complete directory.",
    },
    ...commonFAQs.slice(1),
  ],
  guides: [
    {
      question: "How do I choose a memorable name?",
      answer:
        "Prefer a name that is easy to say, spell, and remember. Make sure it suits its audience and leaves room for your project to grow.",
    },
    {
      question: "Should I check a name before using it?",
      answer:
        "Yes. Independently check the relevant platform, domain, trademark, and business registries. A generated idea is not an availability or legal check.",
    },
    ...commonFAQs.slice(1),
  ],
  about: [
    {
      question: "What does NameGenX do?",
      answer:
        "NameGenX provides browser-based tools that create name ideas for social profiles, businesses, brands, games, creative projects, and more.",
    },
    {
      question: "Does NameGenX use an AI API to generate names?",
      answer:
        "No. Name suggestions are generated locally using the name patterns and word data included with the website.",
    },
    ...commonFAQs.slice(1),
  ],
  contact: [
    {
      question: "Does the contact form send a message?",
      answer:
        "No. This frontend-only form saves a draft in this browser only. It does not send email or deliver the message to NameGenX.",
    },
    {
      question: "Where is my saved contact draft stored?",
      answer:
        "The draft is stored in this browser's local storage on this device. It is not uploaded or synchronized.",
    },
    ...commonFAQs.slice(1),
  ],
  privacy: [
    {
      question: "Are name-generation keywords sent to a server?",
      answer:
        "The name generators run locally and do not send keywords to a generation API. Favorites and the contact draft, if used, are stored in this browser.",
    },
    {
      question: "How can I clear locally saved favorites?",
      answer:
        "Clear this site's browser storage through your browser's site-data settings. This removes favorites and any locally saved contact draft.",
    },
    ...commonFAQs.slice(1),
  ],
  terms: [
    {
      question: "Can I use a generated name commercially?",
      answer:
        "NameGenX provides suggestions only and grants no clearance or exclusivity. Check applicable rights and availability before commercial use.",
    },
    {
      question: "Does NameGenX guarantee uniqueness or availability?",
      answer:
        "No. Suggestions may already be in use and are not checked against platforms, domain registries, trademark databases, or company registries.",
    },
    ...commonFAQs.slice(1),
  ],
  notFound: [
    {
      question: "How can I find the page I need?",
      answer:
        "Return to the homepage, browse All Generators, or use the site search to find a category or naming tool.",
    },
    ...commonFAQs.slice(0, 2),
  ],
};

const FAQSection = ({
  items,
  page = "catalog",
  generator,
  category,
  title = "Frequently asked questions",
}) => {
  const questions =
    items ||
    (generator
      ? getGeneratorFAQs(generator)
      : category
        ? getCategoryFAQs(category)
        : pageFAQs[page] || commonFAQs);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="section-header narrow">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading">{title}</h2>
      </div>
      <div className="faq-list">
        {questions.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </section>
  );
};

export default FAQSection;
