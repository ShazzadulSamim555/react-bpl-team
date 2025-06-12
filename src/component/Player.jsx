const Player = ({ player, onSelect }) => {
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
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-lg card flex flex-col gap-2 pb-5">
      <img
            src={players_img}
            alt={player_name}
            className="w-full h-80 object-contain mx-auto mb-2 flex rounded-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100"; // fallback image
            }}
          />
      <h3 className="font-bold text-2xl">{player_name}</h3>

      <div className="flex justify-between items-center">
        <p>{country}</p>
        <button>{type}</button>
      </div>
      <div className="border-2 border-gray-500 rounded-full mx-5"></div>
      <h3>Rating</h3>

      <div className="flex justify-between items-center">
        <h2>Rating: {rating}</h2>
        {all_rounder && (
          <span className="text-green-500 font-bold">All Rounder</span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p>Price: {price}M</p>
        <button
          onClick={() => onSelect(player)}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
