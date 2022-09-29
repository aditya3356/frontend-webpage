import { useState } from "react";
import companyLogo from "../../images/B2Brain.png";
import chevronDown from "../../images/chevron-down.png";
import chevronUp from "../../images/chevron-up.png";
import verticalRule from "../../images/Rectangle 5.png";
import { items } from "../../constants";

const Sidebar = () => {
  const [accountsDropdown, toggleAccountsDropdown] = useState(true);
  const [preferencesDropdown, togglePreferencesDropdown] = useState(true);

  const dropdownClickedHandler = (itemName) => {
    if (itemName === "Accounts") {
      toggleAccountsDropdown((prevAccountsDropdown) => !prevAccountsDropdown);
    } else if (itemName === "Preferences") {
      togglePreferencesDropdown(
        (prevPreferencesDropdown) => !prevPreferencesDropdown
      );
    }
  };

  return (
    <div className="w-[239px] h-full pt-3.5 pl-[15px] pr-3.5 fixed box-border shadow-[4px_0_16px_0_rgba(30,30,30,0.08)] z-50">
      <div className="flex items-center mb-11 w-auto">
        <img
          className="w-[35px] h-[31px]"
          src={companyLogo}
          alt="B2Brain logo"
        />
        <div className="ml-[22px] font-bold text-[22px]">B2Brain</div>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className="mb-5">
          <div
            className={`flex justify-between items-center cursor-${
              item.dropdown.length ? "pointer" : "normal"
            }`}
            onClick={() => dropdownClickedHandler(item.name)}
          >
            <div className="flex items-center">
              <img
                className="w-3.5 h-4"
                src={item.icon}
                alt={`${item.name}-icon`}
              />
              <div
                className={`ml-[17px] font-${
                  item.selected ? "bold" : "normal"
                } text-base`}
              >
                {item.name}
              </div>
            </div>
            {item.dropdown.length ? (
              <img
                className="w-3.5 h-4"
                src={
                  (item.name === "Accounts" && accountsDropdown) ||
                  (item.name === "Preferences" && preferencesDropdown)
                    ? chevronUp
                    : chevronDown
                }
                alt="chevron"
              />
            ) : null}
            {item.unread !== 0 ? (
              <div className="w-[57px] h-4 bg-[#FF7474] rounded-[22px] flex justify-center items-center text-white text-[10px] font-bold">
                {item.unread} unread
              </div>
            ) : null}
            {item.unseen !== 0 ? (
              <div className="w-[57px] h-4 bg-[#FF7474] rounded-[22px] flex justify-center items-center text-white text-[10px] font-bold">
                {item.unseen} unseen
              </div>
            ) : null}
          </div>
          {(item.name === "Accounts" && accountsDropdown) ||
          (item.name === "Preferences" && preferencesDropdown) ? (
            <div className="pl-1.5 mt-2.5 flex">
              <img
                className="w-px h-[86px]"
                src={verticalRule}
                alt="vertical-rule"
              />
              <div className="ml-6">
                {item.dropdown.map((name, idx) => (
                  <div
                    key={idx}
                    className="text-sm flex opacity-60 leading-[29px]"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
