import React from 'react'
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import NotFound from '../assets/undraw_page_not_found_re_e9o6.svg'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Appbar />
      {/* <main className='mt-36'>
        <div className=' font-Clash-medium pb-5 text-2xl'>
            About Us
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptates itaque sunt corporis fugit expedita, ea iusto consequatur id harum illum repellat dolor atque tempore consequuntur laudantium delectus voluptatem mollitia magnam aperiam, at blanditiis. Aliquid hic obcaecati nostrum quos, vitae voluptatum odio quas omnis temporibus dolor. Explicabo error eius nisi aliquam deserunt commodi quod fugit consequatur neque non, minus quibusdam! Molestias eos necessitatibus nemo sed odio magnam? Aliquid minima dolor incidunt dolorem adipisci facilis suscipit, accusamus laborum sequi, voluptatibus debitis delectus temporibus tenetur reprehenderit architecto nesciunt quis, amet recusandae impedit quasi quod ut accusantium modi! Accusamus quibusdam recusandae dolor ipsam.
        </div>
 <div className=' font-Clash-medium py-5 text-2xl'>Journey from 2008 to 2024</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati, magni excepturi debitis reiciendis vero culpa aperiam, sint similique at tempora totam provident maxime placeat dolor magnam. Quaerat, quidem architecto, qui quo tempora nobis explicabo aperiam autem excepturi impedit delectus illo consequatur neque incidunt odio aspernatur eius modi harum sapiente, mollitia esse minus! Laborum quam eum accusantium illo, ut magnam culpa? Modi impedit totam deleniti suscipit qui ipsam dolores reiciendis, amet quidem ut magni molestias culpa delectus commodi labore eveniet earum porro mollitia et error animi nam beatae nobis. Sint saepe quae veniam at! Nesciunt, veritatis alias officia laborum corrupti quos, dolorem amet optio hic error eum sapiente fugiat dignissimos vel impedit non sit tempora. Tempora, maxime nulla sunt culpa dolorem sed praesentium blanditiis ratione aliquam quisquam, laboriosam ab voluptatibus deserunt quibusdam ut, incidunt delectus. Voluptates quibusdam veniam voluptas ad ab? Rerum excepturi rem eveniet alias quos corporis quo recusandae voluptas, laudantium sequi soluta. Voluptatum eius, itaque consequuntur totam quisquam repellat quis mollitia repellendus assumenda laborum inventore, qui adipisci fugit in enim aperiam, quasi maxime asperiores suscipit ratione iusto molestiae. Esse numquam obcaecati deserunt. Laudantium facere, debitis, quia commodi veniam magnam laboriosam et sed totam asperiores nobis numquam tempora corrupti!
        </div>
      </main> */}
      <main className='mt-36 flex flex-col items-center'>
        <img src={NotFound} className=' object-contain sm:w-72 w-44 object-center' alt="Not Found" />
        <h1 className='sm:text-3xl text-xl font-Clash-medium text-center pt-4'> This page is in Development </h1>
        <p className='text-lg px-2 py-2'>For any enquiry please <Link to={'/contact'}> <span className='hover:underline text-sm'> Contact Us</span>  </Link>  </p> 
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
