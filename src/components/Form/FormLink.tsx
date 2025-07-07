import { Link } from "react-router-dom";

interface FormLinkProps {
  variant: "left" | "center" | "right";
  href: string;
  text: string;
  title: string;
}

export const FormLink = ({ variant, href, text, title }: FormLinkProps) => {
  return (
    <div
      className={`flex items-center ${variant === "left" && "justify-start"} ${variant === "center" && "justify-center"} ${variant === "right" && "justify-end"}`}
    >
      <Link to={href} title={title} className="text-right text-sm text-[#9394A5] hover:underline">
        {text}
      </Link>
    </div>
  );
};
