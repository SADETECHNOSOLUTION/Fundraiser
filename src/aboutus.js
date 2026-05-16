
import Navbar from "./navbar";
import { Icon } from "@iconify/react/dist/iconify.js";

const Aboutus = ()=>{
    return(
        <div>
            <Navbar />
           <div className="flex flex-col w-full items-center gap-16 medium:gap-20">
     
        <div className="flex justify-center h-20 items-end">
             <span className="medium:text-5xl text-2xl font-[700]">Who We Are </span>

        </div>
              
                        <div className="w-5/6  flex flex-col  gap-10 items-center ">
                                                <img  alt="" className="medium:w-3/4 rounded-xl medium:h-[30rem]" src='about.png' />
                        <div className="flex flex-col gap-8 medium:w-3/4">

                        <div className=" flex gap-4">
                        <span className="h w-4 bg-background"></span>
                      <span className="text- medium:text-lg font-[600]">
                        <span className="text-2xl medium:text-3xl">W</span>e are a community of <span className="text-background">changemakers, dreamers <span className="text-black">and </span> 
everyday heroes</span> united by one goal to make help 
accessible to those who need it most.
                        </span>
                        </div>
                        <span className=" font-[600] medium:text-lg">
                            At XYZ, we believe that compassion 
knows no boundaries. We are an online fundraising 
platform built to give voice to real stories, amplify urgent 
needs and inspire action that truly transforms lives. 
Whether it’s a child in need of life-saving treatment, a 
student striving for education or a family rebuilding after a 
disaster, we are here to make sure no one faces their 
struggles alone.
                        </span>
                        <span className="medium:text-lg w-full font-[600]">
                            Our strength lies in the power of people. Every fundraiser 
hosted here is backed by a network of supporters who 
believe in empathy, solidarity and the potential of every 
human being to rise with the right support.
                        </span>
                        <span className="font-[600] medium:text-lg">
                             We don’t just raise funds we build hope, restore dignity and 
create second chances.
                        </span>
                           </div>

                        </div>
<div className="bg-[#F6F4EE] flex flex-col items-center gap-20 py-10">


<div className="medium:flex-row flex flex-col gap-10 medium:gap-20 justify-center medium:h-96 w-5/6 items-center">
  <div className="medium:w-1/3 flex flex-col medium:gap-6 gap-3">
                  <div className="sl:text-3xl text-2xl rounded-lg flex justify-center gap-2 items-center font-[630] text-center">
        <span><Icon icon="lucide:target" className="medium:w-11 medium:h-11 h-7 w-7"  style={{color: '#EB373F'}} /></span>  
        <span>Our Mission</span>
      </div>

      <div className="flex flex-col gap-8">
<span className="font-[600]">We believe true change begins with compassion and action. By working together, we ensure that every donation becomes a catalyst for hope and progress. With integrity at our core, we strive to uplift lives and build a future where no one is left behind.</span>
<div className="flex flex-col gap-4">


      <div className="flex items-start gap-2">
<img alt="" className="w-6 h-6" src="bulletin.png" />
     
        <span className="sl:text- text-gray-700 font-[600] leading-relaxed">
 Our mission is simple yet powerful: To empower change, one donation at a time.
        </span>
      </div>
      <div className="flex items-start gap-2">
<img  alt="" className="w-6 h-6" src="bulletin.png" />
                <span className="sl:text- text-gray-700 font-[600] leading-relaxed">
    We are committed to transparency, accountability, and the ethical handling of all contributions.
        </span>
      </div>
      <div className="flex items-start gap-2">
<img  alt="" className="w-6 h-6" src="bulletin.png" />
                <p className="sl:text- text-gray-700 font-[600] leading-relaxed">
          Every rupee donated goes directly towards improving lives and creating a lasting impact in the communities we serve.
        </p>
      </div>
      </div>
            </div>
  </div>

  <div className="medium:w-1/3 h-full">

        <img  alt="" className="w-full rounded-xl object-cover h-full" src="about.jpg" />
  </div>


</div>

<div className="medium:flex-row flex flex-col gap-6 medium:gap-20 justify-center medium:h-96 w-5/6 items-center">
  <div className="medium:w-1/3 h-full">

        <img  alt="" className="w-full rounded-xl object-cover h-full" src="about.jpg" />
  </div>
  <div className="medium:w-1/3 flex flex-col gap-3 medium:gap-6 sl:gap-4">
                  <div className="sl:text-3xl text-2xl rounded-lg flex justify-center gap-2 items-center font-[630] text-center">
        <span> <Icon icon="fluent:people-community-20-filled" className="medium:w-11 medium:h-11 h-7 w-7" style={{color: '#EB373F'}} /></span>  
        <span>Who We Are</span>
      </div>
      <div className="flex flex-col gap-8">


<span className="font-[600]">Driven by empathy and purpose, we came together to make a difference where it’s needed most.
Our journey began with a simple belief — that no one should navigate life’s challenges without support.
Through community, compassion, and action, we strive to stand beside those in need every step of the way.</span>
<div className="flex flex-col gap-4">


      <div className="flex items-start gap-2">
<img alt="" className="w-6 h-6" src="bulletin.png" />
     
        <span className="sl:text- text-gray-700 font-[600] leading-relaxed">
         We started this platform with a simple yet powerful belief: 
no one should face life’s toughest battles alone
        </span>
      </div>
      <div className="flex items-start gap-2">
<img  alt="" className="w-6 h-6" src="bulletin.png" />
                <span className="sl:text- text-gray-700 font-[600] leading-relaxed">
    We are committed to transparency, accountability, and the ethical handling of all contributions.
        </span>
      </div>
      <div className="flex items-start gap-2">
<img  alt="" className="w-6 h-6" src="bulletin.png" />
                <p className="sl:text- text-gray-700 font-[600] leading-relaxed">
          Every rupee donated goes directly towards improving lives and creating a lasting impact in the communities we serve.
        </p>
      </div>
      </div>
            </div>
  </div>




</div>
</div>


<div className="w-5/6 medium:flex-row flex flex-col justify-center">
  <div className="flex flex-col gap-4 w-full">
    <div className="medium:flex-row flex flex-col   items-stretch gap-16 justify-center">
      {/* Title */}

      {/* Card 1 */}
      <div className="relative w-full med:w-1/4 bg-[#F6F4EE] rounded-xl pt-14 p-4 medium:h-36 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-gray-200">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background p-4 rounded-full shadow-md border-4 border-white">
<Icon icon="material-symbols:mail" width="24" height="24"  style={{color: '#fff'}} />
        </div>
        <p className="text-base text-gray-700 font-[600] leading-relaxed">
your.email@example.com
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative w-full med:w-1/4 bg-[#F6F4EE] rounded-xl pt-14 p-4 medium:h-36 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-gray-200">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background p-4 rounded-full shadow-md border-4 border-white">
      <Icon icon="iconoir:phone-solid" width="24" height="24"  style={{color:'#fff'}} />
        </div>
        <p className="text-base text-gray-700 font-[600] leading-relaxed">
        +91-XXXXXXXXXX
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative w-full med:w-1/4 bg-[#F6F4EE] rounded-xl pt-14 p-4 medium:h-36 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-gray-200">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background p-4 rounded-full shadow-md border-4 border-white">
      <Icon icon="weui:location-filled" width="24" height="24"  style={{color: '#fff'}} />
        </div>
        <p className="text-base text-gray-700 font-[600] leading-relaxed">
Your Office Address
        </p>
      </div>
    </div>
  </div>
</div>






                                              

                                                
                               </div> 
      
        </div>

    )
}

export default Aboutus;