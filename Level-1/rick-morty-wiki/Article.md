# Learn Reach JS by building Rick & Morty character Wiki

Today we're gonna learn react js by building a Rick and Morty Character Wiki. This is the project that we're gonna build today !

[Image here]

Here's a [live demo of the project] Link here

[Video Gif here]

The Topics that are going to be covered are -

[Image here]

- React Hooks[useState, useEffect]
- React Components
- Fetch API
- Bootstrap - for Styling
- Pagination
- Search bar
- Data Filtering
- Dynamic Routing

## You can watch this tutorial on YouTube as well if you like:

# Table of Contents -

- Setup
- Folder structure
- Data Fetching
- Card Components
- Pagination basics
- Search bar
- React-paginate
- Filters
- Dynamic Routing

# Project Setup

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dvqlz2dbwxw8hfw05s2w.png)

Before starting the project, follow these steps to setup our project -

- Create a folder named 'react-wiki'
- open folder in VS code
- open terminal and run these commands one by one 👇

```JS
npx create-react-app .

npm install bootstrap

npm install @popperjs/core --save

npm install sass

npm install react-paginate --save

npm start
```

To make our dev experience easier, download these VS code extensions

- ES7 React/Redux/GraphQL/React-Native snippets

# Folder structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q4m7qo4j58o8fge72dgx.png)

We are dividing our entire project into 4 components. They're -

- Cards
- Pagination
- Search
- Filter

Create a folder named 'components' inside your 'src' folder and make 4 folders like this 👇

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jbtsmr846ohxfbstg2zj.png)

Then, for each folder, create a JavaScript and Modular SCSS file. Something like this 👇

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oq4wuf82oy4bmk0ztts9.png)

### App.js

Some other changes you need to do -

- import React hooks and bootstrap at the top in App.js

  ```JS
  import "bootstrap/dist/css/bootstrap.min.css";
  import React, { useState, useEffect } from "react";
  ```

- import all our modules from components

  ```JS
  import Search from "./components/Search/Search";
  import Card from "./components/Card/Card";
  import Pagination from "./components/Pagination/Pagination";
  import Filter from "./components/Filter/Filter";
  ```

- inside the resturn statement, remove everything and place these 👇

  ```HTML
  <div className="App">
      <header className="fs-1 fw-bold text-capitalize text-center my-4 ubuntu">
        Rick & Morty <span className="text-primary">WiKi</span>
      </header>
  </div>
  ```

- jkdsa

This is our Result so far !

[Image here]

Congratulations ! we're done with the setup process, Let's start coding !

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zaff3h3an5botfzfdjxa.png)

<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

# Data Fetching from API

# Card Component

# Basic Pagination using React JS
