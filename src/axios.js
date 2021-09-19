import axios from "axios";

/*base url for news database */
const instance=axios.create({
    baseURL:"https://newsapi.org/v2"
})

export default instance;