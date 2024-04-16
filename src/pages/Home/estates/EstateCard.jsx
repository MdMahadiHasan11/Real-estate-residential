import { Link } from "react-router-dom";

const EstateCard = ({estate}) => {
    const {author,bookId} = estate;
    return (

        <div>
            <p className="border">
                book name is :{author}
                <button className="btn btn-secondary m-8"><Link to={`/details/${bookId}`}>view Details</Link> </button>
            </p>
            
        </div>
    );
};

export default EstateCard;