const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },

    fetchComedyMovies: {
        title: 'Comedy',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=35`
    },

    fetchHorrorMovies: {
        title: 'Horror',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=27`
    },

    fetchRomanceMovies: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`
    },

    fetchMystery: {
        title: 'Mystery',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=9648`
    },

    fetchSciFi: {
        title: 'SciFi',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=878`
    },

    fetchWestern: {
        title: 'Western',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=37`
    },
    
    fetchAnimation: {
        title: 'Animation',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=16`
    },

    fetchTV: {
        title: 'TV Movie',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10770`
    }
}