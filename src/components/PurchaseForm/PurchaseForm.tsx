import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { Barcode, Calendar, DollarSign, Store } from "lucide-react";

export const PurchaseForm = () => {
  return (
    <div className="rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <h2 className="mb-4 text-lg font-semibold">Nueva Compra</h2>
      <form action="" className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex flex-col gap-2.5">
              <FormLabel htmlFor="date" text="Fecha" />
              <FormInput
                type="date"
                id="date"
                placeholder="Fecha"
                icon={Calendar}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <FormLabel htmlFor="tracking-number" text="Tracking" />
              <FormInput
                type="text"
                id="tracking-number"
                placeholder="Tracking"
                icon={Barcode}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2.5">
              <FormLabel htmlFor="store" text="Tienda" />
              <FormInput
                type="text"
                id="store"
                placeholder="Tienda"
                icon={Store}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <FormLabel htmlFor="amount" text="Valor total" />
              <FormInput
                id="amount"
                type="number"
                placeholder="Valor total"
                icon={DollarSign}
              />
            </div>
          </div>
        </div>
        <FormButton type="internal" text="Agregar compra" />
      </form>
    </div>
  );
};
