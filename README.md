# Eligible frontend test

Welcome to the Eligible frontend "take-home" test. Below you will find instructions on how to go about completing this test, and hopefully an understanding of the sorts of things we're looking for.

## Overview
- You should return your completed test via email to `harry.vane@eligible.ai` as a git bundle (see [Git - Bundling](https://git-scm.com/book/en/v2/Git-Tools-Bundling)). Please bundle the _FULL_ repo, rather than just the differences. There is no need to host the app!
- Please branch off to do your work. You may use whatever methods / philosophy you like within your own branches, but a completed test should have a single branch that isn't `master` with all of the commits you wish to present on that branch. The number of commits is unimportant. Leave `master` untouched.
- This test should be completed in no more than **3 hours**. The tasks (see below) can all be completed to some degree in this timeframe, but it is very important that you do not exceed this timeframe. We're not looking to see what you can produce in a week of hard graft, but how you think about and approach problems, and how you prioritise.
- This has been deliberately set up to be a bare-bones application, feel free to change _anything_ in it. Add components, take them away, restructure the `src` folder, etc. are all fine. You may be questioned on the reasoning, of course!
- Similarly, you are welcome to use hooks, functional components, whatever you feel like that you believe allows you to work most effectively.
- Questions are encouraged! I don't need a warning for when you're going to be working on the test, but obviously if you can give me some warning I'm more likely to be available to answer any and all questions! Contact details should have been attached to the same email that you got this repo from.


This app was built using `create-react-app` with the `typescript` template. To run it, see the instructions in `CRA-README.md`. (spoiler: `yarn start`).

## Tasks
You have two main tasks. They can be done in any order / prioritised however you like.

1. **Style the app!** - There is effectively no styling on the app currently, and this first task is about changing that! Keep the time limit in mind, however. Spending two hours on a parallax effect would not be an effective use of time, for example. Keep user interactions in mind when styling. This is an app, not a painting.
2. **Make the lists more usable** - Currently, the "posts" are just listed out in the way they arrive from the API. You may enhance the lists however you think is appropriate, but the kind of things we're looking for are below. Please note that we will _NOT_ mark you down for choosing one of these example options! Doing one of these really well will score much higher than doing something fanciful badly.
    - Filtering by some attribute, for example the author
    - Search by something in the title
    - Search by something in the body

As the time is limited, I cannot stress enough how much more we will value a well-executed "basic" implementation of styling and list enhancement over something off-piste and half-baked.


## Resources
- [Git - Bundling](https://git-scm.com/book/en/v2/Git-Tools-Bundling)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)


## Notes:
Two aspects:

### Styling / Looks / Behaviour
- Creating cards for each item.
- 1 card per row by default (mobile-first), 2-4 depending on screen size

- Create an object w/ 10 kv pairs. Keys being 1-10, values being Roman names. Treat it as if though they're the author of the quote.
- Treat the body like further explanation / 
- Add an absolutely-styled header with the text 'Latin Quotes'?

#### Infra:
[x] Constants file

#### `Posts`/Main/Favs:
[] Absolutely-positioned header w/ header text & toggle buttons for `All Quotes` and `My Favourites`

[x] One Post/Card per row by default (mobile), 2-4 depending on screen width. Set max-width to a reasonable standard
[x] Add 'More' button (or whatever anchor text)
[x] Box shadow on cards
[x] Rectangular Posts/Cards on mobile, square on desktop

### Functionality
#### Infra:
[x] Components, Styling, tests folders.
[x] Add Redux to store all Posts to cut down on requests + load time
    [x] Store favorites as well
    [x] Required actions:
        [x] Retrieving data via JSONPlaceholder API
            [x] Data Received Y/N
        [x] Setting search term
        [x] Adding post to Favourites
        [x] Removing post from Favourites
[x] Create Post/Card Component
[x] Refactor to functional components

#### `Posts`/Main:
[x] Request should only be sent out to the API on first render
[x] If there is no postdata, a message should show up stating that there are no Posts/quotes found
    [] STRETCH: Add a handful (~20) of skeleton screens

[x] User should see a navbar with two buttons: one with `All Quotes` the other with `My Favourites`
[x] User should be able to toggle between `All Quotes` and `My Favorites`

[x] Every Post on both `All Quotes` and `My Favorites` should have a heart button that adds a Post to `My Favourites`
[x] When the Post is already in `My Favorites` and the heart button is clicked, it'll be removed from `My Favourites`

[x] Clicking on the Quote itself & a button leads to `/posts/:postId`

#### Search:
[x] There should be a search bar that allows users to search the posts based on title.
[] STRETCH: Add possibility of filtering quotes by a particular attribute (i.e. title, user or body content)
    [] The default state is set to title
    [] User should be able to toggle a dropdown with different searching options

#### /Posts/:postId: 
[x] There should be a button that takes the user back to `/`
[x] There should be a button that toggles the particular quote being in `Favorites`
