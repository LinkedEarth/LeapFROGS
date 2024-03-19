---
title: 'Module 1: Introduction to Python'
description:
  'In this module, you will learn how to write basic Python code. Make sure that you go through the material provided before attempting the exercises. You have two solutions to attempt the exercise (1) Write directly into the console and click `run code`. You will be told whether your get the correct number. If stuck, you can ask for a hint or show the solution. Note that the first time you do this, a cloud server will be set up and it may take some time. Also do not navigate away from the code block (e.g., by opening another exercise) as this will stop the execution. (2) Attempt this on your local machine and use the Show solution tab to verify that you did the exercise correctly.'
prev: null
next: /module2
type: chapter
id: 1
---
<exercise id="1" title="Why Python?">

You might be wondering why you should be learning Python.

Python is widely used in the scientific community and it is a great tool to help you further advance your geosciences research.

We will present you with the most important reasons to start using Python in the following [link](https://foundations.projectpythia.org/foundations/why-python.html).

Convinced? Now, it's time to install Python on your local machine. You can follow [this guide](https://www.datacamp.com/blog/how-to-install-python). We recommend going through Anaconda for Mac, Linux and Windows machines as this will make the setup easier. 


</exercise>


<exercise id="2" title = "Getting Started with Python">

Now that you know why you should be learning Python, let's get started! One of the first thing you usually do when learning a new computer language is to print "Hello World" to make sure that everything has been installed correctly. 

In Python, all you have to do is write `print("Hello World!")`. So let's try this with another sentence. 

Be patient - it might take a few minutes the first time you run the code. But it usually speeds up.

**Question:** Print "I love doing geoscience research with Python" on the console.

<codeblock id="01_01">

Remember the print command!

</codeblock>

</exercise>

<exercise id="3" title="Numbers">

Let's start about learning number and math with Python. Although [numpy](https://numpy.org) is the most widely used library to deal with math for science purposes, it is good to start with the basics of what Python offers out of the box.

Number in Python works pretty much like everywhere else and the basic math that you have learned will apply to Python. Follow the links to look at the basic operation:

* [Numbers in Python](https://docs.trinket.io/getting-started-with-python#/numbers/numbers-in-python)
* [Addition, sutraction, multiplication, division](https://docs.trinket.io/getting-started-with-python#/numbers/addition-subtraction-multiplication-division)
* [Modulus operations](https://docs.trinket.io/getting-started-with-python#/numbers/mods)
* [Exponents](https://docs.trinket.io/getting-started-with-python#/numbers/exponents) - This one can be a little tricky in Python
* [Order of Operations](https://docs.trinket.io/getting-started-with-python#/numbers/order-of-operations)

**Question:** What is 25C in Fahrenheit?

<codeblock id="01_02">

Remember orders of operation!

</codeblock>

**Question:** What is the area of a circle with a radius of 5cm? Assume that the value of pi is 3.14159.

<codeblock id="01_03">

Remember the rules regarding exponents!

</codeblock>

</exercise>

<exercise id="4" title="Logic">

Let's now turn our attention to handling inequalities, i.e. things that are either True or False and how we can use them to write codes. Read through the following modules before attempting the exercises:

* [Booleans](https://docs.trinket.io/getting-started-with-python#/logic/booleans)
* [Boolean expressions](https://docs.trinket.io/getting-started-with-python#/logic/boolean-expressions)
* [Combining Boolean expression](https://docs.trinket.io/getting-started-with-python#/logic/combining-boolean-expressions)

Don't forget theses! They become very useful when combined with conditionals and we will revisit them in a later exercise!

</exercise>

<exercise id="5" title="Variables">

As you may have noticed with the previous examples, in some instance, the numbers are assigned to a variable (e.g., temperature). Variables in computer science always contain a name and a value.There are two ways to do variable assignments:

* Type the name of the variable, then `=`, then the value as we have seen before.
* Ask a user for an input. You can do so by using the [`input` function](https://www.geeksforgeeks.org/taking-input-in-python/). This functionality can be useful when you need to share code with a with other researchers with minimum coding experience as it will slowly guide them through assigning values. Remember that a value can be many things - including text!-, which can make it valuable to promp someone for a file path. In practice, however, you will find that you will most often assign variable using the `=` sign between name and value. 

**Question:** Create the variables `temperature` and `units` and assign them the values of `14` and `degC` respectively. 

<codeblock id="01_04">

Using the `=` sign for variable assignment. Remember how to enter strings in Python!

</codeblock>

This brings an interesting question. We assigned an integer to one variable and a string to another. But as we will see, not every operation can be performed on every type of variables. If you want to know what your variable is, all you have to do is `type(variable)`. Doing this now would be silly but as we start playing with more toolboxes, knowing what you have assigned to your variable or what a function returns will become more and more important! 

</exercise>

<exercise id="6" title="Words and Letters">

Now that we have talked about numbers and booleans, let's have a discussion about text, otherwise known as strings. You have seen a string already ("Hello World"). Let's see how we can add (yes, add) strings and perform other operations. Look at the lessons below (although keep in mind that in Python3, which you will be using, the print command requires parentheses.):

* [Changing Text](https://docs.trinket.io/getting-started-with-python#/changing-text/changing-text)
* [Slicing Text, part 1](https://docs.trinket.io/getting-started-with-python#/changing-text/slicing-text-part-1)
* [Slicing Text, part 2](https://docs.trinket.io/getting-started-with-python#/changing-text/slicing-text-part-1)

There are many other operations that you can do on strings:
* Concatenation: `"I love " + "geoscience"` will give you `"I love geoscience"`
* You can check whether a word is in a sentence. `"are" in "Rocks are a geologist's dream"` will return the boolean `True`. You can also use the `.upper()` and `.lower()` functions to make the match more flexible. In fact, there is an entire way of looking for matched in strings called [regular expression](https://en.wikipedia.org/wiki/Regular_expression) or regex. Regex is not unique to Python. In fact, you could almost consider it its own separate language inside Python to create more flexible queries. 

**Question:** Consider the following sentence: 'The law of superposition, a major principle of stratigraphy, states that within a sequence of layers of sedimentary rock, the oldest layer is at the base and that the layers are progressively younger with ascending order in the sequence.'

Write a code that will retrieve the word 'superposition'.

<codeblock id="01_05">

Remember that Python uses zero-based indexing and that the end must be inclusive.  

</codeblock>

</exercise>