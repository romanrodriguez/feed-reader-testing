# Front-End Nanodegree Feed Reader Testing

# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included the [Jasmine BDD testing framework](http://jasmine.github.io/). Unfortunately, they decided to move on we're now left with an application with an incomplete test suite. As such, I have gone ahead and included passing Tests to make sure everything works correctly.


## Objective

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have.

The objective here was to leave the application with a robust set of tests that ensure the correct functioning of the feed reader application.


## Usage - How to check out the project

Download the project to your local machine and open `index.html` in your browser. Jasmine will run the tests automatically and, if successful, it will display the Feed Reader application. Otherwise, it will hint to bugs in the program. __All the tests should pass__. 

# Tests included:

1. Test makes sure that allFeeds variable has been defined and it is not empty.
2. Test loops through each feed and determines if the URL is defined and is not empty.
3. Test loops through each feed and determines that each feed has a name and is not empty.
4. Test ensures the menu element is hidden by default.
5. Test validates the proper functioning of the hidden menu toggle.
6. Test verifies that there is at least one entry in the feed.
7. Test verifies that new content is loaded by loadFeed().

