# Express.js Basics with Routing

#### Section A: Practical Coding Tasks

**1. Creating an Express.js Route for Home Page**

- Write a route in Express.js that serves a `home.html` file. Create a new HTML file called `home.html` that contains an `<h1>` tag with the message "Welcome to ExpressJs Tutorial". Ensure that the home page is served to the client when the `/home` route is accessed.

**2. Serving JSON Data from a User File**

- Modify the route `/profile` to return all details from a `user.json` file in JSON format. The file should be sent as a response when a client makes a request to the `/profile` route.

**3. Implementing User Authentication**

- Modify the `/login` route to accept `username` and `password` as JSON body parameters.
- Read user data from `user.json` file.
- If the `username` and `password` are valid, return the following response:

    ```json
    {
        "status": true,
        "message": "User Is valid"
    }
    ```

- If the `username` is invalid, return:

    ```json
    {
        "status": false,
        "message": "User Name is invalid"
    }
    ```

- If the `password` is invalid, return:

    ```json
    {
        "status": false,
        "message": "Password is invalid"
    }
    ```

**4. Creating a Logout Route**

- Modify the `/logout` route to accept a `username` as a parameter.
- Return a message in HTML format that displays `<b>{username} successfully logged out.<b>` when a user accesses the `/logout` route.

**5. Add error handling middleware to handle below error**

- Return 500 page with message "Server Error"
```
app.use((err,req,res,next) => {
  res.send('This is error router');
});
```
---

#### Section B: Short Answer Questions

**6. Explain the Purpose of `express.Router()` in the Code Above.**

- Why is `express.Router()` used in Express.js applications, and how does it benefit the code structure?

**7. Error Handling in Express.js**

- How would you implement error handling in the Express routes to ensure that any issues (such as file not found or server errors) are appropriately handled? Provide an example.

---

#### Section C: Bonus

**7. Dynamic Port Binding in Express.js**

- Explain how the `app.listen(process.env.port || 8081)` line works and why it's useful in production environments.

---
# Submission Guideline
 Process of creating a ZIP file, GitHub repository, and gathering screenshots as per your instructions. Here’s the step-by-step guide to complete the exercise:

### Step 1: Complete the Exercise

1. **Understand the Node/Express/Routes Project:**
   - Open the provided exercise project.
   - Go through the source code and ensure all comments and instructions are followed carefully.

2. **Fix Any Errors:**
   - Run the project locally and test it using Postman (or another tool).
   - If you encounter any errors, review the error messages and adjust the code accordingly. Ensure the API routes and responses are working properly.

3. **Capture Screenshots:**
   - After testing in Postman, take screenshots of the output and any errors you encounter.
   - Save these screenshots for submission later.

### Step 2: Create ZIP File

1. **Prepare the Project Files:**
   - Make sure your project is structured properly, with all necessary files like `package.json`, route files, controllers, etc.
   - If there are any `node_modules`, remove them to keep the ZIP file smaller.

2. **Zip the Project:**
   - On Windows: Right-click on your project folder, select "Send to" > "Compressed (zipped) folder".
   - On Mac: Right-click the project folder and choose "Compress".
   - Rename the ZIP file to `StudentID_COMP3123-exec05.zip` (replace `StudentID` with your actual student ID).

### Step 3: Create GitHub Repository

1. **Sign in to GitHub:**
   - Go to [GitHub](https://github.com) and log in to your account.

2. **Create a New Repository:**
   - Click on the `+` icon in the top right corner and select "New repository".
   - Name the repository `StudentID_COMP3123-exec05` (replace `StudentID` with your actual student ID).
   - Choose to initialize it with a `README.md` (optional) and set visibility (public or private).

3. **Push Your Code to GitHub:**
   - If you haven’t done so already, open your terminal and navigate to your project folder.
   - Initialize a git repository using the following commands:

     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

   - Link the GitHub repository:

     ```bash
     git remote add origin https://github.com/yourusername/StudentID_COMP3123-exec05.git
     git branch -M main
     git push -u origin main
     ```

### Step 4: Upload Screenshots

1. **Upload Screenshots to the Repository:**
   - You can upload your screenshots directly into the GitHub repository by dragging and dropping them into the main directory (or any folder structure you like).

2. **Include Postman Screenshots:**
   - Make sure to include the screenshots of Postman responses in your GitHub repository as part of the submission.

### Step 5: Submission

1. **Submit the GitHub Link:**
   - Copy the URL of your GitHub repository (e.g., `https://github.com/yourusername/StudentID_COMP3123-exec05`).
   - Share this URL according to your course submission guidelines (via email or SLACK).

2. **Include ZIP File if Needed:**
   - Attach the ZIP file (`StudentID_COMP3123-exec05.zip`) along with your submission, if required.

Let me know if you need any further help!
