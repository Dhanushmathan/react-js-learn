import PropTypes from "prop-types";

const FormInput = ({ name, label, placeholder, handleOnChange, type = "text", required, register, error }) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-1">{label}
                {required ? <span className="text-red-600 ml-1">*</span> : ""}
            </label>
            <input id={name} name={name} type={type} placeholder={placeholder} {...register} className="px-4 py-2 rounded bg-gray-200 block w-full outline-none" onChange={handleOnChange} />
            {error && <small className="text-red-500 font-semibold">{error.message}</small>}
        </div>
    );
};

FormInput.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    register: PropTypes.object,
    error: PropTypes.object,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    required: PropTypes.bool,
};

export default FormInput;