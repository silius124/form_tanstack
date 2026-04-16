import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  error: string | undefined;
  children: ReactNode;
}

function FormField({ label, name, error, children }: FormFieldProps) {
  return (
    <div className="grid grid-cols-[minmax(100px,auto)_1fr] gap-x-4 items-center w-full max-w-lg">
      <label htmlFor={name}>{label}:</label>
      <div className="flex flex-col">
        {" "}
        {children}
        {error && (
          <span className="text-red-500 text-xs tracking-wide">{error}</span>
        )}
      </div>
    </div>
  );
}

export default FormField;
