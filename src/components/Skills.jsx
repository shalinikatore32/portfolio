import htlmImg from "../assets/img/html.svg";
import cssImg from "../assets/img/css.svg";
import bootstrapImg from "../assets/img/bootstrap.svg";
import JavaScriptImg from "../assets/img/javascript.svg";
import reactImg from "../assets/img/react.svg";
import expressJs from "../assets/img/express-js.svg";
import nodeJs from "../assets/img/nodejs-logo.svg";
import gitImg from "../assets/img/git.svg";
import materialUI from "../assets/img/materialui.svg";
import mongoDb from "../assets/img/mongoDB.svg";
import viteJsImg from "../assets/img/vitejs.svg";
import javaImg from "../assets/img/java.svg";
import apiImg from "../assets/img/api.svg";
import postmanImg from "../assets/img/postman-icon.svg";
import jwtImg from "../assets/img/jwtImg.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in building responsive and user-friendly interfaces using React.js, HTML, CSS, and JavaScript. Skilled in creating dynamic, visually appealing designs with strong UI/UX principles. Experienced in RESTful API development and server-side programming using Node.js, Express.js, and MongoDB. Knowledgeable in creating secure, scalable backend architectures.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htlmImg} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={cssImg} alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrapImg} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScriptImg} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactImg} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={materialUI} alt="Image" />
                                <h5>MUI</h5>
                            </div>
                            <div className="item">
                                <img src={jwtImg} alt="Image" />
                                <h5>JWT</h5>
                            </div>
                            <div className="item">
                                <img src={expressJs} alt="Image" />
                                <h5>ExpressJS</h5>
                            </div>
                           
                            <div className="item">
                                <img src={nodeJs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={mongoDb} alt="Image"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={apiImg} alt="Image" />
                                <h5>APIs</h5>
                            </div>
                            <div className="item">
                                <img src={postmanImg} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={viteJsImg} alt="Image" />
                                <h5>ViteJS</h5>
                            </div>
                            <div className="item">
                                <img src={gitImg} alt="Image" />
                                <h5>Git</h5>
                            </div>


                            

                            <div className="item">
                                <img src={javaImg} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
