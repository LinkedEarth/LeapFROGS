---
title: 'Module 1: Introduction to Python'
description:
  'In this module, you will learn how to write basic Python code. Make sure that you go through the material provided in the links before attempting the exercises. You have two solutions to attempt the exercise (1) Write directly into the console and click `run code`. You will be told whether your get the correct answer. If stuck, you can ask for a hint or show the solution. Note that the first time you do this, a cloud server will be set up and it may take some time. Also do not navigate away from the code block (e.g., by opening another exercise) as this will stop the execution. (2) Attempt this on your local machine and use the Show solution tab to verify that you did the exercise correctly. You can also use the hints to help you if you choose to run locally.'
prev: null
next: /module2
type: chapter
id: 1
---
<exercise id="1" title="Why Python?">

You might be wondering why you should be learning Python.

Python is widely used in the scientific community and it is a great tool to help you further advance your geosciences research. [Here](https://foundations.projectpythia.org/foundations/why-python.html) are a few important reasons to start using Python.

Convinced? Now, it's time to install Python on your local machine. You can follow [this guide](https://www.datacamp.com/blog/how-to-install-python). We recommend going through Anaconda for Mac, Linux and Windows machines as this will make the setup easier.

One of the strengths (and drawbacks) of Python is that each library is created and maintained by different developers. This contrasts with products like Matlab where toolboxes are shipped with the main product and maintained by the same core programmers. This approach ensures that all the toolboxes are compatible with the version of Matlab they are shipped with and with each other. However, this also means that changes may be slow to roll in and specialized toolboxes may be harder to come by. On the other hand, Python is much more nimble, continuously expanding, and you will most likely able to find libraries to suit your needs. However, these libraries may not play well with each other, with a version of one library being incompatible with another or with changes to functions that may affect the reproducibility of the results. We will talk about the second part in the Geoscience Paper of the Future Module.

To address the first parts, you will want to create environments in `conda` that will keep versions of libraries that play nice together within the same coding environment. Look at [this guide](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#activating-an-environment) for managing environments.

</exercise>


<exercise id="2" title = "Getting Started with Python">

Now that you know why you should be learning Python, let's get started! One of the first things to do when learning a new computer language is to print "Hello World" to make sure that everything has been installed correctly.

In Python, all you have to do is write `print("Hello World!")`. So let's try this with another sentence.

Be patient - it might take a few minutes the first time you run the code. But it usually speeds up. **Do not navigate away from this cell as you wait for the code to run as it will stop the process**.

**Question:** Print "I love doing geoscience research with Python" on the console.

<codeblock id="01_01">

Remember the print command!

</codeblock>

</exercise>

<exercise id="3" title="Numbers">

Let's start about learning numbers and math with Python. Although [numpy](https://numpy.org) is the most widely used library to deal with math for science purposes, it is good to start with the basics of what Python offers out of the box.

Numbers in Python works pretty much like everywhere else and the basic math that you have learned will apply to Python. Follow the links to look at the basic operations:

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

Let's now turn our attention to handling logical propositions, i.e. things that are either True or False and how we can use them to write code. Read through the following modules before attempting the exercises:

* [Booleans](https://docs.trinket.io/getting-started-with-python#/logic/booleans)
* [Boolean expressions](https://docs.trinket.io/getting-started-with-python#/logic/boolean-expressions)
* [Combining Boolean expression](https://docs.trinket.io/getting-started-with-python#/logic/combining-boolean-expressions)

Don't forget theses! They become very useful when combined with conditionals and we will revisit them in a later exercise!

</exercise>

<exercise id="5" title="Variables">

As you may have noticed with the previous examples, in some instance, the numbers are assigned to a variable (e.g., temperature). Variables in computer science always contain a name and a value. There are two ways to assign variables:

* Type the name of the variable, then `=`, then the value as we have seen before.
* Ask a user for an input. You can do so by using the [`input` function](https://www.geeksforgeeks.org/taking-input-in-python/). This functionality can be useful when you need to share code with other researchers with minimum coding experience as it will slowly guide them through assigning values. Remember that a value can be many things - including text!-, which can make it valuable to prompt someone for a file path. In practice, however, you will find that you will most often assign variable using the `=` sign between name and value.

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
* You can check whether a word is in a sentence. `"are" in "Rocks are a geologist's dream"` will return the boolean `True`. You can also use the `.upper()` and `.lower()` functions to make the match more flexible. In fact, there is an entire way of looking for matched in strings called [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) or regex. Regex is not unique to Python. In fact, you could almost consider it its own separate language inside Python to create more flexible queries.

**Question:** Consider the following sentence: 'The law of superposition, a major principle of stratigraphy, states that within a sequence of layers of sedimentary rock, the oldest layer is at the base and that the layers are progressively younger with ascending order in the sequence.

Write a code that will retrieve the word 'superposition'.

<codeblock id="01_05">

Remember that Python uses zero-based indexing and that the end must be inclusive.  

</codeblock>

There are much more efficient methods to retrieve a portion of a string (e.g., a word in a sentence), such as using regular expressions (regex). If you are interested in learning more about regex, look at [this tutorial](https://docs.python.org/3/howto/regex.html). In geosciences applications, regex can be useful to parse free text added as metadata to a dataset or a method. It can also be useful to query databases. Regex is not specific to Python. It is, in fact, its own language that can be embedded into Python code to work with text data.

</exercise>

<exercise id="7" title="Storing collection of data: lists, tuples, sets, and dictionaries">

Now that we have looked at variables and their types, let's talk about how we can store collections of variables. In Python, there are four ways to do so: lists, tuples, sets and dictionaries. Let's go through all of them and understand how they work.

**[Lists](https://www.w3schools.com/python/python_lists.asp)**: The items in a list are ordered (the items have a defined order that will not change.), changeable (You can change, add and remove items in a list after it has been created), and allow duplicate values. Lists can be of any types of data and contain different types of data (e.g., strings and numbers). You can also use the same slicing technique as for text to retrieve an item in the list.

Lists are created using square brackets:

`numbers = [1,2,3]`

`fruit = ["banana","apple","cantaloupe","strawberries"]`

**Question:** Create a list of the minerals comprising the Mohs scale of mineral hardness from softest to hardest.

<codeblock id="01_06">
Remember that lists are ordered. Also, if you don't remember you Mohs scale, have a look [here](https://simple.wikipedia.org/wiki/Mohs_scale_of_mineral_hardness).
</codeblock>

As mentioned previously, list can be sliced.

**Question**: Pull the 5th item from the list below.

<codeblock id="01_07">
Remember that Python uses zero-based indexing.
</codeblock>

Lists can also manipulated to [add](https://docs.trinket.io/getting-started-with-python#/lists/adding-to-a-list) or [remove](https://docs.trinket.io/getting-started-with-python#/lists/removing-from-a-list) from them.

**Question**: Combine the two lists below, appending l1 to l2. Then pop off the sixth entry in the list.

<codeblock id="01_08">
You need to find combine the two lists using with the append method or `+` then pop the sixth entry out. Remember that Python uses zero indexing.
</codeblock>

Now that we have talked about lists, let's talk about tuples:

**[Tuples](https://www.w3schools.com/python/python_tuples.asp)** are ordered, unchangeable (once a tuple has been declared you cannot add, remove or change items) and allow duplicates. So why use them instead of lists? If you don't want that collection to be changed in the course of your study. Consider it a safety net.

So what can you with them? Like lists, you can retrieve an item using slicing or you can ask for the length of the tuple.

Tuples are declared using round brackets:

`numbers = (1,2,3)`

`fruit = ("banana","apple","cantaloupe","strawberries")`

**[Sets](https://www.w3schools.com/python/python_sets.asp)** are unordered, somewhat changeable (once a set is created you can't change an item but you can remove and add items), and duplicated are not allowed. Because sets cannot have multiple occurrences of the same element, it makes sets highly useful to efficiently remove duplicate values from a list or tuple (i.e., just transform your list into a set), and to perform common math operations like unions and intersections.

Sets are created using curly brackets

`numbers = {1,2,3}`

`fruit = {"banana","apple","cantaloupe","strawberries"}`

**[Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)** are used to store data values in key:value pairs. Since Python 3.7, dictionaries are ordered and changeable (you can [add(https://docs.trinket.io/getting-started-with-python#/dictionaries/adding-to-a-dictionary)] and [remove](https://docs.trinket.io/getting-started-with-python#/dictionaries/removing-from-a-dictionary) items from a dictionary) but dictionaries cannot contain two items with the same key (although multiple keys can have the same value). As such, they are said to not allow for duplicates.

Dictionaries are written with curly brackets, with the key and value for each pair separated by a `:`:

`my_proxy= {"proxyArchive": "Marine Sediment",
  "variable": "Mg/Ca",
  "values": [2.5,3.6,2.3,4.5],
  "unit": "mmol/mol"}`

You can look up items by their keys.

**Exercise**: What is the type for the value stored in the "values" key for the "my_proxy" dictionary defined above?

<codeblock id="01_09">
Remember that you can use `type` to figure out what things are.  
</codeblock>

**Trivia time!**

Before you go, let's do a short quiz to know when to use lists, tuples, sets and dictionaries.

Which of the following is unchangeable? Choose the best answer.

<choice id="01-01">
<opt text="List">
Items in a list can be changed, added or removed
</opt>

<opt text="Tuple" correct="True">
Good job!
</opt>

<opt text="Set">
Items in a set cannot be changed but they can be added or removed. So this is not the best answer.
</opt>

<opt text="Dictionary">
You can change the items in a dictionary.
</opt>
</exercise>

<exercise id="8" title="Conditionals">

So far we have talked about data types, variables and how to store multiple items. So let's start using these to take actions. The first action that one takes in programming (and in life) is to act conditionally; i.e., if the theater near me doesn't show the movie I like, then go to another theater. *[If statements](https://docs.trinket.io/getting-started-with-python#/conditionals/if-statements)* act similarly in computing.

An *if statement* starts with two parts, first ascertain if something is True or not, then take an action. If you need to take another action if the first assertion is not what you want, then you need to provide another action.

Look at the code below. Without running it, what do you think it will return? (look at the hint to see if you get it right.)

<codeblock id="01_10">
Remember your logic lessons! Here we are trying to ascertain whether the field is Geoscience, which it is. Then that first statement is in fact True, and the action underneath was taken.  
</codeblock>

You can also make multiple assertions using the [elif](https://docs.trinket.io/getting-started-with-python#/conditionals/if-statements#elif) command.

**Question** Write a statement to check whether Paul is a geoscientist, physicist or neither.

<codeblock id="01_11">
Remember how to access values in a dictionary given the key!
</codeblock>

If needed, you can also [nest *if statements*](https://docs.trinket.io/getting-started-with-python#/conditionals/nested-if-statements).

</exercise>

<exercise id="9" title="Loops">

In programming, a loop allows you to repeat the execution of a block of code until a certain condition is met. We will be considering two types: the *while loop* and the *for loop*.

- **[while loops](https://docs.trinket.io/getting-started-with-python#/loops/while-loops)** tell the computer to do something while a condition is True. If the condition is False, nothing will happen. Be careful with while loops! It is very easy to forget to increment a variable and get into an infinite loop, which is hard to get out of!

**Question:** Let's play a game! Initialize a variable x with a value of 100. While x is more than 10, keep halving x.

<codeblock id="01_12">
Make sure to return the answer of each iteration into the same variable as in the while loop.
</codeblock>

- **[for loops](https://docs.trinket.io/getting-started-with-python#/loops/for-loops)** instruct the computer to repeat the same code for set of specified values.

**Question**:
1. Create a list with the following archives: `Marine Sediment`, `Coral`, `Ice`, `Wood`
2. Loop over this list and count the number of characters in each string
3. Store the number in a new list called `nbr_str`

<codeblock id="01_13">
To do this, you must first create an empty list to store your values. Then remember how to add to a list (append). Finally, don't forget about the len() function to get the length of a string.
</codeblock>

That was a whirlwind around basic Python functionalities! In addition to the resources presented in all the modules, we have found that the [Quickstart Guide](https://foundations.projectpythia.org/foundations/quickstart.html) from Project Pythia can be particularly useful!

</exercise>


<exercise id="10" title="Functions">

Great! We have talked about basic functionalities and hopefully, you are starting to see how they can be used together to write code. Now let's talk about functions.

[Functions](https://www.w3schools.com/python/python_functions.asp) are blocks of code that only run when it is called. One advantage of functions is that you can pass parameters to them, modifying their behavior when they are called.

**Question**:

The [Caesar Cypher](https://en.wikipedia.org/wiki/Caesar_cipher) is one of the simplest and most widely known encryption techniques. It is a type of substitution cypher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence. The method requires two inputs: the string to be cyphered and the shift (which can be positive, shift right into the alphabet, or negative, shift left into the alphabet.) For instance, with a shift of -3, D would be replaced by A, A by X and so on.

Write a function to encode the caesar cypher. Your function should support both uppercase and lowercase input.
Arguments:
- message: string. The message to be encrypted. It only contains the English alphabet, i.e., a-z and A-Z characters in addition to spaces. This argument is not optional.
- shift: integer. Shift direction and steps. This argument is optional, with a default value of 5.

Run your cypher for two use cases: "I love geoscience" and "Geology ROCKS" with the default value.

<codeblock id="01_14">
A few things: (1) `ans+=2` is the same as `ans=ans+2` assuming that ans is a integer, (2) remember how to set the optional values for arguments (you just need to specify the value in the function call), (3) you can check for multiple conditions using `elif`.
</codeblock>

Writing functions is useful when you need to execute the same block of code many times and you need to change the value of the arguments. When writing functions, you always need to keep in mind who you are writing them for. As you will discover when you start coding for your own research, you will be relying on functions that others have written. Many years from now, you may also want to go back to a function that you have written while a graduate student. So there are a few rules to keep in mind that will help everyone reuse your work:
1. Documentation. At the very least, put comments in your function (as in the exercise above) to explain to someone else (including you future self) why the line of code is important. Even better, think about adding [docstrings](https://www.geeksforgeeks.org/python-docstrings/) that will document what the function is for, what arguments are passed and what they mean, and what the function should return.
2. Error handling. In the previous example, we told you to use English characters. What happens if you don't? Well, you will get an error message, but not a very useful one to help you fix the problem (in this case in the input). Python has very rich [error handling](https://docs.python.org/3/tutorial/errors.html) that gives the users rich explanations as to why the code failed. In this case, another `elif` could have been used to return an error if a non-English character was discovered.
3. Give your function a meaningful name. The example above clearly states that one should expect a Caesar cypher, even without reading documentation for the function. Try to do so as much as possible, it will help you!

</exercise>

<exercise id ='11' title="Classes/Objects">

Python is an object-oriented programming (OOP) language. OOP is not a computer language but rather a paradigm that is implemented in many languages. In [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming), the programming revolves around the creation of objects, which contain data (and associated metadata) in the form of attributes and code in the form of methods. Read [this lesson](https://www.w3schools.com/python/python_classes.asp) to learn how to create objects and listen to [this tutorial](https://youtu.be/LJaQBFMK2-Q?t=78) for an introduction on objects.

Read [this article](https://www.coursera.org/articles/object-oriented-programming-languages#) on why you should learn OOP.  

**Question:**

1. Create a class called `TimeSeries` and use the `__init__()` function to assign the following attributes: `time` (a list of floats), `values` (a list of floats), `time_unit` (string) and `values_unit` (string)
2. Create a method, called `find_min_time` that returns the minimum time value.
3. Create a timeseries object called `ts` with the following:
  - Time values  = [1981,1982,1990,2005]
  - Values  = [50,78,90,45]
  - Units of time = 'Years'
  - Units for value = 'Number of floods'

<codeblock id="01_15">

Remember that functions within classes, need to `self` refer to use this object!

</codeblock>  

</exercise>

<exercise id ='12' title="Additional resources">

Here are additional resources to learn Python. Bookmark them! They may come handy.
- Tomas Beuzen [Python Programming for Data Science](https://www.tomasbeuzen.com/python-programming-for-data-science/README.html).
- Software carpentry [Programming with Python](https://swcarpentry.github.io/python-novice-inflammation/)

Also, do not hesitate to ask Large Language Models such as ChatGPT and Claude. They may not always give you the correct answers, especially for niche packages (read [our blog](https://medium.com/cyberpaleo/pyleoclim-and-chatgpt-f8f1de167044)), but they can point you in the right general direction.

</exercise>
