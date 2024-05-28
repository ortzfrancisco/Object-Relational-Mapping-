Module 13 Challenge: E-commerce Back End
Due Date: May 6 by 11:59 PM
Points: 100
Submission: Text entry box

Objective:
Build the back end for an e-commerce site using Express.js, Sequelize, and a MySQL database. This will involve configuring the API to interact with the database, creating and associating models, and implementing CRUD operations.

User Story:
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

Acceptance Criteria:
Database Connection:

Add database name, MySQL username, and password to an environment variable file.
Connect to the database using Sequelize.
Database Schema and Seeding:

Enter schema and seed commands to create and seed a development database.
Application Invocation:

Start the server and sync Sequelize models to the MySQL database.
API Routes in Insomnia Core:

Test GET routes for categories, products, and tags.
Test POST, PUT, and DELETE routes for categories, products, and tags.
Deliverables:
GitHub Repository: Include application code and a README file.
Walkthrough Video: Demonstrate the functionality and acceptance criteria.
Steps to Complete the Challenge:
Clone Starter Code:

Clone the starter code repository and make your own repository with it. Do not fork the starter code repository.
Environment Variables:

Use the dotenv package to store sensitive data (MySQL username, password, database name).
Database Models:

Category:
id: Integer, primary key, auto increment, not null.
category_name: String, not null.
Product:
id: Integer, primary key, auto increment, not null.
product_name: String, not null.
price: Decimal, not null, validated as decimal.
stock: Integer, not null, default value 10, validated as numeric.
category_id: Integer, references category model's id.
Tag:
id: Integer, primary key, auto increment, not null.
tag_name: String.
ProductTag:
id: Integer, primary key, auto increment, not null.
product_id: Integer, references product model's id.
tag_id: Integer, references tag model's id.
Model Associations:

Product belongs to Category.
Category has many Product models.
Product belongs to many Tag models.
Tag belongs to many Product models using the ProductTag model.
API Routes:

Fill out routes in product-routes.js, tag-routes.js, and category-routes.js to perform CRUD operations using Sequelize models.
Database Seeding:

Use npm run seed to seed data to the database for testing.
Sync Sequelize:

Ensure Sequelize models sync to the MySQL database on server start.
Testing with Insomnia Core:

Test GET routes for all categories, products, and tags.
Test GET routes for single category, product, and tag.
Test POST, PUT, and DELETE routes for categories, products, and tags.
Grading Criteria:
Deliverables (10%):

GitHub repository with application code.
Walkthrough Video (37%):

Demonstrate all technical acceptance criteria.
Show schema creation, database seeding, server start, and API routes testing in Insomnia Core.
Technical Acceptance Criteria (40%):

Use MySQL2 and Sequelize packages.
Use dotenv for environment variables.
Sync Sequelize models to MySQL on server start.
Include all column definitions and model associations.
Repository Quality (13%):

Unique name, best practices for file structure, naming conventions, indentation, comments, commit messages, and README.
Submission Requirements:
Submit BOTH of the following for review:

Walkthrough video demonstrating the application's functionality and acceptance criteria.
URL of the GitHub repository with a README describing the project and a link to the video.
Note:

If submission is marked as “0”, it is incomplete and does not count towards graduation requirements.
You are allowed to miss up to two Challenge assignments and still earn your certificate.
Resources and Support:
Slack Channel/Peer Support
AskBCS Learning Assistants in Slack
Instructor Office Hours
Tutoring Sessions
Student Success Advisor
If you need additional help, reach out to your instructional team or submit a support ticket in the Student Support section of your BCS application.
