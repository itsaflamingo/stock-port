import FormContainer from "@/components/form-container";
import LoginForm from "@/components/login-form";

export default function Page() {

    return (
        <FormContainer form={<LoginForm />} head="Log In"></FormContainer>
    );
}