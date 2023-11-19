import axios from 'axios';

const fetcher = (url : string) => fetch(url, {cache : "no-store"}).then((res) => res.json());

export default fetcher;