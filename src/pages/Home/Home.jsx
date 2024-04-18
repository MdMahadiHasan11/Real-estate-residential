import { useLoaderData } from "react-router-dom";
import Slider from "../../layouts/Slider";
import EstateCard from "./estates/EstateCard";


const Home = () => {
    const estates = useLoaderData();

    return (
        <div>

            <Slider></Slider>

            <div>
                <div className="container mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-cyan-800 py-8 mt-6 mb-2 text-white">All Residential Estate</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {
                            estates.map(estate => <EstateCard
                                key={estate.bookId}
                                estate={estate}></EstateCard>)
                        }

                    </div>

                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default Home;