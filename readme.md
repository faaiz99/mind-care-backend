# Mind Care Backend
![mc](https://github.com/faaiz99/mind-care-backend/assets/44613754/73c34131-d2d8-406f-ad17-2483fccce6b8)

Welcome to the **Mind Care Backend** repository! This project, developed by Faaiz Aslam, serves as the backend for the Mind Care application.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Project Overview

The Mind Care Backend is built to support the functionality of the Mind Care application, providing the necessary APIs and services to manage user data, authentication, and more.

## Features

- User authentication and authorization
- API endpoints for managing user data
- Integration with Stripe for payment processing
- Integration with NodeMailer for email notifications

## Getting Started

This section will guide you through setting up and running the Mind Care Backend on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB server running locally or accessible remotely

### Installation

1. Clone the repository: `git clone https://github.com/your-username/mind-care-backend.git`
2. Navigate to the project directory: `cd mind-care-backend`
3. Install dependencies: `npm install`

### Usage

1. Configure the environment variables (see [Environment Variables](#environment-variables)).
2. Start the server: `npm start`
3. The server will start on the specified port (default: 8080). You can access the APIs at `http://localhost:8080/api/v1`.

## Environment Variables

Before running the Mind Care Backend, make sure to set up the following environment variables:

- `MONGO_URI`: MongoDB connection URI.
- `MONGO_URI_ONLINE`: Online MongoDB connection URI.
- `PORT`: Port on which the server will run.
- `API_PORT`: Port for API endpoints.
- `ACCESS_JWT_SECRET`: Secret key for access JWT tokens.
- `REFRESH_JWT_SECRET`: Secret key for refresh JWT tokens.
- `NODE_ENV`: Node environment (e.g., 'development', 'production').
- `API_URL`: Base URL for API endpoints.
- `PUB_STRIPE`: Stripe public key.
- `SECRET_STRIPE`: Stripe secret key.
- `user`: NodeMailer email user.
- `pass`: NodeMailer email password.

## Contributing

Contributions to the Mind Care Backend are welcome! To contribute, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request and describe your changes.

## License

This project is licensed under the [License Name] License - see the [LICENSE](LICENSE) file for details.

## Contact Information

For questions or support, please contact Faaiz Aslam at faaizaslam75@live.com

---

Thank you for checking out the Mind Care Backend! We hope you find it helpful, and we appreciate your feedback and contributions. Stay mindful and take care!
