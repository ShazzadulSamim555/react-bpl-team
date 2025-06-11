const Available = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Available Players</h2>
      </div>
      <div>
        <div class="inline-flex border-gray-500 border-2 rounded-lg" role="group">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg"
          >
            Available
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-400 hover:text-gray-900 rounded-lg" 
          >
            Selected
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Available;
