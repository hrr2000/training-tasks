import datetime


def daterange(start=0, end=0):
    today = datetime.date.today()
    return [
        today + datetime.timedelta(days=start),
        today + datetime.timedelta(days=end)
    ]
