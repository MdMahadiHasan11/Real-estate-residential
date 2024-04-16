import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const DynamicTitle = () => {
    return (
        <div>
            <button className="btn btn-secondary">Title:</button>
            <Marquee>
                <Link className="mt-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mt-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>

        </div>
    );
};

export default DynamicTitle;