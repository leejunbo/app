from abc import abstractmethod


class BasicView:
    item = None

    @classmethod
    def factory(cls, item_name):
        for subclass in cls.__subclasses__():
            if item_name == subclass.item:
                return subclass()
        return cls.__subclasses__()[0]()




