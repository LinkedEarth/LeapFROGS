---
title: 'Module 4: Introduction to Pandas'
description: 'This model will teach you how to user Pandas. Some functionalities in Pyleoclim are supported by Pandas (and we will add more in the coming year). For now, Pandas represent the easiest way to get non-LiPD formatted data into Python for use with Pyleoclim. One of the main reasons we do not use Pandas is because most its advanced capabilities require a datetime format incompatible with paleoclimate data.
'  
prev: /module3
next: /module5
type: chapter
id: 4
---

<exercise id="1" title="Reading data from a csv">

Pandas is a very powerful library for working with tabular data (i.e. anything you might put in a spreadsheet – a common data type in the geosciences). It allows us to use labels for our data so that we can write expressive and robust code to manipulate the data.

Key features of Pandas are the ability to read in tabular data, slice and dice data, and exploratory analysis tools native to the library.

Follow this Project Pythia tutorial on Pandas.

[Introduction to Pandas](https://foundations.projectpythia.org/core/pandas/pandas.html)

[Introduction to Pandas Binder](https://mybinder.org/v2/gh/ProjectPythia/pythia-foundations/main?urlpath=lab/tree/core/pandas/pandas.ipynb)

In the materials above, you have seen how to download a dataset and open it with Pandas. You can also pass the dataset directly into the `read_csv` functionality. Try the code below:

<codeblock id="04_01">
</codeblock>
</exercise>

<exercise id="2" title="Slicing and plotting">

Question:

1. Open the ENSO dataset (you may copy and paste the answer from above)
2. Create a `Pandas.Series` object using the Nino12 Series
3. Slice for the 1982-2010 period
4. Plot the timeseries for the sliced Nino12 series

<codeblock id="04_02">

Remember that they are more than one way to skin a cat with Pandas. Choose the slicing method that is the most convenient (index, label)

</codeblock>


</exercise>
