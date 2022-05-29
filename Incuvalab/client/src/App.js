import {Catalogue, NotFoundPage, CatalogueByCategory, ControlPage, ControlAprobe} from './pages';
import {Routes, Route} from 'react-router-dom';
import { PostProviderFund } from './context/postContext2';


function App() {
    return ( 
        <div>
            <PostProviderFund>
                <Routes>
                    <Route path="/control-page" element={<ControlPage/>}/>
                    <Route path="/control-page-aprove" element={<ControlAprobe/>}/>
                    <Route path="/catalogue" element={<Catalogue/>}/>
                    <Route path='/catalogue/category/:id' element={<CatalogueByCategory/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </PostProviderFund>
        </div>
        );
}
export default App;