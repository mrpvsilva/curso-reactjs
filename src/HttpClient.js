import axios from 'axios';

const source = axios.CancelToken.source();

const get = (url, config) => axios.get(url, { cancelToken: source.token, ...config });
const cancel = reason => source.cancel(reason);


export default {
    get,
    cancel
}