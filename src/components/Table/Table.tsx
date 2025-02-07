interface TableProps {
  children: React.ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <table className="w-full border-collapse">{children}</table>;
};
