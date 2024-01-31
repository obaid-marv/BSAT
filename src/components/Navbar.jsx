
const Navbar = ()=>{


    return(
        <div className="container flex flex-row mx-auto max-w-screen-lg p-4 mt-5" style={{fontFamily:'Inter, sans-serif'}}>
            <div className="container flex flex-1 items-center">
                <p className="text-2xl font-bold">BSAT</p>
            </div>
            <div className="container flex items-center justify-between flex-1 mr-4">
                <button className="text-sm font-bold mr-4">Home</button>
                <button className="text-sm font-bold mr-4">Service</button>
                <button className="text-sm font-bold mr-4">Contact</button>
                <button className="text-sm font-bold">Help</button>
            </div>

            <div className="container flex flex-row-reverse flex-1 items-center">
                <button className="font-medium text-white bg-custom py-3 w-40 rounded-sm" >Get Started</button>
                <button className="font-medium text-custom py-3 w-20">Sign in</button>
                
            </div>
            

        </div>
    )
}

export default Navbar;