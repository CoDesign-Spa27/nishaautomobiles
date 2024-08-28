import React from 'react'
 
const Location = () => {
  return (
  <div className='p-10 h-full bg-white w-full flex flex-col'>
    <h1 className=' font-Clash-medium pb-5 text-2xl'>Contact Us</h1>
    <div className=' flex flex-col sm:flex-row gap-10'>

<div className='flex-1'>
 
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.582713579887!2d75.72821460039168!3d26.90474630983154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a2b83ffb35%3A0x18467f0d435bb417!2sNisha%20Automobiles!5e0!3m2!1sen!2sin!4v1724835224652!5m2!1sen!2sin" 
    className="w-full h-64 sm:h-96 rounded-lg border-0"
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>
<div className='flex-1 items-center'>
 <div className='flex gap-2'><p className='font-Clash-semibold'>
  Telephone:
  </p> <a href="tel:9314773000" className='text-[#242424] hover:text-gray-500'>9314773000,</a><a href="tel:8209250843" className='text-[#242424] hover:text-gray-500'>8209250843</a> </div>
   
  <div className='flex gap-2 items-center'><p className='font-Clash-semibold'>
 Email:
  </p> <a href="mailto:nishaautomobilejpr@gmail.com" className='text-[#242424] hover:text-gray-500'>nishaautomobilejpr@gmail.com</a> </div>

     
  <div className='flex flex-col gap-2 py-3'><p className='font-Clash-semibold text-xl'>
Address:
  </p> <p className='text-[#242424]'>Plot no.82 Navjeevan Vihar, Gandhipath Road, Jaipur, Rajasthan</p> </div>
 
  <div className='flex flex-col gap-2 py-3'><p className='font-Clash-semibold text-2xl'>
Opening times
  </p> <p className='text-[#242424]'>Monday to Sunday 09:00 am to 7:00 pm</p> </div>

  <div className='flex flex-col gap-2 py-3'><p className='font-Clash-semibold text-xl'>
 Authorized Dealer of Passengers Vehicle's Parts
  </p> <p className='text-[#242424] font-Clash-semibold'>Tata, Mahindra, Maruti Suzuki, Hyundai</p> </div>
</div> 

</div>
  </div>
    
  )
}

export default Location
