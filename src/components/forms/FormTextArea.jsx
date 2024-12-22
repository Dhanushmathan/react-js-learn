import PropTypes from "prop-types";

const FormTextArea = ({ name, label, value, placeholder, handleOnChange, required }) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-1">{label}
                {required ? <span className="text-red-600 ml-1">*</span> : ""}
            </label>
            <textarea id={name} name={name} placeholder={placeholder} value={value} required={required} className="px-4 py-2 rounded bg-gray-200 block w-full outline-none" onChange={handleOnChange}></textarea>
        </div>
    );
};

FormTextArea.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    required: PropTypes.bool,
};

export default FormTextArea;