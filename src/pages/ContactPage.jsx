import { useForm } from "react-hook-form";
import FormInput from "../components/forms/FormInput";

const ContactPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendInfo = (data) => {
        console.log(data);
    }

    return (
        <div className="m-10">
            <div className="bg-white p-10">
                <h4 className="font-semibold text-xl">Contact Page!</h4>

                <form action="" className="my-5  space-y-4" onSubmit={handleSubmit(sendInfo)}>

                    <FormInput name="title" label="Title" placeholder="Enter your subject" required register={register("title", { required: "This feild is requried" })} error={errors.title} />

                    <FormInput name="email" label="Email Address" placeholder="Enter your email" required register={register("email", { required: "This feild is requried" })} error={errors.email} />

                    <button className="px-4 py-2 rounded bg-yellow-500 font-semibold">Submit</button>
                </form>

            </div>
        </div>
    )
};

export default ContactPage;