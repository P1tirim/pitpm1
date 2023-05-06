from flask import Flask, request, render_template
from jinja2 import Template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', name='Pitirim')


@app.route('/v2')
def index_v2():
    name, age, profession = "Pitirim", 18, 'Programmer'
    template_context = dict(name=name, age=age, profession=profession)
    return render_template('indexv2.html', **template_context)


if __name__ == "__main__":
    t = Template("Name: {{ name }}")
    t.render(name='Jerry')
    app.run()
