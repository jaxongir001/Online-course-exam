import logo from '../../assets/images/icons/logo.svg'
import email from '../../assets/images/icons/email.svg'
import phone from '../../assets/images/icons/phone.svg'
import location from '../../assets/images/icons/location.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import ini from '../../assets/images/icons/ini.svg'


const Footer = () => {
  return (
    <div>
      <footer className='bg-white mt-36'>
    <div className='py-24'>
    <nav className='container flex justify-between items-start '>
          <ul>
            <a href="/"><img className='bg-orange-400' src={logo} alt="" /></a>

              <li className='flex items-center gap-1 mt-10'><img src={email} alt="" />hello@skillbridge.com</li>
              <li className='flex items-center gap-1 mt-5'><img src={phone} alt="" />+91 91813 23 2309</li>
              <li className='flex items-center gap-1 mt-5'><img src={location} alt="" />Somewhere in the World</li>

          </ul>
          <ul>
            <li className='font-semibold text-1xl'>Home</li>

            <li className='flex items-center gap-1 mt-10'>Benefits</li>
            <li className='flex items-center gap-1 mt-5'>Our Courses</li>
            <li className='flex items-center gap-1 mt-5'>Our Testimonials</li>
            <li className='flex items-center gap-1 mt-5'> Our FAQ</li>

          </ul> <ul>
            <li className='font-semibold text-1xl'>About Us</li>

            <li className='flex items-center gap-1 mt-10'>Company</li>
            <li className='flex items-center gap-1 mt-5'>Achievements</li>
            <li className='flex items-center gap-1 mt-5'>Our  Goals</li>

          </ul> <ul>
            <li className='font-semibold text-1xl'>Social Profiles</li>

             <div className=' flex items-center gap-1 mt-4'>
            <li className='border p-2 rounded'><img src={facebook} alt="" /></li>
            <li className='border p-2 rounded'><img src={twitter} alt="" /></li>
            <li className='border p-2 rounded'><img src={ini} alt="" /></li>

              </div> 
           
          </ul>
        </nav>
    </div>
      </footer>
    </div>
  )
}

export default Footer