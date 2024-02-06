---
title: 'Module 3: Introduction to NumPy'
description:
  'This module will teach you about NumPy. NumPy arrays are the most basic data structure for Pyleoclim, underlying all the other packages. Virtually all operations made on the data involve NumPy arrays, so it is important to understand a bit about how they work.'
prev: /module2
next: /module4
type: chapter
id: 3
---

<exercise id="1" title="Introduction to NumPy">

If you are new to programming, your first question might be: "What is an array?". An array is a collection of values (numbers, strings, or such), whose position in the computer's memory is such that it can be computed from its given key. Coming from the Excel world, you could regard a spreadsheet as a 2D array; a single column of that spreadsheet would be a 1D array. Arrays, however, are far more general, and can assume any dimension, which makes them great for storing large quantities of information.

If you have ever programmed, you likely have encountered arrays before.  To learn about NumPy arrays, let's start with the basics from Project Pythia. We recommend that you use the provided Binder link to follow along the article.

[NumPy Basics](https://foundations.projectpythia.org/core/numpy/numpy-basics.html)

[NumPy Basics Binder](https://mybinder.org/v2/gh/ProjectPythia/pythia-foundations/main?urlpath=lab/tree/core/numpy/numpy-basics.ipynb)

Once you have mastered the basics, try the following exercises:

Question:

It is often useful to create pseudo-data to test out a function. For instance, Pyleoclim offers several options for [spectral analysis](https://pyleoclim-util.readthedocs.io/en/master/core/ui.html#pyleoclim.core.ui.Series.spectral) and it could be useful to pass a timeseries with known periodicities to look at the effect of noise or uneven sampling on the different methods. In this case, you may need to create a time and value axis that would mimic a time series.

Let's start by creating a perfect series:
1. Create a time vector that starts at year 1, ends at year 2000 and is annually resolved. Use `numpy.arange` to do so
2. Create a sinusoidal signal corresponding to the time vector with a periodicity of 20 years.

<codeblock id="03_01">
To create a sine wave, look whether numpy has a functionality to do so in [their documentation](https://numpy.org/doc/stable/index.html).

The mathematical formula is: sin(2 pi * freq * time)

</codeblock>

Question:

Let's add noise to our series.
1. Create a time vector that starts at year 1, ends at year 2000 and is annually resolved. Use `numpy.arange` to do so
2. Create a perfect sinusoidal signal corresponding to the time vector with a periodicity of 20 years.
3. Use [`numpy.random.Generator.normal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.Generator.normal.html) to create a white noise that samples from a normal distribution with zero mean and half the variance in the signal.
4. Add the noise vector to your signal

Look at the first line after package import. This allows you to use the same seed for the random number generator, which makes your results reproducible.

<codeblock id="03_02">

Remember that the variance is the square of the standard deviation.

So the scale will be `np.sqrt(np.var(value)/2)`

</codeblock>

</exercise>

<exercise id="2" title="Intermediate NumPy">

Now that you have the basics if NumPy, let's move on to more advanced functionalities. Review the article below from Project Pythia and use the associated Binder for training exercises.

[Intermediate NumPy](https://foundations.projectpythia.org/core/numpy/intermediate-numpy.html)

[Intermediate NumPy Binder](https://mybinder.org/v2/gh/ProjectPythia/pythia-foundations/main?urlpath=lab/tree/core/numpy/intermediate-numpy.ipynb)

Question:

One of the most routine manipulations of paleoclimatology is to take a timeslice of the data. Let's do this using NumPy.

1. Create a time vector that starts at year 1, ends at year 2000 and is annually resolved. Use `numpy.arange` to do so
2. Create a perfect sinusoidal signal corresponding to the time vector with a periodicity of 20 years.
3. Slice the value data for the 200-400 year period, inclusive

<codeblock id="03_03">

To get the indexes of the slice, you can use [this function](https://numpy.org/doc/stable/reference/generated/numpy.where.html).

Remember that slice notation is **exclusive** of the final index.

</codeblock>

If you forget how to do this, don't worry; Pyleoclim has a neat [slicing](https://pyleoclim-util.readthedocs.io/en/master/core/ui.html#pyleoclim.core.ui.Series.slice) functionality that simplifies the problem. But if you wonder how all these functionalities were created, they were built upon existing code in NumPy and other packages that we reused to simplify commands paleoclimatologists are most likely to use.

Question:

Another task we love to perform is wrangling age models. You can think of each age model being stored along one dimension of a NumPy array. Therefore, it is possible to wrangle them the same way you would any other array. Let's build a fake age model, add some noise to create an ensemble and take the mean (in reality, you may only need to perform the last operation but it's good practice to play with the random generator you used in exercise 1).

1. Create a time vector between 0 and 10000 in 100 years increments
2. Use a seed of 30 to initialize the random generator
3. Duplicate the time vector to obtain 1000 copies. The resulting array should have each model stored in the column. The rows should correspond to 'depth'
4. Create a noise vector with standard deviation 200 years
5. Add the noise vector to the original ensemble
6. Take the mean

<codeblock id="03_04">

</codeblock>

</exercise>
