

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
    toast.error("You do not have sufficient balance", {
      position: "top-center",
      
    });
  };
  const notifyExistedPlayer = (name) => {
    toast.error(`${name} is already existed in your team`, {
      position: "top-center"
    });
  };
  const notifyChosenPlayer = (name) => {
    toast.success(`Congratulation! Now ${name} is on your team`, {
      position: "top-center",
      autoClose:2000,
    });
  };
  const notifyClaim = () => {
    toast.success(`Congratulation! You got 10000000$`, {
      position: "top-center",
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
      // alert('existed')
      notifyExistedPlayer(player.name)
    }
    else if (amountMinusBiddingPrice < 0) {
      notify()

      return
    }
    else {
      // amountMinusBiddingPrice > 0 ? setAmount(amountMinusBiddingPrice) : alert('you have not enough money')
      setAmount(amountMinusBiddingPrice);
      setSelectedPlayer([...selectedPlayer, player])
      notifyChosenPlayer(player.name)
    }



  }


  const handleRemove = (id, biddingPrice) => {
    const remaining = selectedPlayer.filter((item) => id !== item.id)
    setSelectedPlayer(remaining)
    setAmount(amount + biddingPrice)
  }


  const handleClaimBtn = () => {
    setAmount(amount + 10000000)
    notifyClaim()

  }


  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Navbar
          amount={amount}
        ></Navbar>
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
