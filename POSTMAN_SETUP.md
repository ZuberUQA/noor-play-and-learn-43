
# Islamic Games API - Postman Setup Guide

This guide will help you set up and use the Postman collection for testing the Islamic Games API.

## Prerequisites

1. [Postman](https://www.postman.com/downloads/) installed on your computer
2. Islamic Games backend server running on your local machine or a remote server

## Setup Instructions

### 1. Import the Collection and Environment

1. Open Postman
2. Click on **Import** button in the top left corner
3. Select the files:
   - `Islamic_Games_API.postman_collection.json`
   - `Islamic_Games_Environment.postman_environment.json` 
4. Click **Import** to add them to your Postman workspace

### 2. Set Up the Environment

1. In the top right corner of Postman, click on the environment dropdown and select **Islamic Games Environment**
2. Click the eye icon next to the environment dropdown to see and edit variables
3. Update the following variables as needed:
   - `baseUrl`: The URL where your API is hosted (default: `http://localhost:5000`)

### 3. Authenticate to Use Admin Endpoints

Many endpoints require authentication, especially the admin ones. Follow these steps:

1. Run the **Admin Login** request under the Authentication folder
2. Update the request body with valid admin credentials
3. Send the request
4. The response will contain a JWT token
5. Copy the token value (without quotes)
6. Click the eye icon next to the environment
7. Set the `adminToken` variable to the token you copied
8. Click **Save**

### 4. Authenticate as a Regular User

For testing user-specific endpoints:

1. Run the **Register** request to create a new user (if needed)
2. Run the **Login** request with user credentials
3. Copy the token from the response
4. Set the `token` variable in the environment
5. Click **Save**

### 5. Update Other Variables

After making API calls, update these variables for subsequent requests:

- `gameId`: ID of a game (after creating or fetching a game)
- `gameSlug`: Slug of a game (e.g., "true-or-false")
- `questionId`: ID of a question (after creating or fetching a question)
- `userId`: ID of a user (from register/login response)

## Using the Collection

The collection is organized in folders:

1. **Authentication**: Register, login, and get current user
2. **Games**: CRUD operations for games
3. **Questions**: CRUD operations for different question types
4. **Users**: User profile management
5. **Progress**: User progress tracking
6. **Word of the Day**: Word of the day feature

## Tips for Testing

1. Run the requests in order within each folder
2. Always authenticate before testing protected endpoints
3. After creating a resource (game, question, etc.), update the corresponding environment variable
4. Check the **Pre-request Script** and **Tests** tabs for any additional functionality

## Troubleshooting

- **401 Unauthorized**: Make sure your token is valid and properly set in the environment
- **404 Not Found**: Check that you're using correct IDs and slugs in the request URLs
- **400 Bad Request**: Verify your request body matches the expected format

If you have questions or issues, please refer to the API documentation or contact the development team.
