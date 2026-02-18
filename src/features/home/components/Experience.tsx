const companies = [
  {
    name: "Factorial (FinTech)",
    period: "2025 – now",
    area: "Spend management - Cards - Integrations",
  },
  {
    name: "Libere (PropTech)",
    period: "2023 – 2025",
    area: "Field Ops & Stay experience",
  },
  {
    name: "Lookiero (Fashion)",
    period: "2020 – 2023",
    area: "AI Personalization - Inventory - Payments",
  },
];

export function Experience() {
  return (
    <section className="w-fit ml-auto">
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-3">
        My product adventures
      </h3>
      <ul className="flex flex-col gap-2">
        {companies.map((company) => (
          <li key={company.name} className="flex items-baseline gap-3 text-sm">
            <span className="text-foreground shrink-0">{company.name}</span>
            <span className="text-muted-foreground/60 text-xs shrink-0">
              {company.period}
            </span>
            <span className="text-muted-foreground/60 text-xs">{company.area}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
