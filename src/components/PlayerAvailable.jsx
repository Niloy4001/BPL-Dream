/* eslint-disable react/prop-types */

import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";

const PlayerAvailable = ({ playerProfile , handleChosenPlayer}) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = playerProfile
    // console.log(playerProfile);

    return (
        <div className="">
            <div className=" bg-base-100 shadow-xl">
                <figure className="md:mb-6 mb-4 ">
                    <img
                        className="rounded-2xl w-full playerImg"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <p><FaUserLarge /></p>
                    <h1 className="text-dark font-semibold text-lg md:text-xl">{name} </h1>
                </div>
                <div className="flex justify-between items-center mb-4 md:mb-8">
                    <div className="flex items-center gap-2"><span><FaFlag /></span><span className="text-dark font-normal text-sm md:text-base">{country}</span></div>
                    <div><button className="btn text-dark font-bold text-sm md:text-base">{role} </button></div>
                </div>
                <div className="mb-4">
                    <p className="text-dark font-bold text-sm md:text-base">Rating</p>
                </div>
                <div className="flex justify-between items-center mb-2 md:mb-3 text-dark font-bold text-sm md:text-base">
                    <p >{battingType} </p>
                    <p>{bowlingType} </p>
                </div>
                <div className="flex justify-between items-center text-dark font-bold text-sm md:text-base">
                    <p>Price: ${biddingPrice} </p>
                    <button className="btn" onClick={()=> handleChosenPlayer(playerProfile)}>Choose Player</button>
                </div>

            </div>


        </div>
    );
};

export default PlayerAvailable;