import React, {useState} from "react";
import WordLimiter from 'react-word-limit';

import Switch from "react-bootstrap-switch";


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  Alert,
} from "reactstrap";



// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Download from "../index-sections/Download.js";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Editor from "components/Editor.js";

const par = {margintop: "0px", marginbottom: "1rem", float: "right"};



function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [disabled, setDisabled] = useState(false);
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [konteks, setKonteks] = React.useState({judl: '', isi: ''});
  const [alert1, setAlert1] = React.useState(false);

  var a = useState(false);
  var [b, setB] = React.useState(false);
  var [user, setUser] = React.useState({nama: '', email: ''});
  const [peri, setPeri] = React.useState('');
  var cc = 0;
  

  function handleTogg() {
    a = setDisabled(!disabled);
    setB(!b);
    return a,b;
  }

  function handleTextt(a) {
    if (a) {
      return user.nama='',user.email='';
    }
  }
  const handleChange = name => event => {
    setUser({...user, [name]: event.target.value});
  }
  
  function checkModal(){
    if (b === false) {
      if (user.nama === ''){
        setPeri('isi Nama!!')
        cc= 1;
        if (user.email === ''){
          setPeri('isi Nama & Email!!')
          cc= 1;
          if (konteks.judl === ''){
            setPeri('isi Nama, Email, & Judul!!')
            cc= 1;
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Nama, Email, Judul, & Carita!!')
              cc= 1;
            }
          }
          else{
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Nama, Email, & Carita!!')
              cc= 1;
            }
          }
        }
        else{
          if (konteks.judl === ''){
            setPeri('isi Nama & Judul!!')
            cc= 1;
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Nama, Judul, & Carita!!')
              cc= 1;
            }
          }
          else{
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Nama & Carita!!')
              cc= 1;
            }            
          }
        }
      }
      else{
        if (user.email === ''){
          setPeri('isi Email!!')
          cc= 1;
          if (konteks.judl === ''){
            setPeri('isi Email & Judul!!')
            cc= 1;
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Email, Judul, & Isi!!')
              cc= 1;
            }
          }
          else{
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Email & Isi!!')
              cc= 1;
            }
          }
        }
        else{
          if (konteks.judl === ''){
            setPeri('isi Judul!!')
            cc= 1;
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Judul & Carita!!')
              cc= 1;
            }
          }
          else{
            if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
              setPeri('isi Carita!!')
              cc= 1;
            }
          }
        }
      }
    }
    else{
      if (konteks.judl === ''){
        setPeri('isi Judul!!')
        cc= 1;
        if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
          setPeri('isi Judul & Carita!!')
          cc= 1;
        }
      }
      else{
        if (konteks.isi === '<p><br></p>' || konteks.isi === ''){
          setPeri('isi Carita!!')
          cc= 1;
        }
      }
    }
    if (cc === 1 ){
      setModal1(true)
    }
    else{
      setModal2(true)
    }
  }

  var str = konteks.isi;
  var countt = str.split(' ')

  console.log(countt.filter(Boolean).length);

  console.log(user)
  console.log(a,b)
  console.log(konteks)
  console.log(peri)

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
    
  }, []);
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" id = "bubu">
        <LandingPageHeader />
        <div className="section section-notifications">
          <Alert color="success" isOpen={alert1}>
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons ui-2_like"></i>
              </div>
              <strong>Well done!</strong> You successfully read this important
              alert message.
              <button
                type="button"
                className="close"
                onClick={() => setAlert1(false)}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>
        </div>
        <div className="main">
        <div className="section section-contact-us text-center" id="notif">
          <Container>
            <h2 className="title">Tulis Disini?</h2>
            <p className="description">Your story is very important to us.</p>
            <Row>
            <Col className="ml-auto mr-auto" lg="15" md="8">
            <p className="text-left category">Tulis Sebagai Anonim <span style={par}> <Switch 
              checked={false}
              name='test' 
              offColor="" 
              offText="" 
              onColor="" 
              onText=""
              onChange={handleTogg}
              ></Switch></span>
              </p>
            </Col>
            </Row>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="15" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Full Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                    name = "nama"
                    id = "nama"
                    onChange = {handleChange('nama')}
                    value = {handleTextt(disabled)}
                    disabled={disabled}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email... (Optional)"
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                    name = "email"
                    id = "email"
                    onChange = {handleChange('email')}
                    value = {handleTextt(disabled)}
                    disabled={disabled}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Editor kon={konteks} OnKon={setKonteks} />
                  
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    // onClick={(e) => e.preventDefault()}
                    onClick={() => checkModal()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                  <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                    <div className="modal-header justify-content-center">
                      <button
                        className="close"
                        type="button"
                        onClick={() => setModal1(false)}
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </button>
                      <h4 className="title title-up">Peringatan</h4>
                    </div>
                    <ModalBody>
                      {peri}
                    </ModalBody>
                    <div className="modal-footer">
                      <Button
                        color="danger"
                        type="button"
                        onClick={() => setModal1(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                  <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                    <div className="modal-header justify-content-center">
                      <button
                        className="close"
                        type="button"
                        onClick={() => setModal2(false)}
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </button>
                      <h4 className="title title-up">Modal title</h4>
                    </div>
                    <ModalBody>
                      <p>
                      Anda yakin akan mengirim carita ini
                      </p>
                    </ModalBody>
                    <div className="modal-footer">
                      <Button color="default" type="button" 
                      onClick={() => {
                        setAlert1(true); 
                        setModal2(false);
                        document
                        .getElementById("bubu")
                        .scrollIntoView();
                        } 
                      }>
                        Ya
                      </Button>
                      <Button
                        color="danger"
                        type="button"
                        onClick={() => setModal2(false)}
                        >
                        Tidak
                      </Button>
                    </div>
                  </Modal>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col lg="9" md="12">
                <Editor />
              </Col>
            </Row> */}
          </Container>
        </div>
        <Download />
        <DarkFooter />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
