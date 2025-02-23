import { X } from "lucide-react";

interface ModalLayoutProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const ModalLayout = ({ title, children, onClose }: ModalLayoutProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 h-full w-full bg-black/80">
      <div className="fixed top-[50%] left-[50%] z-50 w-[512px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-zinc-200 bg-white p-6 shadow-sm max-sm:w-full">
        <div className="mb-4 flex w-full items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="cursor-pointer" onClick={onClose} title="Cerrar">
            <X size={20} />
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
