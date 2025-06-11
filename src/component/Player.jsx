const Player = ({ player }) => {
  const {
    player_name,
    players_img,
    country,
    position,
    rating,
    price,
    type,
    all_rounder,
  } = player;

  return (
    <div className=" ">
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-lg card flex flex-col gap-3">
        <div className="">
          <img
            src={players_img}
            alt={player_name}
            className="w-full h-80 object-contain mx-auto mb-2 flex"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100"; // fallback image
            }}
          />
        </div>

        <div>
          <p className="font-bold text-lg">{player_name}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 flex gap-2 items-center justify-center"><img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=iH8z1cTEh7Vy&format=gif" alt="" /> {country}</p>
          <button className="p-2 rounded-lg bg-gray-300">Batsman</button>
        </div>

        <p>Rating: {rating}</p>
        <div className="flex justify-between">
          <p>{type}</p>
          {all_rounder && (
            <p className="text-green-600 font-bold">All Rounder</p>
          )}
        </div>
        
        <div  className="flex justify-between">
            <p>Price: ${price}M</p>
            <button className="p-2 bg-yellow-500 rounded-lg hover:bg-green-500 hover:text-white">Choose Player</button>
        </div>
        
      </div>
    </div>
  );
};

export default Player;
