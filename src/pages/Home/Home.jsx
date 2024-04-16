import { useLoaderData } from "react-router-dom";
import Slider from "../../layouts/Slider";
import EstateCard from "./estates/EstateCard";


const Home = () => {
    const estates = useLoaderData();
    
    return (
        <div>
            
            <Slider></Slider>

            <div>
                <p>This is home</p>
                <div>
                    {
                        estates.map(estate => <EstateCard
                            key = {estate.bookId}
                            estate={estate}></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;