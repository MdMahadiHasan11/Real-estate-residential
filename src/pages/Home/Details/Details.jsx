import { useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    return (
        <div>
            details:{id}
        </div>
    );
};

export default Details;