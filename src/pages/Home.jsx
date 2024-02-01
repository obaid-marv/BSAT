import Navbar from "../components/Navbar";

import envelopeIcon from "../assets/email.svg";
import coverimg from "../assets/mainimg.png"


const Home = () => {

    return(
        <div className="container mx-auto text-sans flex flex-col items-center">
            <Navbar/>
            <div className="container max-w-screen-lg flex h-max mt-8">
                <div className="container flex flex-1 flex-col mt-6">
                    <div className="container flex">
                        <p className="text-6xl leading-tight font-bold">Navigating the Business SEO Automation Tool</p>
                    </div>
                    <div className="container flex flex-col">

                        <p className="text-lg text-customgrey mt-4 mb-24">Unleash the Power of Precision: Elevate Your SEO <br/> Game with BSAT</p>
                        <div className="relative flex items-center">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-6 ">
                                <img src={envelopeIcon} alt="Envelope Icon" className="h-5 w-5 text-gray-500" />
                            </span>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="pl-12 font-medium rounded-sm py-4 px-5 w-80 placeholder-gray-500"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                                border:'1px solid white'
                            }}
                            placeholder="Your email address"
                            />

                            <button style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} className="font-medium text-white bg-custom py-4 w-40 rounded-sm ml-2">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="container flex-1">
                    <img src={coverimg} alt="COVER IMG" className="-mt-4 h-full w-full object-cover ml-14"/>

                </div>
            </div>
        </div>
    )
}

export default Home;