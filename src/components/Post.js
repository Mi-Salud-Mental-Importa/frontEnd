import React from 'react'
import {Card,CardBody,CardText,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Post({post={title:"Default",content:"default content"}}) {
  return (

    <Card className="border-1 shadow-sm mb-3">
        <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,60)+"....."}}>
            </CardText>
            <div>
                <Link className='btn btn-secondary border-1' to={'/posts/'+post.postId}>Leer más</Link>
            </div>
        </CardBody>
    </Card>

  )
}

export default Post