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
                    <Route path="/eletronico" element = {<EletronicDiscountForm />}></Route>
                    <Route path="/livro" element = {<BookDiscountForm />}></Route>
                </Routes>
            </Router>
        </>
    )
    
}
export default AppRouter;