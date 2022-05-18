//import './../css/userProfile.css';

export function UserProfile() {

        return(
            <div className="App">
                <div class="card">
                    <h1>USER PROFILE</h1>
                    <div class="card2">
                        <div class="subject">
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>Followed Projects</option>
                            <option>Project 1</option>
                            <option>Project 2</option>
                            <option>Project 3</option>
                        </select>
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>Donated Projects</option>
                            <option>Project 1</option>
                            <option>Project 2</option>
                            <option>Project 3</option>
                        </select>
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>My Projects</option>
                            <option>Project 1</option>  
                        </select>
                        <label class="lbl">Settings</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
