import QuickActions from "../QuickActions/QuickActions";

const SearchResults = ({ orgs, trackClickHandler }) => {
  return (
    <div className="pl-[57px] pr-[175px] pt-[47px] absolute mt-[60px] font-bold flex">
      <div className="w-[850px]">
        <div className="text-[22px] opacity-50 mb-[18px] flex">
          Similar accounts
        </div>
        <div className="grid grid-cols-2 auto-rows-auto gap-x-[57px] gap-y-10">
          {orgs.map((org, idx) => (
            <div
              key={idx}
              className="w-[415px] flex items-center col-span-1 justify-between p-2"
            >
              <div className="flex">
                <img className="w-[50px] h-[50px]" src={org.logo} />
                <div className="ml-[22px] text-left">
                  <div className="text-base">{org.company}</div>
                  <div className="text-xs font-normal opacity-50">{`www.${org.website}`}</div>
                </div>
              </div>
              {org.tracking ? (
                <div className="w-[74px] h-[30px] text-xs text-[#1AAB2B] flex justify-center items-center box-border border-[1px] border-solid border-[#1AAB2B] rounded-sm">
                  Tracking
                </div>
              ) : (
                <div
                  className="w-[53px] h-[30px] text-xs text-[#FF6059] flex justify-center items-center box-border border-[1px] border-solid border-[#FF6059] rounded-sm cursor-pointer"
                  onClick={() => trackClickHandler(idx)}
                >
                  Track
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <QuickActions />
    </div>
  );
};

export default SearchResults;
