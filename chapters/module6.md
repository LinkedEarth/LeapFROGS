---
title: 'Module 6: Introduction to Cartopy'
description:
  'This module will teach you about Cartopy, a mapping package used widely in
   the geosciences, including Pyleoclim.'
prev: /module5
next: /module7
type: chapter
id: 6
---

<exercise id="1" title="Introduction to Cartopy">

~~~
Cartopy is a Python package designed for geospatial data processing in order
to produce maps and other geospatial data analyses.

Cartopy makes use of the powerful PROJ.4, NumPy and Shapely libraries and
includes a programmatic interface built on top of Matplotlib for the creation of
publication quality maps.

Key features of Cartopy are its object-oriented projection definitions, and its
ability to transform points, lines, vectors, polygons and images between those
projections.
- Cartopy documentation
~~~

Before doing the tutorials, make sure that you already have a basic familiarity with Matplotlib.

Cartopy’s cartographic features library includes shapefiles directly served by Natural Earth. It sometimes takes a minute for the code to access those databases behind the scenes, so be prepared for that.

This tutorial will lead you through some basics of creating maps with specified projections with Cartopy, and adding geographic features like coastlines, borders, topography, and landmarks. We will cover:

1. Basic concepts: map projections and `GeoAxes`
2. Explore some of Cartopy's map projections
3. Mapping a record's site

Before we dive in, please look at:

