
import './index.css';

import headerImg from './image-header-mobile.jpg';
import headerImgDesk from './image-header-desktop.jpg';

function App() {
  return (
    <div className="bg-primary min-h-[100vh] ">
      <div className='flex flex-col justify-between mx-auto py-16 px-6 
      text-center lg:text-left lg:flex-row-reverse lg:py-[10rem] lg:px-[6rem]
      md:flex-row-reverse md:p-[2rem] md:py-[10rem] md:max-h-[780px]
      lg:max-w-[80rem] lg:max-h-[44rem]
      '>
      
      <div className='sticky basis-[100%] '> 
      <img className='w-full h-full object-cover z-0 flex   rounded-t-lg md:rounded-tl-none md:rounded-r-lg lg:hidden' src={headerImg} alt="header" />
      <img className='w-full h-full object-cover z-0  hidden  sm:hidden md:hidden lg:flex md:rounded-r-lg lg:rounded-r-lg' src={headerImgDesk} alt="header" />
        <div className='bg-softviolet/60 rounded-t-lg md:rounded-tl-none lg:rounded-tl-none brightness-50 h-full z-10 w-full absolute top-0 md:rounded-r-lg lg:rounded-r-lg'></div>
        <div className='bg-softviolet/20  brightness-50 h-full z-20 w-full absolute top-0 md:rounded-r-lg lg:rounded-r-lg'></div>
        
        </div>
      <div className='flex flex-col basis-[100%]  bg-container rounded-b-lg
       md:rounded-l-lg md:rounded-br-none md:text-left md:pl-6 md:pt-6
       lg:rounded-l-lg lg:rounded-br-none lg:justify-around lg:pl-6 lg:pt-6'>
      <h1 className='tracking-normal px-10 mb-5 mt-7 text-[white] 
      text-[1.7rem] md:text-[1.8rem] leading-9 font-decca font-semibold lg:text-[2rem]  lg:max-w-[15.25em]'>Get <span className='text-softviolet'>insights</span> that help your business grow.</h1>

      <p className='font-mine mb-11 leading-6 px-10 text-white text-sm lg:max-w-[29.25em] '>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
        experience, and overall efficiency.</p>
      <div className='md:flex md:flex-row justify-around items-center 
       lg:max-w-[26.25em]'>
      <p className='text-white mb-7 text-[0.6rem] font-decca tracking-widest '> <span className='block tracking-normal text-[white] text-[1.5rem] font-semibold font-mine'>10k+</span> COMPANIES</p>
      <p className='text-white mb-7 text-[0.6rem] font-decca tracking-widest'><span className='block tracking-normal text-[white] text-[1.5rem] font-semibold font-mine'>314</span> TEMPLATES</p>
      <p className='text-white mb-7 text-[0.6rem] font-decca tracking-widest'><span className='block tracking-normal text-[white] text-[1.5rem] font-semibold font-mine'>12M+</span> QUERIES</p>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
