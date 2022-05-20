import {Catalogue, NotFoundPage, CatalogueByCategory, ControlPage} from './pages';
import {Routes, Route} from 'react-router-dom';
import { PostProviderFund } from './context/postContext2';


function App() {
    return ( 
        <div>
            <PostProviderFund>
                <Routes>
                    <Route path="/control-page" element={<ControlPage/>}/>
                    <Route path="/catalogue" element={<Catalogue/>}/>
                    <Route path="/catalogue/category/search" element={<CatalogueByCategory/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </PostProviderFund>
        </div>
        );
}
export default App;