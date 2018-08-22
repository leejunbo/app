from flask import Flask,redirect,url_for,jsonify
from view.JobView import *
from view import domain, cluster

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(dict(
    SECRET_KEY='development key',
    DEBUG=True,
))


@app.route("/")
def index():
    return redirect(url_for("job_index", item="domain"))


@app.route("/<item>", methods=['GET'])
def job_index(item):
    if item == "domain":
        job = JobView.factory(item)
        return job.index()
    elif item == "cluster":
        job = JobView.factory(item)
        return job.index()
    else:
        return redirect(index)


@app.route('/domain/config_newfile', methods=['POST', 'GET'])
def config_newfile():
    return domain.config_newfile()


@app.route('/domain/config_file_info', methods=['POST', 'GET'])
def config_file_info():
    return domain.config_file_info()


@app.route('/domain/config_f')
def config_f():
    return domain.config_f()


@app.route('/domain/d_sql_data')
def d_sql_data():
    return domain.d_sql_data()


@app.route("/domain/register")
@domain.required
def register():
    return domain.register()


@app.route("/domain/login", methods=['POST', 'GET'])
def login():
    return domain.login()


@app.route("/domain/entry")
@domain.required
def entry():
    return domain.show_entries()


@app.route("/domain/logout")
@domain.required
def logout():
    return domain.logout()


@app.route('/domain/save', methods=['POST'])
@domain.required
def save():
    return domain.save()


@app.route('/domain/add', methods=['POST'])
def add():
    return domain.add()


@app.route('/domain/delete', methods=['POST'])
def delete():
    return domain.delete()


@app.route('/cluster/c_sql_data')
def c_sql_data():
    return cluster.c_sql_data()


@app.route('/cluster/c_add', methods=['POST'])
def c_add():
    return cluster.c_add()


@app.route('/cluster/c_edit', methods=['POST'])
def c_edit():
    return cluster.c_edit()


@app.route('/cluster/c_delete', methods=['POST'])
def c_delete():
    return cluster.c_delete()


if __name__ == "__main__":
    app.run()
