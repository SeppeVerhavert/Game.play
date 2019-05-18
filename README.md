![GAMEPLAY](./assets/images/mockupmuur.jpg)

Netflix for games
[Game.play](https://seppeverhavert.github.io/Game.play/ "It's really the Game.play-link!")

### Who made this beautiful page?
1. Wietse Gielen
2. Seppe Verhavert
3. Nic Placklé
4. Merel Van Puymbroeck
5. Blood, Sweat and Tears joined the team too!

### Why did we make this?

As our team said:

> "We made this to show our fancy skills and knowledge that we learned in this first month with HTML & CSS!<br>
> This is our final test Ok, you ready?! Let's go! 

### What is it? 

For our final test we needed to create a website for a fictional company. There were a lot of requirements we needed to check when we were working on this page.

<strong>Some examples:</strong><br>

- [ ] All buttons and links work
- [ ] All elements work and are complete (menu, lists, images, ...)
- [ ] Everything on the page has a function, a reason to be there
- [ ] No dead links
- [ ] English and dutch are not mixed
- [ ] No spelling errors
- [ ] No grammar errors
- [ ] The website is deployed somewhere
- [ ] Everything is relevant (no image of a barber on the website of a baker)
- [x] A bunch of requirements

In the end we merged our 4 pages in one smooth page. 

### Okay cool, but what is it doing here on GitHub? 

Because it is a fictional project, we shared it on GitHub instead putting it online. It's a big project for us to let you guys see where we already stand after one month of coding and learning. 

### Proud of this!

![mockup](./assets/images/mockup.jpg)

#### Why we are proud of this element above?

Well, cause the navigation looks really awesome with the cool and relatable icons in it!(Yes it does work too)
Also our lay-out, as you can see, isn't a mess. We really thought a lot about the lay-out and the design of it and spent a lot of time on it and changed our minds about 3 times.

### What did we use?
1. HTML
2. CSS
3. Javascript
4. Bootstrap
5. A bit of our brain :trollface:

### Extra stuff we are proud on!

- Parallax
- Slider
- Form
- Nice Footer
- Sticky navigations and header
- Video's
- Clipart
- Video previews
- Git (experts)
- Atm 203 of 218 commits!Yeah boii

## Some interesting code

```
---------- CSS ----------
    video {
        display: none;
        position: relative;
        width: 100%;
        height: auto;
    }

    .card:hover video {
        display: block;
    }

    .card:hover img.card-img-top{
        display: none;
    }

---------- HTML ----------
<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
     <div class="card h-100 bg-dark" >
          <a onclick="load('Rust')">
               <img class="card-img-top" src="https://www.kitguru.net/wp-content/uploads/2018/02/maxresdefault-1.jpg" alt="">
               <div class="thumb" onclick="clicksound.playclip()" onMouseover="mouseoversound.playclip()">
                    <video muted id="video1" onmouseover="this.play()" onmouseout="this.pause()" loop>
                         <source src="assets/videos/rust.mp4" type="video/mp4" >
                          Your browser does not support HTML5 video.
                    </video>
               </div>
               <img class="play" src="https://www.legacycitychurch.com/media/cover_art/Play%20Button%20Overlay/imageedit_1_8651219148.png">
          </a>
          <div class="card-body">
               <h4 class="card-title">
                    <a onclick="load('Rust')" class="text-white">Rust</a>
               </h4>
          </div>
     </div>
</div>
```
### So why that code? 

This is a little code about the part where we can hover over the image and a little video about the game starts. So we only used html and css to create this. In the html we made a link with an "onclick". Next we got a div with the image and after the video. In the CSS we just changed the display and position to get that effect. Nice and simple, isn't it?

### License

https://github.com/SeppeVerhavert/Game.play/blob/master/license.txt

##### Thank you come again, have a nice day! :shipit:
