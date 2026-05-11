from flask import Blueprint, render_template, request
from exercises.notes import note_generation, answer_verification


routes = Blueprint("routes", __name__)

@routes.route("/")
def index():
    return render_template("index.html")

@routes.route("/Menu.pn")
def IntervalPerception():
    return render_template("IntervalPerception.html")

@routes.route("/Nota_Única", methods=["GET"])
def unique_note():
    note = note_generation()  # sorteia a nota
    return render_template("Allexercises/unique_note.html", note=note)

@routes.route("/Menu.rit")
def RhythmPerception():
    return render_template("RhythmPerception.html")

@routes.route("/Menu.tun")
def TuningPerception():
    return render_template("TuningPerception.html")
