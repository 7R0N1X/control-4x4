interface FormLabelProps {
  htmlFor: string;
  text: string;
}

export const FormLabel = ({ htmlFor, text }: FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-[#9394A5]">
      {text}
    </label>
  );
};
