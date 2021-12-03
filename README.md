# New Notes!

## Game: https://knight-app-backend-3.herokuapp.com/
## Api: https://knight-game-storage-1.herokuapp.com/

### In order to start it:
- install all dependencies via running "npm i" inside all folders: back, front, storage, BuildManager
- start the front end by running "npm start" inside front folder.
- start the storage api by running "npm start" inside storage folder.
- start the back end by running "npm start" inside back folder.
- Done! Now you can go to http://localhost:3000/ and see this app running locally.




# Requirements
### Back-end Features
-  ~~CRUD~~
- ~~Authentication and Authorization~~
- ~~RESTFul API connection~~ (our own)
- ~~Unit test~~

### Front-end Features

- __Implement a charting library__ (decided to use another approach)
- ~~End-user manipulation of visualized data~~ (game process)
- ~~Site must be responsive~~

### Technology, Tools and Process
- __Properly configured CI/CD server__ (done locally)
- ~~Production environment is configured and properly hosted via World Wide Web.~~
- ~~Distributed commit history from each team member using version ~~

### Security Implementation
- ~~Paramaterized queries for SQL statements~~
- ~~Mitigate Brute Force Atacks~~
- ~~Application configuration files properly secured~~


## License MIT

# Prev Assignment Notes
<h1>Note: This time we did not do the commits separately, instead we did all the commits from one machine due to an issue that occured during a commit from another machine.</h1>
</hr>
<h2> ⭐️ &nbsp; All requirements were met except for (ER Diagram of Database) which we couldn't do due to the project complexity that we chose</h2>
<h4>In order to test it out:</h4>
<ol>
 <li>Install all dependencies in all 3 folders [front, back, storage] </li>
 <li>Cd into "back" folder and run 'npm start'</li>
 <li>Finally, start up our created api inside storage folder by running 'npm start'</li>
</ol>
 <h4>Short description: This is the prototype of the up-coming game. By now you have the following functionalities: Login/Register, Send Your Hero and claim Items. Each User gets random hero after registering. Similarly, when user sends their Hero into an adventure, it will always lead to immidiate item discovery and immiditate claiming of that same item. Hovewer in the next version, this will expand into long lasting event which will not always bring an item or even some gold.</h4>
 <p>Thanks for reading this!</p>






# Prev Assignment Notes
# Medieval auction game (assignment-2---final-project-repository-team-2)
<h2>Unit tests plan</h2>

Unit tests will be used for controllers, repositories, domain classes, or file readers. We will use one test class per production class. </br>
Our unit tests should test the public interface of the class. </br>Private methods cannot be tested anyway, because they cannot be called from another test class. Methods that are protected or available only within the package are accessible from the test class (given that the package structure of the test class is the same as in production), but testing these methods may already go too far, so we will stick to public methods. </br>

The structure of the tests that we will use:
<ol>
<li> Setting up test data. </li>
<li> Calling the tested method.</li>
<li> Verifying that the expected results are being returned.</li>
</ol>
</br>

Database Integration will also be implemented. Through the CrudRepository interface, Spring Boot will provide a fully functional CRUD repository with findOne, findAll, save, update and delete methods which will also be used to test our web app. </br>

We are planning on testing every function in the public methods of our web application. The tests will be constructed using the structure we have described before and will check if the functions return correct values.
</br>
<h2>Unit tests in Assignment 2</h2>
 Your ReadMe documentation will describe the unit tests that you have created, including a description of what each test is intended to do and how it serves a purpose in verifying application functionality. Your tests must cover the major system functionality, including both normal usage and erroneous input. 

Our test file consist of three describe functions that test three public modules of our web applications: Database, Auth, and Profile. 
</br>
<h3>Database tests</h3>

<h4><li>beforeAll and afterAll </li></h4>
Those two functions create test variables that will be used to check correctness of the functions.</br>
We create two users with different passwords and two sessions using the functions from DB file which we imported before. afterAll will delete all the users and sessions from the test when all tests are done running.

<h4><li>if user was created in database </li></h4>
Check if user was created in the database using createUser() functions and checking it to a specific value with toStrictEqual() and getUser() DB function to check password and username at the same time. The createUser() has to create user and save it into object from which the getUser() will retrieve it and check if it was created.

<h4><li>if username was updated </li></h4>
Check if updateUsername() function from DB is working by calling it and changing the userTest's username. Then checking if the username was updated using the getUser() function and toStrictEqual() to the new username and the old password. The updateUsername() should retrieve the old username from the db object and checnge it to the new one without modifying the password.

<h4><li>if deleted user exists </li></h4>
Calling removeUser() function from the DB then checking if user exists with userExists() function toBeFalsy(). The user has to be deleted and toBeFalsy() should return true. 

<h4><li>if not registered user exists</li></h4>
Calling userExists() from DB to check if some random username exists in the database. Should return false.

<h4><li>if another user can be created</li></h4>
Calling createUser() from the DB and checking if the new user was created by retrieving it from the db. At the same time checking of the older users still exists to check that createUser() is not changing old users.

<h4><li>if password is correct </li></h4>
Calling checkPass() on the created user and comparing it to some false string to check if toBeFalsy() will return true. And checking it with the correct password to check if toBe() will return true.

<h4><li>if sessionExists creates </li></h4>
Checking if two different users exist in the DB and also have their sessions working by using toHaveProperty(). To check if their passwords correspond to the username we chack it using salt and hash creation.

<h4><li>if sessionExists removes </li></h4>
Calling removeSession() on both sessions we have created in the beginning and then checking if they are still in the db by calling not.toHaveProperty() so that they return true.


</br>
<h3>Auth tests</h3>

<h4><li>Auth login controller test</li></h4>
Calling login function and then checking cookies length to be 1 and redirectUrl to be '/' by calling expect() and toBe()

<h4><li>Auth register controller with no body test</li></h4>
Checking if statusCode will return 404 in case of empty body register function.

<h4><li>Auth register controller with password only</li></h4>
Checking if statusCode will return 404 in case of empty username register function.

<h4><li>Auth register controller with username only</li></h4>
Checking if statusCode will return 404 in case of empty password register function.

<h4><li>Auth register controller with body test</li></h4>
Checking if statusCode will return 404 in case of duplicate user trying to register.

<h4><li>Auth json response test</li></h4>
Calling register with username and password and expect json response to be its username and password to not be equal to an empty string.

</br>
<h3>Profile tests</h3>
<h4><li>Profile delete test</li></h4>
Calling delete_() to check if redirectUrl from json will be equal to be '/auth'

<h4><li>Profile get data test</li></h4>
Calling getData() and check if it is going to be strict equal to the username and password that was saved in db.

<h4><li>Profile update test</li></h4>
Calling update() with the session ID and a new username so that the statusCode be equal to -1.

</br>
<h3> Explanation </h3>
In generral, we have created unit tests on each public module that we had in our web application and also on every public function we had. the tests considered different scenarios on how the functions may behave and what could be the possible bugs in the program. 
