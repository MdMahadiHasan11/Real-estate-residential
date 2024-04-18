
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";

const Details = () => {
    const { id } = useParams();

    const estates = useLoaderData();
    const estate = estates.find(card => card.id === (id));


    return (
        <div>
            <div className="lg:flex  bg-base-100 shadow-xl">
                <div className="lg:mr-6 md:mr-3 ">
                    <img className="" src={estate.image_url} alt="Movie" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="card-title lg:text-4xl md:text-3xl mb-3 ">
                        {estate.estate_title}
                    </h2>
                    <p className="mb-5">
                        {estate.description}
                    </p>
                    <hr className="border-t border-gray-300 my-4" />
                    <div className="flex justify-around text-xl font-semibold">
                            <p>{estate.price}</p>
                            <p>{estate.area}</p>
                        </div>
                    <div className="text-start">
                        <p className="font-semibold mt-2">Facilities:</p>
                        <li className="">{estate.facilities[0]}</li>
                        <li className="">{estate.facilities[1]}</li>
                        <li className="">{estate.facilities[2]}</li>
                    </div>

                    <div className="flex mt-4 ">
                            <div className="text-2xl mr-5"><FaMapLocationDot /></div>

                            <div className="font-semibold">{estate.location}</div>
                        </div>


                    <div className="card-actions justify-center">
                        <button className="rounded-lg font-bold px-8 py-4 bg-cyan-400"><Link to={`/`}>Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;