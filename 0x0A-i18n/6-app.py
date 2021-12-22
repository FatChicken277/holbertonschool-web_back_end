#!/usr/bin/env python3
"""This module contains a basic flask app"""

from flask import Flask, render_template, request, g
from flask_babel import Babel

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config(object):
    """babel configuration"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)

app.config.from_object('6-app.Config')


def get_user():
    """returns a user dictionary or None"""
    if request.args.get('login_as'):
        user = int(request.args.get('login_as'))

        if user in users:
            return users.get(user)

    return None


@babel.localeselector
def get_locale():
    """determine the best language match"""
    if request.args.get('locale'):
        locale = request.args.get('locale')
        if locale in app.config['LANGUAGES']:
            return locale
    elif g.user and g.user.get('locale'):
        if g.user.get('locale') in app.config['LANGUAGES']:
            return g.user.get('locale')

    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.before_request
def before_request():
    """find a user"""
    g.user = get_user()


@app.route('/', strict_slashes=False)
def index():
    """index route"""
    return render_template('6-index.html')


if __name__ == '__main__':
    # python -m api.v1.app
    app.run(host='0.0.0.0', port=5000)
