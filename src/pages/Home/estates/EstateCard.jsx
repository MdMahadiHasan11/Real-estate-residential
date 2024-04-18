import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { FaMapLocationDot } from "react-icons/fa6";
const EstateCard = ({ estate }) => {
    const { estate_title, id, image_url, segment_name, facilities, location, area, status, price } = estate;
    return (

        <div>
            {/* <p className="border">
                estate title :{estate_title}
                <button className="btn btn-secondary m-8"><Link to={`/details/${id}`}>view Details</Link> </button>
            </p> */}

            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex">

                    <div className="relative">
                        <img src={image_url} className=" max-h-52 rounded-lg shadow-2xl" />

                        <div className="absolute -top-6 -left-8 p-4">
                            <p className="text-white bg-blue-500 rounded-full w-12 text-center justify-center items-center h-12 text-2xl font-semibold">{status}</p>
                        </div>


                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{estate_title}</h1>
                        <div className="mb-6 mt-3">
                            <p>Segment: {segment_name}</p>
                        </div>

                        <div className="flex justify-between text-xl font-semibold">
                            <p>{price}</p>
                            <p>{area}</p>
                        </div>
                        <div className="text-start">
                            <p className="font-semibold mt-2">Facilities:</p>
                            <li className="">{facilities[0]}</li>
                            <li className="">{facilities[1]}</li>
                            <li className="">{facilities[2]}</li>
                        </div>
                        <div className="flex mt-4 ">
                            <div className="text-2xl mr-5"><FaMapLocationDot /></div>

                            <div className="font-semibold">{location}</div>
                        </div>

                        <button className="btn bg-cyan-400 m-8"><Link to={`/details/${id}`}>View Property </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;