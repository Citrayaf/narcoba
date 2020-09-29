import React, {useState} from "react";

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
} from "reactstrap";



// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Download from "../index-sections/Download.js";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Editor from "components/Editor.js";

const par = {margintop: "0px", marginbottom: "1rem"};



function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [disabled, setDisabled] = useState(false);
  const [modal1, setModal1] = React.useState(false);
  const [judul, setJudul] = useState('');
  var a = useState(false);

  function handleTogg() {
    a = setDisabled(!disabled);
    return a;
  }

  function handleTextt(a) {
    var s;
    if (a) {
      return s=" ";
    }
  }

  console.log(judul)

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
      <div className="wrapper">
        <LandingPageHeader />
        <div className="main">
        <div className="section section-contact-us text-center">
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
                    value = {handleTextt(disabled)}
                    disabled={disabled}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Editor onChange={(value) => setJudul(value)} />
                  
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    // onClick={(e) => e.preventDefault()}
                    onClick={() => setModal1(true)}
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
                      <h4 className="title title-up">Modal title</h4>
                    </div>
                    <ModalBody>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it with
                        the necessary regelialia. It is a paradisematic country, in
                        which roasted parts of sentences fly into your mouth.
                      </p>
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
