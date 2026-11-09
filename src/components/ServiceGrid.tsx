import { ServiceCard } from "@/components/ServiceCard";
import { getAllServices } from "@/data/site";

export function ServiceGrid({ featuredId = "ict-solutions" }: { featuredId?: string }) {
  const services = getAllServices();

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          label={service.divisionName}
          title={service.name}
          href={service.href}
          image={service.image}
          description={service.summary}
          featured={service.id === featuredId}
        />
      ))}
    </div>
  );
}
