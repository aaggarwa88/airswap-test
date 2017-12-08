
![N|Solid](https://tokenmarket.net/blockchain/ethereum/assets/airswap/logo_big.png)

# AIRSWAP TEST
After cloning, run the following commands to install and run airswap web server.
```sh
$ npm install
$ yarn start
```
I used creact-react-app to initialize project, but eventually ejected it, using ```yarn eject ``` ,  so I could use css-modules.  I also used relative paths so if you see any issues regarding unresolved modules, please make sure your NODE_PATH variable is clear.  To do so please run the command
```sh
$ export NODE_PATH=''
```

# Features
  - Router defined search query for ethereum address
  - Basic Validation for search input, with inline loading indicator
  - Autocomplete feature based on previous history
  - Use cached search results for previous queries
  - Live Airswap token Price using CoinMarketCap API

Preview:
![N|Solid](http://g.recordit.co/V5mT5SBamq.gif)

# Tech stack
- React
- Redux
- CSS Modules
Architecture is classic React/Redux, with React Router and Redux thunk with use of HOC and easy to read naming conventions.

# UI & Branding
After reviewing Airswap branding, I went with a more futurism look using subtle gradieted blues in contfast with whites and light greys.  I used suble shadowing for highlighting and finetouches around borders.  Also the typopography (Iceland  & monospace from google fonts) was inspired by a more technical look to highlight the futuristic elements. UI is pure Google style minimal. I think the best apps are ones that combine clean, minimal UI with powerful backend functionality.

# Next Steps
If I had more time, I really wanted to display my recent technical architectures of sharing redux state between react and a react-native app.  The idea is to show how I think about redux states as abstractions of the product, without a specific client in mind.  

Other things I would like to improve, given more time:
- Scrollling header
- Better Responsive design
- Add reducer selectors
- Image SVG compilation
- Global css modules variables
- Local Storage for search history

# Thank you
Please let me know if there is any other information I can provide you with or if you have any follow tasks you would like me to look at. I look forward to hearing and speaking with you.
