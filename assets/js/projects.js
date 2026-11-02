/*
  Project list for the homepage and the Projects tab.
  To add a project:
    1. Copy projects/_template.html to projects/<your-slug>.html and fill it in.
    2. Add an entry below (newest first). Cards update everywhere automatically.
  "tags" drive the filter buttons on the Projects tab.
*/
window.PROJECTS = [
  {
    slug: "xyz-health-solutions",
    tools: ["Requirements", "UML", "ERD", "Power BI"],
    title: "Unified IT System for XYZ Health Solutions",
    tags: ["Systems analysis"],
    label: "Case study · IBM capstone",
    summary: "Requirements, traceability, process and data models, and test and release plans for a simulated healthcare provider.",
    featured: true
  },
  {
    slug: "tsw-returns-app",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    title: "Returns App for a Food Distributor",
    tags: ["Systems analysis"],
    label: "University capstone · Project manager",
    summary: "Led a six-person team replacing a paper returns process with a Power Apps app and approval workflow.",
  },
  {
    slug: "nashville-housing",
    tools: ["SQL Server", "CTEs", "String functions"],
    title: "Nashville Housing Data Cleaning",
    tags: ["SQL"],
    label: "SQL · Data cleaning",
    summary: "Dates, missing addresses, address splitting and duplicate removal in SQL Server.",
  },
  {
    slug: "covid-exploration",
    tools: ["SQL Server", "Joins", "Window functions"],
    title: "COVID-19 Data Exploration",
    tags: ["SQL"],
    label: "SQL · Exploration",
    summary: "Infection and death rates, rolling vaccinations, CTEs, temp tables and views.",
  },
  {
    slug: "covid-dashboard",
    tools: ["Tableau", "Maps", "Forecasting"],
    title: "COVID-19 Tableau Dashboard",
    tags: ["Tableau"],
    label: "Tableau · Visualization",
    summary: "Global totals, deaths by continent, an infection map and a forecast by country.",
  },
  {
    slug: "movie-correlation",
    tools: ["Python", "pandas", "seaborn"],
    title: "Movie Revenue Correlation",
    tags: ["Python"],
    label: "Python · Analysis",
    summary: "Budget (0.74) and votes (0.63) track gross revenue most closely, and studio matters too.",
  },
  {
    slug: "amazon-price-scraper",
    tools: ["Python", "requests", "BeautifulSoup"],
    title: "Amazon Price Scraper",
    tags: ["Python"],
    label: "Python · Data collection",
    summary: "Daily price tracking into a CSV with requests and BeautifulSoup.",
  }
];
