from flask import Flask, render_template, jsonify, request, redirect, url_for
from api import ask_ai

app = Flask(__name__)

# Mock user data (replace this with a database in a real application)
# users = {'user1': 'password1', 'user2': 'password2'}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chatbox')
def tutor():
    return render_template('chatbox.html')

@app.route('/ask_ai', methods=['POST'])
def ask_ai_endpoint():
    data = request.json
    question = data['question']
    response = ask_ai(question)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
