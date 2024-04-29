def test():
    # Here we can either check objects created in the solution code, or the
    # string value of the solution, available as __solution__. A helper for
    # printing formatted messages is available as __msg__. See the testTemplate
    # in the meta.json for details.

    # If an assertion fails, the message will be displayed

    assert ts.time == [1981,1982,1990,2005], "Wrong time vector!"
    assert ts.values == [50,78,90,45], "Wrong values vector!"
    assert ts.time_unit == 'Years', 'Wrong time units!'
    assert ts.values_unit = 'Number of floods', 'Wrong units for the values vector!'
    assert min_time == 1981, "Wrong minimum value!"

    __msg__.good("Good job!")
