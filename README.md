# Orange Bar - Cocktail Recipe Finder

## Description
Orange Bar is a simple web application that connects to TheCocktailDB API to retrieve cocktail recipes. Users can search for cocktails by name or by ingredients and receive recipes directly from the app's interface.

## Table of Contents
1. [Features](#features)
2. [Installation and Setup](#installation-and-setup)
3. [Usage](#usage)
4. [Development Process](#development-process)
5. [API Integration](#api-integration)
6. [Tech Stack](#tech-stack)
7. [Future Improvements](#future-improvements)
8. [Contributing](#contributing)
9. [Acknowledgments](#acknowledgments)
10. [License](#license)

## Features
- **Search by Name**: Allows users to enter a cocktail name and retrieves the recipe.
- **Search by Ingredient**: Users can also find cocktails by specifying an ingredient, pulling up any cocktail that includes it.
- **Responsive Design**: Works well across both desktop and mobile devices.
- **Real-time API Integration**: Uses TheCocktailDB API to dynamically fetch cocktail recipes.

## Installation and Setup
This application is deployed and accessible at [Orange Bar](https://orangebar1.netlify.app/).
To set up locally:
1. Clone the repository.
2. Install dependencies (if any).
3. Set up any API keys as environment variables if required.
4. Run the application on a local server.

## Usage
1. Go to the [Orange Bar website](https://orangebar1.netlify.app/).
2. Use the search bar to enter either a cocktail name or an ingredient.
3. Click on the "Search" button to retrieve matching cocktail recipes.
4. Recipes will display with a list of ingredients and preparation instructions.

## Development Process
- **Objective**: The goal was to connect to an external cocktail API and create a user-friendly interface for retrieving cocktail recipes.
- **Challenges**: Ensuring smooth API calls and optimizing response handling to display accurate information.
- **Key Learnings**: Enhanced skills in API integration and responsive UI design.

## API Integration
- **API**: [TheCocktailDB](https://www.thecocktaildb.com/)
- **Endpoints Used**:
  - `Search by Name`: `/api/json/v1/1/search.php?s={cocktail_name}`
  - `Search by Ingredient`: `/api/json/v1/1/filter.php?i={ingredient}`
- **Handling Responses**: The application parses the JSON responses and dynamically renders results on the webpage.

## Tech Stack
- **Languages**: JavaScript, HTML, CSS
- **Libraries**: Axios for API calls (optional), vanilla JavaScript for DOM manipulation
- **Tools**: Deployed via Netlify for seamless access

## Future Improvements
- **Search Optimization**: Implement error handling and suggestions for non-existent cocktails.
- **UI Enhancements**: Add more animations and design elements for an engaging user experience.
- **Additional Filtering**: Allow filtering by alcoholic/non-alcoholic drinks, glass type, and more.

## Contributing
1. Fork the repository.
2. Make changes and commit them with clear messages.
3. Open a pull request for review.

## Acknowledgments
- **API Provider**: [TheCocktailDB](https://www.thecocktaildb.com/) for the cocktail recipes and data.

## License
This project is licensed under the MIT License.