[Introduction to Cartopy](https://foundations.projectpythia.org/core/cartopy/cartopy.html)
[Introduction to Cartopy Binder](https://mybinder.org/v2/gh/ProjectPythia/pythia-foundations/main?urlpath=lab/tree/core/cartopy/cartopy.ipynb)

</exercise>


<exercise id="2" title="A basic map">

Recall that in Matplotlib, what we might traditionally term a *figure* consists of two key components: a `figure` object and an associated `axes` object.

By importing Cartopy, we can convert the `axes` into a `GeoAxes` by specifying a projection that we have imported from *Cartopy's Coordinate Reference System* class as `ccrs`. This will effectively [*georeference*](https://www.usgs.gov/faqs/what-does-georeferenced-mean) the subplot.

Here we'll create a GeoAxes that uses the `PlateCarree` projection (basically a global lat-lon map projection, which translates from French to "flat square" in English, where each point is equally spaced in terms of degrees).

<codeblock id="06_01">
This is just a demo. Relax and enjoy!
</codeblock>
Although the figure seems empty, it has in fact been georeferenced, using one of Cartopy's map projections that is provided by Cartopy's `crs` (coordinate reference system) class. We can now add in cartographic features, in the form of *shapefiles*, to our subplot. One of them is `coastlines`, which is a callable `GeoAxes` method that can be plotted directly on our subplot.

<codeblock id="06_02">
This is just a demo. Relax and enjoy!
</codeblock>

Cartopy provides other cartographic features via its `features` class, which are imported as `cfeature`. These are also shapefiles, downloaded on initial request from https://www.naturalearthdata.com/. Once downloaded, they "live" in your `~/.local/share/cartopy` directory (note the `~` represents your _home_ directory). We add them to our subplot via the `add_feature` method. We can define attributes for them in a manner similar to Matplotlib's `plot` method. A list of the various Natural Earth shapefiles appears in https://scitools.org.uk/cartopy/docs/latest/matplotlib/feature_interface.html .

<codeblock id="06_03">
This is just a demo. Relax and enjoy!
</codeblock>

Finally, we can add topography as a "stock image". Notice how cartopy has the good taste to plot it _under_ administrative boundaries, so the latter are visible:

<codeblock id="06_04">
This is just a demo. Relax and enjoy!
</codeblock>

Pretty, isn't it? You are now ready to explore the dizzying world of projections.

</exercise>

<exercise id="3" title="Projections">

As you probably know, it is impossible to represent a 3-dimensional object like Earth on a 2D surface (a map) without tear or deformation (try it with an [orange](https://rabernat.github.io/research_computing_2018/maps-with-cartopy.html#The-major-problem-with-map-projections)). A plethora of projections are available, each with different pros and cons, deforming distances, areas, or angles in different ways. The default "Plate Carrée" projection used above is a so-called [equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection), in which meridians and parallels are always at right angles, but distances and areas can be severely distorted: for instance, on such a map Greenland (410,450 km^2) appears to have the same size as Australia, which in reality is an order of magnitude larger (7,741,220 km2). To quantify this effect, Cartopy's `tissot` method allows to plot the Tissot's ellipses of distortion (["indicatrix"](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix)), like so:

<codeblock id="06_05">
This is just a demo. Relax and enjoy!
</codeblock>

You can find a list of supported projections in Cartopy, with examples, https://scitools.org.uk/cartopy/docs/latest/reference/crs.html.

Let us try the Mollweide projection, which is appropriate for thematic world maps illustrating area characteristics and analysis requiring accurate areas. This time, we'll define an object to store our projection definition. Any time you wish to use this particular projection later in a notebook, you can use the object name rather than repeating the same call to `ccrs`.

<codeblock id="06_06">
This is just a demo. Relax and enjoy!
</codeblock>

**Exercise 6.1**
Pick another projection, plot the globe with topography + administrative boundaries, and represent the projection's distortion using Tissot's indicatrix. Can you find a projection that accurately represents the area ratio between Greenland and Australia?

<codeblock id="06_07">
Look up projections at https://scitools.org.uk/cartopy/docs/latest/reference/crs.html !
</codeblock>

</exercise>

<exercise id="4" title="Local Maps">

Now, let's go back to PlateCarree, but let's use Cartopy's `set_extent` method to restrict the map coverage. Let's also choose a lower resolution for coastlines, just to illustrate how one can specify that. And we'll plot lat/lon lines as well, for good measure. The reference for Natural Earth's three resolutions (10m, 50m, 110m; higher is coarser) is at https://www.naturalearthdata.com/downloads/.

<codeblock id="06_08">
This is just a demo. Relax and enjoy!
</codeblock>

 Note the in the `set_extent` call, we specified a **PlateCarree** projection. This ensures that the values we passed into `set_extent` will be _transformed_ from degrees into the values appropriate for the projection we use for the map (numbers between 0 and 1, in Matplotlib).


Let us now use these features to create a regional map centered over Ukraine in Lambert Conformal projection. Be patient: with a limited regional extent as specified here, the highest resolution (10m) shapefiles are used; as a result (as with any `GeoAxes` object that must be transformed from one coordinate system to another), this will take longer to plot, particularly if you haven't previously retrieved these features from the Natural Earth shapefile server.

<codeblock id="06_09">
This is just a demo. Relax and enjoy!
</codeblock>

To highlight the country we use [this geopandas solution](https://stackoverflow.com/a/47885128/4984978), and to save ourselves a lot of repeating, we define a function:

<codeblock id="06_10">
This is just a demo. Relax and enjoy!
</codeblock>

**Exercise 6.2**
Look up the [documentation](https://matplotlib.org/stable/gallery/color/color_demo.html) to change this color to the _tableau10 purple_, and celebrate Ukrainian band's Gogol Bordello's [Start Wearing Purple](https://open.spotify.com/track/2yn7MpYBdqhNSnN6lQCLaa?si=f5e7b4147a764b87).

<codeblock id="06_11">
Notice that the map_ukraine() function has one argument, called highlight_color. Use this to specify alternate colors by calling map_ukraine(highlight_color=YOURCOLORNAME)

</codeblock>

A common use case for mappping in the paleosciences is to display the location of a point of interest, e.g. the site of sample collection. This is done very easily by re-using Matplotlib functions like [text](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.text.html?highlight=text#examples-using-matplotlib-axes-axes-text). On the map below we add a dot and a label for the city of Kyiv:


<codeblock id="06_12">
This is just a demo. Relax and enjoy!
</codeblock>

**Exercise 6.3**
Find the location of the city of Mariupol and plot it on this map (together with Kyiv).

<codeblock id="06_13">
Look up coordinates obtained from https://geohack.toolforge.org/geohack.php?pagename=Mariupol&params=47_5_45_N_37_32_58_E_region:UA_type:city(431859)
</codeblock>

Now that you know to do it for cities, you can do it for any geolocated sample.

</exercise>


<exercise id="5" title="Plotting a field on the sphere">

In addition to plotting the location and geographic context of a sampling site, or of a collection of sites, one might want to plot climate fields (e.g. temperature), which vary continuously over time and space.  To simplify matters, let us use NumPy to define a field of our own on a bespoke lat-lon grid, then plot it with (you guessed it) Matplotlib:

<codeblock id="06_14">
This is just a demo. Relax and enjoy!
</codeblock>

Plotting data on a Cartesian grid is equivalent to plotting data in the Plate Carrée projection, where meridians and parallels are all straight lines with constant spacing. As a result of this simplicity, the global datasets we use often begin in the Plate Carrée projection.

Once we create our map again, we can plot this data as a contour map. We also need to specify the projection we are transforming _from_ (i.e. the projection our data is currently in) using the `transform` argument. Let's plot our data in the Mollweide projection to see how shapes change under a transformation.

<codeblock id="06_15">
This is just a demo. Relax and enjoy!
</codeblock>

Note that [contourf](https://matplotlib.org/3.5.1/api/_as_gen/matplotlib.pyplot.contourf.html) and [colorbar](https://matplotlib.org/3.5.1/api/_as_gen/matplotlib.pyplot.colorbar.html) are standard Matplotlib functions. As usual, Cartopy only offers a mapping from the regular display on a rectangular set of axes to a projection on the sphere, by specifying `projection` in the creation of the `Axes` object (here, with `plt.subplot`, but there are other ways) and by specifying a coordinate mapping (`transform=ccrs.PlateCarree()`) in the call to the plotting function itself (here, `contourf`). The lesson is that _any_ Matplotlib function can be used on top of Cartopy, allowing to represent virtually anything on the sphere. Oh, and it works on [other planets](https://github.com/eleanorlutz/mars_geology_atlas_of_space), too.

</exercise>

<exercise id="6" title="The plot thickens: Uniting Time and Space into Cohesive Narratives">

Maps need not be standalone objects; they are often interwoven with other displays to create a cohesive graphical narrative. In other words, every figure tells a story, and as [Edward Tufte](https://www.edwardtufte.com/tufte/) reminds us, stories are often about time and place. In this last exercise we revisit the dataset of Module 5 (NINO3 and All-India Rainfall) to add a spatial dimension to what was (so far) a purely temporal narrative.  

We start by plotting the two series, and adding a map underneath to provide spatial context:

<codeblock id="06_16">
This is just a demo. Relax and enjoy!
</codeblock>

This is an OK plot; that is to say, it is labeled enough to be interpretable, but it won't make the cover of Nature. Notice how we foolishly used different colors for the variables and their geographic context between the two subplots. Wouldn't it be _so_ much better if the colors echoed each other from subplot to subplot, to assert correspondences at the subconscious level? Also, topography is not terribly useful here, and needlessly clutters the plot.

**Exercise 6.4**
Color-coordinate the two plots, using the [Cn notation](https://matplotlib.org/stable/tutorials/colors/colors.html?highlight=cn). Also, flip the map and the timeseries, so the map is on top, and remove topography.

<codeblock id="06_17">
See the previous codeblock and re-use at will! Only a few minor tweaks are needed.
</codeblock>

</exercise>

## Summary

- Cartopy allows for georeferencing Matplotlib `axes` objects, allowing to weave maps into more complex figures, and leveraging all other Matplotlib functionalities, like displaying fields, adding labels, colored patches, and much more.
- Cartopy's `crs` class supports a variety of map projections.
- Cartopy's `feature` class allows for a variety of cartographic features to be overlaid on the figure

## Resources and References

1. [Cartopy Documentation](https://scitools.org.uk/cartopy/docs/latest/)
2. [Full list of projections in Cartopy](https://scitools.org.uk/cartopy/docs/latest/reference/crs.html)
3. [Maps with Cartopy (Ryan Abernathey)](https://rabernat.github.io/research_computing_2018/maps-with-cartopy.html)
4. [Map Projections (GeoCAT)](https://geocat-examples.readthedocs.io/en/latest/gallery/index.html#map-projections)
5. [Pythia tutorial](https://foundations.projectpythia.org/core/cartopy/cartopy.html)
