export const generatorCatalog = [
  {
    id: "instagram",
    title: "Instagram Username Generator",
    path: "/instagram-username-generator",
    category: "Usernames",
    type: "instagram",
    description:
      "Create stylish, memorable Instagram handles for creators, brands, and personal profiles.",
    tags: ["instagram", "social media", "creative", "creator"],
    related: ["youtube", "gaming", "brand"],
  },
  {
    id: "youtube",
    title: "YouTube Name Generator",
    path: "/youtube-name-generator",
    category: "Usernames",
    type: "youtube",
    description:
      "Generate YouTube channel names that feel memorable and audience-ready.",
    tags: ["youtube", "channel", "creator", "brand"],
    related: ["instagram", "gaming", "podcast"],
  },
  {
    id: "gaming",
    title: "Gaming Username Generator",
    path: "/gaming-username-generator",
    category: "Gaming",
    type: "gaming",
    description:
      "Find standout gaming identities for casual play, competitive scenes, and streaming.",
    tags: ["gaming", "gamer tag", "esports", "clan"],
    related: ["team", "fantasy", "youtube"],
  },
  {
    id: "business",
    title: "Business Name Generator",
    path: "/business-names",
    category: "Business",
    type: "business",
    description:
      "Generate premium, modern, and memorable business ideas for startups and agencies.",
    tags: ["startup", "company", "brand", "professional"],
    related: ["brand", "product", "podcast"],
  },
  {
    id: "brand",
    title: "Brand Name Generator",
    path: "/brand-names",
    category: "Business",
    type: "brand",
    description:
      "Invent distinctive brandable names with a strong market identity.",
    tags: ["brand", "product", "marketing"],
    related: ["business", "product", "podcast"],
  },
  {
    id: "fantasy",
    title: "Fantasy Name Generator",
    path: "/fantasy-names",
    category: "Fantasy & Sci-Fi",
    type: "fantasy",
    description:
      "Create worldbuilding-ready names for heroes, guilds, kingdoms, and magical lore.",
    tags: ["fantasy", "mythic", "kingdom", "magic"],
    related: ["character", "gaming", "team"],
  },
  {
    id: "character",
    title: "Character Name Generator",
    path: "/fictional-names",
    category: "Character Names",
    type: "fantasy",
    description:
      "Generate names for heroes, villains, protagonists, and supporting cast members.",
    tags: ["characters", "story", "fiction", "hero"],
    related: ["fantasy", "baby", "gaming"],
  },
  {
    id: "baby",
    title: "Baby Name Generator",
    path: "/baby-names",
    category: "Baby Names",
    type: "baby",
    description:
      "Explore modern, classic, and playful baby-name ideas in seconds.",
    tags: ["baby", "boy", "girl", "classic"],
    related: ["character", "pet", "fantasy"],
  },
  {
    id: "pet",
    title: "Pet Name Generator",
    path: "/pet-names",
    category: "Pet Names",
    type: "pet",
    description:
      "Invent adorable pet names that are easy to say and impossible to forget.",
    tags: ["pet", "cute", "playful", "animal"],
    related: ["baby", "team", "fantasy"],
  },
  {
    id: "team",
    title: "Team Name Generator",
    path: "/team-names",
    category: "Team Names",
    type: "team",
    description:
      "Build memorable team and group identities for clubs, projects, and communities.",
    tags: ["team", "group", "club", "community"],
    related: ["gaming", "business", "fantasy"],
  },
  {
    id: "podcast",
    title: "Podcast Name Generator",
    path: "/podcast-names",
    category: "Creative",
    type: "podcast",
    description:
      "Find podcast names that are catchy, memorable, and searchable.",
    tags: ["podcast", "audio", "brand", "media"],
    related: ["youtube", "brand", "business"],
  },
  {
    id: "product",
    title: "AI Product Name Generator",
    path: "/ai-product-names",
    category: "Product Names",
    type: "product",
    description:
      "Invent product names that sound credible, modern, and premium.",
    tags: ["ai", "saas", "startup", "product"],
    related: ["brand", "business", "podcast"],
  },
];

export const categoryGroups = Object.fromEntries(
  [...new Set(generatorCatalog.map((item) => item.category))].map((category) => [
    category,
    generatorCatalog.filter((item) => item.category === category),
  ])
);

export const categoryRoutes = [
  {
    key: "usernames",
    path: "/usernames",
    title: "Username & Social Name Generators",
    description:
      "Create memorable handles for Instagram, YouTube, gaming, and social media identities.",
    categories: ["Usernames"],
  },
  {
    key: "business",
    path: "/business-brand-names",
    title: "Business & Brand Name Generators",
    description:
      "Generate modern, credible, and memorable business names for startups and brands.",
    categories: ["Business"],
  },
  {
    key: "gaming",
    path: "/gaming-names",
    title: "Gaming & Esports Name Generators",
    description:
      "Build memorable gamer tags, clan names, and esports identities.",
    categories: ["Gaming"],
  },
  {
    key: "fantasy",
    path: "/fantasy-category",
    title: "Fantasy & Sci-Fi Name Generators",
    description:
      "Craft worlds, species, guilds, and mythical names with a polished fictional edge.",
    categories: ["Fantasy & Sci-Fi"],
  },
  {
    key: "fictional",
    path: "/character-names",
    title: "Character & Story Name Generators",
    description:
      "Design names for heroes, villains, fantasy worlds, and fictional identities.",
    categories: ["Character Names"],
  },
  {
    key: "baby",
    path: "/baby-name-tools",
    title: "Baby Name Generators",
    description:
      "Find elegant, modern, and meaningful baby names in a range of styles.",
    categories: ["Baby Names"],
  },
  {
    key: "pet",
    path: "/pet-name-tools",
    title: "Pet Name Generators",
    description:
      "Browse playful, cute, and memorable pet names for every personality.",
    categories: ["Pet Names"],
  },
  {
    key: "team",
    path: "/team-name-tools",
    title: "Team & Community Name Generators",
    description:
      "Generate names that feel collaborative, memorable, and brandable.",
    categories: ["Team Names"],
  },
  {
    key: "creative",
    path: "/creative-name-tools",
    title: "Creative Naming Tools",
    description:
      "Generate cutting-edge, memorable names for creators, media, and digital projects.",
    categories: ["Creative"],
  },
  {
    key: "product",
    path: "/product-name-tools",
    title: "Product & SaaS Name Generators",
    description:
      "Invent useful names for software products, AI tools, and digital services.",
    categories: ["Product Names"],
  },
];

export const getGeneratorByPath = (path) =>
  generatorCatalog.find((generator) => generator.path === path);

export const getGeneratorById = (id) =>
  generatorCatalog.find((generator) => generator.id === id);

export const getCategoryByKey = (key) =>
  categoryRoutes.find((category) => category.key === key);
