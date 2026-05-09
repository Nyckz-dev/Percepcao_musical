from flask import Blueprint, render_template, request
from exercises.notes import note_generation, answer_verification

routes = Blueprint("routes", __name__)

@routes.route("/")
def index():
    return render_template("index.html")

@routes.route("/Menu")
def exerciseMenu():
    return render_template("exerciseMenu.html")

@routes.route("/Nota_Única", methods=["GET", "POST"])
def exercises():
    message = ""
    note = note_generation()

    if request.method == "POST":
        user_answer = request.form.get("answer")
        correct_note = request.form.get("note")
        if answer_verification(correct_note, user_answer):
            message = "🎉 Acertou!"
        else:
            message = "❌ Tente novamente!"
    
    return render_template("exercise.html", note=note, message=message)
 
