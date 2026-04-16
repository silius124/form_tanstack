import Container from "../components/Container";
import Form from "../components/Form";
import FormField from "../components/FormField";
import Input from "../components/Input";

function App() {
  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Отправка формы");
  }

  return (
    <Container>
      <Form title={"LOGIN"} onSubmit={submit}>
        <FormField label="Name" name="name" error="">
          <Input type="text" name="name" />
        </FormField>
        <FormField label="Email" name="email" error="">
          <Input type="email" name="email" />
        </FormField>
      </Form>
    </Container>
  );
}

export default App;
