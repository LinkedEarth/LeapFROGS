class TimeSeries:
    def __init__(self, time, values, time_unit, values_unit):
        self.time = time
        self.values = values
        self.time_unit = time_unit
        self.values_unit = values_unit

    def find_min_time(self):
        return min(self.time)
    

ts = TimeSeries(time  = [1981,1982,1990,2005], values = [50,78,90,45], time_unit = 'Years', values_unit='Number of floods')
min_time = ts.find_min_time()
