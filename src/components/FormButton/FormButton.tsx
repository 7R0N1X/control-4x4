import Google from "@assets/icons/Google.svg";

interface FormButtonProps {
  type: "internal" | "external";
  text: string;
  onClick?: () => void;
}

export const FormButton = ({ type, text, onClick }: FormButtonProps) => {
  return type === "internal" ? (
    <button className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#3C3C3B] px-4 py-2 text-base font-medium text-[#D4AF37] transition-colors duration-300 hover:bg-[#242424]">
      {text}
    </button>
  ) : (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#FFFFFF] px-4 py-2 text-base font-medium text-[#9394A5] ring ring-[#9394A5] transition-colors duration-300 hover:bg-[#FAFAFA]"
    >
      <img src={Google} alt="Google" className="size-5" />
      {text}
    </button>
  );
};
