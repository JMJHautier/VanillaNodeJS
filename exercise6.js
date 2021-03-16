import axios from 'axios';
axios.get("https://www.google.com/").then(resp => {console.log(resp.data)});