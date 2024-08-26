# Form Management API

This API provides endpoints for creating, updating, and retrieving form data. It interacts with a database to manage form configurations and names.

## Endpoints

### Create Form

- **URL**: `/api/create-form`
- **Method**: `POST`
- **Request Body**: JSON object containing `config` (object) and `name` (string).
- **Response**: JSON object with a success message and the created form details.

### Update Form

- **URL**: /api/update-form
- **Method**: POST
- **Request Body**: JSON object containing `config` (object), `name` (string), and `id` (integer).
- **Response**: JSON object with a success message and the updated form details.

### List All Forms

- **URL**: /api/list-all-forms
- **Method**: POST
- **Request Body**: None required.
- **Response**: JSON object with a success message and an array of all forms, each containing `id` and `name`.

### List One Form

- **URL**: /api/list-one-form
- **Method**: POST
- **Request Parameters**: Query parameter `id` (integer).
- **Response**: JSON object with a success message and the details of the requested form.

## Error Handling

All endpoints return a 500 status code and an error message if an internal server error occurs. The error message provides details about the failure.

## Setup

1. Clone the repository.
2. Install dependencies with:
   npm install
   
3. Start the server with:
   node server.js

   The server will be running on http://localhost:3000
   
