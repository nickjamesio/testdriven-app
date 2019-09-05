# base image
FROM python:3.7.4-alpine

# set working directory in container
# if it does not exist, it will be created
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . .

# run server
CMD python manage.py run -h 0.0.0.0