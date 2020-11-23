import jsonData from "./staticMock/restaurants.json";

function fetchRestaurants() {
  return jsonData.restaurants;
}

export { fetchRestaurants };
