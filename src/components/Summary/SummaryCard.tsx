import React, { useState } from "react";
import { Pencil, TrendingUp } from "lucide-react";
import { AnnualQuotaForm } from "@components/AnnualQuotaForm/AnnualQuotaForm";

interface SummaryCardProps {
  icon: React.ElementType;
  title: "Cupo Anual" | "Saldo Disponible" | "Total Importado";
  subtitle:
    | "Límite establecido"
    | "Disponible para compras"
    | "Valor acumulado";
  amount: number;
}

export const SummaryCard = ({
  icon,
  title,
  subtitle,
  amount,
}: SummaryCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div
        className={`text group relative w-full rounded-lg p-6 text-white ring shadow-sm ring-[#E4E4E7] ${title === "Cupo Anual" ? "bg-gradient-to-br from-[#D4AF37] to-[#b99930] text-white" : ""} ${title === "Saldo Disponible" ? "bg-gradient-to-br from-emerald-600 to-emerald-700" : ""} ${title === "Total Importado" ? "bg-gradient-to-br from-zinc-600 to-zinc-800" : ""}`}
      >
        {title === "Cupo Anual" && (
          <button
            className="absolute right-6 bottom-6 flex size-8 cursor-pointer items-center justify-center rounded-md bg-zinc-800/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            title="Editar cupo anual"
            onClick={handleEdit}
          >
            <Pencil size={16} className="" />
          </button>
        )}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          {React.createElement(icon, { size: 32 })}
        </div>
        <p className="mb-2 text-3xl font-bold">${amount}</p>
        <div className="flex items-center text-gray-100">
          <TrendingUp size={16} className="mr-1" />
          <span className="text-sm">{subtitle}</span>
        </div>
      </div>
      {isEditing && (
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-black/80">
          <AnnualQuotaForm onClose={handleEdit} />
        </div>
      )}
    </>
  );
};
