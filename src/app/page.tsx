import FormContainer from "@/components/form-container";
import LoginForm from "@/components/login-form";
import AccountLayout from "./account-layout";
import ErrorButton from "./error-button";

export default function Home() {
  return (
    <AccountLayout pageName={'Join us'} changePageRoute={'/register'}>
      <FormContainer form={<LoginForm />} head="Log In"></FormContainer>
      <ErrorButton />
    </AccountLayout>
  );
}
