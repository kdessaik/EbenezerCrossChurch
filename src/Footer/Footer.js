import React from "react";
import { FaFacebookF,FaYoutube,FaInstagramSquare} from 'react-icons/fa';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


import "./Footer.css";
export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://web.facebook.com/profile.php?id=100070969517644" className="me-4 text-reset" target='_blank'>
          <FaFacebookF/>
          
         
           
          </a>
          
         
          <a href="https://www.youtube.com/channel/UCGTdQOKCj-1Pld-hxdHbEww" target='_blank' className="me-4 text-reset">
          <FaYoutube/>
          </a>
          <a href="https://www.instagram.com/ebenezercrosschurch/?hl=fr" className="me-4 text-reset" target='_blank'>
          <FaInstagramSquare />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Ebenezer Cross Church
              </h6>
              <p>
              Ebenezer Cross Church was founded in 1992 as Zaïrian Church.
               Refugees who came from DRCongo, created the church for praising God.
               The church has tree extensions in Kakuma camp and Kalobei settlement. 
              </p>
            </MDBCol>

           

            <MDBCol md="3" lg="1" xl="3" className="mx-auto mb-4" >
              <h6  className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p id='useful'>
                <a href="#!" className="text-reset"  >
                  Extensions
                </a>
              </p>
              <p id='useful'>
                <a href="#!" className="text-reset">
                  Construction 
                </a>
              </p>
              <p id='useful'>
                <a href="#!" className="text-reset">
                  Online 
                </a>
              </p>
              <p id='useful'>
                <a href="#!" className="text-reset">
                Media
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Kakuma 1,Zone 1,Block 9
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
          
                <a href='mailto:Ebenezercrosschurch@gmail.com'> Ebenezercrosschurch@gmail.com</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> <a href="tel:+254 7919780723" >+254 7919780723</a> 
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> <a href="tel:+254 728119217" >+254 728119217</a> 
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://Ebenezercrosschurch.com/">
        Ebenezercrosschurch.com
        </a>
      </div>
    </MDBFooter>
  );
}
