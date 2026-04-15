interface InputProps {
  type: string;
  name: string;
}

function Input({ type, name }: InputProps) {
  return (
    <input
      type={type}
      id={name}
      className="text-white px-3 py-2 bg-blue-600/30 backdrop-blur-md rounded-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shadow-lg outline-none transition-all duration-200 focus:border-white/40 "
    />
  );
}

export default Input;
