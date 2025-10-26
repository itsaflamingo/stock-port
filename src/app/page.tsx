import FormContainer from "@/components/form-container";
import LoginForm from "@/components/login-form";
import AccountLayout from "./account-layout";

export default function Home() {
  return (
    <AccountLayout>
      <FormContainer form={<LoginForm />} head="Log In"></FormContainer>
    </AccountLayout>
  );
}
