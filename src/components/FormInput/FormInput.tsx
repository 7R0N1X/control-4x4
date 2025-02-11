import React from "react";
import "./FormInput.css";

interface FormInputProps {
  id?: string;
  type: string;
  placeholder: string;
  icon: React.ElementType;
}

export const FormInput = ({
  id,
  type,
  placeholder,
  icon,
  ...props
}: FormInputProps) => {
  return (
    <div className="relative inline-block">
      {React.createElement(icon, {
        className:
          "size-5 text-[#18181B] absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3]",
      })}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border border-[#9394A5]/50 bg-white py-2 pr-3 pl-10 text-sm"
        {...props}
      />
    </div>
  );
};
