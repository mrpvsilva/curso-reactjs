const sigin = (data) => localStorage.data = data;
const isAuthenticated = () => localStorage.getItem('data') !== null;
const sigout = () => localStorage.removeItem('data');

export default {
    isAuthenticated,
    sigin,
    sigout
}