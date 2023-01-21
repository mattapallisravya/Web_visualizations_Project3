# Web_visualizations_Project3
## Team 3
### Chris Schultz, Kevin Ybarram, Satya Sakuntala NagaSravya Mattapalli, and Wei Kent Chen

<hr>

### Quick Links
- [Project Overview](#overview)
- [Extract Data](#extract)
- [Transform](#transform)
- [Load](#load)


<hr>

<br>

# Project Overview
- Our project compares United States counties crime rate per capita income. To gather the data information for the progrjct data was gathered from United States counties per capita income (LINK) and United State crime rates by county (LINK) both from Kaggle, as well as GeoJSON data on US counties (LINK)
- Software: Python, Jupyter Notebook, 
- Python Libraries: Pandas
- GEOJSON File

<hr>

<br>

# Extract Data

Our data was extracted from the following sources:
- [Kaggle - United States counties by per capita income)](https://www.kaggle.com/datasets/kabhishm/united-states-counties-by-per-capita-income)
  - csv files stored locally (not in repository) due to GitHub size limits
  - Used Pandas read_csv function to read in <em>[counties per capita income.csv]</em>

- [Kaggle - United States crime rates by county)](https://www.kaggle.com/datasets/mikejohnsonjr/united-states-crime-rates-by-county)
  - csv files stored locally (not in repository) due to GitHub size limits
  - Used Pandas read_csv function to read in <em>[Crime Data w population and crime rate.csv]</em>

- [GeoJSON - US Counties)](https://eric.clst.org/tech/usgeojson/)
  - <em>[counties.geojson]</em>

<hr>

<br>

# Transform Data

After extracting all of our data, the following steps were performed to transform it into the desired cleaned tables. We prepared our data by ensuring our relations were in Third Normal Form (3NF).

## United States counties by per capita income

- We used pandas to load in the csv file Crime Data w population and crime rate to create the initial dataframe. [income_counties_df](./screenshots/income_counties_df.png)

## United States crime rates by county