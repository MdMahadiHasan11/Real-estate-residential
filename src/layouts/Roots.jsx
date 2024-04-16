import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DynamicTitle from "./DynamicTitle";


const Roots = () => {
    return (
        <div>
            <Header></Header>
            <DynamicTitle></DynamicTitle>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;