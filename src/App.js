import Main from "./pages/Main/Main"
import { Routes, Route } from "react-router"
import Frontend from "./pages/Frontend/Frontend"
import Nav from './Components/Nav/Nav'
import "./App.css"

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/frontend" exact element={<Frontend/>}/>
            </Routes>
        </>
    )
}

export default App