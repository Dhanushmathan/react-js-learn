import { useState } from "react";
import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/forms/FormInput";
import FormTextArea from "../components/forms/FormTextArea";
import { useForm } from 'react-hook-form'

const ContactPage = () => {

    const [form, setForm] = useState({ fullName: "", emailAddress: "", password: "", desc: "" });

    const { register } = useForm();

    const handleInputs = (e) => {
        const { name, value } = e.target;

        setForm((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));
    }

    const submitFormToServer = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div className="m-10">
            <div className="bg-white p-10">
                <h4 className="font-semibold text-xl">Contact Page!</h4>

                <form action="" onSubmit={submitFormToServer}>
                    <div className="space-y-4 my-5">
                        <FormInput name="fullName" label="Full name" value={form.fullName} placeholder="Enter your fullname" handleOnChange={handleInputs} />
                        {/* {formError.fullName ? <small className="text-red-600">{formError.fullName}</small> : ""} */}
                        <div className="grid grid-cols-2 gap-x-4">
                            <FormInput name="emailAddress" label="Email Address" value={form.emailAddress} placeholder="Email Address" handleOnChange={handleInputs} />
                            <FormInput name="password" type="password" label="Password" value={form.password} placeholder="password" required handleOnChange={handleInputs} />
                        </div>
                        <FormTextArea name="desc" label="Contact Description" value={form.desc} placeholder="Enter your description" handleOnChange={handleInputs} />
                    </div>
                    <FormButton text="Submit" />
                </form>
            </div>
        </div>
    )
};

export default ContactPage;