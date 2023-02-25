const LocationSearch = () => (
  <div className="my-0">
    <input type="text" name="location" autoComplete="off"  data-form-type="other"
      className="text-base min-w-[300px] rounded-none focus:outline-none sm:w-auto border-2 border-gray-300 px-3 py-2 sm:mr-0 mr-2 my-3 md:my-2"
      placeholder='📍 Enter address, city or zipcode'
    />
    <div className="inline-block ml-4 text-sm">
      <span className="font-normal underline">Use Current Location</span>
    </div>
    <div className="inline-block ml-4 text-sm">
      <button type="button" className="py-2 px-5 text-center rounded-full border-2 border-black font-bold">
        Search
      </button>
    </div>
  </div>
);

export default LocationSearch;
