const apiKey = '9BvjFlRACvgameYmlCJQZgbeoTfRgvQ-q7fb26PPzdet14uRDIYtG9fHSd7AETNQ2Z198Ozq0Ews5UEC-s6NXEpR0lquuQPfiwkjFi5R8Yxissu-WOEN0fcCbKESW3Yx';

const Yelp = {
  
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}}

    ).then(response => {return response.json();}).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zipcode,
          category: business.categories.title,
          rating: business.rating,
          reviewCount: business.review_count

        } });
      }
    });

  }

};

export default Yelp;