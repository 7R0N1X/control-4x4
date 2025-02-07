interface FormLabelProps {
  htmlFor: string;
  text: string;
}

export const FormLabel = ({ htmlFor, text }: FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-[#1a1a1a]">
      {text}
    </label>
  );
};
