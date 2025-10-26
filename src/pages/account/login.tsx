import FormContainer from "@/components/form-container";
import LoginForm from "@/components/login-form";

export default function Login() {

    return (
        <FormContainer form={<LoginForm />} head="Log In"></FormContainer>
    );
}