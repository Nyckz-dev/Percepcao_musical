import random

NOTES = ["C", "Csharp", "D", "Dsharp", "E", "F", "Fsharp", "G", "Gsharp", "A", "Asharp", "B"]

def note_generation():
  return random.choice(NOTES)
 
def answer_verification(correct_note, user_answer):
  return correct_note.upper() == user_answer.upper()

 