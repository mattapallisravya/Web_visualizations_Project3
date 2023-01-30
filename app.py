import numpy as np
import sqlite3
from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/project_data"
    )


def get_db_conn():
    conn = sqlite3.connect('incomeCrime.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
@app.route('/project_data')
@cross_origin()
def project_data():
    conn = get_db_conn()
    posts = conn.execute('SELECT * FROM income_crime').fetchall()
    conn.close()
    # posts = list(np.ravel(posts))
    data = []
    
    for post in posts:
        crime_income_data = {}
        crime_income_data["FIPS"] = post[0]
        crime_income_data["county"] = post[1]
        crime_income_data["state"] = post[2]
        crime_income_data["crime_rate_per_100000"] = post[3]
        crime_income_data["crime_rate_rank"] = post[4]
        crime_income_data["murder"] = post[5]
        crime_income_data["rape"] = post[6]
        crime_income_data["robbery"] = post[7]
        crime_income_data["aggravated_assault"] = post[8]
        crime_income_data["burglary"] = post[9]
        crime_income_data["larceny"] = post[10]
        crime_income_data["motor_theft"] = post[11]
        crime_income_data["arson"] = post[12]
        crime_income_data["population_x"] = post[13]
        crime_income_data["total_violent_crime"] = post[14]
        crime_income_data["household_income_rank"] = post[15]
        crime_income_data["per_capita_income"] = post[17]
        crime_income_data["household_income"] = post[18]
        crime_income_data["family_income"] = post[19]
        crime_income_data["num_of_households"] = post[20]
        crime_income_data["lat"] = post[21]
        crime_income_data["lng"] = post[22]
        crime_income_data["FIPS_ST"] = post[23]
        crime_income_data["FIPS_CTY"] = post[24]


        data.append(crime_income_data)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug = True)