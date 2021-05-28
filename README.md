# Project Auth

The assignment was to create a backend including RESTful API with endpoints that allows the user to register, sign-in and reach a page only when authenticated, otherwise getting sent back to the login/register screen.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

Tech used:
> React
> Redux
> React Router
> bcrypt (password encryption combining hashing and salting)
> crypto (access token generation)
> MongoDB Cloud Atlas (database hosting)
> Heroku (server hosting)

Endpoints:
/secret   from which the secret message (requiring authentication) is fetched
/signup   authenticates a new user and returns status code 400 if user with said username already exists
/signin   authenticates a user if said user is found as registered and the given password matches after hashing and salting has been applied

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
