import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Logo & Description */}
        <div>
          <img className='mb-4 w-40' src={assets.logo} alt="DocLink Logo" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6'>
         DocLink is a leading digital healthcare platform in India that connects patients with trusted doctors and clinics near them. Our mission is to simplify and quicken the appointment booking process, allowing you to focus on your health journey without any hassle.
        </p>
        </div>

        {/* COMPANY SECTION */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/' className="hover:text-black"><li>Home</li></NavLink>
            <NavLink to='/about' className="hover:text-black"><li>About us</li></NavLink>
            <NavLink to='/delivery' className="hover:text-black"><li>Delivery</li></NavLink>
            <NavLink to='/privacy' className="hover:text-black"><li>Privacy policy</li></NavLink>
          </ul>
        </div>

        {/* GET IN TOUCH SECTION */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>
              <a href="tel:+916205138009" className="hover:text-blue-500">
                <i className="fas fa-phone mr-2"></i> +91 6205138009
              </a>
            </li>
            <li>
              <a href="mailto:himanshu@gmail.com" className="hover:text-blue-500">
                <i className="fas fa-envelope mr-2"></i> himanshu@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                <i className="fas fa-map-marker-alt mr-2"></i> Dehradun, India - 248002
              </a>
            </li>

            {/* Follow Us Section */}
           <li className='mt-4 text-gray-800 font-medium text-2xl tracking-wide'>Follow Us</li>

            <li className='flex gap-3 text-lg mt-2'>
              <a href="https://www.facebook.com/Arya Arya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/_its_me_a_rya_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/hk39435" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Himanshu39435" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
         <span>&copy; </span> 2025 @Himanshu Kumar
           - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
