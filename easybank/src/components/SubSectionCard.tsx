import type { SVGProps } from "react";

export interface SubSectionCardProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function SubSectionCard({
  icon: Icon,
  title,
  description,
}: SubSectionCardProps) {
  return (
    <div className="gap-6 flex flex-col items-center">
      <Icon className="bg-gradient-to-br from-lime-green to-bright-cyan rounded-full" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
