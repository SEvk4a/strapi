import {Header} from "./components/Header/index.jsx";
import {Main} from "./components/Main/index.jsx";
import {Footer} from "./components/Footer/index.jsx";
import {ToastContainer} from "react-toastify";

export const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </>
    );
};

