import './../css/userProfile.css';
import {useUsers} from '../context/userContext';
import {Link} from 'react-router-dom'

export function UserProfile() {

    const{ followeds, followedsCount, donated, donatedCount, projects, projectsCount } = useUsers();

        return(
            <div className="App">
                <div class="card1">
                    <h1>USER PROFILE</h1>
                    <div class="card2">
                        <div class="subject">
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>Followed Projects: {followedsCount}</option>
                            {followeds.map(followed => (
                                <option >
                                {followed.Title}
                                </option>
                            ))}   
                        </select>
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>Donated Projects: {donatedCount}</option>
                            {donated.map(donate => (
                                <option >
                                {donate.Title}
                                </option>
                            ))}   
                        </select>
                        <select name="subject" id="subject_input">
                            <option disabled hidden selected>My Projects: {projectsCount}</option>
                            {projects.map(project => (
                                <option >
                                {project.Title}
                                </option>
                            ))}   
                        </select>
                        <Link to="/Settings">Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
