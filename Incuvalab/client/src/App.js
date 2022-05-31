import {HomePage, NotFoundPage, UserProfile, CreateProject, Settings, FundingPage, Login, Register, ControlPage, ControlAprobe, ControlRecycled, Catalogue} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/userContext';

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
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login/>} />

                    <Route path="/control-page" element={<ControlPage/>}/>
                    <Route path="/control-page-aprove" element={<ControlAprobe/>}/>
                    <Route path="/control-page-recycle" element={<ControlRecycled/>}/>
                    <Route path="/catalogue" element={<Catalogue/>}/>
                </Routes>
            </UserProvider>
        );
}
export default App;