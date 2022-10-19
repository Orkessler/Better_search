# goggle search
# first pip install googletrans==3.1.0a0 and flask


from flask import Flask, request
from serpapi import GoogleSearch
from googletrans import*
translator = Translator()

app = Flask(__name__)

# the function get question in hebrew. translate and search in english and then return the answer in hebrew


def getMyAns(he_q):
    # step 1 - translate the qustion from hebrew to english
    en_q = translator.translate(he_q, src='he')

    # step 2 - search the qustion in english
    params = {
        "q": en_q.text,
        "hl": "en",
        "gl": "us",
        "api_key": "0d2908e532081c68a310187405f72e671f35380b20b9538834906c49d1c8aedb"
    }
    search = GoogleSearch(params)

    # step 3 - get the snippet answer in english
    results = search.get_dict()
    answer_box = results["answer_box"]
    en_a = answer_box["snippet"]

    # step 4 - print the answer in hebrew
    he_a = translator.translate(en_a, src='en', dest='he')
    return(he_a.text)

# the api function


@app.route("/result", methods=["POST", "GET"])
def result():
    output = request.get_json()
    the_q = str(output['the_q'])
    cal = {}
    try:
        cal['the ans'] = getMyAns(the_q)
    except:
        cal['the ans'] = "לא מצאנו תשובה נוספת לשאלתך מעבר למה שקיים בחיפוש הרגיל בגוגל"
    return (cal)


if __name__ == '_main_':
    app.run(debug=True, port=2000)
app.run()
