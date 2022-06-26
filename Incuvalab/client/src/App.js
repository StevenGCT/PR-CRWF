import { HomePage, NotFoundPage, UserProfile, CreateProject, Settings, ControlFunding, FundingPage, Login, Register, ControlPage, ControlAprobe, ControlRecycled, Catalogue, CatalogueCategory, CatalogueName, ControlComplete, ControlUsers, FundingForm ,Questions,ControlQrView } from './pages';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { PrivateRoute, PrivateRouteAdmin } from './components/PrivateRoute';
import { Qrpage } from './pages/Qrpage';
import { EmailVerification } from './pages/User/emailVerification';
import { CodeVerication } from './pages/User/numberConfirmation';
import { FormChangePassword } from './pages/User/formChangePassword';
import { FormModfiedUser } from './pages/User/formModificationUser';

//Proteger UserProfile y Settings para cada usuario individualmente

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/Questions" element={<Questions />} />

                <Route path="/user-funding-list" element={<UserProfile />} />

                <Route exact path='/CreateProject' element={<PrivateRoute />}>
                    <Route path="/CreateProject" element={<CreateProject />} />
                </Route>

                <Route path="/Settings" element={<Settings />} />

                <Route path='/funding/:id' element={<FundingPage />} />

                <Route exact path='/register' element={<PrivateRoute />}>
                    <Route exact path='/register' element={<Register />} />
                </Route>

                <Route exact path='/login' element={<PrivateRoute />}>
                    <Route exact path="/login" element={<Login />} />
                </Route>

                <Route exact path='/control-page' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page" element={<ControlPage />} />
                </Route>

                <Route exact path='/control-page-aprove' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page-aprove" element={<ControlAprobe />} />
                </Route>

                <Route exact path='/control-page-complete' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page-complete" element={<ControlComplete />} />
                </Route>

                <Route exact path='/control-page-recycle' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page-recycle" element={<ControlRecycled />} />
                </Route>

                <Route exact path='/control-page-user' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page-user" element={<ControlUsers />} />
                </Route>

                <Route exact path='/control-funding/:id' element={<PrivateRouteAdmin />}>
                    <Route path="/control-funding/:id" element={<ControlFunding />} />
                </Route>

                <Route path="/catalogue" element={<Catalogue />} />

                <Route path="/qrpage" element={<Qrpage />} />

                <Route path="/catalogue/category" element={<CatalogueCategory />} />

                <Route path="/catalogue/name" element={<CatalogueName />} />

                <Route exact path='/createFunding' element={<PrivateRouteAdmin />}>
                    <Route path="/createFunding" element={<FundingForm />} />
                </Route>

                <Route exact path='/createFunding/:id' element={<PrivateRouteAdmin />}>
                    <Route path="/createFunding/:id" element={<FundingForm />} />
                </Route>
                <Route path="/forgetPassword" element={<EmailVerification />} />

                <Route path="/formCodeConfirmation" element={<CodeVerication />} />

                <Route path="/changePassword" element={<FormChangePassword />} />

                <Route exact path='/control-page-qradmin' element={<PrivateRouteAdmin />}>
                    <Route path="/control-page-qradmin" element={<ControlQrView />} />
                </Route>

                <Route path="/Settings/ModifiedProfile" element={<FormModfiedUser/>} />

            </Routes>
        </UserProvider>
    );

}

export default App;