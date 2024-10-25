/* eslint-disable react/prop-types */

import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";

const PlayerAvailable = ({ playerProfile, handleChosenPlayer, amount }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = playerProfile
    

    return (
        <div>
            <div>
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
                <div className="flex justify-between items-center pb-4 md:pb-7 border-b border-solid border-dark/[0.15]">
                    <div className="flex items-center gap-2"><span><FaFlag /></span><span className="text-dark font-normal text-sm md:text-base">{country}</span></div>
                    <div><button className="btn text-dark font-bold text-sm md:text-base">{role} </button></div>
                </div>
                <div className="mb-4 mt-2">
                    <p className="text-dark font-bold text-sm md:text-base">Rating</p>
                </div>
                <div className="flex justify-between items-center mb-2 md:mb-3 text-dark font-bold text-sm md:text-base">
                    <p >{battingType} </p>
                    <p>{bowlingType} </p>
                </div>
                <div className="flex justify-between items-center text-dark font-bold text-sm md:text-base pb-4">
                    <p>Price: ${biddingPrice} </p>
                    <button className="btn hover:bg-orange text-dark" onClick={() => {
                        handleChosenPlayer(playerProfile, (amount - biddingPrice))

                    }}>Choose Player</button>
                </div>

            </div>


        </div>
    );
};

export default PlayerAvailable;