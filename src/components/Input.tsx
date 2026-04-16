import { useFormContext } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
}

function Input({ type, name }: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      id={name}
      {...register(name)}
      className="text-white px-3 py-2 w-xs bg-blue-600/30 backdrop-blur-md rounded-md border border-white/20 shadow-lg outline-none transition-all duration-200 focus:border-white/40 "
    />
  );
}

export default Input;
