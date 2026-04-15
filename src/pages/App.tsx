import Form from "../components/Form";
import FormField from "../components/FormField";
import Input from "../components/Input";

function App() {
  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Отправка формы");
  }

  return (
    <div className="p-6 w-auto max-w-[1230px] mx-auto flex flex-col justify-center items-center">
      <Form title={"LOGIN"} onSubmit={submit}>
        <FormField label="Name" name="name" error="">
          <Input type="text" name="name" />
        </FormField>
        <FormField label="Email" name="email" error="">
          <Input type="email" name="email" />
        </FormField>
      </Form>
    </div>
  );
}

export default App;
