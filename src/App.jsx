import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Players from "./component/Players";
import Available from "./component/Available";
import SelectedPlayers from "./component/SelectedPlayers";
import Footer from "./component/Footer";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    fetch("/public/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  
  const handleClaimCredit = () => {
    setBalance((prev) => prev + 7);
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find((p) => p.player_name === player.player_name)) {
      alert("Already selected!");
      return;
    }

    if (balance >= player.price) {
      setSelectedPlayers([...selectedPlayers, player]);
      setBalance(balance - player.price);
    } else {
      alert("Not enough balance!");
    }
  };


  const handleRemove = (playerToRemove) => {
  setSelectedPlayers(prev =>
    prev.filter(player => player.player_name !== playerToRemove.player_name)
  );
  setBalance(prev => prev + playerToRemove.price); // Balance ফেরত দেয়
};


  return (
    <div className="bebas">
      <div className="m-10 bebas">
      <Navbar balance={balance} />
      <Header onClaimCredit={handleClaimCredit} />
      <div className="p-5">
        <Available
          showSelected={showSelected}
          setShowSelected={setShowSelected}
        />
        {showSelected ? (
          <SelectedPlayers players={selectedPlayers} onRemove={handleRemove} />
        ) : (
          <Players players={players} onSelect={handleSelectPlayer} />
        )}
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default App;
