

import './App.css'
import { useEffect, useState } from "react";
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Players from './components/Players'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => {
    toast.error("Not enough money to buy this player.Claim some Credit", {
      position: "top-center",
      
    });
  };
  const notifyExistedPlayer = () => {
    toast.error(`Player already selected`, {
      position: "top-center"
    });
  };
  const notifyChosenPlayer = (name) => {
    toast.success(`Congrates!! ${name} is now in your squad`, {
      position: "top-center",
      autoClose:2000,
    });
  };
  const notifyClaim = () => {
    toast.success(`Credit Added to your Account`, {
      position: "top-center",
      autoClose:2000,
    });
  };
  const notifyMaximizeTeam = () => {
    toast.error(`You cannot choose more than 6 player`, {
      position: "top-center",
      autoClose:2000,
    });
  };
  const notifyPlayerRemoved = () => {
    toast.warn(`Player Removed`, {
      position: "top-right",
      autoClose:2000,
    });
  };
  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayerProfile(data))
  }, [])

  const [playerProfile, setPlayerProfile] = useState([])

  const [toggleStatus, setToggleStatus] = useState(true)

  const [selectedPlayer, setSelectedPlayer] = useState([])

  const [amount, setAmount] = useState(0)







  const handleToggle = (status) => {
    setToggleStatus(status)
  }

  const handleChosenPlayer = (player, amountMinusBiddingPrice) => {

    const sameItem = selectedPlayer.find((item) => player.id === item.id)

    if (sameItem) {
      notifyExistedPlayer()
    }
    else if (amountMinusBiddingPrice < 0) {
      notify()
      return
    }
    else if (selectedPlayer.length > 5){
      notifyMaximizeTeam()
      return
    }
    else {
     
      setAmount(amountMinusBiddingPrice);
      setSelectedPlayer([...selectedPlayer, player])
      notifyChosenPlayer(player.name)
    }



  }


  const handleRemove = (id, biddingPrice) => {
    const remaining = selectedPlayer.filter((item) => id !== item.id)
    setSelectedPlayer(remaining)
    setAmount(amount + biddingPrice)
    notifyPlayerRemoved();
  }


  const handleClaimBtn = () => {
    setAmount(amount + 10000000)
    notifyClaim()

  }


  return (
    <>
        <Navbar
          amount={amount}
        ></Navbar>
      <div className='w-[90%] mx-auto'>
        <Banner
          handleClaimBtn={handleClaimBtn}
        ></Banner>
        <Players
          playerProfile={playerProfile}
          toggleStatus={toggleStatus}
          selectedPlayer={selectedPlayer}
          handleToggle={handleToggle}
          handleChosenPlayer={handleChosenPlayer}
          handleRemove={handleRemove}
          amount={amount}
        ></Players>
      </div>
      <Footer></Footer>
      <ToastContainer />

    </>
  )
}

export default App
