import React, { useState, useContext, useEffect } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //Fetch Country
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const { loading: loadCountry, data: fetchedCountries } = useFetch(
    "https://disease.sh/v3/covid-19/countries"
  );

  //Fetch Graph Data
  const [graphData, setGraphData] = useState({});

  const { loading: loadGraph, data: fetchedGraphData } = useFetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
  );
  // console.log(fetchedGraphData.cases);
  // console.log(fetchedGraphData);
  useEffect(() => {
    if (fetchedCountries) {
      const setUpFetchedCountries = fetchedCountries.map((item) => ({
        name: item.country,
        value: item.countryInfo.iso2,
      }));
      setCountries(setUpFetchedCountries);
      //Table data show by sort list
      const sortedData = [...fetchedCountries].sort((a, b) =>
        a.cases > b.cases ? -1 : 1
      );
      setTableData(sortedData);
    }
    //Fetched Graph Data
    if (fetchedGraphData) {
      const chartData = [];
      let lastDataPoint;
      for (let item in fetchedGraphData["cases"]) {
        if (lastDataPoint) {
          let newDataPoint = {
            x: item,
            y: fetchedGraphData["cases"][item] - lastDataPoint,
          };
          chartData.push(newDataPoint);
        }
        lastDataPoint = fetchedGraphData["cases"][item];
        setGraphData(chartData);
      }
    }
  }, [fetchedCountries, fetchedGraphData]);

  //Fetch selected from dropdown country data
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
    const url =
      country === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        countries,
        country,
        onCountryChange,
        countryInfo,
        tableData,
        graphData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
