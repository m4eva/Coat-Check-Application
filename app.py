from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('base_player.html')

@app.route('/home')
def home():
  return render_template('home_player.html')

@app.route('/number/<int:num>')
def number(num):
  return render_template('number_player.html', num=num)


if __name__ == "__main__":
  app.run(debug=True)