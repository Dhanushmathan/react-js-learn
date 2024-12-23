import { useState } from "react";

const Accordion = (props) => {

    const [accordionActiveState, setAccordionActiveState] = useState(false);

    const toggleAccordion = () => {
        setAccordionActiveState(!accordionActiveState);
    };

    return (
        <div>
            <div className="p-5 bg-gray-100 rounded-t font-semibold flex items-center justify-between cursor-pointer hover:bg-gray-200" onClick={toggleAccordion}>
                <h4>{props.title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={accordionActiveState ? "rotate-15" : "-rotate-90"}
                ><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" /></svg>
            </div>
            <div className={"bg-gray-50 p-5" + (accordionActiveState ? " block" : " hidden")}>
                <span>{props.children ? props.children : props.desc}</span>
            </div>
        </div>
    )
}

export default Accordion;
