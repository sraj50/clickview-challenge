# ClickView Programming Practical

Please try and complete as much of this practical as possible in the allotted time. You will be judged on your overall design skills, use of language best practices, code reuse, and design patterns. Keep in mind that this is not an assignment and there are no strict marking criteria or rules. We are simply looking for a demonstration of your ability to design and implement software.

## Background

ClickView enables educators to manage media across many platforms. One component of this, is allowing educators to create and manage playlists of videos. In this practical, you will create a single page web application that lets users manage playlists.

## Overview

Use the provided array of videos and playlists (found in `videos.js` and `playlists.js`) to create a single page web application that lets users create new playlists, delete playlists, add videos to playlists, and remove videos from playlists.

**Note**

- This is a large practical that we are not expecting you to be able to 100% complete in the allotted time. It is perfectly okay to only complete a few of the tasks.
- This webpage should be a single page app, meaning that there should be no reloading of the window when navigating from for example English to Physics.
- Please do not modify the provided JavaScript file
- We strongly encourage the use of any js frameworks you may be familiar with such as React, Angular, Vue, Backbone, Svelte, JQuery, Underscore, Bootstrap, Material UI etc. Although React is preferred if possible
- Feel free to complete the tasks in the frontend and backend sections at the same time.

## Part A: Git
### Task 1: Set up a public git repository

You will submit your code to us via a public git repository. We strongly recommend using GitHub or GitLab, but any public git provider is acceptable. **Please commit your code at the end of every task.**

## Part B: Backend
### Task 1: Read the JSON files and store them in memory

When your web server starts up, it should read JSON files in the `data` folder and parse it into a collection of video and playlist objects that are stored in memory, which should persist during the lifetime of the webserver.

### Task 2: Setup a Basic CRUD API

Create an API that exposes the following actions and persists the changes to the in-memory data store.

- Create a new playlist
- Retrieve all playlists
- Delete an existing playlist
- Add a video to an existing playlist
- Remove a video from an existing playlist
- Retrieve all videos in a playlist

### Task 3: Persist the data to permanent storage [Optional - please attempt frontend tasks before completing this]

Improve your API to now work with permanent storage that will persist between starting and stopping your web server.

Your web server should only seed JSON data to the permanent storage on the first time it starts up.

We strongly recommend something that does not need too many steps to set up, such as SQLite or even just another JSON File.

Please do not use an ORM such as Entity Framework.

## Part C: Frontend
### Task 1: Set up simple navigation

Create 2 pages. One will be used for viewing videos, and the other will be used for viewing playlists. You should provide a simple navigation menu that allows the user to switch between these 2 pages.

### Task 2: Display the videos and playlists

Fetch the videos and playlists data from your REST API, and display the items on their respective pages created in task 1. How you display these items is up to you (grid, list, table, tiles, etc).

### Task 3: Add a page for viewing the videos inside each playlist

When the user clicks on a playlist, they should be taken to a new page that contains the videos in that playlist.

### Task 4: Playlist creation/deletion

Add actions for both creating new playlists, and deleting existing playlists. This should use your REST API.

### Task 5: Video management in playlists

The user should be able to add videos to playlists, as well as remove videos from playlists.

This involves adding the appropriate actions to videos on both the videos page, and the playlist videos page.

### Task 6: Get creative [Optional]

If you find yourself with leftover time, feel free to try to impress us with some creativity. There is room in this application for improvements, and we would love to see what you can come up with. For example, adding pagination to the video lists, adding sorting, etc.

## Part D: Submission
### Task 1: Create a readme.md [Compulsory]

Provide instructions on how to get your code up and running as a `readme.md` file in your git repository. Please also list any dependencies that are not managed by a package manager.