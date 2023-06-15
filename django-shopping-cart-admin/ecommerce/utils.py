import os.path

from . import DIRS


def model_files_path(file_type, model_name, year='%Y', month='%m', day='%d'):
    """Gets the path for the image of given model name with year and month of today or that is given

    Parameters
    ----------
    file_type : str
        type of the file given.
        values you can use ('images')
    model_name : str
        name of the model
    year : str
        the year when the file is added
    month : str
        the month when the file is added
    day : str
        the day when the file is added

    Returns
    -------
    str
        The constructed path e.g. if given date 'images/2022/05' if not 'images/%Y/%m
    """
    year = str(year)
    month = str(month)
    day = str(day)
    if len(month) == 1:
        month = '0' + month
    return DIRS[file_type] + '/' + model_name + '/' + year + '/' + month + '/' + day
