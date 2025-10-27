import FormContainer from "@/components/form-container";
import RegisterForm from "@/components/register-form";
import AccountLayout from "../account-layout";

export default function AccountPage() {
    return (
        <AccountLayout pageName={'Back to Log In'} changePageRoute={'/'}>
            <FormContainer form={<RegisterForm />} head="Register"></FormContainer>
        </AccountLayout>
    )
}