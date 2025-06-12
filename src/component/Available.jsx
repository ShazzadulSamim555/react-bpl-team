const Available = ({ showSelected, setShowSelected }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-2xl font-bold">Available Players</h2>
      <div className="inline-flex border-2 rounded-lg">
        <button
          onClick={() => setShowSelected(false)}
          className={`px-4 py-2 rounded-l-lg ${!showSelected ? "bg-gray-900 text-white" : "hover:bg-gray-200"}`}
        >
          Available
        </button>
        <button
          onClick={() => setShowSelected(true)}
          className={`px-4 py-2 rounded-r-lg ${showSelected ? "bg-yellow-400 text-black" : "hover:bg-gray-200"}`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default Available;
