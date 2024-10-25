/* eslint-disable react/prop-types */
import deleteIcon from '../assets/delete.png'

const PlayerSelected = ({selectedPlayer,handleRemove}) => {
    const {id, name, role, image} = selectedPlayer
    // console.log(selectedPlayer);
    
    return (
        <div className="flex items-center p-4 md:p-6 gap-4 md:gap-6 rounded-2xl border border-solid border-dark/[0.1]">
            <div className="w-20 h-20">
                <img src={image} className='rounded-2xl w-full h-full' alt="" />
            </div>
            <div className="flex-1">
                <h3 className='font-semibold text-lg md:text-2xl text-dark mb-3'>{name} </h3>
                <p className='font-normal text-xs md:text-base text-dark/[0.6]'>{role} </p>
            </div>
            <div className="w-20 h-20 flex justify-center items-center">
                <button onClick={()=> handleRemove(id)}><img src={deleteIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default PlayerSelected;