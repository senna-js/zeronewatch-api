<p align="center">
  <a href="https://github.com/senna-js/zeronewatch-api">
<!--     <img src="https://media.tenor.com/3S9l9HzhGVcAAAAC/shake-kaninayuta.gif" alt="Logo" width="200" height="200"> -->
  </a>

  <h3 align="center">Zeronewatch API</h3>

  <p align="center">
    <b>Restful API Drakor Subtitle Indonesia</b><br />
    <span>I make this API for learning</span>
    <br />
</p>

<h1> Table of Contents </h1>

- [Installation](#installation)
  - [Local](#local)
- [List Source](#list-source)
  - [Drakor](#drakor)
    - [Drakorkita](#drakorkita)

## Instalation

### Local

Run this command for install the project

```sh
git clone https://github.com/senna-js/zeronewatch-api.git
cd zeronewatch-api
npm install
```

Start your serve with this command

```sh
npm start
```

Server will running on http://localhost:3000

## List Source

There is some source at zeronewatch api

## Drakor
  - ### Drakorkita

    Drakorkita adalah tempat kumpulan series drakor dengan bahasa indonesia
  
    - #### Series Drakor

      Get series drakor

      ```bash
      /drakorkita/series?page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/series
  
    - #### Movie Film

      Get movie film

      ```bash
      /drakorkita/movie?page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/movie
  
    - #### Movie Newest

      Get movie newest

      ```bash
      /drakorkita/movie/newest
      ```
      example: http://localhost:3000/drakorkita/movie/newest
  
    - #### Series Ongoing

      Get series ongoing

      ```bash
      /drakorkita/series/ongoing?page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/series/ongoing
      
    - #### Series Updated

      Get series updated

      ```bash
      /drakorkita/series/updated
      ```
      example: http://localhost:3000/drakorkita/series/updated
      
    - #### Series Completed

      Get series completed

      ```bash
      /drakorkita/series/completed?page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/series/completed
      
    - #### Detail Series/Movie

      Get detail series or movie

      ```bash
      /drakorkita/detail/:endpoint
      ```
      example: http://localhost:3000/drakorkita/detail/revenant-2023-u9p7
          
    - #### Genre List

      Get genre list
  
      ```bash
      /drakorkita/genres
      ```
      example: http://localhost:3000/drakorkita/genres
    
    - #### Detail Genre

      Get detail genre
  
      ```bash
      /drakorkita/genres/:endpoint?page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/genres/Action

    - #### Search Series/Movie

      Search series or movie
  
      ```bash
      /drakorkita/search?query=keyword&page=1
      ```
      default page is 1
      example: http://localhost:3000/drakorkita/search?query=lookism
