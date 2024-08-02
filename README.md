<h1 align=center>📈Libertas📈</h1>

<br>
 
![image](https://github.com/ata1de/Libertas_frontend/assets/121314892/f00826a3-79ba-4ea3-8650-7d7aa1ea2ea7)

<br>

# View the project and backend here ⬇
- https://libertas-frontend.vercel.app/
- https://libertas-backend-n814.onrender.com
<br>

## ☕ More about 

  ![image](https://github.com/ata1de/Libertas_backend/assets/121314892/64238ba1-ca1d-4e98-a83f-2376dccc0382)


  * **GET-'/'**: Returns a welcome message ; 
  * **GET-'/services'**: Shows 3 random services
  * **GET-'/services/search'**: Searches for services based on search criteria
  * **GET-/services/all**: Returns all available services
  * **GET-/clients**: Returns all registered clients  ;
  * **POST-'/'**: Creates a new client  ;
  * **POST-/services**: Creates a new service  ;
  * **DELETE-/service/:id**: Deletes a service by ID  ;
<br>
Besides that, obviously the project is 100% adaptable for mobile devices and strategy planned for future software maintenance.

<br> 
<br> 


## 🚀 Techs used 
* **[ Typescript ](https://www.typescriptlang.org/)**
* **[ Express ](https://expressjs.com/pt-br/)**
* **[ Cors ](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)**
* **[ Postgres ](https://www.postgresql.org/)**
* **[ Prisma ](https://www.prisma.io/)**
* **[ Render ](https://render.com/)**


## 📝 Main learnings
* Using prisma as ORM
* Deploy and build with Render

## ⬆ Next Steps
* Make Client CRUD

# ⚙️ Open and run project
Clone the repository
```
https://github.com/ata1de/libertas_backend.git
```
Install the dependencies
```
npm install
```
Postgres or Docker installed
- Docker (if you have docker you need to configure the repository to use it)
  ```
  https://docs.docker.com/desktop/install/windows-install/
  ```
- Postgres
    ```
    https://www.postgresql.org/
    ```
Run migrations
```
npx run migration
```
Run the project
```
npm run dev
```
Open the link and enjoy yourself 😎
```
http://localhost:3333
```
