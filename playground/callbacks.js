const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Zeeshan'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(30, userObject => {
  console.log(userObject);
});
