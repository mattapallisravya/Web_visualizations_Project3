import numpy as np
import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('merged_data.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('''SELECT * FROM crime_income''').fetchall()
    conn.close()
    posts = list(np.ravel(posts))
    print (posts)
    return render_template('merged_data_flask_app.html', posts=posts)   

if __name__ == "__main__":
    app.run(debug=True)