import { imgRanges } from "../../data/imageCountryData"
import { useState , useEffect } from "react"

export function CountrySelection() {
    const [allSelected, setAllSelected] = useState<boolean>(false);

    return (
        <div className="flex-1 text-xl p-2 overflow-y-scroll scrollbar-hide h-screen">
            {Object.keys(imgRanges).map((nation: string) => (
                <div key={nation}>
                    <div
                        onClick={() => {setAllSelected(prev => !prev);
                            console.log("all should turn now");
                        }}
                        className={`${allSelected ? "text-white" : "text-gray-800"} cursor-pointer m-2 hover:text-gray-500`}
                    >
                        {nation}
                    </div>
                    <div className="flex flex-wrap gap-2 pl-4 text-base">
                        {Object.keys(imgRanges[nation]).map((city: string) => (
                            <div key={city} className="cursor-pointer">
                                <City cityName={city} selected={allSelected} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function City({ cityName, selected }: { cityName: string; selected: boolean }) {
    const [citySelected, setCitySelected] = useState<boolean>(false);

    useEffect(() => {
        setCitySelected(selected);
    }, [selected]);

    return (
        <div
            onClick={() => {setCitySelected(prev => !prev);
                console.log("should turn dark now");
            }}
            className={`${citySelected ? "text-white" : "text-gray-800"} hover:text-gray-600`}
        >
            {cityName}
        </div>
    );
}