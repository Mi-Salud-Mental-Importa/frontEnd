import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardText,Input, Button } from 'reactstrap';
import { useEffect } from 'react';
import { loadPost } from "../services/post-service";
import { useState } from 'react';
import { toast } from "react-toastify";
import {createComment} from "../services/post-service";

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comment,setComment]=useState({
        content:''
    })
const submitComment=()=>{
    if(comment.content.trim()===''){
        toast.error("Necesitas escribir un comentario")
        return;
    }
    createComment(comment,post.postId).then(data=>{
        console.log(data)
        toast.success("Comentario agregado")
        setPost({
            ...post,
            comments:[...post.comments,data.data]
        })
        setComment({
            content:''
        })
    }).catch(error=>{
        console.log(error);
    })
}
    useEffect(() => {
        // Load post of postId
        loadPost(postId)
            .then(data => {
                setPost(data);
                console.log(data)
                window.scrollTo(0, 0);
            })
            .catch(error => {
                toast.error("Error cargando post");
            });
    }, []);

    const printDate = (numbers) => {
        return new Date(numbers).toLocaleDateString();
    };

    return (
        <>
            <Navbar />

            <Container className="mt-4">
                <Link to="/historias"> Volver a Historias </Link> / {post && (<Link to=""> {post.title} </Link>)}
                
                <Row>
                    <Col md={12}>
                        <Card className="mt-3 mb-5"> 
                            {post && (
                                <CardBody>
                                    <CardText>Posted el día <b>{printDate(post.addedDate)}</b></CardText>
                                    <CardText>
                                        <h1>{post.title}</h1>
                                    </CardText>
                                    <CardText className="mt-3 mb-4" dangerouslySetInnerHTML={{ __html: post.content }} />
                                </CardBody>
                            )}
                        </Card>
                    </Col>
                </Row>

                <Row className="my-2">
                        <Col md={{
                            size:9,
                            offset:1
                         }}>
                            <h3>Comentarios ({post?post.comments.length:0})</h3>
                            {
                                post && post.comments.map((c,index)=>(
                                    <Card className="mt-2 border-1" key={index}>
                                        <CardBody>
                                            <CardText>
                                                {c.content}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                            <Card className="mt-4 border-0">
                                        <CardBody>
                                            <Input value={comment.content} onChange={(event)=>setComment({content:event.target.value})} type="textarea" placeholder="Ingresa un comentario"/>
                                            <Button onClick={submitComment} className="mt-2" color="primary">Comentar</Button>
                                        </CardBody>
                            </Card>

                        </Col>
                    
                </Row>

            </Container>

            <Footer />
        </>
    );
}

export default PostPage;
