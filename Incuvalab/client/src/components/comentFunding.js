import React from 'react';
import { useState, useEffect } from 'react'
import avatar from '../profile2.webp'
import { usePosts } from '../context/postContext'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'

function Comment(props) {
    const { getComments } = usePosts();
    const [post, setPost] = useState();

    useEffect(() => {
        (async () => {
            if (props.idFunding != "") {
                const post = await getComments(props.idFunding);
                setPost(post);
                console.log(post);
            }
        })();
    }, [props.idFunding, getComments]);


    return (
        <CardGroup>
            <Row xs={1} md={1} className="g-4 rounded">
                {post.map(postC => (
                    <Col>
                        <Card key={post.IdComment}>
                            <Card.Body>
                                <Row>
                                    <div className='col-2'><img src={avatar} class="profile-image img-circle" height="40" width="40" /></div>
                                    <div className='col mt-2'> <b class="">{postC.Name}</b></div>
                                </Row>
                                <Card.Text className="p-2">
                                    <div className="flex justify-center ">
                                        <h6 className="text-muted">
                                            {postC.Comment}
                                        </h6>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}

export default Comment;