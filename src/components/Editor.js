import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

const Editor = (props) => (
  
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Judul .." value={props.name} required="required" 
          onChange={e => props.setName(e.target.value)}
          />
        <ReactQuill className="add-new-post__editor mb-1" placeholder="Tulis disini..." />
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
