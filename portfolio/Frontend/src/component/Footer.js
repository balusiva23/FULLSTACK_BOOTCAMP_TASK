import React,{useEffect,useState} from "react"
import logo1 from "./pic/profile-pic-footer.png"
//import logo1 from "./pic/f_logo.png"
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // back to top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Scroll duration in milliseconds
    
    smooth: 'easeInOutQuad', // Scroll animation timing function
    // After scrolling to top, hide the button by setting isVisible to false
    onEnd: () => setIsVisible(false),
  });
  };
  return (
    <>
      <div  className={`back-to-top ${isVisible ? 'visible' : ''}`}onClick={scrollToTop}>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>
    </div>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt=''   style={{"width":"80px"}} />
          </div>
          <p>© 2021. All rights reserved .</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
