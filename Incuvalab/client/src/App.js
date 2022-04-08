import {HomePage, NotFoundPage} from './pages';
import {Routes, Route} from 'react-router-dom';


function App() {
    return ( 
        <div className="bg-red-400 h-screen">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
        );
}
export default App;