// Define types for the nested dictionary structure
export type ImageRangeTuple = [number, number]; // [startIndex, endIndex]

export type CountryImageRanges = {
  [country: string]: {
    [city: string]: ImageRangeTuple[];
  };
};

// Export the ranges as a nested dictionary: country -> city -> ranges[]
export const imgRanges: CountryImageRanges = {
  "Austria": {
    "Vienna": [[0, 48], [73, 79], [265, 296], [377, 383], [1794, 1798]],
    "Linx": [[74, 107]],
    "Klettersteig": [[439, 449]],
    "Graz": [[450, 467]],
    "Salzburg": [[568, 615]],
    "Werfen": [[616, 690]],
    "Wachau River Valley": [[1265, 1298]],
    "Rural Austria": [[1422, 1427]]
  },
  "Slovakia": {
    "Bratislava": [[49, 71]]
  },
  "France": {
    "Paris": [[109, 186]],
    "Paris/Versailles": [[186, 240]]
  },
  "Hungary": {
    "Budapest": [[297, 376]],
    "Sopron": [[1224, 1264]]
  },
  "Czechia": {
    "Prague": [[384, 438]],
    "Znojmo": [[1299, 1318]],
    "Cesky Krumlov Cesky Budejovice": [[1377, 1421]]
  },
  "Sweden": {
    "Stockholm": [[469, 567]],
    "Helsingborg": [[2061, 2070]],
    "Malmö": [[2071, 2083]]
  },
  "Croatia": {
    "Dubrovnik": [[691, 733]],
    "Adriatic Coastline": [[778, 824]],
    "Split": [[895, 938]],
    "Plitivc Jerskca": [[939, 966]],
    "Zagreb": [[967, 1011]]
  },
  "Montenegro": {
    "Herceg Novi": [[734, 777]]
  },
  "Bosnia": {
    "Mostar/Jablaninca": [[825, 894]]
  },
  "Slovenia": {
    "Ljubliana": [[1012, 1032]]
  },
  "Italy": {
    "Venice/Murano/Burano": [[1033, 1223]]
  },
  "Poland": {
    "Warsaw": [[1319, 1334]],
    "Gdansk": [[1335, 1376]],
    "Katowice": [[1729, 1763]],
    "Krakow": [[1764, 1793]]
  },
  "Romania": {
    "Bucharest": [[1428, 1470]],
    "Brasov": [[1471, 1524]],
    "Sibiu": [[1525, 1542]],
    "Cluj Napoca": [[1543, 1550]]
  },
  "Germany": {
    "Passau": [[1551, 1592]],
    "Regensburg": [[1593, 1620]],
    "Bavaria": [[1621, 1655]]
  },
  "Estonia": {
    "Estonia": [[1658, 1707]]
  },
  "Latvia": {
    "Latvia": [[1709, 1728]]
  },
  "USA": {
    "Seattle": [[1800, 1825]],
    "Tampa Bay": [[1829, 1834]],
    "Redwood Forests": [[1836, 1846], [1860, 1864]],
    "Brookings": [[1847, 1859]],
    "San Francisco Bay Area": [[1866, 1886]],
    "Chicago": [[1988, 1992]],
    "Kehei": [[2109, 2114]],
    "Road to Hana": [[2115, 2130]],
    "Makena": [[2131, 2149]],
    "Haleakalā": [[2150, 2166]],
    "Waihee": [[2167, 2178]],
    "West Maui": [[2179, 2228]]
  },
  "China": {
    "Inner Mongolia": [[1888, 1897]],
    "Shaanbei": [[1898, 1906]],
    "Qinlin Shaanxi": [[1906, 1930]],
    "Weihai/RongCheng": [[1931, 1978]],
    "Shanghai": [[1979, 1987]]
  },
  "Denmark": {
    "Copenhagen City Center": [[1992, 2011]],
    "Copenhagen Rivers": [[2015, 2025]],
    "Tivoli Gardens": [[2026, 2029]],
    "Møns Klint": [[2030, 2048]],
    "Helsingør": [[2050, 2061]],
    "Copenhagen Downtown": [[2084, 2103]]
  }
};