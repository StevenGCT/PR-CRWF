import {HomePage, NotFoundPage,CategoryForm} from './pages';
import {Routes, Route} from 'react-router-dom';
import {CategoryProvider} from './context/categoryContext';
import {Toaster} from "react-hot-toast";


function App() {
    return ( 
        <div className="bg-red-400 h-screen flex items-center">
            <div className="px-10 container m-auto">
            <CategoryProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/categoryForm" element={<CategoryForm/>}/>
                    <Route path="/categoryForm/:id" element={<CategoryForm/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                <Toaster/>
            </CategoryProvider>
            </div>
        </div>
        );
}
export default App;