from flask import Flask, request, jsonify, render_template
import os
import dialogflow
import requests
import json

#import pusher
app=Flask(__name__)
@app.route('/')


@app.route('/newone', methods=['POST'])
def newone():
    req=request.get_json(force=True)
    print(req)

if __name__ == "__main__":
    app.run(debug=True)


