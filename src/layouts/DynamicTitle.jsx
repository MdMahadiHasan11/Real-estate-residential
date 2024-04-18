import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const DynamicTitle = () => {
    return (
        <div>
            {/* <button className="btn btn-secondary">Title:</button> */}
            <Marquee  className="w-1/2 bg-slate-100  mt-8 mb-10 ">
                <Link className="mt-12 mr-8 font-bold text-xl " to="/">LivingNexus</Link>
                <Link className="mt-12 mr-8 text-cyan-600 font-bold text-xl " to="/">Indulge in the height of luxury with this stunning penthouse apartment offering breathtaking city views</Link>
                
                
                <Link className="mt-12 mr-8   font-bold text-xl " to="/">LivingNexus</Link>
                <Link className="mt-12 mr-8 text-cyan-600  font-bold text-xl " to="/">Elegant Family Home Views</Link>
            </Marquee>

        </div>
    );
};

export default DynamicTitle;