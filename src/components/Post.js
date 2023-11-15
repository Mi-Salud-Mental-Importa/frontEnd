import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Post({ post = { title: 'Default', content: 'default content' }, deletePostHandler }) {
    return (
        <Card className="border-1 shadow-sm mb-3">
            <CardBody>
                <h1>{post.title}</h1>
                <CardText dangerouslySetInnerHTML={{ __html: post.content.substring(0, 60) + '.....' }}></CardText>
                <div>
                    <Link className="btn btn-secondary border-1" to={'/posts/' + post.postId}>
                        Leer más
                    </Link>
                    <Button onClick={() => deletePostHandler(post)} color="danger" className="ms-2">Borrar</Button>
                    <Button tag={Link} to={`/updatePost/${post.postId}`} color="warning" className="ms-2">Editar</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default Post;
