import type { ReactNode } from "react";

interface FormProps {
  title: string;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

function Form({ title, onSubmit, children }: FormProps) {
  return (
    <>
      <form
        className="flex flex-col gap-10 items-center text-white bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] p-6 w-auto"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => onSubmit(e)}
      >
        {title && <h2 className="text-4xl text-center">{title}</h2>}
        <div className=" gap-5 flex flex-col">{children}</div>

        <button className="text-xl px-6 py-2 w-fit text-white bg-blue-600/30 backdrop-blur-md rounded-md border  border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shadow-lg transition-all duration-200 hover:border-white/40">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
