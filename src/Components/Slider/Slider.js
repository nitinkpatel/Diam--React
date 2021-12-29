import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'

// export default function Slider() {
//     const delay = 500;
  

//     const [slideIndex, setSlideIndex] = useState(1)

//     const timeoutRef = React.useRef(null);

//     function resetTimeout() {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     }
//     const moveDot = slideIndex => {
//         setSlideIndex(slideIndex)
//     }
//     React.useEffect(() => {
//       resetTimeout();
//       timeoutRef.current = setTimeout(
//         () =>
//           setSlideIndex((slideIndex) =>
//           slideIndex === slideIndex + 1 ? "dot active" : "dot"
//           ),
//         delay
//       );
  
//       return () => {
//         resetTimeout();
//       };
//     }, [slideIndex]);
  

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, slideIndex) => {
                 
//                 return (
                    
//                     <div
//                     key={obj.id}
//                     className={slideIndex === slideIndex + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img 
//                         src={process.env.PUBLIC_URL + `/images/hirabajar${slideIndex + 1}.jpg`}
//                         />
//                     </div>
//                 )
                  
//             })}
            
//             <div className="container-dots">
//                 {Array.from({length: 19}).map((item, slideIndex) => (
//                     <div 
//                     onClick={() => moveDot(slideIndex + 1)}
//                     className={slideIndex === slideIndex + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }

const colors = Array.from(Array(19).keys());
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
       className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          >
            <img 
                         src={process.env.PUBLIC_URL + `/images/hirabajar${index + 1}.jpg`}
                         />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (


         <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

