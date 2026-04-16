import type { ReactNode } from "react";
import ButtonPrimary from "./ButtonPrimary";

interface FormProps {
  title: string;
  onSubmit: () => void;
  children: ReactNode;
}

function Form({ title, onSubmit, children }: FormProps) {
  return (
    <>
      <form
        className="flex flex-col gap-10 items-center text-white bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] p-6 w-auto"
        onSubmit={onSubmit}
      >
        {title && <h2 className="text-4xl text-center">{title}</h2>}
        <div className=" gap-5 flex flex-col">{children}</div>

        <ButtonPrimary text="Submit" />
      </form>
    </>
  );
}

export default Form;
