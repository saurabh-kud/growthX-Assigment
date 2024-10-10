<h2 align='center'>Assignment Management</h2>
<p align="center">
<a href="https://github.com/saurabh-kud"><img title="Author" src="https://img.shields.io/badge/Author-saurabh-kud--red.svg?style=for-the-badge&logo=github"></a>
</p>

<p align="center">
<a href="https://github.com/saurabh-kud"><img title="Followers" src="https://img.shields.io/github/followers/saurabh-kud?color=teal&style=flat-square"></a>
<a href="https://github.com/saurabh-kud/growthX-Assignment/network/members"><img title="Forks" src="https://img.shields.io/github/forks/saurabh-kud/growthX-Assignment?color=lightgrey&style=flat-square"></a>
<a href="https://github.com/saurabh-kud/growthX-Assignment/issues"><img title="issues" src="https://img.shields.io/github/issues/saurabh-kud/growthX-Assignment?style=flat-square">
</a>

</p>

<p align="center">
    Assignment Managemt- manage your Assignmet
</p>

## api-postman-docs 🔗

[https://documenter.getpostman.com/view/38681155/2sAXxQcrmK](https://documenter.getpostman.com/view/38681155/2sAXxQcrmK)

## Api-Base-URL 🔗

[https://growthx-assignment-253v.onrender.com](https://growthx-assignment-253v.onrender.com)

> api might be show for first time because it is hosted on free service if we don't use that for sometime render shut-down service and it can take ~50sec to spin up

## Frontend live-link 🔗

[https://task-growthx.netlify.app/](https://task-growthx.netlify.app/)

## Frontend repo link 🔗

[https://github.com/saurabh-kud/growthX-Assigment-frontend](https://github.com/saurabh-kud/growthX-Assigment-frontend)

## creadential for testing purpous you can also create new account

```sh
 # admin user
 email : admin3@gmail.com
 password : admin@123

 # basic user
 email : user@gmail.com
 password : user@123

```

# task

You are tasked with developing a backend system for an assignment submission portal. The system should support users and admins where:

- **Users** can upload assignments.
  - Assignments in this case can just be an object like below
    ```json
    {
        'userId':Soumik,
        'task':'Hello World',
        'admin':'Alok',
    }
    ```
- **Admins** can accept or reject these assignments.
  - Admin can see all assignments tagged to them
  - Admins will see each the user name, task and timedate data
  - Admin can either reject or accept them

### Requirements:

1. **Database:**
   - Use MongoDB as your database.
2. **Structure and Functionality:**
   - There should be two types of users: **Admin** and **User**.
   - **Users** can:
     - Register and log in.
     - Upload assignments.
   - **Admins** can:
     - Register and log in.
     - View assignments tagged to them.
     - Accept or reject assignments.
3. **Endpoints:**
   - **User Endpoints:**
     - `POST /register` - Register a new user.
     - `POST /login` - User login.
     - `POST /upload` - Upload an assignment.
     - `GET /admins`- fetch all admins
   - **Admin Endpoints:**
     - `POST /register` - Register a new admin.
     - `POST /login` - Admin login.
     - `GET /assignments` - View assignments tagged to the admin.
     - `POST /assignments/:id/accept` - Accept an assignment.
     - `POST /assignments/:id/reject` - Reject an assignment.

# Bonus Added

- Added user can see their submit assignment `GET /usr-assignments`
- added refresh token route to get their token using refresh token `POST /refresh`
- Added Basic Frontend to demonstrate the full working api

# tech stack used

Backend

- nodejs, express,jwt, bcrypt

Database

- mongodb

Fronted

- html, css, js, React

## Installation

```sh

# Clone the repo
$ git clone https://github.com/saurabh-kud/growthX-Assignment

# go to growthX-Assignment directory
$ cd growthX-Assignment

# Install
$ npm install

# Setting Up ENV
> setup .env file for database and access token take refrence from .env.example file or below

# or can use this for as env change db url
DB_CONNECTION=db_url/assignment?retryWrites=true&w=majority
PORT=8080
JWT_TOKEN="test"
ACCESS_SECRET=test
REFRESH_SECRET=test

# Start
$ npm start

# Access your app
$ http://localhost:${PORT}

```

# endpoint response

> [GET] Home Endpoint [/](https://growthx-assignment-253v.onrender.com)

<details open>
<summary> See response</summary>
<p>

```json
RESPONSE 200
{
    "msg": "server is working fine🚀🚀",
    "app": "assignment_management",
    "uptime": "3.486 sec",
    "api_doc": "https://documenter.getpostman.com/view/38681155/2sAXxQcrmK"
}
```

</p>
</details>

> [POST] User Register Endpoint [/register](https://growthx-assignment-253v.onrender.com/register)

<details open>
<summary> See response</summary>
<p>

```json
{
    "name":"user2 raj",
    "email": "user2@gmail.com",
    "password":"user@123"
}

RESPONSE 201
{
    "status": true,
    "message": "User created successfully",
    "data": {
        "id": "67064a57d6c57f4d43d421cf",
        "name": "saurabh kumar",
        "email": "saurabh@gmail.com",
        "role": "user",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2F1cmFiaEBnbWFpbC5jb20iLCJpZCI6IjY3MDY0YTU3ZDZjNTdmNGQ0M2Q0MjFjZiJ9LCJpYXQiOjE3Mjg0NjU0OTUsImV4cCI6MTcyODU1MTg5NX0.2CN1sstOBfLVYkVewDLUwzIXWe6i0uyQ7O44ZqTetr4",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2F1cmFiaEBnbWFpbC5jb20iLCJpZCI6IjY3MDY0YTU3ZDZjNTdmNGQ0M2Q0MjFjZiJ9LCJpYXQiOjE3Mjg0NjU0OTUsImV4cCI6MTcyODcyNDY5NX0.QAoBX0pNGL3LhVVxSSJFDQVofAIVRkHSOG68HRGqqPs"
    }
}
```

</p>
</details>

> [POST] Admin Register Endpoint [/register](https://growthx-assignment-253v.onrender.com/register)

> For admin registration you have to pass role as admin for normal user no need to pass role

<details open>
<summary> See response</summary>
<p>

```json
{
    "name":"admin2",
    "email": "admin2@gmail.com",
    "password":"admin@123",
    "role": "admin"
}

RESPONSE 201
{
    "status": true,
    "message": "User created successfully",
    "data": {
        "id": "6706013338459c1aa3e65368",
        "name": "sachin kumar",
        "email": "admin@gmail.com",
        "role": "admin",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2NzA2MDEzMzM4NDU5YzFhYTNlNjUzNjgifSwiaWF0IjoxNzI4NDQ2NzcyLCJleHAiOjE3Mjg1MzMxNzJ9.db67j1m03tmDOOYYzpRDcGoMZpaVnDgdiPkYot5OYYw",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2NzA2MDEzMzM4NDU5YzFhYTNlNjUzNjgifSwiaWF0IjoxNzI4NDQ2NzcyLCJleHAiOjE3Mjg3MDU5NzJ9.yCYP_IRH3hoSajrwV-LHSK3qq_v4yBWoW8mtZiPcA_Q"
    }
}
```

</p>
</details>

> [POST] Login Endpoint [/login](https://growthx-assignment-253v.onrender.com/login)

<details open>
<summary> See response</summary>
<p>

```json
{
    "email": "admin1@gmail.com",
    "password":"admin@123"
}

RESPONSE 200
{
    "status": true,
    "message": "Login successfull",
    "data": {
        "id": "6705fcff38459c1aa3e65358",
        "name": "saurabh kumar",
        "email": "admin1@gmail.com",
        "role": "admin",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlkIjoiNjcwNWZjZmYzODQ1OWMxYWEzZTY1MzU4In0sImlhdCI6MTcyODUzNjM2MSwiZXhwIjoxNzI4NjIyNzYxfQ.0-NvZ4KV87hmzosPc7aoc8rbnPJu8ze_RFsZRejLfBE",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlkIjoiNjcwNWZjZmYzODQ1OWMxYWEzZTY1MzU4In0sImlhdCI6MTcyODUzNjM2MSwiZXhwIjoxNzI4NjIyNzYxfQ.LEC2p7tAwbdFQoS1MAbO9nALJiRMKqGnQpiWNrdpomE"
    }
}
```

</p>
</details>

> [GET] Current User Details Endpoint [/me](https://growthx-assignment-253v.onrender.com/me)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "status": true,
    "message": "sucessfully get profile ",
    "data": {
        "_id": "6705fdae38459c1aa3e6535e",
        "name": "saurabh kumar",
        "email": "user@gmail.com",
        "role": "user",
        "createdAt": "2024-10-09T03:51:10.090Z",
        "updatedAt": "2024-10-09T03:51:10.090Z",
        "__v": 0
    }
}
```

</p>
</details>

> [PUT] Update Profile Endpoint [/me](https://growthx-assignment-253v.onrender.com/me)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......

{
    "name": "updated name",
    "email" :"updated@gmail.com"
}

RESPONSE 201
{
    "status": true,
    "message": "User profile updated",
    "data": {
        "id": "6705fdae38459c1aa3e6535e",
        "name": "updated name",
        "email": "updated@gmail.com",
        "role": "user"
    }
}
```

</p>
</details>

> [POST] GET New Token After Expired Endpoint [/refresh](https://growthx-assignment-253v.onrender.com/refresh)

<details open>
<summary> See response</summary>
<p>

```json
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2NzA2MDEzMzM4NDU5YzFhYTNlNjUzNjgifSwiaWF0IjoxNzI4NTMzMjAwLCJleHAiOjE3Mjg2MTk2MDB9.V5QPlsHhRSRCtwc2fTiBhh3ILEMZQjufuPehtUvJl1Y"
}

RESPONSE 200
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2NzA2MDEzMzM4NDU5YzFhYTNlNjUzNjgifSwiaWF0IjoxNzI4NTMzMjE0LCJleHAiOjE3Mjg2MTk2MTR9.3gE3rdefw9b5mOnXFGZexUbiQCDMz3nzzsZ7NFqP99w",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2NzA2MDEzMzM4NDU5YzFhYTNlNjUzNjgifSwiaWF0IjoxNzI4NTMzMjE0LCJleHAiOjE3Mjg3OTI0MTR9.TfbFGhcN9Ys_4fqfkft3n70IIbOd-mh3wOP9TGmtJYU"
}
```

## user route

</p>
</details>

> [POST] Upload Assignment Endpoint [/upload](https://growthx-assignment-253v.onrender.com/upload)

<details open>
<summary> See response</summary>
<p>

```json

Headers : Bearer eyJhbGciO.......
{
    "title": "backend auth ",
    "description": "i have completed the backend auth learning how to implement and how it works",
    "adminId": "6705fcff38459c1aa3e65358"
}

RESPONSE 201
{
    "status": true,
    "message": "Assignment created successfully",
    "data": {
        "id": "67075e414ab8aab4e554394e",
        "title": "backend auth ",
        "description": "i have completed the backend auth learning how to implement and how it works",
        "status": "pending",
        "adminId": "6705fcff38459c1aa3e65358"
    }
}
```

</p>
</details>

> [get] Get All Admins Endpoint [/admins](https://growthx-assignment-253v.onrender.com/admins)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "type": "success",
    "message": "admin fetched successfully",
    "data": [
        {
            "_id": "6705fcff38459c1aa3e65358",
            "name": "saurabh kumar",
            "email": "admin1@gmail.com",
            "role": "admin",
            "createdAt": "2024-10-09T03:48:15.704Z",
            "updatedAt": "2024-10-09T03:48:15.704Z",
            "__v": 0
        },
        {
            "_id": "6706013338459c1aa3e65368",
            "name": "sachin kumar",
            "email": "admin@gmail.com",
            "role": "admin",
            "createdAt": "2024-10-09T04:06:11.936Z",
            "updatedAt": "2024-10-09T04:06:11.936Z",
            "__v": 0
        },
        {
            "_id": "6707552228cac0eb8b97b55d",
            "name": "admin2",
            "email": "admin2@gmail.com",
            "role": "admin",
            "createdAt": "2024-10-10T04:16:34.498Z",
            "updatedAt": "2024-10-10T04:16:34.498Z",
            "__v": 0
        }
    ]
}
```

</p>
</details>

> [get] Get All Assignment Endpoint [/usr-assignments](https://growthx-assignment-253v.onrender.com/usr-assignment)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "status": true,
    "message": "Assignment fetched successfully",
    "data": [
        {
            "_id": "67075d3428cac0eb8b97b570",
            "title": "backend auth ",
            "description": "i have completed the backend auth learning how to implement and how it works",
            "adminId": {
                "_id": "6705fcff38459c1aa3e65358",
                "name": "saurabh kumar"
            },
            "status": "pending",
            "createdAt": "2024-10-10T04:51:00.455Z",
            "updatedAt": "2024-10-10T04:51:00.455Z",
            "__v": 0
        },
        {
            "_id": "67075bed28cac0eb8b97b56c",
            "title": "hello world!",
            "description": "i have completed the hello world program",
            "adminId": {
                "_id": "6705fcff38459c1aa3e65358",
                "name": "saurabh kumar"
            },
            "status": "pending",
            "createdAt": "2024-10-10T04:45:33.313Z",
            "updatedAt": "2024-10-10T04:45:33.313Z",
            "__v": 0
        }
    ]
}
```

</p>
</details>

## admin route

> [get] Get All Assigned Assignment (Admin) Endpoint [/assignments](https://growthx-assignment-253v.onrender.com/assignments)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "status": true,
    "message": "Assignment fetched successfully",
    "data": [
        {
            "_id": "6706246df02e57abf2aad73c",
            "title": "assignment of cap79",
            "description": "create a full stack website where you can post your data and all",
            "userId": {
                "_id": "6705fdae38459c1aa3e6535e",
                "name": "updated name"
            },
            "status": "success",
            "createdAt": "2024-10-09T06:36:29.547Z",
            "updatedAt": "2024-10-09T07:45:38.790Z",
            "__v": 0
        },
        {
            "_id": "67062cfb8a2a83af747882d1",
            "title": "assignment of cap79",
            "description": "create a full stack website where you can post your data and all",
            "userId": {
                "_id": "6705fdae38459c1aa3e6535e",
                "name": "updated name"
            },
            "status": "pending",
            "createdAt": "2024-10-09T07:12:59.958Z",
            "updatedAt": "2024-10-09T07:12:59.958Z",
            "__v": 0
        },
        {
            "_id": "67062e76bac487bb5e440c95",
            "title": "assignment of cap79",
            "description": "create a full stack website where you can post your data and all",
            "userId": {
                "_id": "6705fdae38459c1aa3e6535e",
                "name": "updated name"
            },
            "status": "failed",
            "createdAt": "2024-10-09T07:19:18.263Z",
            "updatedAt": "2024-10-09T10:15:15.841Z",
            "__v": 0
        },
        {
            "_id": "67065534a9af65415b482e02",
            "title": "hello world!",
            "description": "i have completed the hello world program",
            "userId": {
                "_id": "67064a57d6c57f4d43d421cf",
                "name": "saurabh kumar"
            },
            "status": "success",
            "createdAt": "2024-10-09T10:04:36.153Z",
            "updatedAt": "2024-10-09T10:14:02.027Z",
            "__v": 0
        }
    ]
}
```

</p>
</details>

> [POST] Accept Assignment Endpoint [/assignments/:id/accept](https://growthx-assignment-253v.onrender.com/upload/assignments/:id/accept)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "status": true,
    "message": "Assignment accepted successfully",
    "data": {
        "id": "67065534a9af65415b482e02",
        "title": "hello world!",
        "description": "i have completed the hello world program",
        "userId": "67064a57d6c57f4d43d421cf",
        "adminId": "6706013338459c1aa3e65368",
        "status": "success"
    }
}
```

</p>
</details>

> [POST] Reject Assignment Endpoint [/assignments/:id/reject](https://growthx-assignment-253v.onrender.com/upload/assignments/:id/reject)

<details open>
<summary> See response</summary>
<p>

```json
Headers : Bearer eyJhbGciO.......


RESPONSE 200
{
    "status": true,
    "message": "Assignment rejected successfully",
    "data": {
        "id": "67062e76bac487bb5e440c95",
        "title": "assignment of cap79",
        "description": "create a full stack website where you can post your data and all",
        "userId": "6705fdae38459c1aa3e6535e",
        "adminId": "6706013338459c1aa3e65368",
        "status": "failed"
    }
}
```

</p>
</details>

## Screenshot

- Frontend
<div align="center">
  <img  src="./example/1.png" />
</div>
<br/>
<div align="center">
  <img  src="./example/2.png" />
</div>
<br/>
<div align="center">
  <img  src="./example/3.png" />
</div>
<br/>
<div align="center">
  <img  src="./example/4.png" />
</div>
<br/>
<div align="center">
  <img  src="./example/5.png" />
</div>
<br/>

## Author

👤 **Saurabh kumar**

- Github: [@saurabh-kud](https://github.com/saurabh-kud)
- LinkedIN: [@saurabh-kud](https://www.linkedin.com/in/saurabh-kud/)

---

## License

&copy; Saurabh Kumar | MIT
