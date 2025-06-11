<h1> NodeJS Basics </h1>
NodeJS provides a medium to run JavaScript outside a browser.

<h1>Setup of JSON package</h1>
In order to test file against eslint:
   configure package.json file
   configure babel.config.js file
   configure .eslintrc.js file
   Then run npm install on the CLI
   <i> To test file</i>: npx eslint filename


<b>Using process in Node.js to Access Command Line Arguments and the Environment</b>
Node.js provides the global process object to interact with the current Node process. It includes:

<code>process.argv:</code> Access command-line arguments

<code>process.env:</code> Access environment variables

process.argv is an array containing the command-line arguments passed when launching the Node process.


<code>process.argv[0]:</code> Path to the Node.js executable

<code>process.argv[1]:</code> Path to the script being executed

<code>process.argv[2] and beyond:</code> Actual user arguments

<h1> How to run nodejs application on the console</h1>
<code>node <filename> <optional>: command line argument

<code>process.env</code> — Environment Variables
 What is process.env?
process.env is an object that contains the user environment variables. These can be set:
<ul>
<ol>In the terminal before running the script</ol>

<ol>Using .env files with libraries like dotenv</ol>

🧠 Key Points:
All environment variables are strings.

Do not store sensitive credentials in source code—use environment variables.

Example 2: Using dotenv for a .env file
🔹 Step 1: Install the package

<code> npm install dotenv</code>

Step 2: Create .env
<code>
PORT=5000
DB_NAME=job_seeker
</code>
