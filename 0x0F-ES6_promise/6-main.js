import handleProfileSignup from './6-final-user';

const r = handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
r.then((value) => {
  console.log(value);
});
