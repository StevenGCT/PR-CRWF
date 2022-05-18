
import image1 from '../components/images/predeterminate.jpg';
//import './../css/setting.css';

export function Settings() {
        return(
            <div className="App">
                <div id="container" class="container-fluid">   
                        <div class="card" id="card1">
                                    <h1>Personal Info</h1>
                                    <div class="name">
                                        <label id="lblName">First Name</label>
                                    </div>
                                    <div class="lastName">
                                        <label id="lastName">Last Name</label>
                                    </div>
                                    <div class="newPassword">
                                        <label for="newPassword"></label>
                                        <input type="password" placeholder="New Password" name="newPassword" id="newPassword_input" required/>
                                    </div>
                                    <div class="newPasswordButton">
                                        <label for="newPasswordButton"></label>
                                        <input type="submit" value="CHANGE" name="newPasswordButton" id="newPasswordButton_button" />
                                    </div>

                                    <h1>Notifications</h1>
                                    <div class="underline"></div>
                                    <div class="notification" id="weaklyReports">
                                        <label for="notification" id="notification_label">Weakly Reports</label>
                                        <div class="switch">
                                            <label class="switch">
                                                <input type="checkbox"/>
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                    

                                    <div class="underline"></div>

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