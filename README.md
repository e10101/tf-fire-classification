# Tensorflow Fire Classification

## Get the docker image
Please run docker command:

```
docker pull e10101/tf-fire-classification
```

## Find images with fire

Please download some images (JPG format) with or without fire. For example:

### With fire
![fire1.jpeg](http://fire.sjz.io/images/fire1.jpeg)

http://fire.sjz.io/images/fire1.jpeg

![fire2.jpg](http://fire.sjz.io/images/fire2.jpg)

http://fire.sjz.io/images/fire2.jpg

![fire3.jpg](http://fire.sjz.io/images/fire3.jpg)

http://fire.sjz.io/images/fire3.jpg

### Without fire

![no-fire1.jpg](http://fire.sjz.io/images/no-fire1.jpg)

http://fire.sjz.io/images/no-fire1.jpg

![no-fire2.jpg](http://fire.sjz.io/images/no-fire2.jpg)

http://fire.sjz.io/images/no-fire2.jpg

![no-fire3.jpg](http://fire.sjz.io/images/no-fire3.jpg)

http://fire.sjz.io/images/no-fire3.jpg

### Download images

Using following commands to download the above example images to a temp folder.
```
mkdir -p /tmp/fire-images

curl -o /tmp/fire-images/fire1.jpeg http://fire.sjz.io/images/fire1.jpeg
curl -o /tmp/fire-images/fire2.jpg http://fire.sjz.io/images/fire2.jpg
curl -o /tmp/fire-images/fire3.jpg http://fire.sjz.io/images/fire3.jpg

curl -o /tmp/fire-images/no-fire1.jpg http://fire.sjz.io/images/no-fire1.jpg
curl -o /tmp/fire-images/no-fire2.jpg http://fire.sjz.io/images/no-fire2.jpg
curl -o /tmp/fire-images/no-fire3.jpg http://fire.sjz.io/images/no-fire3.jpg
```


## Run docker to classify images

```
docker run --rm \
    -v '/the/path/to/your/local/machine/image.jpg:/fire/image.jpg' \
    e10101/tf-fire-classification \
    /fire/image.jpg
```

Please change the above `/the/path/to/your/local/machine/image.jpg` to the path of your local image (JPG)

For example:
```
docker run --rm \
    -v '/tmp/fire-images/fire1.jpeg:/fire/image.jpg' \
    e10101/tf-fire-classification \
    /fire/image.jpg

docker run --rm \
    -v '/tmp/fire-images/no-fire1.jpg:/fire/image.jpg' \
    e10101/tf-fire-classification \
    /fire/image.jpg
```

Please pay attention to the output for no-fire images:

> image_path /fire/image.jpg \
This image most likely belongs to Neutral with a 100.00 percent confidence.

For fire images:

> image_path /fire/image.jpg \
This image most likely belongs to Fire with a 99.56 percent confidence.