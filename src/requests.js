const API_KEY="9f57c9df0f3546b18efa5640ad89277a";

const requests={
    fetchTopHeadlines:`/top-headlines?country=in&apiKey=${API_KEY}`,
    fetchTopBusiness:`/top-headlines?country=in&category=business&apiKey=${API_KEY}`,
    fetchTopEntertainment:`/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`,
    fetchTopHealth:`/top-headlines?country=in&category=health&apiKey=${API_KEY}`,
    fetchTopScience:`/top-headlines?country=in&category=science&apiKey=${API_KEY}`,
    fetchTopSports:`/top-headlines?country=in&category=sports&apiKey=${API_KEY}`
}

export default requests;