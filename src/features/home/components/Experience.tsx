const companies = [
  {
    name: "Factorial (FinTech)",
    period: "2025 – now",
    area: "Spend tools - Cards - Integrations",
  },
  {
    name: "Libere (PropTech)",
    period: "2023 – 2025",
    area: "Stay Experience - Process Automation",
  },
  {
    name: "Lookiero (Fashion)",
    period: "2020 – 2023",
    area: "AI Personalization - Inventory - Payments",
  },
];

export function Experience() {
  return (
    <section>
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-3">
        My product adventures
      </h3>
      <ul className="grid grid-cols-[auto_auto_1fr] gap-x-6 gap-y-2 items-baseline">
        {companies.map((company) => (
          <li key={company.name} className="contents">
            <span className="text-foreground text-sm">{company.name}</span>
            <span className="text-muted-foreground/60 text-xs">
              {company.period}
            </span>
            <span className="text-muted-foreground/60 text-xs">
              {company.area}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
