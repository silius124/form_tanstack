import { FormProvider } from "react-hook-form";
import Container from "../components/Container";
import Form from "../components/Form";
import FormField from "../components/FormField";
import Input from "../components/Input";
import { useLoginForm } from "../hooks/useLoginForm";

function App() {
  const { methods, onSubmit, errors } = useLoginForm();

  return (
    <Container>
      <FormProvider {...methods}>
        <Form title={"LOGIN"} onSubmit={onSubmit}>
          <FormField label="Email" name="email" error={errors.email?.message}>
            <Input type="email" name="email" />
          </FormField>
          <FormField
            label="Password"
            name="password"
            error={errors.password?.message}
          >
            <Input type="password" name="password" />
          </FormField>
        </Form>
      </FormProvider>
    </Container>
  );
}

export default App;
