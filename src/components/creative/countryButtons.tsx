import { imgRanges } from "../../data/imageCountryData";
import { useState, useEffect, useLayoutEffect, useContext} from "react";
import { resetAction } from "./imagesSelect";

export function CountrySelection() {
  return (
    <div className="flex-1 text-xl p-2 overflow-y-scroll scrollbar-hide h-screen">
      {Object.keys(imgRanges).map((nation: string) => (
        <Country key={nation} nation={nation} />
      ))}
    </div>
  );
}

function Country({ nation }: { nation: string }) {
  const actionContext = useContext(resetAction);

  const [countrySelected, setCountrySelected] = useState<boolean>(false);
  useEffect(() => {
    Object.keys(imgRanges[nation]).forEach(function(city: string) {
        imgRanges[nation][city].selected = countrySelected;
    })
  }, [countrySelected]);

  useLayoutEffect(() => {
    setCountrySelected(false);
  }, [actionContext]);

  return (
    <div>
      {/* Country header */}
      <div
        onClick={() => setCountrySelected((prev) => !prev)}
        className={`${countrySelected ? "text-white" : "text-gray-500"} cursor-pointer m-2 hover:text-gray-300`}
      >
        {nation}
      </div>

      {/* Cities */}
      <div className="flex flex-wrap gap-2 pl-4 text-base">
        {Object.keys(imgRanges[nation]).map((city: string) => (
          <City key={city} cityName={city} parentSelected={countrySelected} parentNation={nation} />
        ))}
      </div>
    </div>
  );
}

function City({
  cityName,
  parentSelected,
  parentNation,
}: {
  cityName: string;
  parentSelected: boolean;
  parentNation: string;
}) {
  const actionContext = useContext(resetAction);
  const [citySelected, setCitySelected] = useState<boolean>(false);

  useLayoutEffect(() => {
    setCitySelected(false);
  }, [actionContext]);

  // Sync city selection when parent (country) toggles
  useEffect(() => {
    setCitySelected(parentSelected);
  }, [parentSelected]);

  useEffect(() => {
    imgRanges[parentNation][cityName].selected = citySelected;
  }, [citySelected]);

  return (
    <div
      onClick={() => setCitySelected((prev) => !prev)}
      className={`${citySelected ? "text-white" : "text-gray-600"} hover:text-gray-300 cursor-pointer`}
    >
      {cityName}
    </div>
  );
}
