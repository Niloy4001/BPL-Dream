import { useEffect, useState } from "react";
import PlayerAvailable from "../../PlayerAvailable";


const Players = () => {
    const [playerProfile, setPlayerProfile] = useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayerProfile(data))
    },[])

    // console.log(playerProfile);
    
    return (
        <div className="w-full">
            <div className=" mb-5 md:mb-8">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
                    <div>
                        <h1 className="font-bold text-xl md:text-[28px] text-dark">Available Players</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-[30px] py-[14px] bg-orange rounded-l-xl flex justify-center items-center">Available</button>
                        <button className="px-[30px] py-[14px] bg-orange rounded-r-xl flex justify-center items-center">Selected (0)</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:mb-24 mb-10">
            {
                playerProfile.map((item)=> <div key={item.id} className="p-4 md:p-6"><PlayerAvailable  playerProfile={item}></PlayerAvailable></div> )
            }
            </div>
        </div>
    );
};

export default Players;