# Anime Website

Welcome to the Anime Website, a platform for anime enthusiasts to explore trending anime, discover recommendations, and engage in discussions. This project utilizes Next.js, React JS for the user interface, Jikan API for anime data, and Prisma for connecting to a MySQL database. Users can enjoy a seamless experience with features like watching trailers, bookmarking favorite anime, and engaging in discussions.

## Features
Trending Anime: Explore the latest trending anime.
Anime Recommendations: Discover personalized anime recommendations that change on every page restart.
Pagination: Seamless navigation through anime lists with pagination.
Anime Details: View detailed information for each anime, including synopsis, ranking, rating score, episode count, and age category.
Watch Trailers: Watch trailers for your favorite anime directly on the website.
GitHub Authentication: Log in using your GitHub account.
Bookmarks: Logged-in users can bookmark their favorite anime.
Comments: Post and read comments on anime pages.
Profile Security: Users cannot access the profile page without proper authentication.

## Getting Started
1. Clone this reporsitory: https://github.com/GlennWilliam/GeekAnime.git
2. Install dependencies: npm install
3. Set up the MySQL database and update the Prisma configuration in prisma/schema.prisma with your database connection details.
4. Create your database name. This project has a database name of "geekanime". If you want to use another database name, make sure to configure the .env file. 
5. Run migrations: npx prisma migrate dev
6. Edit the .env file for authenticating the github account. The github client id and secret id can be obtained from your github account
7. Start the development server: npm run dev
8. Access the website at http://localhost:3000 in your browser.
