https://bookly-react.netlify.app/
# Bookly : Book Reading Web App with Google Books API

This is a simple Single Page Web App (SPA) for reading and exploring books using the Google Books API. This app is built with React and allows users to search for books, view book details, and read a preview of the books they find. It provides an engaging and user-friendly interface for discovering and exploring a wide range of books available through the Google Books API.

## Features

- **Book Search**: Users can search for books using keywords, titles, authors, or any other criteria.
- **Book Details**: Users can click on a book to view detailed information about it, including the title, author, description, and more.
- **Preview**: Users can read a preview of the selected book if available in the Google Books API.
- **Responsive Design**: The app is responsive and works well on various screen sizes and devices.

## Getting Started

Follow these steps to set up and run the web app locally:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Akshay02022/Bookly.git
   cd Bookly
   ```

2. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # OR
   yarn install
   ```

3. Get a Google Books API Key:
   - Visit the [Google Developers Console](https://console.developers.google.com/).
   - Create a new project (if you don't have one already).
   - Enable the "Google Books API" for your project.
   - Create credentials for your project and obtain an API key.

4. Create a `.env` file in the project's root directory and add your Google Books API key as follows:

   ```env
   REACT_APP_GOOGLE_BOOKS_API_KEY=YOUR_API_KEY
   ```

5. Start the development server:

   ```bash
   npm start
   # OR
   yarn start
   ```

6. Open your web browser and access the app at `http://localhost:3000`.

## Usage

- Use the search bar to look for books by keywords, titles, or authors.
- Click on a book in the search results to view its details and read a preview.
- Enjoy exploring and reading books using the web app!

## Dependencies

This app uses the following major dependencies:

- React
- Axios (for making API requests)
- React Router (for routing within the app)
- dotenv (for handling environment variables)
- Google Books API (for book data)

Make sure to refer to the `package.json` file for a complete list of dependencies and their versions.

## Contributing

If you would like to contribute to this project, please feel free to create a pull request. We welcome any improvements, bug fixes, or new features.

---

Happy reading with the Bookly:Book Reading Web App! If you have any questions or need assistance, please don't hesitate to contact us.
