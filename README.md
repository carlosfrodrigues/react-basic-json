# React-basic-JSON [![npm version](https://badge.fury.io/js/react-basic-json.svg)](https://badge.fury.io/js/react-basic-json)
A basic JSON Viewer component built for [React](http://facebook.github.io/react/).

![basic-json-gif](https://raw.githubusercontent.com/carlosfrodrigues/react-basic-json/master/github/basic-json.gif)
## Install
```sh
npm install react-basic-json
```
## Usage
```jsx
import { BasicJSON } from 'react-basic-json'
const json = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    message: {
        mid: 'mid.1457764197618:41d102a3e1ae206a38',
        seq: 73
    }
};
<BasicJSON data={json}/>
```
You can also pass a string representing a JSON as the data property. Example:
```jsx
const json ='{"make":"Ford","model":"Mustang","year":1969,"message":{"mid":"mid.1457764197618:41d102a3e1ae206a38","seq":73}}'
<BasicJSON data={json}/>
```

## Styling
The CSS file `Collapsible.css` is commented and easy to be customized. Feel free to make changes.

## License
MIT
