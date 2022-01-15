import Main from "./pages/Main/Main"
import { Routes, Route } from "react-router"

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Main/>}/>
        </Routes>
    )
}

export default App