import React,{useState} from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";


const Editor = () => {
  const [vall, setVall] = React.useState({judl: '', isi: ''});

  // sto ={
  //   judl: '',
  //   isi: ''
  // };
  const handleChange = name => event => {
    setVall({...vall, [name]: event.target.value});
  }
  const handleChangehtml = html => event => {
    setVall({...vall, [html]: event.target.innerHTML});
  }
  console.log(vall.judl)
  console.log(vall.isi)

  return(
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Judul .." required="required" 
        name="judl"
        onChange = {handleChange('judl')} 
        value={vall.judl} 
        />
        <ReactQuill 
        className="add-new-post__editor mb-1" 
        placeholder="Tulis disini..." 
        required="required"
        name="isi"
        onChange = {handleChangehtml('isi')} 
        value={vall.isi} 
        />
      </Form>
    </CardBody>
  </Card>
)};

export default Editor;
