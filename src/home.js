
import Navbar from "./navbar";
import Section from "./section";
import FundraisingList from "./fundraisinglist";
import Footer from "./footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = ()=>{

    const info = [
        {
            id:1,
            heading:'Awareness & Engagement',
            description:`To inform and engage potential donors and supporters about the charity's mission and the cause`

        },
        {
            id:2,
            heading:'Donation Collection',
            description:`Set up a secure and user-friendly online donation platform that accepts multiple payment methods.`
        },
        {
            id:3,
            heading:'Impact and Accountability',
            description:`Allocate funds to specific projects and initiatives that align with the charity's mission`
        }
    ]

    const Navigate = useNavigate()

    const openDonate = ()=>{
        Navigate('/Donate')
    }
    return(
<div>
    <Navbar />
    <div className="flex flex-col gap-10">
    <Section />
    <FundraisingList />
    
    <div className="flex flex-col med:flex-row w-full items-center medium:p-16 px-6 gap-8 med:gap-40">
        <div className="flex relative w-full med:w-1/3 h-[20rem] med:h-56">
        <img className="med:h-[20rem] absolute top-0 left-0 w-1/2 med:w-48 h-[10rem] rounded-lg" src="volunteer.jpg" alt=""/>
        <img className="med:h-[20rem] absolute bottom-0 right-0 w-1/2 med:w-48  h-[10rem] rounded-lg" src="volunteer2.png" alt=""/>
        </div>

<div className="med:w-1/3 w-full flex flex-col gap-4">
  <span className="med:text-4xl text-2xl font-[700] leading-snug">
    Join Hands to make sure that humanity still thrives in unity.
  </span>
  <span>
    Discover the inspirational stories of individuals and communities transformed their lives
  </span>
    <span>
    Our success stories highlight the real-life impact of your donations and the resilience of those we help
  </span >
<button className="flex items-center gap-2 bg-background rounded-full w-max py-2 px-4">
    <span className="text-white">Learn more</span><Icon icon="grommet-icons:link-next" width="16" height="16"  style={{color: '#fff'}} />
  </button>
</div>

                <div className="flex med:w-1/3 flex-col gap-2">
{info.map((data)=>(
 <div key={data.id} className="flex shadow-lg p-4 rounded-md flex-col gap-2">
<span className="text-lg font-[600]">
{data.heading}
</span> 
<span>
    {data.description}
</span>
          </div>
)    )     }
        </div>
    </div>
          <section className="relative h-72 medium:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url('/bg.png')` }}
        ></div>

        <div className="relative z-10 flex items-center justify-between- p-16 h-full bg-black bg-opacity-50">
            <div className="medium:w-1/2">

            </div>
            <div className="flex flex-col medium:w-1/2 gap-4">
   <span className="text-white font-[600] medium:text-sm text-base">"BE VOLUNTEERS"</span>
     
        <span className="text-white text-sm medium:text-2xl sl:text-4xl medium:w-5/6 medium:w- text- "> Join and help us build a better world a better future for all.</span>
     <span className="text-white text-sm medium:text-base medium:w-5/6">As a volunteer, you have the power to uplift lives, strengthen communities, and shape a brighter tomorrow.
Join hands with us to create meaningful change — one action, one person, one future at a time.

</span>
        <button onClick={openDonate} className="bg-background text-white medium:w-1/4 hover:bg-opacity-80 rounded-md medium:font-[600] hover:text-white text-xs cursor-pointer p-2 medium:py-2 medium:px-4">Donate now</button>

            </div                                                                                                                                                         >
       
        </div>
      </section>
    <Footer />
    
    </div>
</div>
    )
}





export default Home;