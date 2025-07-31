// Define types for the location data structure
type Location = {
  city: string;
  country: string;
};

type ImageRange = {
  startIndex: number;
  endIndex: number;
  location: Location;
};

// Helper function to create a properly typed ImageRange object
const createImageRange = (
  startIndex: number,
  endIndex: number,
  [city, country]: [string, string]
): ImageRange => ({
  startIndex,
  endIndex,
  location: { city, country }
});

// Export the ranges with proper typing
export const ranges: ImageRange[] = [
  createImageRange(0, 48, ['Vienna', 'Austria']),
  createImageRange(49, 71, ['Bratislava', 'Slovakia']),
  createImageRange(73, 79, ['Vienna', 'Austria']),
  createImageRange(74, 107, ['Linx', 'Austria']),
  createImageRange(109, 186, ['Paris', 'France']),
  createImageRange(186, 240, ['Paris/Versailles', 'France']),
  createImageRange(265, 296, ['Vienna', 'Austria']),
  createImageRange(297, 376, ['Budapest', 'Hungary']),
  createImageRange(377, 383, ['Vienna', 'Austria']),
  createImageRange(384, 438, ['Prague', 'Czechia']),
  createImageRange(439, 449, ['Klettersteig', 'Austria']),
  createImageRange(450, 467, ['Graz', 'Austria']),
  createImageRange(469, 567, ['Stockholm', 'Sweden']),
  createImageRange(568, 615, ['Salzburg', 'Austria']),
  createImageRange(616, 690, ['Werfen', 'Austria']),
  createImageRange(691, 733, ['Dubrovnik', 'Croatia']),
  createImageRange(734, 777, ['Herceg Novi', 'Montenegro']),
  createImageRange(778, 824, ['Adriatic Coastline', 'Croatia']),
  createImageRange(825, 894, ['Mostar/Jablaninca', 'Bosnia']),
  createImageRange(895, 938, ['Split', 'Croatia']),
  createImageRange(939, 966, ['Plitivc Jerskca', 'Croatia']),
  createImageRange(967, 1011, ['Zagreb', 'Croatia']),
  createImageRange(1012, 1032, ['Ljubliana', 'Slovenia']),
  createImageRange(1033, 1223, ['Venice/Murano/Burano', 'Italy']),
  createImageRange(1224, 1264, ['Sopron', 'Hungary']),
  createImageRange(1265, 1298, ['Wachau River Valley', 'Austria']),
  createImageRange(1299, 1318, ['Znojmo', 'Czechia']),
  createImageRange(1319, 1334, ['Warsaw', 'Poland']),
  createImageRange(1335, 1376, ['Gdansk', 'Poland']),
  createImageRange(1377, 1421, ['Cesky Krumlov Cesky Budejovice', 'Czechia']),
  createImageRange(1422, 1427, ['Rural Austria', 'Austria']),
  createImageRange(1428, 1470, ['Bucharest', 'Romania']),
  createImageRange(1471, 1524, ['Brasov', 'Romania']),
  createImageRange(1525, 1542, ['Sibiu', 'Romania']),
  createImageRange(1543, 1550, ['Cluj Napoca', 'Romania']),
  createImageRange(1551, 1592, ['Passau', 'Germany']),
  createImageRange(1593, 1620, ['Regensburg', 'Germany']),
  createImageRange(1621, 1655, ['Bavaria', 'Germany']),
  createImageRange(1658, 1707, ['Estonia', 'Estonia']),
  createImageRange(1709, 1728, ['Latvia', 'Latvia']),
  createImageRange(1729, 1763, ['Katowice', 'Poland']),
  createImageRange(1764, 1793, ['Krakow', 'Poland']),
  createImageRange(1794, 1798, ['Vienna', 'Austria']),
  createImageRange(1800, 1825, ['Seattle', 'USA']),
  createImageRange(1829, 1834, ['Tampa Bay', 'USA']),
  createImageRange(1836, 1846, ['Redwood Forests', 'USA']),
  createImageRange(1847, 1859, ['Brookings', 'USA']),
  createImageRange(1860, 1864, ['Redwood Forests', 'USA']),
  createImageRange(1866, 1886, ['San Francisco Bay Area', 'USA']),
  createImageRange(1888, 1897, ['Inner Mongolia', 'China']),
  createImageRange(1898, 1906, ['Shaanbei', 'China']),
  createImageRange(1906, 1930, ['Qinlin Shaanxi', 'China']),
  createImageRange(1931, 1978, ['Weihai/RongCheng', 'China']),
  createImageRange(1979, 1987, ['Shanghai', 'China']),
  createImageRange(1988, 1992, ['Chicago', 'USA']),
  createImageRange(1992, 2011, ['Copenhagen City Center', 'Denmark']),
  createImageRange(2015, 2025, ['Copenhagen Rivers', 'Denmark']),
  createImageRange(2026, 2029, ['Tivoli Gardens', 'Denmark']),
  createImageRange(2030, 2048, ['Møns Klint', 'Denmark']),
  createImageRange(2050, 2061, ['Helsingør', 'Denmark']),
  createImageRange(2061, 2070, ['Helsingborg', 'Sweden']),
  createImageRange(2071, 2083, ['Malmö', 'Sweden']),
  createImageRange(2084, 2103, ['Copenhagen Downtown', 'Denmark']),
  createImageRange(2109, 2114, ['Kehei', 'Maui, USA']),
  createImageRange(2115, 2130, ['Road to Hana', 'Maui, USA']),
  createImageRange(2131, 2149, ['Makena', 'Maui, USA']),
  createImageRange(2150, 2166, ['Haleakalā', 'Maui, USA']),
  createImageRange(2167, 2178, ['Waihee', 'Maui, USA']),
  createImageRange(2179, 2228, ['West Maui', 'Maui, USA'])
];
  