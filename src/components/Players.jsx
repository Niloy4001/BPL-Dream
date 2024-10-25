/* eslint-disable react/prop-types */

import PlayerAvailable from "./PlayerAvailable";
import PlayerSelected from "./PlayerSelected";


const Players = ({ playerProfile, toggleStatus, selectedPlayer, handleToggle, handleChosenPlayer, handleRemove,amount }) => {
    

    return (
        <div className="w-full">
            <div className=" mb-5 md:mb-8">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
                    <div>
                        <h1 className="font-bold text-xl md:text-[28px] text-dark">{toggleStatus ? 'Available Players ' : `Selected Player (${selectedPlayer.length}/6)`} </h1>
                    </div>
                    <div className="flex gap-2">
                        <button className={toggleStatus ? 'px-[30px] py-[14px] bg-orange font-semibold rounded-l-xl' : 'px-[30px] py-[14px] rounded-l-xl'} onClick={() => handleToggle(true)}>Available</button>
                        <button className={toggleStatus ? 'px-[30px] py-[14px]  rounded-r-xl' : 'px-[30px] py-[14px] bg-orange font-semibold rounded-r-xl'} onClick={() => handleToggle(false)}>Selected ({selectedPlayer.length})</button>
                    </div>
                </div>
            </div>
            {
                toggleStatus ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-52">
                    {
                        playerProfile.map((item) => <div key={item.id} className="p-4 md:p-6 "><PlayerAvailable playerProfile={item} handleChosenPlayer={handleChosenPlayer} amount={amount}></PlayerAvailable></div>)
                    }
                </div> : <div className="space-y-4 md:space-y-6 mb-52 ">
                    {
                        selectedPlayer.map((item) => <PlayerSelected key={item.id} selectedPlayer={item} handleRemove={handleRemove}></PlayerSelected>)
                    }
                    <div>
                        <span className='border-2 border-solid border-orange px-[5px] py-[20px] rounded-2xl'>
                            <button className="btn btn-primary bg-orange border-none text-dark hover:bg-transparent hover:text-dark lg:text-base font-bold" onClick={() => handleToggle(true)}>Add More Player</button>
                        </span>
                    </div>
                </div>


            }


        </div>
    );
};

export default Players;