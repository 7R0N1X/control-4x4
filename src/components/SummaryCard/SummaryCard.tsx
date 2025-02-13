import React from "react";
import classNames from "classnames";

interface SummaryCardProps {
  icon: React.ElementType;
  title:
    | "Saldo Ocupado"
    | "Saldo Disponible"
    | "Cupo Anual"
    | "Compras Realizadas";
  amount: number;
}

const styles = {
  "Saldo Ocupado": {
    text: "text-[#18181B]",
    bg: "bg-[#18181B]",
    iconBg: "bg-zinc-100",
    iconText: "text-[#18181B]",
  },
  "Saldo Disponible": {
    text: "text-[#4ade80]",
    bg: "bg-[#4ade80]",
    iconBg: "bg-[#4ade801a]",
    iconText: "text-[#4ade80]",
  },
  "Cupo Anual": {
    text: "text-[#d4af37]",
    bg: "bg-[#d4af37]",
    iconBg: "bg-[#d4af371a]",
    iconText: "text-[#d4af37]",
  },
  "Compras Realizadas": {
    text: "text-blue-500",
    bg: "bg-blue-500",
    iconBg: "bg-[#3B82F61a]",
    iconText: "text-blue-500",
  },
};

export const SummaryCard = ({ icon, title, amount }: SummaryCardProps) => {
  const { text, bg, iconBg, iconText } = styles[title];

  return (
    <div className="w-full rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <div className="flex h-full w-full items-center gap-3">
        <div className={classNames("min-h-full w-1", bg)} />
        <div className={classNames("rounded-md p-2", iconBg)}>
          {React.createElement(icon, {
            className: classNames("size-5", iconText),
          })}
        </div>
        <div>
          <p className="flex items-center gap-2.5 text-sm font-medium text-[#52525B]">
            {title}
          </p>
          <p className={classNames("text-xl font-bold", text)}>${amount}</p>
        </div>
      </div>
    </div>
  );
};
