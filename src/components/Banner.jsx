import bgShadow from '../assets/bg-shadow.png'
import bgImg from '../assets//banner-main.png'

const Banner = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto rounded-3xl">
                <div
                    className="hero h-[400px] md:h-[550px] "
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
                            <button className="btn btn-primary text-dark lg:text-base font-bold">Claim Free Credit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;