import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

const SEARCH_ENDPOINT = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get(SEARCH_ENDPOINT,
    {q: query},
    data => { callback(data); });
};

export default searchYouTube;
