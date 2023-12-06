from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', message='')

@app.route('/', methods=['POST'])
def process():
    message = request.form['message']
    if request.form['button'] == 'Click me':
        return render_template('index.html', message=message)
    else:
        return render_template('index.html', message='')

if __name__ == '__main__':
    app.run(debug=True,port=5748)
