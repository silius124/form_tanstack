function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 w-auto max-w-307.5 mx-auto flex flex-col justify-center items-center ">
      {children}
    </div>
  );
}

export default Container;
