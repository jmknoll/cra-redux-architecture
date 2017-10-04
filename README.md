1. dont use this project to start a new create react app project. Use the official cra repo. This is for ideas only. The cra repo will keep everything automatically up-to-date
2. create-react-app my_project_name
3. cd my_project_name
4. lets start with the basic architecture, we'll fill in the the other pieces later
5. `rm -f logo.svg App.test.js App.css`
5. create a few directories
6. `mkdir styles` - This is where our scss files will go. I know this is recommended against by facebook. I don't care. It makes developing faster and easier for me. I don't need pure-blooded components with in-component styles, especially when I'm dealing with rapidly changing demands from project managers and clients.
7. `mkdir middleware` - well put our middleware here - for now it will just be an dataservice / api connector - we'll see more about that in a minute
8. `mkdir shared` - I borrowed this from my react-native go-to architecture. Reusing components like buttons and containers feels more important in RN, as styling is a bit less convenient. With react, we can use Sass, so this is a bit less important
9. `mkdir app home static user` - this can really be whatever you want. App is for app-wide components and data. My choice of home, static, and user basically goes like this. Every app is going to have static pages. Especially if the design and functionality is still in flux, you can start using these to organize what you're going to be working on. Likewise with home. The home directory often ends up being kind of a dumping ground for things that later get refactored into app-wide or module-wide components and functionality. User because, well, you're probably going to have some kind of log-in information no matter what your app is actually doing. 
10. Next we need to move some things around
11. `mv index.css styles/index.css` and adjust it in index.js (if you have the CRA dev server running during this, it will tell you every time something breaks and how to fix it)
4. add everything we need for redux, so that you're not miserable later for not using redux (unless your project has no data layer to speak of, you should probably be using redux)
5. `yarn add react-dom react-redux react-router-redux redux-thunk`
6. create the store and import it into index and connect it to the provider
7. create the dataService and import it into the store
