import Navbar from "../components/Navbar";

import envelopeIcon from "../assets/email.svg";
import coverimg from "../assets/mainimg.png"
import group1 from "../assets/group1.svg"
import group2 from "../assets/group2.svg"
import group3 from "../assets/group3.svg"
import group4 from "../assets/group4.svg"
import group5 from "../assets/group5.svg"
import group6 from "../assets/group6.svg"
import arrowright from "../assets/arrowright.svg"

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

            <div>
                <p className="text-4xl font-bold">Full Services to Grow Your Business </p>
            </div>

            <div className="container max-w-screen-md mt-10 mb-6">
                <p className="text-base font-medium text-customgrey">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
            </div>

            <div className="container mx-auto flex flex-wrap flex-row items-start max-w-screen-md h-max">
                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group1}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">KEYWORD RESEARCH</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group2}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">UNIQUE CONTENT </p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group3}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">CITATIONS SUGGESTIONS</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group4}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">AUDIT REPORT</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group5}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">WEBSITE ANALYTICS</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>

                <div className="container group flex flex-col justify-around h-96 w-56 m-4 p-5 bg-white rounded-lg shadow-custom transition-all duration-400 hover:bg-gradient-tr hover:scale-105">
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-custom">
                        <img
                            src={group6}
                            alt="Your Alt Text"
                            className="w-16 h-16"
                        />
                    </div>
                    <p className="text-md font-bold group-hover:text-white">PAYMENT MANAGEMENT</p>
                    <p className="text-xs font-medium leading-5 text-customgrey group-hover:text-white">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</p>
                    <div className="container flex w-full items-center justify-between">
                        <p className="text-sm text-custompurple group-hover:text-white">VIEW MORE</p>
                        <img
                            src={arrowright}
                            alt="Your Alt Text"
                            className="w-3 h-3 mr-16 rounded-full group-hover:text-white"
                        />
                    </div>
                </div>


                
                

            </div>
        </div>
    )
}

export default Home;