from flask import json


def strtojson(jsonstr):
    jsondict = json.loads(jsonstr, encoding="utf-8")
    return jsondict
