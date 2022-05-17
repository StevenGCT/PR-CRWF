import {Catalogue, NotFoundPage} from './pages';
import {Routes, Route} from 'react-router-dom';
import { PostProviderFund } from './context/postContext2';


function App() {
    return ( 
        <div>
            <PostProviderFund>
                <Routes>
                    <Route path="/catalogue" element={<Catalogue/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </PostProviderFund>
        </div>
        );
}
export default App;