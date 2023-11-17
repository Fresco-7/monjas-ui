import axios from 'axios';

const fetcher = (url: string) => fetch(url).then(r => console.log(r.json))

export default fetcher;