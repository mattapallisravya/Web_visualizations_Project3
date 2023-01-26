import numpy as np
import sqlite3
from flask import Flask, render_template, jsonify


app = Flask(__name__)


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/crimedata"

    )

def get_db_connection():
    conn = sqlite3.connect('income_crime.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM income_crime_latlng').fetchall()
    conn.close()
    posts = list(np.ravel(posts))
    print(posts)
    return render_template('index.html', posts=posts)


@app.route('/crime_data')
def crime_data():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM income_crime_latlng').fetchall()
    conn.close()
    # posts = list(np.ravel(posts))
    data = []
    
    for post in posts:
        crime_income_data = {}
        crime_income_data["state"] = post[0]
        data.append(crime_income_data)


    # print(posts)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug = True)