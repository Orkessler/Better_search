# goggle search
# first pip install googletrans==3.1.0a0 and flask

from flask_cors import CORS
from flask import Flask, request
from serpapi import GoogleSearch
from googletrans import *
translator = Translator()

app = Flask(__name__)
CORS(app)
cors=CORS(app,resources={r"/*":{"origins":"*"}})

# the function gets questions in Hebrew. translate and search in English and then return the answer in Hebrew


def getMyAns(he_q):
    # step 1 - translate the question from Hebrew to English

    en_q = translator.translate(he_q, src='he')

    # step 2 - search the qustion in english
    params = {
        "q": en_q.text,
        "hl": "en",
        "gl": "us",
        "api_key": "0d2908e532081c68a310187405f72e671f35380b20b9538834906c49d1c8aedb"
    }
    search = GoogleSearch(params)
    print(search)

    # step 3 - get the snippet answer in english
    results = search.get_dict()
    answer_box = results["answer_box"]
    en_a = answer_box["snippet"]
    try:
      for i in answer_box["list"]:
        en_a=en_a+" "+i+"\n"
    except:
        pass

    # step 4 - print the answer in hebrew
    he_a = translator.translate(en_a, src='en', dest='he')
    return(he_a.text)

# the api function


@app.route("/result", methods=["POST", "GET"])
def result():
    output = request.get_json()
    the_q = str(output['the_q'])
    print(the_q)
    cal = {}
    try:
        cal['the_ans'] = getMyAns(the_q)
    except:
        cal['the_ans'] = "לא מצאנו תשובה נוספת לשאלתך מעבר למה שקיים בחיפוש הרגיל בגוגל. אבל הי! אל דאגה! הוספנו למטה את החיפוש שלך!"
    return (cal)


if 'app' == '__main__':
    app.run()

app.run(host='0.0.0.0', port=8080)