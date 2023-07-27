# Media Manager - CRUD of Products

Media Manager is a web application that allows users to manage media products like movies, series, and more. It provides a simple CRUD (Create, Read, Update, Delete) functionality for handling these media items. The application uses JSON Server as a mock backend to store and manage the product data.

## Prerequisites

Before running the application, make sure you have the following software installed:

- Node.js (v16 or higher)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Mandy9943/media-manager.git
```

2. Navigate to the project directory:

```bash
cd media-manager
```

3. Install the required dependencies:

```bash
yarn install
```

## Starting the Development Server

To run the development server and access the application locally, use the following command:

```bash
yarn dev
```

The development server will start, and you can access the application by visiting `http://localhost:3000` in your web browser.

## Running JSON Server

To simulate a backend for the CRUD operations, we use JSON Server. To start JSON Server and serve the mock data, run the following command:

```bash
yarn server
```

The JSON Server will be running at `http://localhost:4000`.

## Available Scripts

- `yarn run dev`: Starts the Next.js development server.
- `yarn run build`: Builds the production-ready application.
- `yarn run start`: Starts the production server (requires building the application first).
- `yarn run test`: Runs Jest in watch mode for testing.
- `yarn run server`: Starts JSON Server to provide a mock backend.

## Scripts note
If you like you can run all script with npm too.
Like :  
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run test`
- `npm run server`

## Dependencies

- [@chakra-ui/react](https://github.com/chakra-ui/chakra-ui): Chakra UI components for React.
- [@tanstack/react-table](https://github.com/tannerlinsley/react-table): A headless UI for building powerful tables & datagrids for React, Solid, Vue, Svelte and TS/JS..
- [axios](https://github.com/axios/axios): Promise-based HTTP client for making API requests.
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter): Axios adapter for mocking HTTP requests during testing.
- [formik](https://github.com/formium/formik): Form library for handling form state and validation.
- [next](https://github.com/vercel/next.js): The React framework for building server-side rendered and statically generated applications.
- [react-icons](https://github.com/react-icons/react-icons): Icon library for React applications.
- [swr](https://github.com/vercel/swr): React hooks library for remote data fetching.
- [valtio](https://github.com/pmndrs/valtio): Proxy state manager for React applications.
- [yup](https://github.com/jquense/yup): Schema validation library for JavaScript objects.

## Usage

1. Access the application at `http://localhost:3000`.
2. Use the CRUD functionality to manage media products (movies, series, etc.).
3. JSON Server provides the backend simulation at `http://localhost:4000`.
