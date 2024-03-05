import { Buttons_v_2 } from "./Buttons"



const MiroFeatures = () => {
  return (
    <div className="py-[100px] text-center px-4 md:px-8 lg:px-16 ">
      <div className="container mx-auto">
        <h1 className="heading md:w-[537px] mx-auto mb-10">Collaborate without constraints</h1>
          <div className="flex justify-between flex-wrap">

           <div className=" w-[100%] md:w-[48%] lg:w-[30%]">
            <h2 className="text-xl font-bold text-left">Free forever</h2>
            <p className="pera  text-left mt-[25px]">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <span ><a href="#" className="text-primary">pricing plans</a></span> for more features.</p>
           </div>

           <div  className=" w-[100%] md:w-[48%] lg:w-[30%]">
            <h2 className="text-xl font-bold text-left ">Easy integrations</h2>
            <p className="pera text-left mt-[25px]">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span ><a href="#" className="text-primary">Marketplace</a></span>.</p>
           </div>

           <div className=" w-[100%] md:w-[48%] lg:w-[30%]">
            <h2 className="text-xl font-bold text-left">Security first</h2>
            <p className="pera text-left mt-[25px]">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <span ><a href="#" className="text-primary">Trust Center </a></span>.</p>
           </div>

          </div>
            
          <div className="group mt-14 lg:mt-[64px]">
          <Buttons_v_2 className="buttons_v_2">
            Sign up free
            <span className="arrow ml-2">&rarr;</span>
          </Buttons_v_2>
        </div>
          
      </div>

    </div>
  )
}

export default MiroFeatures