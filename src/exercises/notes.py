import random

NOTES = ["C", "D", "E", "F", "G", "A", "B"]

def note_generation():
  return random.choice(NOTES)
 
def answer_verification(correct_note, user_answer):
  return correct_note.upper() == user_answer.upper()

 