
# Test Project: Transaction Management App

Welcome to the test project! This exercise aims to evaluate your skills as a full-stack developer, with a focus on Next.js, TypeScript, and the described tech stack. The goal is to build a complete application including frontend, backend, and database functionality.

## Disclaimer

1. **Pay attention to build errors**: At the end of this project, the app will be deployed on Vercel to ensure it works correctly in production. Make sure the code is error-free and ready for production.

2. **Limited use of AI**: Please avoid using AI tools (e.g., ChatGPT, Copilot) during this exercise. If you choose to use them, do so only in cases of real necessity and ensure you fully understand any code included in the project. Demonstrating your own expertise is crucial.

---

## Project Requirements

### Goal
Build a mini full-stack app for financial transaction management.

### Functional Specifications

#### **Frontend**

- A page to display a list of transactions (with pagination).
- A form to add new transactions (required fields: description, amount, date, category).
- Filters for category and date range.
- Responsive styling using **TailwindCSS** and **Shadcn components**.

#### **Backend**

- Implement RESTful APIs using **Next.js API routes**:
  - `GET /api/transactions`: Returns the list of transactions with pagination and filters.
  - `POST /api/transactions`: Adds a new transaction.
  - `PUT /api/transactions/:id`: Updates an existing transaction.
  - `DELETE /api/transactions/:id`: Deletes a transaction.

#### **Database**

- Define a database schema for transactions (you will need to set up Prisma or another ORM of your choice). A sample schema for Prisma could look like this:

  ```typescript
  model Transaction {
    id          String  @id @default(uuid())
    description String
    amount      Float
    category    String
    date        DateTime
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
  }
  ```

#### **Extras (Bonus)**

- Create a `GET /api/sync` endpoint to simulate syncing transactions with an external mock API.
- Implement a dashboard with summaries (e.g., total spent, spending by category).

---

## Project Setup

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Instructions

1. Clone the repository to your local machine:

   ```bash
   git clone <REPO_URL>
   cd <REPO_FOLDER>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. **Frontend setup is pre-configured**:
   - The Next.js project is set up with TypeScript, TailwindCSS, and Shadcn components.
   - You will need to configure and implement the backend and database.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the app at `http://localhost:3000`.

---

## Project Structure
The repository includes the following base structure using the **App Router**:

```
/app
  /api
    /transactions
  /transactions
/components
```

- **app/api/transactions**: For backend API routes.
- **app/transactions**: For transaction management pages.
- **components**: For reusable frontend components.

---

## Evaluation Criteria

### Basics

1. **Code Organization**:
   - Folder structure and modularity.
   - Proper use of reusable components.

2. **Tech Stack Utilization**:
   - Proper implementation of the backend.
   - Effective use of TailwindCSS and Shadcn for styling.

3. **Robustness**:
   - Correct use of TypeScript.
   - Proper error handling (e.g., data validation, API errors).

### Extras

- Well-implemented dashboard.
- Mock API integration simulation.
- Unit or integration tests.
- Clean and responsive UI.

---

## Submission

1. Ensure the project is functional and build-error-free.
2. Push your code to the repository.
3. Notify when completed so the project can be deployed to Vercel.

Thank you, and good luck!
