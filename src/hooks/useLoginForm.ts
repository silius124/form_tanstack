import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Почта обязательна").email("Неверный формат почты"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Данные валидны и готовы к отправке: ", data);
  });

  return {
    methods,
    onSubmit,
    errors: methods.formState.errors,
    isLoading: methods.formState.isSubmitting,
  };
};
