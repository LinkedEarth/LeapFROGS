---
title: 'Module 3: Timeseries analysis'
description:
  "Let's now introduce key concepts about timeseries analysis, and check that you have understood them, before moving on to practicums."
prev: /module2
next: /module4
type: chapter
id: 3
---

<exercise id="1" title="Timeseries Anatomy">

This training introduces you to key concepts in timeseries analysis.

The training materials can be accessed [here](https://figshare.com/ndownloader/files/46749886). Please read the presentation, as well as other helpful materials (e.g. [Part 2 of this book](https://figshare.com/articles/book/Data_Analysis_in_the_Earth_Environmental_Sciences/1014336)), then answer the following questions:

**Questions**

Do all timeseries need to be evenly-spaced?

<choice id="03-01">
<opt text="No", correct="true">
Many timeseries, particularly in the geosciences, are unevenly spaced. However, even spacing is assumed by many methods, so care must be taken.
</opt>
<opt text="Yes">
It is true that many methods _assume_ even spacing, but that is by no means a requirement. </opt>
</choice>

If your analysis requires even spacing, what should you do (multiple answers possible):

<choice id="03-02">
<opt text="Interpolation", correct="true">
Non-replicability of results doesn't mean that something is wrong. In fact, science advancement relies on getting more information with different data/methods and obtaining inconsistent answers.
</opt>
<opt text="Binning", correct="true">
Binning in coarser, even intervals is another possible option
</opt>
<opt text="Gaussian kernel", correct="true">
Binning in coarser, even intervals with some Gaussian smoothing is another possible options
</opt>
<opt text="Change analysis methods">
That is always available to you, but it is an extreme step. For one thing, there may not be an easily accessible, alternative method for what you are trying to do. And getting to even spacing might be less painful than you think (see options above)
</opt>
</choice>

For practical exercises in Python go [here](http://linked.earth/PyRATES_practicums_py/notebooks/Intro_Mauna_Loa.html). For exercises in R, go ...

</exercise>

<exercise id="2" title="Data Processing">

The training materials can be accessed [here](). Please read the presentation, as well as other helpful materials (e.g. [Part 2 of this book](https://figshare.com/articles/book/Data_Analysis_in_the_Earth_Environmental_Sciences/1014336)), then answer the following questions:

Can linear regression help remove non-linear trends?

<choice id="03-03">
<opt text="Yes", correct="true">
You're correct!
</opt>
<opt text="No">
The "linear" part of linear regression is that timeseries components are considered additive (up to a scaling). So if you know what the trend should be (e.g. exponential, quadratic), it is easy to specify it to a linear model so it can be removed.
</opt>
</choice>

</exercise>

<exercise id="3" title="Measures of Association">

The training materials can be accessed [here](https://figshare.com/ndownloader/files/46731670). Please read the presentation, as well as other helpful materials (e.g. [Part 2 of this book](https://figshare.com/articles/book/Data_Analysis_in_the_Earth_Environmental_Sciences/1014336)), then answer the following questions:

**Questions**

</exercise>


<exercise id="4" title="Spectral Analysis">

</exercise>

<exercise id="5" title="Wavelet Analysis">

</exercise>

