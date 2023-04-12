import axios from "axios"

// const fetcher = async (url: string) => {
//     const res = await axios.get(url);
//     return res.data;
// }

const fetcher = async (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
