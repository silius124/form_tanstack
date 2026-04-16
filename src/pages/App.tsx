import Container from "../components/Container";
import Form from "../components/Form";
import FormField from "../components/FormField";
import Input from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const methods = useForm({ defaultValues: { name: "", email: "" } });
  const { errors } = methods.formState;
  function submit(data: any) {
    console.log("Отправка формы", data);
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <Form title={"LOGIN"} onSubmit={methods.handleSubmit(submit)}>
          <FormField
            label="Name"
            name="name"
            error={
              errors.name?.message || (errors.name ? "Поле обязательно" : "")
            }
          >
            <Input type="text" name="name" />
          </FormField>
          <FormField
            label="Email"
            name="email"
            error={
              errors.email?.message || (errors.email ? "Поле обязательно" : "")
            }
          >
            <Input type="email" name="email" />
          </FormField>
        </Form>
      </FormProvider>
    </Container>
  );
}

export default App;
