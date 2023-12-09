from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

answer_dict={
                "1": ["Chess", "France"]
            }



templates = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
    }
]




@app.route("/")
def index():
    return render_template("index.html")
    

#ADD "/get-template" API here!!
@app.route("/get-template")
def get_template():
    return jsonify ({
        "status":"success",
        "template":random.choice(templates)
    })

    


@app.route("/post-answers", methods=["POST"])
def post_answers():
    template_id = request.json.get("template_id")
    values = request.json.get("values")
    answers = answer_dict.get(template_id)
    index, score = 0, 0
    while index < len(values):
        if values[index].lower() == answers[index].lower():
            score += 1
        index += 1
    return jsonify({
        "status": "success",
        "result": f"{score} / {len(values)}"
    })

if __name__ == "__main__":
    app.run(debug=True)