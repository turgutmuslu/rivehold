from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock user data (replace this with a database in a real application)
# users = {'user1': 'password1', 'user2': 'password2'}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chatbox')
def tutor():
    return render_template('tutor.html')

if __name__ == '__main__':
    app.run(debug=True)
