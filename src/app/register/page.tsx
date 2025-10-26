import FormContainer from "@/components/form-container";
import RegisterForm from "@/components/register-form";
import LoginForm from "@/components/login-form";
import AccountLayout from "../account-layout";

export default function AccountPage() {
    return (
        <AccountLayout>
            <FormContainer form={<RegisterForm />} head="Register"></FormContainer>
        </AccountLayout>
    )
}