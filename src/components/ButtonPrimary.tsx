function ButtonPrimary({ text }: { text: string }) {
  return (
    <button className="text-xl px-6 py-2 w-fit text-white bg-blue-600/30 backdrop-blur-md rounded-md border  border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shadow-lg transition-all duration-200 hover:border-white/40">
      {text}
    </button>
  );
}

export default ButtonPrimary;
