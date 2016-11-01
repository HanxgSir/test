# -*- coding: utf-8 -*-
from flask import Flask, render_template, jsonify, json

app = Flask(__name__)


@app.route('/')
def create_app():
    songs = {
        "area": [
            {"name": u"欧美", "id": 1},
            {"name": u"大陆", "id": 2},
            {"name": u"日韩", "id": 3},
            {"name": u"港台", "id": 4}
        ],
        "type": [
            {"name": u"抒情", "id": 1},
            {"name": u"舞曲", "id": 2},
            {"name": u"怀旧", "id": 3},
            {"name": u"摇滚", "id": 4}
        ]
    }
    return json.dumps(songs)


@app.route('/area/<int:area_id>')
def get_area_songs(area_id):
    if area_id == 1:
        return jsonify(status=0, songs={
            "text": "Any Man Of Mine - Shania Twain",
            "src": "../songs/Any Man Of Mine - Shania Twain.mp3"
        })
    elif area_id == 2:
        return jsonify(status=0, the_area="http://music.baidu.com/tag/%E5%9B%BD%E8%AF%AD")
    elif area_id == 3:
        return jsonify(status=0, the_area="http://music.baidu.com/tag/%E9%9F%A9%E8%AF%AD")
    else:
        return jsonify(status=0, the_area="http://music.baidu.com/tag/%E7%B2%A4%E8%AF%AD")


if __name__ == '__main__':
    app.run()
