/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions, 
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable 
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('URL defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
            });
        });

        /* Test loops through each feed in the allFeeds object 
         * and ensures it has a name defined and that the name is not empty.
         */
        it('Name defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeGreaterThan(0);
                expect(feed.url).not.toEqual('');
            });
        });
    });

    // New test suite named "The menu"
    describe('The menu', function() {
        // Test that ensures the menu element is hidden by default.
        it('Menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* Test that ensures the menu changes visibility when the menu icon
         *  is clicked. This test should have two expectations:
         *  does the menu display when clicked and does it hide when clicked again.
         */
        it('Menu changes visibility when the menu icon is clicked', function() {
            //display
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //hidden
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // New test suite named "Initial Entries"
    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed function is called
         * and completes its work, there is at least a single .entry element
         * within the .feed container.
         * loadFeed() is asynchronous so this test will require the use of 
         * Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('Function is called and at least one entry in feed reader', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // New test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        var $feedOne;
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
        beforeEach(function(done) {

            loadFeed(2, function() {
                $feedOne = $('.feed .entry').html();
                done();
            });
        });

        it('Feed content should change after loading', function(done) {
            var $feedTwo;

            loadFeed(0, function() {
                $feedTwo = $('.feed .entry').html();
                expect($feedTwo).not.toEqual($feedOne);
                done();
            });
        });
    });

}());