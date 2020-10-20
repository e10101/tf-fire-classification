FROM tensorflow/tensorflow:2.3.1

WORKDIR /fire

ADD . .

# RUN pip install tensorflow
RUN pip install pillow

ENTRYPOINT [ "python", "./predict.py" ]

