import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";

const AboutPage = () => {

    const { name } = useParams();

    return (
        <div className="m-10">
            <h4 className="text-xl font-semibold mb-3">About</h4>

            <div className="bg-white p-10 rounded shadow">
                <h5 className="capitalize">Welcome {name ? name : 'Guest'}, this is about page!</h5>
            </div>

            <div className="bg-white my-10 p-10 rounded">
                <h4 className="font-semibold text-2xl">Frequency asked questions</h4>

                <div className="my-5 space-y-5">
                    <Accordion title={"Is your internship free for all?"} desc={"Yes, it is!"} />
                    <Accordion title={"What is React?"} desc={"The popular JavaScript library that helps in building dynamic and interactive."} />
                    <Accordion title={"What is ReactNative?"}>
                        <p>ReactJS is a popular JavaScript library that helps in building dynamic and interactive user interfaces efficiently. Its component-based structure makes it developer-friendly.</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-IZ4r1s-tEhhing_GBIyIWlaszWqNbKz8g&s" alt="kakashi" />
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;