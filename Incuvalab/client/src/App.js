import {HomePage, NotFoundPage, UserProfile, CreateProject, Settings, Funding} from './pages';
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
                    <Route path='/funding/:id' element={<Funding/>} />
                </Routes>
            </UserProvider>
        );
}
export default App;