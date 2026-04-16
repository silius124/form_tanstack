import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: string;
  children: ReactNode;
}

function FormField({ label, name, children }: FormFieldProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessage =
    errors[name]?.message || (errors[name] ? "Поле обязательно" : "");
  return (
    <div className="grid grid-cols-[minmax(100px,auto)_1fr] gap-x-4 items-center w-full max-w-lg">
      <label htmlFor={name}>{label}:</label>
      <div className="flex flex-col">
        {" "}
        {children}
        {errorMessage && (
          <span className="text-red-500 text-xs tracking-wide">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormField;
