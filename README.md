# the-high-value-male-calculator

This is a webapp that's meant to mimic the functionality of ["the female delusion calculator"](https://igotstandardsbro.com/) but with a different goal.

This project meant to inspire hope into the modern man by highlighting how easy it is to become part of the "top 1%" (at least mathimatically).

## The mathematics

The calculation works the as follows:

1. Each parameter (age, bodyfat, and income) has their own bellcurve.
  
3. Using the users input, i then calculate an intergral of that bellcurve.

4. The final result is simply all of the results from the intergrals multiplied with eachother

This means that it's not fully accurate because it doesn't take into considerations that (for example) peoples bodyfat levels tend to increase as they age.

## The optimizations

Calculating intergrals is expensive. So it's very important to momoize them.

## Statistics

The statistics (standard deviation and the averages) are taken from chatGPT, so it's not accurate at all lol.
