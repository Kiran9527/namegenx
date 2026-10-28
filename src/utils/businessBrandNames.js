const industryWords = {
  general: ["Group", "Works", "Collective", "Partners", "Studio"],
  technology: ["Systems", "Digital", "Logic", "Labs", "Networks"],
  food: ["Kitchen", "Table", "Harvest", "Pantry", "Provisions"],
  fashion: ["Atelier", "Apparel", "House", "Thread", "Wear"],
  health: ["Wellness", "Care", "Health", "Living", "Clinic"],
  finance: ["Capital", "Advisors", "Ventures", "Finance", "Equity"],
  retail: ["Market", "Goods", "Supply", "Shop", "Trading"],
  creative: ["Studio", "Design", "Media", "Creative", "Works"],
};

const toneWords = {
  bold: ["Apex", "Brave", "Frontier", "Vanguard", "Forge"],
  friendly: ["Kindred", "Sunny", "Good", "Neighbor", "Gather"],
  elegant: ["Aurelia", "Velour", "Maison", "Luxe", "Belle"],
  innovative: ["Nexa", "Bright", "Future", "Vertex", "Evolve"],
  professional: ["Summit", "Meridian", "Pinnacle", "Civic", "Sterling"],
};

const endings = {
  short: ["Co", "ly", "io", "ify", "ora", "o"],
  modern: ["ly", "io", "Labs", "Works", "Nova", "Flow"],
  creative: ["Studio", "House", "Makers", "Collective", "Craft", "Spark"],
  premium: ["& Co.", "Atelier", "House", "Partners", "Reserve", "Society"],
  professional: ["Group", "Partners", "Consulting", "Solutions", "Company", "Advisors"],
};

const titleCase = (value) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const cleanKeyword = (value) =>
  value
    .trim()
    .replace(/[^a-zA-Z0-9\s'-]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, 40);

const fitName = (name, maxLength) => {
  let words = name.trim().split(/\s+/);
  while (words.join(" ").length > maxLength && words.length > 1) {
    words.pop();
  }
  const fitted = words.join(" ").replace(/[-&,.]+$/, "").trim();
  return fitted.slice(0, maxLength).trim();
};

const shuffle = (items, random) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }
  return shuffled;
};

export const buildBusinessBrandNames = ({
  keyword,
  secondKeyword = "",
  industry = "general",
  tone = "professional",
  style = "modern",
  count = 20,
  maxLength = 30,
  random = Math.random,
}) => {
  const first = titleCase(cleanKeyword(keyword));
  const second = titleCase(cleanKeyword(secondKeyword));
  if (!first) return [];

  const safeIndustry = industryWords[industry] ? industry : "general";
  const safeTone = toneWords[tone] ? tone : "professional";
  const safeStyle = endings[style] ? style : "modern";
  const safeCount = Math.max(1, Math.min(Number(count) || 20, 30));
  const safeLength = Math.max(6, Math.min(Number(maxLength) || 30, 40));
  const descriptors = toneWords[safeTone];
  const suffixes = [...endings[safeStyle], ...industryWords[safeIndustry]];
  const bases = second
    ? [first, `${first} ${second}`, `${first} & ${second}`, `${first}${second}`]
    : [first];
  const candidates = new Set();
  const combinedKeywordCandidates = second
    ? [`${first} ${second}`, `${first} & ${second}`, `${first}${second}`]
    : [];

  bases.forEach((base) => {
    suffixes.forEach((suffix) => {
      candidates.add(`${base} ${suffix}`);
      candidates.add(`${base}${suffix}`);
    });

    descriptors.forEach((descriptor) => {
      candidates.add(`${descriptor} ${base}`);
      candidates.add(`${base} ${descriptor}`);
    });

    industryWords[safeIndustry].forEach((industryWord) => {
      candidates.add(`The ${base} ${industryWord}`);
      candidates.add(`${base} & ${industryWord}`);
    });
  });

  const uniqueNames = new Map();
  const prioritizedCandidates = [
    ...combinedKeywordCandidates,
    ...shuffle(
      [...candidates].filter((candidate) => !combinedKeywordCandidates.includes(candidate)),
      random
    ),
  ];
  prioritizedCandidates
    .map((name) => fitName(name, safeLength))
    .filter(Boolean)
    .forEach((name) => {
      const key = name.toLowerCase();
      if (!uniqueNames.has(key)) uniqueNames.set(key, name);
    });

  return [...uniqueNames.values()].slice(0, safeCount);
};
