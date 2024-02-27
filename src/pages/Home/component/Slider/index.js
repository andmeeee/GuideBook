import { useRef, useEffect, useState } from "react";
import axios from "axios";
import './Slider.scss'

function Slider () {

    const slider = useRef(null)
    const [scroller, setScroller] = useState([]);
    const [index, setIndex] = useState(0);
   
    useEffect(() => {
      axios.get("https://localhost:7011/Scroller").then((response) => {
        setScroller((data) => {
          return response.data;
        });
      });
    }, []);

    useEffect(() => {
      const last = scroller.length-1;
      if(index < 0){
        setIndex(last);
      }
      if(index > last){
        setIndex(0);
      }
    }, [index, scroller]);

    useEffect(() =>{
      let slider = setInterval(() => setIndex(prevState => prevState + 1), 8000);
      return () => {
        clearInterval(slider);
      }
    })
   
    return (
      <>
        <div className="Slider">
          <div className="Track" ref={slider}>
            {scroller.map((sc, scindex) => {
              
              let pos = 'nextSLide';

              if(scindex === index){
                pos = 'activeSlide'
              }
              if(scindex === (index-1) || (index === 0 && scindex === scroller.length-1)){
                pos = 'lastSlide'
              }

              return (
                  <article className={pos}>
                    <div className="SliderText">
                      <h1>{sc.poster}</h1>
                      <p>{sc.description}</p>
                    </div>
                      <img src={sc.image} alt="sliderPhoto" />
                  </article>
              );
            })}
          </div>
          
          <button className="SliderButtonPrev" onClick={() => setIndex( prevState => prevState - 1)}></button>
          <button className="SliderButtonNext" onClick={() => setIndex( prevState => prevState + 1)}></button>
          
        </div>
      </>
    );
  }
   
  export default Slider;