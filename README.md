# CrystalPine

[![Preview](https://github.com/WesternPine/CrystalPine/raw/master/lib/FILES/preview.png?raw=true)](http://crystalpine.net)

^ [Click To Visit Me!](http://crystalpine.net)

## Introduction

The CrystalPine website is my second attempt at a semi-professional website. It's main purpose was meant to be for voting, sharing, and a donation reward center for those participating in the community. Though the website was purpose build, it's still easy to customize and set-up yourself. All of which will be explained [later](https://github.com/WesternPine/Portfolio#setup).

## Installation (Requires Git):

  - Clone the CrystalPine Repository.
  - Look at the beautiful code.
  
## Startup (Requires GoLang):

  - Windows:
    - Either run `zStart.bat` or `go run community.go`
  - Linux:
    - Ensure you can run GoLang as a sudo command.
    - Either run `./zStart.sh` or `sudo go run community.go`
  - Other/All OS:
    - run `go run community.go`

## Setup

Setting up the website to work on your server or computer is actually pretty easy. To begin, TLS is optional, be sure to read both methods of installation depending on your decision. As this web page was mean't to be more informatory than provide any service, any changes you want to make are as straight forward as it gets. Lets start with some general configuration.

### Configuration

Now running the site's pages is pretty straight-forward. Go to the `pages.json`file. There you should see some lines of code that specify a url path `/` and a file path `/pages/index.html`. This is where each url path corresponds with the web-page file path. Pretty straight forward. Now dealing with the rest of the website.

### TLS (Encryption)

Using TLS is completly optional, with no configuration necessary! If you have your certification ready, just drag and drop them into the folder as the community.go file. Please ensure that your certification is named `cert.pem`, and that your privat key key is named `privkey.pem`, as these are the file names that will be used. Please also note, that if you do use TLS, the website will be hosted on port 443, and without TLS, it will be hosted on port 80. Thats it for set up!

## Starting The Server

Please refer back to [Startup](https://github.com/WesternPine/CrystalPine#startup-requires-golang) on how to start the server.

## Usage

Go ahead and visit your site! If the site is hosted, please use the ip or domain. If the site is on your computer, go to `localhost` in your browser. Please also note that if you use TLS, you must put `https://` before your ip/domain.

## Final Notes

And that's it! There's nothin to it if you somewhat understand what you're doing! If you do not understand the basic concepts of golang or any web development, I highly suggest going to do a little research before diving into this project. If you have any other questions, comments, or concerns, feel free to contact me here on github or use my website in my profile. Thank you!

License
----

[MIT](https://choosealicense.com/)
