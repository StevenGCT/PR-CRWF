import image1 from '../components/images/predeterminate.jpg';
import './../css/setting.css';
import { useUsers } from '../context/userContext';

import {Formik, Form, Field} from 'formik';

export function Settings() {

        const { usersById, updatePassword } = useUsers();

        return( 
            <div className="App">
                <div id="container" class="container-fluid">   
                        <div class="card" id="card1">
                                    <h1>Personal Info</h1>
                                    <div class="name">
                                        {usersById.map(userById => (
                                            <label id="lblName">
                                                {userById.Name}
                                            </label>
                                        ))}   
                                    </div>
                                    <div class="lastName">
                                        {usersById.map(userById => (
                                            <label id="lastName">
                                                {userById.LastName}
                                            </label>
                                        ))} 
                                    </div>
                                    <div class="newPassword">
                                        <Formik
                                            initialValues={{
                                                NewPassword : '',
                                                }}
                                                onSubmit = {(values, actions)=>{
                                                    updatePassword(3, values)
                                                    console.log(values)
                                                }}
                                            >
                                            
                                            {({ handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <label for="newPassword"></label>
                                                    <Field id="newPassword_input" type="password" name="NewPassword" placeholder="New Password" required/>
                                                    <label for="newPasswordButton"></label>
                                                    <button id="newPasswordButton_button" name="newPasswordButton" type='submit'>CHANGE</button>
                                                </Form>
                                            )}    
                                        </Formik>
                                    </div>         

                                    <div class="submit">
                                        <input type="submit" value="Apply for bususiness account" id="businessApply" />
                                    </div>

                                    <div class="underline"></div>

                                    <div class="submits">
                                        <input type="submit" value="Save" id="save_button" />
                                    </div>     
                        </div>                                                          
                            <div class="card" id="card2">
                            <img src={image1} alt="userImage"/>
                                <div class="file-select" id="src-file1" >
                                    <input type="file" name="src-file1" aria-label="Archivo" accept="image/png, image/jpeg"/>
                                </div>
                        </div>

                </div>                   
            </div>
            

        );
    }


