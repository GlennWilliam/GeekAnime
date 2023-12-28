# Anime Website

Welcome to the Anime Website, a platform for anime enthusiasts to explore trending anime, discover recommendations, and engage in discussions. This project utilizes Next.js, React JS for the user interface, Jikan API for anime data, and Prisma for connecting to a MySQL database. Users can enjoy a seamless experience with features like watching trailers, bookmarking favorite anime, and engaging in discussions.

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/5e787a40-9bf5-4009-9e00-d7ab64312e28)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/976eedce-1286-438a-bd9c-17e5fa784ee0)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/c47f868b-fd1a-42ec-b4e0-dd2756f193ef)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/c4c5609a-334d-4055-9d01-91baf3001b22)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/78aa7f0f-1574-475a-950d-119716571506)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/f92a4ed7-9f57-4805-aec6-572689da074d)

![image](https://github.com/GlennWilliam/GeekAnime/assets/121201497/c218fa88-fb2b-4b20-9467-680a7fad73b2)

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
Search: Easily search for specific anime titles.

## Getting Started
1. Clone this reporsitory: https://github.com/GlennWilliam/GeekAnime.git
2. Install dependencies: npm install
3. Set up the MySQL database and update the Prisma configuration in prisma/schema.prisma with your database connection details.
4. Create your database name. This project has a database name of "geekanime". If you want to use another database name, make sure to configure the .env file. 
5. Run migrations: npx prisma migrate dev
6. Edit the .env file for authenticating the github account. The github client id and secret id can be obtained from your github account
7. Start the development server: npm run dev
8. Access the website at http://localhost:3000 in your browser.
