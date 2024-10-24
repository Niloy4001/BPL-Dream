import bgShadow from '../assets/bg-shadow.png'
import bgImg from '../assets//banner-main.png'

const Banner = () => {
    return (
        <div className="w-full">
            <div className=" rounded-3xl bg-gradient-to-b from-dark to-dark-2 mb-10 md:mb-20">
                <div
                    className="hero h-[400px] md:h-[550px]   rounded-3xl"
                    style={{
                        backgroundImage: `url(${bgShadow})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%'
                    }}>
                    <div className=" bg-opacity-60"></div>
                    <div className="  text-center">
                        <div className="">
                            <div className='flex justify-center mb-4 lg:mb-6'>
                                <img src={bgImg} alt="" />
                            </div>
                            <h1 className="mb-3 lg:mb-4 text-white lg:text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                            <p className="mb-4 lg:mb-6 text-white/[0.7] lg:text-2xl font-medium">
                            Beyond Boundaries Beyond Limits
                            </p>
                            <span className='border-2 border-solid border-orange px-[5px] py-[20px] rounded-2xl'>
                            <button className="btn btn-primary bg-orange border-none text-dark hover:bg-transparent hover:text-white lg:text-base font-bold">Claim Free Credit</button>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;