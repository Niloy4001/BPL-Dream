import footerBg from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="w-full bg-dark-3 pt-24 md:pt-44 ">
            <div className='w-[80%] mx-auto relative'>
                {/* Newsletter section */}
                <div className=' flex justify-center p-4 md:p-6 border border-solid border-white rounded-3xl bg-white/[0.1] absolute -top-80 left-0 right-0'>
                    <div className='bg-white w-full flex flex-col items-center py-9 md:py-20 rounded-3xl px-4 lg:px-0'>
                        <h1 className='text-xl md:text-[32px] font-bold text-dark mb-2 md:mb-4'>Subscribe to our Newsletter</h1>
                        <p className='text-base md:text-xl font-medium text-dark/[0.7] mb-3 md:mb-6'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex items-center gap-4 lg:flex-row flex-col w-full justify-center'>
                            <input type="text" className='input border border-solid border-dark/[0.15] w-full md:w-[28%]' placeholder='Enter your email'/>
                            <button className='btn w-full md:w-[9%] bg-gradient-to-r from-purple to-amber border-none'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mb-8 lg:mb-16 pt-14'>
                <img src={footerBg} alt="" />
            </div>
            <footer className=" grid grid-cols-1 lg:grid-cols-3 gap-5 w-[90%] mx-auto text-base-content py-10">
                <nav>
                    <h6 className="footer-title text-base md:text-lg font-semibold text-white">About Us</h6>
                    <p className="text-sm md:text-base font-normal text-white/[0.6] pr-0 lg:pr-44">We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-base md:text-lg font-semibold text-white">Quick Links</h6>
                    <ul className="list-disc list-inside text-sm md:text-base font-normal text-white/[0.6]">
                        <li><a className="link link-hover">Home</a></li>
                        <li><a className="link link-hover">Service</a></li>
                        <li><a className="link link-hover">About</a></li>
                        <li><a className="link link-hover">Contact</a></li>
                    </ul>
                </nav>
                <form>
                    <h6 className="footer-title text-base md:text-lg font-semibold text-white">Subscribe</h6>
                    <fieldset className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-sm md:text-base font-normal text-white/[0.6]">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join flex flex-col lg:flex-row lg:gap-0 gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item w-full lg:w-[50%]" />
                            <button className="btn border-none bg-gradient-to-r from-purple to-amber join-item w-full lg:w-[27%]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className="border-t border-solid border-white/[0.15]"></div>
            <footer className="footer footer-center text-base-content p-5 md:p-8">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;