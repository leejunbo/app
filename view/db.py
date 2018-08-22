import mysql.connector as mc
from flask import g


def connect_db():
    con = mc.connect(host='192.168.28.130', user='root', passwd='pku2025', db='mnm', port='3306')
    return con


def get_db():
    if not hasattr(g, 'sql_db'):
        g.sql_db = connect_db()
    return g.sql_db


def get_device():
    db = get_db()
    cursor = db.cursor()
    sql = "SELECT id, domain, ip, port,cls_id FROM domainmanage"
    cursor.execute(sql)
    cur = cursor.fetchall()
    data = [dict(id=row[0], domain=row[1], ip=row[2], port=row[3], cls_id=row[4]) for row in cur]
    datas = {
        'data': data,
    }
    db.commit()
    return datas

	
def get_cluster():
    db = get_db()
    cursor = db.cursor()
    sql = "SELECT cls_id,cls_path,cls_ip,cls_name FROM clustermanage"
    cursor.execute(sql)
    cur = cursor.fetchall()
    data = [dict(cls_id=row[0], cls_path=row[1], cls_ip=row[2], cls_name=row[3]) for row in cur]
    datas = {
        'data': data,
    }
    db.commit()
    return datas
