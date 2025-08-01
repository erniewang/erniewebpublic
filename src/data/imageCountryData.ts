// Define types for the nested dictionary structure
export type ImageRangeTuple = readonly [number, number]; // [startIndex, endIndex]

export type CityData = {
  readonly ranges: readonly ImageRangeTuple[];
  selected: boolean;
}

export type CountryImageRanges = {
  readonly [country: string]: {
    readonly [city: string]: CityData;
  };
};

// Export the ranges as a nested dictionary: country -> city -> ranges[]
export var imgRanges: CountryImageRanges = {
  "Austria": {
    "Graz": { ranges: [[450, 467]], selected: false },
    "Klettersteig": { ranges: [[439, 449]], selected: false },
    "Linx": { ranges: [[74, 107]], selected: false },
    "Rural Austria": { ranges: [[1422, 1427]], selected: false },
    "Salzburg": { ranges: [[568, 615]], selected: false },
    "Vienna": { ranges: [[0, 48], [73, 79], [265, 296], [377, 383], [1794, 1798]], selected: false },
    "Wachau River Valley": { ranges: [[1265, 1298]], selected: false },
    "Werfen": { ranges: [[616, 690]], selected: false }
  },
  "Bosnia": {
    "Mostar/Jablaninca": { ranges: [[825, 894]], selected: false }
  },
  "China": {
    "Inner Mongolia": { ranges: [[1888, 1897]], selected: false },
    "Qinlin Shaanxi": { ranges: [[1906, 1930]], selected: false },
    "Shaanbei": { ranges: [[1898, 1906]], selected: false },
    "Shanghai": { ranges: [[1979, 1987]], selected: false },
    "Weihai/RongCheng": { ranges: [[1931, 1978]], selected: false }
  },
  "Croatia": {
    "Adriatic Coastline": { ranges: [[778, 824]], selected: false },
    "Dubrovnik": { ranges: [[691, 733]], selected: false },
    "Plitivc Jerskca": { ranges: [[939, 966]], selected: false },
    "Split": { ranges: [[895, 938]], selected: false },
    "Zagreb": { ranges: [[967, 1011]], selected: false }
  },
  "Czechia": {
    "Cesky Krumlov Cesky Budejovice": { ranges: [[1377, 1421]], selected: false },
    "Prague": { ranges: [[384, 438]], selected: false },
    "Znojmo": { ranges: [[1299, 1318]], selected: false }
  },
  "Denmark": {
    "Copenhagen City Center": { ranges: [[1992, 2011]], selected: false },
    "Copenhagen Downtown": { ranges: [[2084, 2103]], selected: false },
    "Copenhagen Rivers": { ranges: [[2015, 2025]], selected: false },
    "Helsingør": { ranges: [[2050, 2061]], selected: false },
    "Møns Klint": { ranges: [[2030, 2048]], selected: false },
    "Tivoli Gardens": { ranges: [[2026, 2029]], selected: false }
  },
  "Estonia": {
    "Estonia": { ranges: [[1658, 1707]], selected: false }
  },
  "France": {
    "Paris": { ranges: [[109, 186]], selected: false },
    "Paris/Versailles": { ranges: [[186, 240]], selected: false }
  },
  "Germany": {
    "Bavaria": { ranges: [[1621, 1655]], selected: false },
    "Passau": { ranges: [[1551, 1592]], selected: false },
    "Regensburg": { ranges: [[1593, 1620]], selected: false }
  },
  "Hungary": {
    "Budapest": { ranges: [[297, 376]], selected: false },
    "Sopron": { ranges: [[1224, 1264]], selected: false }
  },
  "Italy": {
    "Venice/Murano/Burano": { ranges: [[1033, 1223]], selected: false }
  },
  "Latvia": {
    "Latvia": { ranges: [[1709, 1728]], selected: false }
  },
  "Montenegro": {
    "Herceg Novi": { ranges: [[734, 777]], selected: false }
  },
  "Poland": {
    "Gdansk": { ranges: [[1335, 1376]], selected: false },
    "Katowice": { ranges: [[1729, 1763]], selected: false },
    "Krakow": { ranges: [[1764, 1793]], selected: false },
    "Warsaw": { ranges: [[1319, 1334]], selected: false }
  },
  "Romania": {
    "Brasov": { ranges: [[1471, 1524]], selected: false },
    "Bucharest": { ranges: [[1428, 1470]], selected: false },
    "Cluj Napoca": { ranges: [[1543, 1550]], selected: false },
    "Sibiu": { ranges: [[1525, 1542]], selected: false }
  },
  "Slovakia": {
    "Bratislava": { ranges: [[49, 71]], selected: false }
  },
  "Slovenia": {
    "Ljubliana": { ranges: [[1012, 1032]], selected: false }
  },
  "Sweden": {
    "Helsingborg": { ranges: [[2061, 2070]], selected: false },
    "Malmö": { ranges: [[2071, 2083]], selected: false },
    "Stockholm": { ranges: [[469, 567]], selected: false }
  },
  "USA": {
    "Brookings": { ranges: [[1847, 1859]], selected: false },
    "Chicago": { ranges: [[1988, 1992]], selected: false },
    "Haleakalā": { ranges: [[2150, 2166]], selected: false },
    "Kehei": { ranges: [[2109, 2114]], selected: false },
    "Makena": { ranges: [[2131, 2149]], selected: false },
    "Redwood Forests": { ranges: [[1836, 1846], [1860, 1864]], selected: false },
    "Road to Hana": { ranges: [[2115, 2130]], selected: false },
    "San Francisco Bay Area": { ranges: [[1866, 1886]], selected: false },
    "Seattle": { ranges: [[1800, 1825]], selected: false },
    "Tampa Bay": { ranges: [[1829, 1834]], selected: false },
    "Waihee": { ranges: [[2167, 2178]], selected: false },
    "West Maui": { ranges: [[2179, 2228]], selected: false }
  }
};