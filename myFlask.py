# first pip install flask

from ast import main
#import string
from flask import Flask, request

app = Flask(__name__)

#app.config['ENV'] = 'development'
#app.config['DEBUG'] = True
#app.config['TESTING'] = True


@app.route("/result", methods=["POST", "GET"])
def result():
    output = request.get_json()
    if len(output.keys()) < 2:
        return {"Status": "Bad"}
      # {"num1":3}
    # return{"API": "SORRY"}
    num1 = int(output['num1'])
    num2 = int(output['num2'])
    cal = {}
    cal['add'] = num1+num2
    return (cal)


if __name__ == '_main_':
    app.run(debug=True, port=2000)
app.run()
