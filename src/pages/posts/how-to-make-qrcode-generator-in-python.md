---
description: Learn how to create QR codes in Python using the pyqrcode and pypng libraries. This tutorial shows you how to generate QR codes for text, URLs, emails, phone numbers, and SMS messages, and how to customize the QR code with different colors and error correction levels.
keywords: QR code generator, Python QR code, pyqrcode library, pypng library, create QR codes, generate QR codes, customize QR codes, add logo to QR code, merge images with QR code, data types in QR codes, Python tutorial, QR code tutorial, tutorial, solutions blog
public: true
layout: ../../layouts/BlogPost.astro
title: Create QR Codes in Python A Step-by-Step Guide
createdAt: Wed, 04 Jan 2023 21:59:20 GMT
updatedAt: Wed, 04 Jan 2023 21:59:20 GMT
tags:
  - Python
heroImage: /posts/hero-images/hero-image-how-to-make-qrcode-generator-in-python.jpg
slug: how-to-make-qrcode-generator-in-python
---

</br>

QR codes (short for Quick Response codes) are two-dimensional barcodes that can be read by smartphones and other devices. They are widely used in various applications, such as marketing, payment systems, and event ticketing.
In this tutorial, we will learn how to create a QR code generator using Python's pyqrcode and pypng libraries.

## Prerequisites

</br>

Before we start, make sure you have Python 3 installed on your system. You can check the version by running the following command:

</br>

```python
python --version
```

</br>

If Python is not installed, you can download it from the official website **<a href="https://www.python.org/" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">python.org</a>** and follow the installation instructions.

Next, we will install the pyqrcode and pypng libraries using pip, the Python package manager. Run the following command to install them:

```python
pip install pyqrcode pypng
```

</br>

## Generating QR Codes

The pyqrcode library allows us to generate QR codes in Python. Let's start by creating a simple QR code that contains a text message.

```python
import pyqrcode

# Create a QR code object
qr = pyqrcode.create('Hello, World!')

# Save the QR code as an SVG file
qr.svg('hello.svg', scale=8)

```

</br>

This code will create a QR code in the form of an SVG (Scalable Vector Graphics) file. You can open the file in a web browser or a vector graphics editor, such as Inkscape or Adobe Illustrator, to see the QR code.

By default, the QR code will be black and white, but you can specify a different color by passing the color parameter to the create() function. For example, to create a red QR code, you can use the following code:

```python
qr = pyqrcode.create('Hello, World!', color='red')
```

</br>

You can also specify the error correction level for the QR code. The error correction level determines how much damage the QR code can sustain before it becomes unreadable. There are four levels:

- L (low): Can withstand up to 7% damage
- M (medium): Can withstand up to 15% damage (default)
- Q (quartile): Can withstand up to 25% damage
- H (high): Can withstand up to 30% damage

To specify the error correction level, pass the `error` parameter to the `create()` function. For example, to create a QR code with the high error correction level, you can use the following code:

```python
qr = pyqrcode.create('Hello, World!', error='H')
```

</br>

## Saving QR Codes as Images

</br>

In addition to SVG, pyqrcode also supports saving QR codes as PNG, GIF, and BMP images. To save the QR code as a PNG image, you can use the png() method:

```python
qr.png('hello.png', scale=8)
```

</br>

The `scale` parameter specifies the size of the image in pixels. The default value is 4, which means that each module (small square) in the QR code will be 4x4 pixels in size.

You can also save the QR code as a GIF or BMP image using the `gif()` and `bmp()` methods, respectively. For example:

```python
qr.gif('hello.gif', scale=8)
qr.bmp('hello.bmp', scale=8)
```

</br>

## Adding a Logo to the QR Code

</br>

You can add a logo or other image to the center of the QR code using the pypng library. First, install the library using pip:

```pip
pip install pypng
```

</br>

Then, import the `merge()` function from the pypng module and use it to merge the QR code image with the logo image.

```python
import pyqrcode
import png

# Create a QR code image
qr = pyqrcode.create('Hello, World!')
qr_image = qr.png('qr.png', scale=8)

# Read the logo image
with open('logo.png', 'rb') as f:
    logo = png.Reader(f).asRGBA()

# Merge the QR code and logo images
qr_logo = png.merge(qr_image, logo)

# Save the merged image as a PNG file
png.write_png('qr_logo.png', qr_logo)
```

</br>

The `merge()` function takes two images as input and returns a new image that is a combination of the two. The QR code image should be passed as the first argument, and the logo image should be passed as the second.

## Generating QR Codes for URLs

</br>

QR codes can also be used to encode URLs. To generate a QR code for a URL, you can use the `create_url()` function from the pyqrcode module. For example:

```python
# Email QR code
qr = pyqrcode.create_email('info@example.com', 'Subject', 'Body')
qr.png('email.png', scale=8)

# Phone number QR code
qr = pyqrcode.create_phone('+1234567890')
qr.png('phone.png', scale=8)

# SMS QR code
qr = pyqrcode.create_sms('+1234567890', 'Hello, World!')
qr.png('sms.png', scale=8)
```

</br>

For a complete list of data types supported by pyqrcode, you can refer to the documentation **(<a href="https://pythonhosted.org/PyQRCode/" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">pythonhosted.org/PyQRCode/</a>)**.

## Conclusion

</br>

In this tutorial, you learned how to create QR codes using Python and the pyqrcode library. You can use the techniques demonstrated here to generate QR codes for various applications, such as marketing, payment systems, and event ticketing. You can also customize the QR code by specifying the color, error correction level, and size. Additionally, you learned how to add a logo to the QR code using the pypng library and how to generate QR codes for different data types, such as URLs, emails, phone numbers, and SMS messages.

> If you have any questions or suggestions, feel free to leave a comment below.

</br>

<!-- conclusion -->
</br>

---

</br>

## <center> thanks for reading. </center>

</br>
