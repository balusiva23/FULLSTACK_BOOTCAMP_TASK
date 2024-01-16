import React, { useState } from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import ExamplePdf from '../pic/Sivakumar_Resume.pdf';
import { api } from '../../Api'
const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
//  const [isModalOpen, setIsModalOpen] = useState(false); // Add this state variable
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(api);
    try {
      const response = await fetch(`${api}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, comments }),
      });

      if (response.ok) {
         // If submission is successful, close the modal
      toggleModal();
      // Reset form fields to their initial values (or empty strings)
      setName("");
      setEmail("");
      setComments("");

      // Delay the download slightly (e.g., 1 second)
      // setTimeout(() => {
      //   window.open(ExamplePdf, "_blank", "noopener,noreferrer");
      // }, 1000);
       // Create a hidden anchor element for downloading the PDF
       const downloadLink = document.createElement("a");
       downloadLink.href = ExamplePdf;
       downloadLink.download = "Sivakumar-Resume.pdf";
 
       // Trigger the click event on the anchor element to initiate the download
       downloadLink.click();
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container '>
          {/* top */}
          <div className='heading text-center'>
            <h4>2.5+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>20014-2023</h4>
                <h1>Education </h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2007-2010</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
              
            </div>
          
          </div>
          <div className="Downloadbtn text-center">
          {/* <a
          href={ExamplePdf}
          download="Sivakumar-Resume"
          target="_blank"
          rel="noopener noreferrer"
        ><button className='home-btn'>Download Resume</button></a> */}
           <div className="Downloadbtn text-center">
        <button className='home-btn' onClick={toggleModal}>Download Resume</button>
      </div>

      {/* Modal for name, email, and comments */}
      {/* {isModalOpen && (
        <div className="modal">
      
          <div className='modal-content '>
            {/* <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span> 
            <form onSubmit={handleSubmit}>
              <h2>Enter your details</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  required
                />
              </div>
           
              <button className='btn_shadow' type="submit">
                <i class='fas fa-times'></i>
              </button>
            </form>
          </div>
        </div>
      )} */}
            </div>
        </div>
      </section>
           {/* Popup box */}
           {modal && (
        <div className='modal1'>
          <div onClick={toggleModal} className=''></div>
          {/* overlay */}
          <div className='modal-content '> 
           {/* d_flex */}
            <div className='modal-text '>
            <form onSubmit={handleSubmit}>
              <h2>Enter your details</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  required
                />
              </div>
              <div className='button f_flex mtop '>
      
               
                    <button className='btn_shadow' type="submit"> Submit</button>
    
                  </div>
          
            </form>
             
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
        )}
    </>
  )
}

export default Resume
