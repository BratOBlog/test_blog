import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faGhost} from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faDragon} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-black' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4 mx-5 flex justify-evenly'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faDownload} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
            placeholder='This is a Ghost icon'
          >
            <FontAwesomeIcon icon={faGhost} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faHamburger} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faDragon}/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3 px-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark mx-3' href='#'>
          BuyMoreIndustries
        </a>
      </div>
    </MDBFooter>
  );
}