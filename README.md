<div align="center">

# ⚙️ Livona Backend

### RESTful Backend powering Livona — A Modern Airbnb-inspired Property Rental Platform

<p align="center">

<a href="https://livona-backend.onrender.com/api">
<img src="https://img.shields.io/badge/API-Live-success?style=for-the-badge">
</a>

<a href="https://github.com/rishabhprasad-12/Livona">
<img src="https://img.shields.io/badge/Main_Repository-181717?style=for-the-badge&logo=github">
</a>

<a href="https://github.com/rishabhprasad-12/Livona-Frontend">
<img src="https://img.shields.io/badge/Frontend-61DAFB?style=for-the-badge&logo=react">
</a>

</p>

<p>

![NodeJS](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?logo=cloudinary)
![Joi](https://img.shields.io/badge/Joi-Validation-blue)
![Render](https://img.shields.io/badge/Render-Deployed-success)

</p>

> Secure • RESTful • Scalable • Production Ready

</div>

---

# 📖 Overview

Livona Backend provides secure REST APIs for the Livona property rental platform.

It handles

- 🔐 Authentication
- 🏡 Listings
- ☁ Cloudinary Image Upload
- ❤️ Wishlist
- ⭐ Reviews
- 👤 Authorization
- 📦 MongoDB Database Operations

The backend follows a modular MVC architecture, making it scalable and maintainable.

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| 🔐 JWT Authentication | Secure login & protected routes |
| 🔒 Authorization | Listing owner authorization |
| ☁ Cloudinary Upload | Image upload & optimization |
| 🏡 CRUD Listings | Complete listing management |
| ❤️ Wishlist | User favourite listings |
| ⭐ Reviews | Reviews & ratings |
| 🛡 Joi Validation | Server-side validation |
| 📦 MongoDB Atlas | Cloud Database |
| 🚀 REST API | Clean REST endpoints |
| ⚡ MVC Architecture | Scalable codebase |

---

# 🏗 Backend Architecture

```text
                 Client
                    │
             HTTP Request
                    │
                    ▼
              Express Router
                    │
        ┌───────────┴────────────┐
        ▼                        ▼
   Authentication          Middleware
        │                        │
        └───────────┬────────────┘
                    ▼
              Controllers
                    │
        ┌───────────┼─────────────┐
        ▼           ▼             ▼
    MongoDB     Cloudinary      JWT
```

---

# 📂 Project Structure

```text
backend

│

├── controllers
│ ├── auth.js
│ ├── listing.js
│ ├── review.js
│ └── wishlist.js
│
├── middleware
│ ├── auth.js
│ ├── upload.js
│ └── middleware.js
│
├── models
│ ├── user.js
│ ├── listing.js
│ ├── review.js
│ └── wishlist.js
│
├── routes
│ ├── user.js
│ ├── listing.js
│ ├── review.js
│ └── wishlist.js
│
├── utils
│ ├── cloudinary.js
│ ├── ExpressError.js
│ ├── ratingUtils.js
│ └── wrapAsync.js
│
├── app.js
│
├── schema.js
│
└── package.json
```

---

# 🔄 Request Lifecycle

```text
Client

↓

Express Route

↓

Authentication

↓

Authorization

↓

Validation

↓

Controller

↓

Database

↓

Response
```

---

# 🔐 Authentication Flow

```text
Register

↓

Password Hashing

↓

MongoDB

↓

Login

↓

JWT Generated

↓

Client Stores Token

↓

Authorization Header

↓

Protected API Access
```

---

# ☁ Cloudinary Upload Flow

```text
Choose Image

↓

Multer Memory Storage

↓

Buffer

↓

Cloudinary Upload

↓

Secure URL Generated

↓

MongoDB Stores URL

↓

Image Display
```

---

# ❤️ Wishlist Workflow

```text
User

↓

Add Listing

↓

Wishlist Collection

↓

Fetch Wishlist

↓

Populate Listing

↓

Frontend Display
```

---

# ⭐ Review Workflow

```text
User

↓

Submit Review

↓

MongoDB

↓

Average Rating Updated

↓

Listing Updated

↓

Frontend Display
```

---

# 📊 Database Models

## User

```text
username

email

password

wishlist[]
```

---

## Listing

```text
title

description

price

location

country

category

image

owner

reviews[]

averageRating

totalReviews
```

---

## Review

```text
rating

comment

author

listing
```

---

# 🌐 REST API

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Listings

| Method | Endpoint |
|---------|----------|
| GET | /api/listings |
| GET | /api/listings/:id |
| POST | /api/listings |
| PUT | /api/listings/:id |
| DELETE | /api/listings/:id |

---

## Reviews

| Method | Endpoint |
|---------|----------|
| POST | /api/listings/:id/review |
| DELETE | /api/listings/:id/review/:reviewId |

---

## Wishlist

| Method | Endpoint |
|---------|----------|
| GET | /api/wishlist |
| POST | /api/wishlist/:listingId |
| DELETE | /api/wishlist/:listingId |

---

# 🛡 Security

✔ JWT Authentication

✔ Password Hashing using bcrypt

✔ Protected Routes

✔ Authorization Middleware

✔ Joi Validation

✔ Secure Cloudinary Uploads

✔ Environment Variables

---

# ⚠ Error Handling

Custom error middleware handles

- Validation Errors
- Authentication Errors
- Authorization Errors
- MongoDB Errors
- Cast Errors
- 404 Routes
- Internal Server Errors

---

# 🌱 Environment Variables

```env
PORT=

MONGO_URL=

JWT_SECRET=

CLOUD_NAME=

CLOUD_API_KEY=

CLOUD_API_SECRET=

FRONTEND_PROD_URL=
```

---

# 🚀 Run Locally

Clone repository

```bash
git clone https://github.com/rishabhprasad-12/Livona-Backend.git
```

Install dependencies

```bash
npm install
```

Run server

```bash
npm run dev
```

---

# ☁ Deployment

| Service | Platform |
|----------|----------|
| Backend | Render |
| Database | MongoDB Atlas |
| Image Storage | Cloudinary |

---

# 📈 Future Improvements

- OAuth Authentication

- Email Verification

- Booking Module

- Payment Gateway

- Admin Dashboard

- Rate Limiting

- Redis Caching

- API Documentation (Swagger)

- Logging System

---

# 🤝 Contributing

```bash
git checkout -b feature/AmazingFeature

git commit -m "Added AmazingFeature"

git push origin feature/AmazingFeature
```

Open a Pull Request 🚀

---

# 🔗 Related Repositories

| Repository | Link |
|------------|------|
| Main | https://github.com/rishabhprasad-12/Livona |
| Frontend | https://github.com/rishabhprasad-12/Livona-Frontend |

---

# 👨‍💻 Author

## Rishabh Shankar Prasad

GitHub

https://github.com/rishabhprasad-12
---

<div align="center">

### ⭐ Star this repository if you found it useful!

Built with ❤️ using Node.js, Express, MongoDB & Cloudinary.

</div>
