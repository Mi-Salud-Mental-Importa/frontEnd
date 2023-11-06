import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardBody, Form, Input, Label, Button, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Reactstrap CSS
import JoditEditor from 'jodit-react';
import { useState,useRef } from "react";
import {createPost as doCreatePost } from "../services/post-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForoApoyo = () => {

      const editor = useRef(null);
    	//const [content, setContent] = useState('');

      const[post,setPost]= useState({
        title:'',
        content:''
      })  

      const fieldChanged=(event)=>{
        setPost({...post,[event.target.name]:event.target.value})
      }

      const contentFieldChanged=(data)=>{
        setPost({...post,'content':data})
      }

      //Function create Post
      const createPost=(event)=>{
          event.preventDefault();
          if(post.title.trim()===''){
            toast.error("Titulo es requerido");
            return;
          }          
          if(post.content.trim()===''){
            toast.error("Contenido es requerido");
            return;
          }    
      // Post to the server       
      doCreatePost(post).then(data=>{
            toast.success("Post Creado")
            setPost({
              title:'',
              content:''
            })
          }).catch((error)=>{
            toast.error("Error en el servidor")
          })
      }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8}>
              <Card className="shadow-sm mt-3 mb-3">
                <CardBody>
                  <h3>Foro de Apoyo</h3>
                  <Form onSubmit={createPost}>
                    <div className="my-4">
                      <Label for="title">Titulo del Post</Label>
                      <Input type="text" id="title" placeholder="Enter here" className="rounded-0" name="title" onChange={fieldChanged}/>
                    </div>
                    <div className="my-4">
                      <Label for="content">Contenido del post</Label>
                      <JoditEditor 
                      ref={editor} 
                      value={post.content} 
                      onChange={contentFieldChanged}/>
                    </div>
                    <Container className="text-center">
                      <Button type="submit" className="rounded-0" color="primary">Crear un Post</Button>
                      <Button className="rounded-0 ms-2" color="danger" type="reset">Borrar contenido</Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ForoApoyo;
