import { useState } from "react";
import "./App.css";
import heroImage from "./images/Hero Image.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Searchbar from "./components/Searchbar/Searchbar";
import SearchResults from "./components/SearchResults/SearchResults";
import { apiEndpoint, sampleOrgs } from "./constants";
import axios from "axios";
import * as _ from "lodash";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchSelected, setSearchSelected] = useState(false);
  const [orgs, setOrgs] = useState(_.cloneDeep(sampleOrgs));

  const searchValueChangeHandler = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value !== "") {
      getOrgs(e.target.value);
    } else {
      setOrgs(_.cloneDeep(sampleOrgs));
    }
  };

  const crossClickHandler = () => {
    setSearchValue("");
    setSearchSelected(false);
    setOrgs(_.cloneDeep(sampleOrgs));
  };

  const getOrgs = (queryStr) => {
    axios
      .get(`${apiEndpoint}?q=${queryStr}`)
      .then(({ data }) => {
        console.log(data);
        const fetchedOrgs = data.map((org) => {
          return {
            company: org.company,
            slug: org.slug,
            logo: org.logo,
            website: org.website,
            tracking: false,
          };
        });
        setOrgs([..._.cloneDeep(sampleOrgs), ...fetchedOrgs]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const trackClickHandler = (idx) => {
    console.log(
      `${orgs[idx].company} (${orgs[idx].slug}) tracked at ${Date.now()}`
    );
    setOrgs((prevOrgs) => {
      const newOrgs = [...prevOrgs];
      newOrgs[idx].tracking = true;
      return newOrgs;
    });
  };

  return (
    <div className="App font-[Manrope]">
      <Sidebar />
      <div className="ml-[239px]">
        <Searchbar
          searchValue={searchValue}
          searchSelected={searchSelected}
          setSearchSelected={setSearchSelected}
          searchValueChangeHandler={searchValueChangeHandler}
          crossClickHandler={crossClickHandler}
        />
        {searchSelected ? (
          <SearchResults orgs={orgs} trackClickHandler={trackClickHandler} />
        ) : (
          <img
            className="absolute mt-[60px]"
            src={heroImage}
            alt="dashboard-background"
          />
        )}
      </div>
    </div>
  );
}

export default App;
