#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Mar  5 20:17:17 2022

@author: julieneg
"""

def load_data():

    import pandas as pd

    url = 'https://raw.githubusercontent.com/LinkedEarth/Pyleoclim_util/master/example_data/wtc_test_data_nino.csv'
    df = pd.read_csv(url,skiprows=0)
    df.head()
    
    t = df['t'] # time in fractional years
    nino3 = df['nino'] # NINO3 data
    air  =  df['air'] # All India Rainfall
    
    return t, nino3, air