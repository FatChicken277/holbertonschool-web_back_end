import getFullResponseFromAPI from './1-promise';

const response1 = getFullResponseFromAPI(true);
response1
  .then(() => {
    console.log(response1);
  })
  .catch((err) => {
    console.log(err.message);
  });

const response2 = getFullResponseFromAPI(false);
response2
  .then(() => {
    console.log(response2);
  })
  .catch((err) => {
    console.log(err.message);
  });
