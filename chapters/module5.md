---
title: 'Module 5: Introduction to Matplotlib'
description:
  'This module will teach you how to use Matplotlib, a comprehensive library for creating static, animated, and
  interactive visualizations in Python. The module is structured around the visualization of two contemporaneous monthly timeseries: the NINO3 SST dataset and All India Rainfall, to explore potential connections.'
prev: /module4
next: /module6
type: chapter
id: 5
---

<exercise id="1" title="A first look at Matplotlib">

Matplotlib is the go-to library for plotting within Python, with many functionalities and names reminiscent of Matlab's plotting libraries. Matplotlib comes with very good default parameters, so you can get visualizing within a few minutes of installing it. It is also extensively customizable, and can be used to make publication-quality graphics.

if you were to learn a single plotting tool to keep in your toolbox, this is the package.

The key feature to Matplotlib is its extensibility and the extensive [documentation](https://matplotlib.org) available to the community. Matplotlib underlies many other graphics libraries, including Cartopy (next chapter), and Pyleoclim, so it is essential that you understand a bit about it.


As before, we recommend looking over the [Pythia Matplotlib tutorial](https://foundations.projectpythia.org/core/matplotlib/matplotlib-basics.html) first. We recommend that you use the provided [Binder link](https://mybinder.org/v2/gh/ProjectPythia/pythia-foundations/main?urlpath=lab/tree/core/matplotlib/matplotlib-basics.ipynb) to follow along the article.

</exercise>

<exercise id="2" title="A first plot">

We start by loading and plotting the [NINO3 sea-surface temperature](https://climatedataguide.ucar.edu/climate-data/nino-sst-indices-nino-12-3-34-4-oni-and-tni) data. Notice that the code uses pandas (see Chapter 4) to load it; your job is to plot NINO3 vs time and annotate the plot by giving it appropriate labels (with units) and title.


<codeblock id="05_01">

Look up the documentation at https://matplotlib.org/stable/index.html!

</codeblock>

Notice that this call to the `subplots` method created:
-  a [figure](https://matplotlib.org/stable/api/figure_api.html?highlight=figure#module-matplotlib.figure) object `fig`
-  an [axes](https://matplotlib.org/stable/api/axes_api.html?highlight=axes#module-matplotlib.axes) object `ax`, to which the plot method is applied.  

For such a simple chart, the distinction is immaterial, but it will soon be important to distinguish between figure and axes, particularly when we create figures with multiple subplots.

If you wanted to change the size of the figure to 10 by 6 inches, say, you would replace the first line of the figure by:
```
fig, ax = plt.subplots(figsize=(10, 6))
```
Give it a try!

</exercise>

<exercise id="3" title="Plot customization">

We now explore Matplotlib's infinite customizability. All default parameters are stored in a dictionary called `rcParams`.
rc stands for "runtime configuration" and any changes to `plt.rcParams` will stay for all subsequent plots in your session. These parameters can be customised and [saved for later use](https://matplotlib.org/stable/tutorials/introductory/customizing.html#customizing-with-matplotlibrc-files).

For instance, the default figure size can be found as:
```
plt.rcParams['figure.figsize']
```
Typing this in your Binder should return `[6.0, 4.0]`

Let us now customize our plot. First, we might want to remove [chart junk](https://www.darkhorseanalytics.com/blog/data-looks-better-naked) (visual elements that clutter the display without bringing any data-related information to the table. The top and right spines of the chart, for instance, are totally useless, so let's remove them.

You can see how to do so [here](https://matplotlib.org/stable/api/spines_api.html?highlight=spines#matplotlib.spines.Spines)

Apply this to the code from the previous block and see the result:

<codeblock id="05_02">
https://stackoverflow.com/questions/925024/how-can-i-remove-the-top-and-right-axis-in-matplotlib
</codeblock>


If you want to make this a general feature of all your plots, it is more convenient to set this property as part of the rcParams, like so:

```
plt.rcParams['axes.spines.right'] = False
plt.rcParams['axes.spines.top'] = False
```

In a Jupyter notebook or another iPython session (e.g. in Spyder), those spines would then be removed from all subsequent plots.

</exercise>


<exercise id="4" title="Making and customizing compound figures">

In many instances, figures are composed of several subplots. Here you learn how to make and customize such plots in Matplotlib. First, let's add another panel to plot the second series, All India Rainfall, and label everything so someone might actually be able to interpret these plots.

```
fig, ax = plt.subplots(2,1,figsize=(10, 6),sharex = True)
ax[0].plot(t,nino3)
ax[0].set_ylabel('NINO3 SST (K)')
ax[0].set_title('NINO3 and All India Rainfall')
ax[1].plot(t,air)
ax[1].set_ylabel('AIR (mm/month)')
ax[1].set_xlabel('Year AD')
```

Notice that we used `sharex = True` to tell the `figure` command that the two subplots had a common x axis, to remove some redundancy. If you're curious, try removing that and see what it does.

Now we want to customize the appearance of the plot a bit more:
- look up the [documentation](https://matplotlib.org/stable/gallery/text_labels_and_annotations/text_fontdict.html#sphx-glr-gallery-text-labels-and-annotations-text-fontdict-py) to see how to make the font bold and set its size to 18.
- change the font of the y-axes labels to 'Helvetica'.

<codeblock id="05_03">
Look up the documentation at https://matplotlib.org/stable/index.html!
</codeblock>


</exercise>

<exercise id="5" title="A plot with two y axes">

Let's preface this exercise by saying that including multiple axes on the same graph is [one of the surest ways to lie with data](https://www.callingbullshit.org/tools/tools_misleading_axes.html). However, when done responsibly, it can save space and allow to compare comparable timeseries.  Here's how to do it for those series:

```# plot
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(t,nino3,label='NINO3',color='C0')
ax.set_ylabel('NINO3 SST (K)')
ax.set_title('NINO3 and All India Rainfall',fontweight='bold')
ax.legend()
# twin object for two different y-axis on the sample plot
ax2=ax.twinx()
ax2.plot(t,air,label='AIR',color='C1')
ax2.set_xlabel('Year AD')
ax2.legend()
```
Type `?plt.plot` or search StackOverflow to figure out how to repeat the figure above but change the line colors to red and green and adjust the transparency of the top curve to 0.6 so both are clearly visible.

<codeblock id="05_04">
Look up the documentation at https://matplotlib.org/stable/index.html!
</codeblock>

</exercise>

<exercise id="6" title="Using Style Sheets">

Making publication-quality plots can involve quite a bit of customization, which gets tedious after a while. Thankfully, Matplotlib has implemented a number of [styles](https://matplotlib.org/3.5.1/gallery/style_sheets/style_sheets_reference.html), which are predefined dictionaries of plotting parameters governing just about every imaginable aspect of plots. Here we demonstrate how to apply these pre-defined styles to the previous plot. There are two main ways to do so:
1. Setting a style for a whole kernel/session, which will affect the graphical style of all subsequent plots.
1. Setting a style as context for a particular plot, not affecting the graphical style of all subsequent plots in your notebook.

First, we create a _function_ to avoid repeating too many lines of code:
```
def nino3_air_plot(plot_title):
    fig, ax = plt.subplots()
    ax.plot(t,nino3,label='NINO3',color='C0')
    ax.set_ylabel('NINO3 SST (K)')
    ax.set_title(plot_title)
    ax.legend()
    # twin object for two different y-axis on the sample plot
    ax2=ax.twinx()
    ax2.plot(t,air,label='AIR',color='C1')
    ax2.set_xlabel('Year AD')
    ax2.legend()
```
The function produces that double y-axis plot with NINO3 and AIR with all the relevant information (variable names, units) but no customization. Use code below to loop through available styles and illustrate them on this particular plot:

<codeblock id="05_05">
https://www.dunderdata.com/blog/view-all-available-matplotlib-styles
</codeblock>

</exercise>

<exercise id="7" title="Visualizing Relationships">

So far we have only played with line plots, but if the goal is to compare two series, one might also explore a [scatterplot](https://matplotlib.org/3.5.1/api/_as_gen/matplotlib.pyplot.scatter.html?highlight=scatter#matplotlib.pyplot.scatter). Let's do this below, using the `ggplot` style.

Edit the code block to produce a scatterplot with AIR on the y axis and NINO3 on the x axis. In order to see overlapping points, give each one an opacity of 30%.

<codeblock id="05_06">
The parameter regulating transparency/opacity is called alpha, and this is how you use it: https://www.adamsmith.haus/python/answers/how-to-change-the-transparency-of-lines-in-matplotlib-in-python.
</codeblock>

</exercise>

<exercise id="8" title="Adding color as an extra dimension">

The plot is interpretable, but we have lost an opportunity for insight by giving each dot the same color. Wouldn't it be nice if each dot's color reflected the time it represents? Luckily we can do this very simply by specifying `c = t` in the call to `scatter`. The colormap argument is `cmap`, and you can pick any [colormap](https://matplotlib.org/stable/tutorials/colors/colormaps.html).

Repurpose the code above to do this with:
- a 12 by 8 in size
- [seaborn-whitegrid](https://python-graph-gallery.com/104-seaborn-themes) plot style
- scatter plot circles with 70% opacity colored by year, using a viridis colormap.

<codeblock id="05_07">
https://stackoverflow.com/questions/17682216/scatter-plot-and-color-mapping-in-python
</codeblock>

What information can you see here that you could not see in exercise 7?

</exercise>

<exercise id="9" title="Plotting in 3 dimensions">

Lastly, we explore how to visualize this scatterplot in 3 dimensions, effectively unraveling the last plot we made from 2D to 3D. Look at [this example](https://matplotlib.org/stable/gallery/mplot3d/scatter3d.html) to tweak the code below so as to produce a 3D version of the previous plot.

<codeblock id="05_08">
The only difficulty is to specify the projection as 3D using ax = plt.axes(projection ='3d'), and remember that the function scatter can take an argument z, in addition to x and y. All the rest is the same as before.  

</codeblock>

Does this add anything to the example of exercise 8? Why or why not? (note: the answer here is a matter of personal preference: some people see well in 3D, some people don't.)
</exercise>



## Resources and references

https://pbpython.com/effective-matplotlib.html
