interface FormLinkProps {
  variant: "left" | "center" | "right";
  href: string;
  text: string;
}

export const FormLink = ({ variant, href, text }: FormLinkProps) => {
  return (
    <div
      className={`flex items-center ${variant === "left" && "justify-start"} ${variant === "center" && "justify-center"} ${variant === "right" && "justify-end"}`}
    >
      <a href={href} className="text-right text-sm text-[#9394A5]">
        {text}
      </a>
    </div>
  );
};
