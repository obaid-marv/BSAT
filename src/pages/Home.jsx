import Navbar from "../components/Navbar";

import envelopeIcon from "../assets/email.svg";
import coverimg from "../assets/mainimg.png"
import servicesimg from "../assets/servicesimg.png"
import keyres from "../assets/keyres.png"
import citsug from "../assets/citsug.png"
import webana from "../assets/webana.png"
import webaud from "../assets/webaud.png"
import directorimg from "../assets/directorimg.png"
import analystimg from "../assets/analystimg.png"
import attorneyimg from "../assets/attorneyimg.png"
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

            <div className="container max-w-screen-md mt-10 mb-6 pl-4">
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
            

            <div className="container flex flex-row max-w-6xl h-max mt-16 p-4">
                <div className="container">
                    <div className="container bg-customlightblue rounded-sm rounded-tl-[30px] rounded-br-[30px] h-max shadow-custom1">
                        <img src={servicesimg} alt="COVER IMG" className="h-full w-full object-cover"/>
                    </div>
                </div>

                <div className="container flex flex-col pl-12 py-0 justify-between ">
                    <div className="container flex flex-row items-center justify-start pt-0">
                        <div className="container bg-customlightblue p-1 w-32 rounded shadow-custom1">
                            <p className="text-md font-bold text-custom">OUR SERVICES</p>
                        </div>
                        <div className="container h-0.5 ml-4 w-20 bg-theme rounded shadow-custom1">    
                        </div>
                    </div>

                    <div className="container mb-20">
                        <p className="text-4xl font-bold drop-shadow-lg">Our Services Can Help You Grow Your Business </p>
                    </div>
              
                    <div className="container">
                        <p className="text text-customgrey font-bold drop-shadow-lg">Embark on a Journey to Unlock a World of ranking Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>
                    </div>

                    <div className="container flex flex-wrap ">
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={keyres} alt="COVER IMG" className="h-8 w-8 shadow-md"/>
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Keyword Research</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={citsug} alt="COVER IMG" className="h-8 w-8 shadow-md"/>
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Citation Suggestions</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={webaud} alt="COVER IMG" className="h-8 w-8 shadow-md"/>
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Website Audit</p>
                        </div>
                        <div className="container flex items-center w-1/2 h-max py-4">
                            <img src={webana} alt="COVER IMG" className="h-8 w-8 shadow-md"/>
                            <p className="text-lg font-bold pl-4 drop-shadow-md">Website Analytics</p>
                        </div> 
                    </div>
                    <button style={{boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}} className="font-medium text-black transform-all  duration-200 hover:bg-custom hover:text-white py-4 w-40 rounded-sm ml-2">Explore Services</button>
                </div>
            </div>

            
            <div className="container max-w-screen-lg mt-16 p-1 h-max">
                        <div className="container flex items-center">
                            <div className="container flex items-center justify-center bg-customlightblue p-1 w-36 rounded shadow-custom1">
                                <p className="text-md font-bold text-custom">TESTIMONIALS</p>
                            </div>
                            <div className="container h-0.5 ml-4 w-20 bg-theme rounded shadow-custom1">    
                            </div>
                        </div>
                        
                        <div className="container flex flex-col w-1/2 h-44 mt-4 justify-around">
                            <p className="text-4xl font-bold">What Our Customers Say</p>
                            <p className="text text-customgrey font-semibold">Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>    
                        </div>

                        <div className="container flex items-center justify-between mt-16">

                            <div className="container flex w-80 h-72 flex-col justify-between border-[3px] border-grey-500 rounded-tl-[30px] rounded-br-[30px] p-8">
                                <div className="container flex h-12">
                                    <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                        <img src={directorimg} alt="COVER IMG" className="h-12 w-16"/>
                                    </div>

                                    <div className="container flex flex-col justifyaround px-6">
                                        <p className="text font-bold">Grace Turner</p>
                                        <p className="text-md font-medium text-gray-400">Director</p>
                                    </div>
                                </div>
                                <p className="text-sm text-customgrey leading-6 font-medium mt-8">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community</p>
                                <div className="contianer flex flex-row-reverse items-center">
                                    <p className="text-7xl font-chonburi mt-4 text-custom">“</p>
                                </div>

                            </div>

                            <div className="container flex w-80 h-72 flex-col justify-between rounded-tl-[30px] rounded-br-[30px] p-8 bg-gradient-tt">
                                <div className="container flex h-12">
                                    <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                        <img src={analystimg} alt="COVER IMG" className="h-12 w-16"/>
                                    </div>

                                    <div className="container flex flex-col justifyaround px-6">
                                        <p className="text font-semibold text-white">Linda Carter</p>
                                        <p className="text-md font-medium text-gray-200">Analyst</p>
                                    </div>
                                </div>
                                <p className="text-sm text-white leading-6 mt-8">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community</p>
                                <div className="contianer flex flex-row-reverse items-center">
                                    <p className="text-7xl font-chonburi mt-4 text-white">“</p>
                                </div>

                            </div>

                            <div className="container flex w-80 h-72 flex-col justify-between border-[3px] border-grey-500 rounded-tl-[30px] rounded-br-[30px] p-8">
                                <div className="container flex h-12">
                                    <div className="container flex items-center h-12 w-16 rounded-full bg-gray-300 overflow-hidden">
                                        <img src={attorneyimg} alt="COVER IMG" className="h-12 w-16"/>
                                    </div>

                                    <div className="container flex flex-col justifyaround px-6">
                                        <p className="text font-bold">Alex Walker</p>
                                        <p className="text-md font-medium text-gray-400">Attorney</p>
                                    </div>
                                </div>
                                <p className="text-sm text-customgrey leading-6 font-medium mt-8">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community</p>
                                <div className="contianer flex flex-row-reverse items-center">
                                    <p className="text-7xl font-chonburi mt-4 text-custom">“</p>
                                </div>

                            </div>



                        </div>




            </div>

        </div>
    )
}

export default Home;