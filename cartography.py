import matplotlib.pyplot as plt
import cartopy.crs as ccrs

# Create a Mercator projection with latitude_true_scale and lat_0 at New York
proj = ccrs.Mercator(
    central_longitude=-74.0,        # New York approx longitude
    latitude_true_scale=40.71       # New York latitude becomes visual equator
)

# Create a figure and axis using the custom projection
fig = plt.figure(figsize=(10, 5))
ax = plt.axes(projection=proj)

# Set extent to show a good portion of the world
ax.set_extent([-180, 180, -20, 100], crs=ccrs.PlateCarree())

# Add coastlines
ax.coastlines()

# Optionally add a marker at New York
ax.plot(-74.0, 40.71, 'ro', transform=ccrs.PlateCarree())
ax.text(-74.0, 40.71, ' New York', transform=ccrs.PlateCarree(), fontsize=10)

plt.show()
