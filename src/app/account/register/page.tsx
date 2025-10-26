"use client"

import FormContainer from "@/components/form-container"
import RegisterForm from "@/components/register-form"

export default function Page() {

    return (
        <FormContainer form={<RegisterForm />} head="Register"></FormContainer>
    )
}