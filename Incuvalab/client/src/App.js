import {HomePage, NotFoundPage} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/userContext';


function App() {
    return ( 
            <UserProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>

                </Routes>
            </UserProvider>
        );
}
export default App;