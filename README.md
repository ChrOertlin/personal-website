This are the humble beginnings of my website.

I aim to fill this website and host it once it is finished.

It will mainly be used to list my CV but also a place to display some of my photography.


# Running the website locally

The website and the infrastructure I want to host this website on is still under development. However, in the meantime there are two way to run the website locally.

1. Clone this repository 

2. Navigate inside the closed folders

3.
    a. 
    1. run ```npm install```
    2. run ```npm run dev```

    b.
    1. docker build -t CO-website .    
    2. docker run -p 3000:3000 CO-website:latest