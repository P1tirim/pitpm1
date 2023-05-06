from flask import Flask, make_response, redirect, abort

app = Flask(__name__)


@app.route('/books/<string:genre>')
def books(genre):
    return "All Books in {} category".format(genre)


@app.route('/books/make_response/<string:genre>')
def books_make(genre):
    res = make_response("All Books in {} category".format(genre))
    res.headers['Content-Type'] = 'text/plain'
    res.headers['Server'] = 'Foobar'
    return res


@app.route('/')
def http_404_handler():
    return make_response("404 Error", 400)


@app.route('/set-cookie')
def set_cookie():
    res = make_response("Cookie setter")
    res.set_cookie("favorite-color", "skyblue", 60 * 60 * 24 * 15)
    res.set_cookie("favorite-font", "sans-serif", 60 * 60 * 24 * 15)
    return res


@app.route('/500')
def http_500_handler():
    return "500 Error", 500


@app.route('/')
def render_markdown():
    return "## Heading", 200, {'Content-Type': 'text/markdown'}


@app.route('/transfer')
def transfer():
    return redirect("https://localhost:5000/login")


@app.before_request
def before_request():
    print("before_request() called")


@app.after_request
def after_request(response):
    print("after_request() called")
    return response


@app.route("/index")
def index():
    print("index() called")
    return 'Testings Request Hooks'


@app.route('/index_abort')
def index_abort():
    abort(404)
    return "This string not return"


@app.errorhandler(404)
def http_404_handler(error):
    return "HTTP 404 Error Encountered", 404


@app.errorhandler(500)
def http_500_handler(error):
    return "HTTP 500 Error Encountered", 500


if __name__ == "__main__":
    app.run(debug=True)
