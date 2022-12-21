---
description: How to make an instagram bot using python and instabot in five lines of code.
keywords: python, programming, instabot, instagrambot, insta, instagram, promotemesages, tutorials, bot
public: true
layout: ../../layouts/BlogPost.astro
title: How to make an instagram bot using python and instabot?
createdAt: 20 Dec 2022
updatedAt: 20 Dc 2022
tags:
  - Python
heroImage: /posts/python-instabot-how.jpg
slug: how-to-make-instagram-bot-using-python-and-instabot
---

</br>

in this post, i will show you how to make an instagram bot using python and instabot.
this bot can help you to follow or send messages to any instagram user or upload photos to instagram.

**this bot fucntions**

[1 - Follow one or list of accounts.](#follow-accounts) </br>

[2 - Unfollow one or a list of accounts.](#unfollow-accounts) </br>

[3 - Unfollow everyone.](#unfollow-everyone) </br>

[4 - Send messages to followers or a list of followers.](#send-messages) </br>

[5 - Get number of followers for any instagram account.](#get-number-of-followers) </br>

[6 - Post photos.](#get-number-of-followers) </br>

[7 - send like on chat.](#send-like-message-on-chat) </br>

[Important Note](#important-note-if-you-find-config-folder-delete-it-to-make-code-work) </br>

---

</br>

first we need to install instabot package

```pip
pip install instabot
```

</br>

now first step we need to import instabot in python file and login in instagram using username and password.

```python
from instabot import Bot

bot = Bot()

# Login
bot.login(username="your_username", password="your_password")
```

</br>

---

</br>

## Follow accounts

</br>

To follow one account we will use "follow()" function.

```python
from instabot import Bot
 
bot = Bot()
bot.login(username="your_username", password="your_password")
 
# Follow one person.
bot.follow("account username")
```

</br>

if we need to follow more than one account we need to make list of accounts usernames then use "follow_users" function.

```python
from instabot import Bot
 
bot = Bot()
bot.login(username="your_username", password="your_password")
 
# To follow more than one person.
list_of_user_to_follow = ["user_one", "user_two", "user_three", "...."]
bot.follow_users(list_of_user_to_follow)
```

</br>

---

</br>

## Unfollow accounts

</br>

To unfollow one account we need to use "unfollow( )" function.

```python
from instabot import Bot

bot = Bot()
bot.login(username="your_username", password="your_password")

# To unfollow one account.
bot.unfollow("account")

```

</br>

---

</br>

## Unfollow everyone

</br>

now we need to use "unfollow_everyone( )" functions to unfollow all accounts.

```python
from instabot import Bot
 
bot = Bot()
bot.login(username="your_username", password="your_password")
 
# To unfollow all accounts.
bot.unfollow_everyone()
```

</br>

---

</br>

## Send messages

</br>

To send a message to single account we will use "send_message( )" function.

```python
from instabot import Bot

bot = Bot()
bot.login(username="your_username", password="your_password")

# To send message to a single person.
message = "hallow from solutions blog"
bot.send_message(message, "account")

```

</br>

To send messages to multiple people.

```python
from instabot import Bot
 
bot = Bot()
bot.login(username="your_username", password="your_password")
 
# To send message to multiple people.
message = "hallo from solutions blog"
list_of_user_to_send = ["user_one", "user_two", "user_three", "...."]
bot.send_messages(message, list_of_user_to_send)
```

</br>

---

</br>

## Get number of followers

</br>

if we need to get the number of followers for an account we will use "get_user_followers()" function.
we will get list of followers id.

```python
from instabot import Bot

bot = Bot()
bot.login(username="your_username", password="your_password")

# Get number of followers
followers = bot.get_user_followers("account")
print("Total number of followers:")
print(len(followers))
```

</br>

---

</br>

## Post photo

</br>

To post a photo we will use "upload_photo()" function but first, we need to check the photo aspect
ratio The ideal size of Instagram photo is **1080px by 1080px** at a **1:1**, **90:47**, and **4:5**
aspect ratio. if you don't know how to check the photo aspect ratio and change it to the ideal size
these are the steps, first right-click on the image then click on properties then click on Details you
will see the image size if it wasn't in ideal size it's ok I will tell you now how to make it in ideal
size. we will use the paint app in windows, first open the paint app and import the image into it then
click on **Resize** and choose to Resize by pixels then set Horizontal and vertical on **1080px**.
**Like this
photo**.

![paint tutuorial](paint.png)

</br>

this is the code for post photo.

```python
from instabot import Bot

bot = Bot()
bot.login(username="your_username", password="your_password")

# Post photos
# jpg format recommended from other formats.
# put the image in the same folder with the code.

bot.upload_photo("imagename.jpg", caption="Write caption here.")

```

</br>

---

</br>

## Send like message on chat

To send like message on chat make list of the users then using "send_like()" function. The bot will
send the like message to according users in the list you create.

```python
from instabot import Bot

bot = Bot()
bot.login(username="your_username", password="your_password")

# Send like in messages
list_of_user_to_send = ["user_one", "user_two", "user_three", "...."]
bot.send_like(list_of_user_to_send)

```

</br>
</br>

## **important Note if you find config folder Delete it to make code work**

</br>

![config-file](config-insta-bot.png)

</br>

## <center>thanks for reading.</center>

</br>

---
