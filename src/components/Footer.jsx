import { BiLogo500Px } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';


function Footer() {
  return (
    <footer className="flex justify-between bg-darkshadow-200 mt-20">
      <div className="container flex flex-wrap justify-evenly items-start gap-5 my-10">
        <div className="flex justify-between">
        <div className='my-auto'>
          <BiLogo500Px className='text-7xl my-5 text-green-100 hover:text-green-200 transition'/>
        </div>
        <div className='w-4/6 text-center my-auto'>
          <h2 className='text-3xl font-semibold text-green-100 border-b-[1px] border-green-100 pb-4'>Social</h2>
          <ul className='flex justify-evenly items-center gap-2 text-white'>
            <li className='social-icon'><FaFacebookF /></li>
            <li className='social-icon'><FaTwitter /></li>
            <li className='social-icon'><FaInstagram /></li>
            <li className='social-icon'><FaLinkedinIn /></li>
            <li className='social-icon'><FaThreads /></li>
          </ul>
        </div>
        </div>
        <div className="flex justify-between">
        <div className='w-1/6'>
          <h2 className='text-2xl mb-4 font-semibold text-white'>Languages</h2>
          <ul className='text-gray-300 flex flex-col gap-y-3'>
            <li className='footer-link'>English</li>
            <li className='footer-link'>Arabic</li>
            <li className='footer-link'>French</li>
            <li className='footer-link'>Turkish</li>
            <li className='footer-link'>Chinese</li>
            <li className='footer-link'>Indonesian</li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h2 className='text-2xl mb-4 font-semibold text-white'>Categories</h2>
          <ul className='text-gray-300 flex flex-col gap-y-3'>
            <li className='footer-link'>Electronics</li>
            <li className='footer-link'>Jewelery</li>
            <li className='footer-link'>Men&#39;s clothing</li>
            <li className='footer-link'>Wemen&#39;s clothing</li>
            <li className='footer-link'>Jewelery</li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h2 className='text-2xl mb-4 font-semibold text-white'>Help</h2>
          <ul className='text-gray-300 flex flex-col gap-y-3'>
            <li className='footer-link'>Contact Us</li>
            <li className='footer-link'>Privacy Policy</li>
            <li className='footer-link'>Sitemap</li>
            <li className='footer-link'>Global</li>
          </ul>
        </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;