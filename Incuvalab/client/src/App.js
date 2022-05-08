import {Catalogue, NotFoundPage} from './pages';
import {Routes, Route} from 'react-router-dom';
import { PostProvider } from './context/postContext';

function App() {
    return ( 
        <div>
            <PostProvider>
                <Routes>
                    <Route path="/" element={<Catalogue/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </PostProvider>
        </div>
        );
}
export default App;