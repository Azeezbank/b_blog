# Food Blogging Platform
## Overview
The Food Blogging Platform is a web application that allows users to read, create, and manage food-related blog posts. The platform provides an intuitive experience for readers and authors, including features for content management and user interaction.

## Features
- **Read Posts:** Browse and read food blog posts.
- **Create Posts:** Authenticated users can create new blog posts.
- **Delete Posts:** Authors can delete their own posts.
- **Content Management:** Full post content display with options to view, like, and comment.

## Technologies Used
+ **Frontend:** React.js, Bootstrap
+ **Backend:** Node.js, Express.js
+ **Database:** MySQL
+ **Hosting:** Vercel

## Getting Started
**Prerequisites**
- Node.js (>=14.x)
- MySQL
- NPM or Yarn

## Installation
1. Clone the Repository

*bash*
- **git clone** [https://github.com/Azeezbank/myblog.git]
**cd food-blogging-platform**

## Setup Backend

### Navigate to the backend directory:

- *bash*
- *cd backend*

2. Install dependencies:

- *bash*
- *npm install*

**Configure your environment variables. Create a .env file and add the following:**

+ env
+ Copy code
+ DB_HOST=your-database-host
+ DB_USER=your-database-username
+ DB_PASSWORD=your-database-password
+ DB_NAME=your-database-name
+ Start the server:

*bash*
*npm start*

## Setup Frontend

### Navigate to the frontend directory:

**bash**
**cd ../frontend**

### Install dependencies:

*bash*
*npm install*

#### Start the development server:

- *bash*
- *npm start*
- *Open your browser and go to* [http://localhost:3000] *to view the application.*

## Usage
1. **Home Page:** View a list of blog posts.
2. **Post Detail Page:** Read full blog posts with comments and likes.
3. **Create Post Page:** Authenticated users can create new posts.
4. **Edit/Delete Post:** Manage your posts through the author dashboard.

## API Endpoints
+ **GET /api/posts** - Retrieve all posts.
+ **GET /api/posts/:id** - Retrieve a single post by ID.
+ **POST /api/posts** - Create a new post.
+ **PUT /api/posts/:id** - Update an existing post.
+ **DELETE /api/posts/:id** - Delete a post.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
+ React.js for building the frontend.
+ Bootstrap for styling.
+ Node.js and Express.js for backend development.
+ MySQL for database management.
+ Vercel for deployment.