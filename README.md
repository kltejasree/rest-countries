# REST Countries

A React application that displays information about countries using the REST Countries API.

Deployment link : https://rest-countries-one-fawn.vercel.app/

## Features

- View a list of countries with their flags.
- Search countries by name.
- Filter countries by region.
- View detailed information about each country.
- Dark mode toggle.
- Loading spinner while fetching data.
- Responsive design for different screen sizes.

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- REST Countries API
- Vite
- React Icons

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kltejasree/rest-countries.git
   ```

2. Navigate to the project folder:

   ```bash
   cd rest-countries
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_REST_COUNTRIES_API_KEY=your_api_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal.

## Project Structure

```text
src/
├── components/
│   ├── CountryCard.jsx
│   ├── CountryDetails.jsx
│   ├── CountryList.jsx
│   ├── FilterRegion.jsx
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   └── Spinner.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Learning Outcomes

- Understanding React components and props.
- Managing state using `useState`.
- Fetching API data using `useEffect`.
- Handling asynchronous operations.
- Implementing search and filter functionality.
- Conditional rendering.
- Using Tailwind CSS for styling.
