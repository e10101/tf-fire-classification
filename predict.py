#!/usr/bin/python3

import tensorflow as tf
import numpy as np
import sys

# Load model.
model = tf.keras.models.load_model('./models/fire-model')

# Set batch and image sizes.
batch_size = 32
img_height = 180
img_width = 180

# Set class names.
class_names = ['Fire', 'Neutral']

def predict(image_path):
    img = tf.keras.preprocessing.image.load_img(
        image_path, target_size=(img_height, img_width)
    )
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Create a batch

    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])

    print(
        "This image most likely belongs to {} with a {:.2f} percent confidence."
        .format(class_names[np.argmax(score)], 100 * np.max(score))
    )

    return class_names[np.argmax(score)], np.max(score)

if len(sys.argv) > 1:
    image_path = sys.argv[1]
    print('image_path', image_path)
    predict(image_path)
else:
    image_path = './images/image_757.jpg'
    predict(image_path)
    print('please input image_path')