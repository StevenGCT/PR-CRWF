import React from 'react';

import avatar from '../profile2.webp' 

function Comment(props) {
    return (
        <div class="card">
            <div class="card-body">
                <div className='row my-3 '>
                    <div className='col-2'><img src={avatar} class="profile-image img-circle" height="40" width="40" /></div>
                    <div className='col mt-2'> <b class="">Julian Serrano</b></div>
                </div>
                <hr/>
                <div className='row'>
                    <p>This is some text within a card body.</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;