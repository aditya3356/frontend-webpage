import search from "../../images/search.png";
import times from "../../images/times.png";
import bell from "../../images/bell.png";
import logoHarrow from "../../images/Logo_Harrow.png";

const Searchbar = ({
  searchValue,
  searchSelected,
  setSearchSelected,
  searchValueChangeHandler,
  crossClickHandler,
}) => {
  return (
    <div className="w-full h-[60px] flex items-center bg-white fixed box-border shadow-[4px_0_16px_10px_rgba(30,30,30,0.08)] z-50">
      {searchSelected ? (
        <img
          src={times}
          className="w-3.5 h-[22px] ml-6 cursor-pointer"
          onClick={crossClickHandler}
        />
      ) : (
        <img src={search} className="w-[22px] h-[22px] ml-6" />
      )}
      <input
        type="text"
        className="w-full h-full ml-3.5 text-base opacity-30 outline-none"
        placeholder="Search by account name or website"
        value={searchValue}
        onChange={searchValueChangeHandler}
        onFocus={() => setSearchSelected(true)}
      />
      <div className="absolute ml-[1119px] flex items-center">
        <img src={bell} className="w-[29px] h-[29px]" />
        <img src={logoHarrow} className="w-[25px] h-[25px] ml-2" />
      </div>
    </div>
  );
};

export default Searchbar;
