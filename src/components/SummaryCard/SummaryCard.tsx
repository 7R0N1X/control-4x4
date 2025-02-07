import React from "react";

interface SummaryCardProps {
  icon: React.ElementType;
  title: "Total Importación" | "Saldo de Cupo" | "Cupo Anual";
  amount: number;
}

export const SummaryCard = ({ icon, title, amount }: SummaryCardProps) => {
  return (
    <div className="w-full rounded-[8px] bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <div className="space-y-2">
        <p className="flex items-center gap-2.5 text-sm font-medium text-[#52525B]">
          {React.createElement(icon, {
            className: `size-5 ${title == "Total Importación" && "text-[#18181B]"} ${title == "Saldo de Cupo" && "text-[#4ADE80]"} ${title == "Cupo Anual" && "text-[#D4AF37]"}`,
          })}
          {title}
        </p>
        <p
          className={`text-2xl font-bold ${title == "Total Importación" && "text-[#18181B]"} ${title == "Saldo de Cupo" && "text-[#4ADE80]"} ${title == "Cupo Anual" && "text-[#D4AF37]"}`}
        >
          ${amount}
        </p>
      </div>
    </div>
  );
};
