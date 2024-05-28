import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, projectportfolio } from "../../content_option";

import magic from '../../assets/project/magic sketchpad.png'
import cohere from '../../assets/project/cohere.png'
import llama3 from '../../assets/project/llama.png'
import youtube from '../../assets/project/youtube.png'
import asl from '../../assets/project/asl.png'
import flappy from '../../assets/project/flappybird.gif'
import omok from '../../assets/project/omokai.gif'

export const Projects = () => {

  var imglist=[magic, cohere, llama3, youtube, asl, flappy, omok]
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>👩‍💻 Software Tools & Projects </h3>{" "}
          </Col>
        </Row>
        <div className="">
          {projectportfolio.map((data, i) => {
            
            return (
              <div key={i} className="researchBox">
                <div>
                <img class="img_research" src={imglist[i]} alt="d"></img>
                </div>
                <div className="description">
                  <h5>{data.title}</h5>
                  <div>
                  <p>{data.description}</p>
                
                  {data.github && 
                    <><a class="d" href={data.github}>github</a> | </>}
                
                  {data.website && 
                    <><a class="d" href={data.website}>website</a> | </>}
                
                  {data.paper && 
                    <a class="d" href={data.paper}>paper</a>}
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
