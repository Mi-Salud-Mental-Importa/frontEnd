import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, Row, Col, Card, CardBody, Form, Input, Label, 
  Button } from 'reactstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import { loadPost, updatePost } from '../services/post-service';

function UpdatePost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    loadPost(postId)
      .then(data => {
        setPost(data);
      })
      .catch(err => {
        toast.error('Error cargando el post');
      })
  }, [postId]);

  const handleTitleChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      title: e.target.value,
    }));
  };
  
  const handleContentChange = (newContent) => {
    setPost((prevPost) => ({
      ...prevPost,
      content: newContent,
    }));
  };
  
  const updatesPost = (e) => {
    e.preventDefault();

    updatePost(post,postId) 
      .then(res => {
        toast.success('Post actualizado!');
        navigate('/Historias');
      })
      .catch(err => {
        toast.error('Error actualizando el post');
      })
  }

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <h3>Editar Post</h3>

                <Form onSubmit={updatesPost}>
                  <Label>Título</Label>
                  <Input
                    value={post?.title}
                    onChange={handleTitleChange}
                  />

                  <Label>Contenido</Label>
                  <JoditEditor
                    value={post?.content}
                    onChange={handleContentChange}
                  />

                  <Button type="submit">Actualizar</Button>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default UpdatePost;
