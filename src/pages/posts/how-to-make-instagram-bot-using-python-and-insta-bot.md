---
description: How to make instagram bot using python and instabot in five lines of code.
public: true
layout: ../../layouts/BlogPost.astro
title: How to make instagram bot using python and instabot?
createdAt: 19 Dec 2022
updatedAt: 19 Dc 2022
tags:
  - Python
heroImage: /posts/python-instabot-how.jpg
slug: how-to-make-instagram-bot-using-python-and-instabot
---

</br>

in this post, i will show you how to make an instagram bot using python and instabot.
this bot can help you to follow or send messages to any instagram user or upload photos to instagram.

**this bot fucntions**

1 - Follow one or list of accounts. </br>
2 - Unfollow one or a list of accounts. </br>
3 - Unfollow everyone. </br>
4 - Send messages to followers or a list of followers. </br>
5 - Get number of followers for any instagram account. </br>
6 - Post photos. </br>
7 - make like on chat. </br>

---

</br>

first we need to install instabot package

```pip
pip install instabot
```

now first step we need to import instabot in python file and loging in instagram using username and password.

```python
from instabot import Bot

bot = Bot()

# Login
bot.login(username="your_userid", password="your_password")
```
