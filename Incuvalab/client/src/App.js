import {HomePage, NotFoundPage, UserProfile, CreateProject, Settings, FundingPage} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/userContext';
import {Card} from './components/Card';

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
                    <Route path='/qrcards/' element={<Card/>} />
                </Routes>
            </UserProvider>
        );
}
export default App;