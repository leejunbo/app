from view.BasicView import BasicView
from abc import abstractmethod
from flask import render_template, session


class JobView(BasicView):
    def page(self):
        return {"item": self.item}

    @abstractmethod
    def index(self):
        return render_template("{}/d_index.html".format(self.item), page=self.page())


class DomainJobView(JobView):
    item = "domain"

    def index(self):
        if 'logged_in' not in session:
            return render_template("{}/d_index.html".format(self.item), page=self.page())
        else:
            return render_template("{}/domain.html".format(self.item), page=self.page())


class ClusterJobView(JobView):
    item = "cluster"

    def index(self):
        if 'logged_in' not in session:
            return render_template("{}/c_index.html".format(self.item), page=self.page())
        else:
            return render_template("{}/cluster.html".format(self.item), page=self.page())
