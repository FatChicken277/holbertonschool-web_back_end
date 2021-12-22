#!/usr/bin/env python3
"""This module contains a basic flask app"""

from flask import Flask, render_template, request
from flask_babel import Babel


class Config(object):
    """babel configuration"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)

app.config.from_object('4-app.Config')


@babel.localeselector
def get_locale():
    """determine the best language match"""
    if request.args.get('locale'):
        locale = request.args.get('locale')

        if locale in app.config['LANGUAGES']:
            return locale

    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', strict_slashes=False)
def index():
    """index route"""
    return render_template('4-index.html')


if __name__ == '__main__':
    # python -m api.v1.app
    app.run(host='0.0.0.0', port=5000)