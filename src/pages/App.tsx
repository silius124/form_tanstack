import Form from "../components/Form";
import FormField from "../components/FormField";

function App() {
  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Отправка формы");
  }

  return (
    <div className="p-6 w-auto max-w-[1230px] mx-auto flex flex-col justify-center items-center">
      <Form title={"LOGIN"} onSubmit={submit}>
        <FormField label="Name" name="name" error="">
          <input
            type="text"
            id="name"
            className="text-white px-3 py-2 bg-blue-600/30 backdrop-blur-md rounded-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shadow-lg outline-none transition-all duration-200 focus:border-white/40 "
          />
        </FormField>
        <FormField label="Email" name="email" error="">
          <input
            type="email"
            id="email"
            className="text-white px-3 py-2 bg-blue-600/30 backdrop-blur-md rounded-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shadow-lg outline-none transition-all duration-200 focus:border-white/40 "
          />
        </FormField>
      </Form>
    </div>
  );
}

export default App;
