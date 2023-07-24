import React, { Component } from 'react'

//Components
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';


class Contact extends Component {
  render() {
    return (
      <div className='w-full h-full flex flex-col gap-16 py-20 md:px-36 px-10 overflow-y-auto'>
        <ContactDetails />
        <ContactForm />
      </div>
    )
  }
}
export default Contact;