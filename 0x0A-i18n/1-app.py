#!/usr/bin/env python3
"""This module contains a basic flask app"""

from flask import Flask, render_template
from flask_babel import Babel


class Config(object):
    """babel configuration"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)

app.config.from_object('1-app.Config')


@app.route('/', strict_slashes=False)
def index():
    """index route"""
    return render_template('1-index.html')


if __name__ == '__main__':
    # python -m api.v1.app
    app.run(host='0.0.0.0', port=5000)
