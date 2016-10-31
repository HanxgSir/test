# -*- coding: utf-8 -*-
from flask import Flask, render_template, jsonify, json

app = Flask(__name__)


@app.route('/')
def create_app():
    songs = {
        "type": [
            u"欧美",
            u"大陆",
            u"日韩",
            u"港台"
        ]
    }
    return json.dumps(songs)


if __name__ == '__main__':
    app.run()
