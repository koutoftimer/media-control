import logging

from flask import Flask, render_template, jsonify, request
from pynput.keyboard import Controller, Key

logging.basicConfig(level=logging.DEBUG)

app = Flask(__file__)
keyboard = Controller()


@app.route('/')
def index():
    return render_template('index.html')


MAPPING = {
    'play/pause': Key.media_play_pause,
    'mute': Key.media_volume_mute,
    'volume-up': Key.media_volume_up,
    'volume-down': Key.media_volume_down,
}


@app.route('/control', methods=['POST'])
def play():
    key = request.json['key']
    keyboard.press(MAPPING[key])
    keyboard.release(MAPPING[key])
    return jsonify({"result": "playing"})
