import React, { useState } from 'react';
import Verificationotp from './verificationotp';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerified = (verified) => {
    setIsVerified(verified);
  };

  return (
    <div className='container'>
      <form
        action='https://formsubmit.co/poojith29gowd@gmail.com'
        method='POST'
        className='mt-5'
        onSubmit={(e) => {
          if (!isVerified) {
            e.preventDefault();
            // alert('Please verify your OTP before submitting the form.');
            toast.error('Please verify your OTP before submitting the form');


          }
        }}
      >
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12  col-12 py-2'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              style={{ width: '75%' }}
              className='p-3 rounded-3'
              required
            />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12  col-12 py-2'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              style={{ width: '75%' }}
              className='p-3 rounded-3'
              required
            />
          </div>
        </div>
        <div className='row '>
          <div className='col-lg-6 col-md-6 col-sm-12  col-12 py-2' >
            <Verificationotp onVerified={handleVerified} />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12  col-12 py-2'>
            <input
              type='url'
              name='website'
              placeholder='Website'
              style={{ width: '75%' }}
              className='p-3 rounded-3'
            />
          </div>
        </div>
        <div className='row'>
          <div className='p-3'>
            <textarea
              name='message'
              placeholder='Your Message'
              style={{ width: '75%' }}
              className='pb-5 rounded-3 p-2'
            ></textarea>
          </div>
          <div>
            <button
              className='p-3 bg-primary text-light rounded-2 hovereffect mb-5'
              type='submit'
            >
              Free Consultancy
            </button>
          </div>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ContactForm;
