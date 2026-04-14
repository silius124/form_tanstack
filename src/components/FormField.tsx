import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  error: string;
  children: ReactNode;
}

function FormField({ label, name, error, children }: FormFieldProps) {
  return (
    <div className="grid grid-cols-[minmax(60px,auto)_1fr] items-center gap-x-4 items-center w-full max-w-lg">
      <label htmlFor={name}>{label}:</label>
      <div className="flex flex-col">
        {" "}
        {children}
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}

export default FormField;
