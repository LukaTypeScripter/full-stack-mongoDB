This is a full-stack application that I'm building using Node.js and MongoDB.

What I have done so far:

Created routes, middleware functions, and authentication to protect routes.

Created a schema for MongoDB and added validations for email, name, and password.

Created a route to create and update a user's profile, and added functionality to find the current user and protect the route with auth. Once it finds the matching document, it populates the "user" field with additional data from the "User" collection. Then, I created a protected route to update the user's skill set, added validations to check if it's empty, and destructured things to update it and create a user. If data is not passed to the frontend, it returns nothing. If it returns a profile fields object, it will take those values. I then created a social object array with split and mapped it and trimmed it. Finally, I added a try-catch block to update a user. If the profile is valid, findoneandupdate will find it and update it. If there is no profile, it will create it.

Created a route to get all profiles. First, I used the find method to find profiles and then filled the object with populate, and then sent it in JSON format.

Created a route to get a profile by user ID. In this route, I find a specific user with the built-in function findone with ID, fill the object with specific name and avatar, and then send it in JSON format. In the catch block, I made sure that if the object ID is not found, it will show a message.

Created a delete route to delete a user and their posts with ID. Added experience route to add, and an education route to delete both of them. Then, I made a GitHub user search to show user's repos.
created a schema for Mongoose which includes fields for likes, comments, and the user who is commenting or liking the post. I also created routes for creating a new post, getting all posts, getting a post by its ID, deleting posts, as well as routes for liking, unliking, commenting, and deleting comments.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Front-end section:)

In my frontend app, I created landing, login, and register pages. I implemented React-Redux DevTools and Redux for state management. In the reducers folder, I created a component for the alerts reducer. Inside that component, I set up a switch statement and used the reducer function. I then combined the alerts reducer with other reducers using combineReducers.

In the components folder, I created two subfolders, one for layout components and one for authentication components. In the authentication folder, I added login and register components. It's important to note that the routes for these components are private, meaning they require authentication. I implemented validation logic in the register and login components. Additionally, I connected these components with the reducer and used the setAlert action to display alerts.

In the alert folder, I created components for the navbar, landing page, and alert display. These components serve their respective purposes without any special functionalities.

Lastly, I created an actions folder. Inside this folder, I have two files: one for types, which helps maintain clean code by defining constants, and another file for the alert action, which generates new alerts with unique IDs.

This summarizes the structure and flow of my frontend app, including the various components, reducers, actions, and their connections.
