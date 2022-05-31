import {HomePage, NotFoundPage, UserProfile, CreateProject, Settings, FundingPage, Login, Register, ControlPage, ControlAprobe, ControlRecycled, Catalogue, CatalogueCategory} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/userContext';
import {PrivateRoute, PrivateRouteAdmin} from './components/PrivateRoute';

function App() {
    return ( 
            <UserProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/UserProfile" element={<UserProfile/>}/>
                    <Route path="/CreateProject" element={<CreateProject/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                    <Route path='/funding/:id' element={<FundingPage/>} />
                    
                    <Route exact path='/register' element={<PrivateRoute/>}>
                        <Route exact path='/register' element={<Register />}/>
                    </Route>

                    <Route exact path='/login' element={<PrivateRoute/>}>
                        <Route exact path="/login" element={<Login/>}/>
                    </Route>
                     
                    <Route exact path='/control-page' element={<PrivateRouteAdmin/>}>
                        <Route path="/control-page" element={<ControlPage/>}/>
                    </Route>
                    
                    <Route exact path='/control-page-aprove' element={<PrivateRouteAdmin/>}>
                        <Route path="/control-page-aprove" element={<ControlAprobe/>}/>                    
                    </Route>

                    <Route exact path='/control-page-recycle' element={<PrivateRouteAdmin/>}>
                        <Route path="/control-page-recycle" element={<ControlRecycled/>}/>
                    </Route>

                    
                    <Route path="/catalogue" element={<Catalogue/>}/>
                    <Route path="/catalogue/category" element={<CatalogueCategory/>}/>
                </Routes>
            </UserProvider>
        );
}
export default App;