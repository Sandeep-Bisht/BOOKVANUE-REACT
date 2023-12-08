import axios from "axios";

export const getHomepageData = async () => {

    const urls = [
      `${process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : 'http://localhost:8000/api'}/get-recent-facility/3`,
      `${process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : 'http://localhost:8000/api'}/get-all-services`,
      // Add more URLs as needed
    ];
  
    try {
      const responses = await Promise.all(urls.map(url => axios.get(url)));
      let data = new Object;
      responses.map(res => {
        data = {...data,...res.data};
      })
      return data;
    } catch (error) {
      throw error;
    }
  };