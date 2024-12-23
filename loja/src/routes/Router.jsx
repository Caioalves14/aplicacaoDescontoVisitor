import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import EletronicDiscountForm from "../components/EletronicDiscountForm"
import BookDiscountForm from "../components/BookDiscountForm"


function AppRouter() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element = {<Home />}></Route>
                    <Route path="/eletronicos" element = {<EletronicDiscountForm />}></Route>
                    <Route path="/livros" element = {<BookDiscountForm />}></Route>
                </Routes>
            </Router>
        </>
    )
    
}
export default AppRouter;