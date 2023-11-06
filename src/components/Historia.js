import React, { useState } from 'react'
import { useEffect } from 'react';
import { loadAllPosts } from '../services/post-service';
import {Row,Col,Pagination,PaginationItem,PaginationLink} from 'reactstrap';
import Post from "./Post";
import {Container} from 'reactstrap';
import { toast } from 'react-toastify';

function Historia(){

    const[postContent,setPostContent]= useState({
        content:[],
        totalPages:'',
        totalElements:'', 
        pageSize:'',
        lastPage:false,
        pageNumber:''
    });

    useEffect(()=>{
        changePage(0)
    },[])

    const changePage=(pageNumber=0,pageSize=5)=>{
        if(pageNumber>postContent.pageNumber && postContent.lastPage){
            return;
        }
        if(pageNumber<postContent.pageNumber && postContent.pageNumber==0){
            return;
        }

        loadAllPosts(pageNumber,pageSize).then(data=>{
            setPostContent(data)
        }).catch(error=>{
            toast.error("Error in laoding posts")
        })
    };


    return(
        <div className="container-fluid">
            <Row>
                <Col md={
                    {
                        size:10,
                        offset:1
                    }
                }>
            <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '2.5em', color: 'darkred', margin: '20px 0' }}>Pared de los posts</h1>

                        {
                            postContent.content.map((post)=>(
                                <Post post={post} key={post.postId}/>
                            ))
                        }

                    <Container className='mt-3'>

                        <Pagination size='lg'>
                        <PaginationItem onClick={()=>changePage(postContent.pageNumber-1)} disabled={postContent.pageNumber==0}>
                            <PaginationLink previous>
                                Previo
                            </PaginationLink>
                        </PaginationItem>

                        {
                            [...Array(postContent.totalPages)].map((item,index)=>(
                                <PaginationItem onClick={()=>changePage(index)} active={index==postContent.pageNumber} key={index}>
                                    <PaginationLink >
                                        {index+1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))
                        }

                        <PaginationItem onClick={()=>changePage(postContent.pageNumber+1)} disabled={postContent.lastPage}>
                            <PaginationLink next>
                                Siguiente
                            </PaginationLink>
                        </PaginationItem>

                        </Pagination>

                    </Container>

                </Col>
            </Row>
        </div>
    
    )
}

export default Historia;