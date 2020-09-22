import React,{useState} from "react";
import WordLimit from 'react-word-limit';


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,

  TabContent,
  TabPane,
  Container,
  Row,


} from "reactstrap";

// core components

const par = {margintop: "0px", marginbottom: "1rem"};


const re = {
  display: "inline-block",
  backgroundcolor: "#2196f3",
  textdecoration: "none",
  padding: "10px 15px",
  borderradius: "8px",
  margintop: "15px",
  float: "right"
}


function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [readMore,setReadMore]=useState(false);
  const extraContent=<p>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has
                      the name Kanye West on it, it’s supposed to be pushing
                      the furthest possibilities. I will be the leader of a
                      company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am
                      the nucleus. I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has
                      the name Kanye West on it, it’s supposed to be pushing
                      the furthest possibilities. I will be the leader of a
                      company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am
                      the nucleus.
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has
                      the name Kanye West on it, it’s supposed to be pushing
                      the furthest possibilities. I will be the leader of a
                      company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am
                      the nucleus.
                    </p>
  const lesscontent=<p>
    <WordLimit limit={100}>I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.</WordLimit>
  </p>
  const linkName=readMore?'Read Less ':'Read More '


  return (
    <>
      <div className="section section-tabs"
      id="baca-section">
        <Container>
          <Row className="ml-auto mr-auto" md="10" xl="25">
              <p className="category">Carita.</p>
              <Card>
                <CardHeader>
                <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <h1>
                        Hahahahahahahahaha
                      </h1>
                    </TabPane>
                  </TabContent>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-justify"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane  style={par} tabId="iconPills1">
                      {readMore && extraContent || lesscontent}

                      <a className="read-more-link"
                      style={re} 
                      onClick={()=>{setReadMore(!readMore)}}
                      >{linkName}</a>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Row>
        </Container>
      </div>
      
    </>
  );
}

export default Tabs;
