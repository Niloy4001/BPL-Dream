import { useEffect, useState } from "react";
import PlayerAvailable from "./PlayerAvailable";
import PlayerSelected from "./PlayerSelected";


const Players = () => {
    const [playerProfile, setPlayerProfile] = useState([])

    const [toggleStatus, setToggleStatus] = useState(true)

    const [selectedPlayer, setSelectedPlayer] = useState([])

    // console.log(selectedPlayer);


    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayerProfile(data))
    }, [])


    const handleToggle = (status) => {
        setToggleStatus(status)
    }

    const handleChosenPlayer = (player) => {
        setSelectedPlayer([...selectedPlayer, player])


    }

    const handleRemove = (id) => {
        const remaining = selectedPlayer.filter((item) => id !== item.id)
        setSelectedPlayer(remaining)
    }
    // console.log(selectedPlayer);

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
                toggleStatus? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:mb-52 mb-52">
                {
                    playerProfile.map((item) => <div key={item.id} className="p-4 md:p-6"><PlayerAvailable playerProfile={item} handleChosenPlayer={handleChosenPlayer}></PlayerAvailable></div>)
                }
            </div>: <div className="space-y-4 md:space-y-6">
                {
                    selectedPlayer.map((item) => <PlayerSelected key={item.id} selectedPlayer={item} handleRemove={handleRemove}></PlayerSelected>)
                }
                <div>
                    <span className='border-2 border-solid border-orange px-[5px] py-[20px] rounded-2xl'>
                        <button className="btn btn-primary bg-orange border-none text-dark hover:bg-transparent hover:text-white lg:text-base font-bold" onClick={()=> handleToggle(true)}>Add More Player</button>
                    </span>
                </div>
            </div>
                
                
            }


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:mb-24 mb-10">
                {
                    playerProfile.map((item) => <div key={item.id} className="p-4 md:p-6"><PlayerAvailable playerProfile={item} handleChosenPlayer={handleChosenPlayer}></PlayerAvailable></div>)
                }
            </div> */}
            {/* <div className="space-y-4 md:space-y-6">
                {
                    selectedPlayer.map((item) => <PlayerSelected key={item.id} selectedPlayer={item} handleRemove={handleRemove}></PlayerSelected>)
                }
                <div>
                    <span className='border-2 border-solid border-orange px-[5px] py-[20px] rounded-2xl'>
                        <button className="btn btn-primary bg-orange border-none text-dark hover:bg-transparent hover:text-white lg:text-base font-bold">Add More Player</button>
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default Players;