import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    
        <div>
          <a href='https://he-il.facebook.com/Dimona.Muni/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/twittedimonanet' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/dimona_muni/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                עיריית דימוונה
              </h6>
              <p>ביחד נשנה</p>
              
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>לינקים </h6>
              <p>
                <a href='https://www.dimona.muni.il/' className='text-reset'>
                 עיריית דימונה
                </a>
              </p>
              <p>
                <a href='https://www.dimona.muni.il/29/!' className='text-reset'>
                  אודות
                </a>
              </p>
              <p>
                <a href='https://www.mako.co.il/travel-israel/magazine-themostbeautifulcities/Article-b04c69dfc6cfe71026.htm' className='text-reset'>
                מה שווה לעשות בדימונה?Mako
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>צור קשר</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                כתובת: ת.ד 1, מרכז מסחרי חדש
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mayor@dimona.muni.il
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> טלפון: 08-6563111

              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> פקס: 08-6550105
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 כל הזכויות שמורות:
        <a className='text-reset fw-bold' href='https://www.dimona.muni.il/'>
          עיריית דימונה
        </a>
      </div>
    </MDBFooter>
  );
}