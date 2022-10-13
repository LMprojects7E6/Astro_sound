const checkBodyValues = (req, res, next) => {
  //Firebase allows us to register empty user in DB with empty pass and email
  //I did it in middleware because it's enter in conflict with 2 res error sended
  //email already in DB && password is empty ==  app crash
  //To always create in 2 databases First name and Last name
  const { email, password, firstName, lastName } = req.body;
  if (!email) {
    res.status(400).send("Email is required");
  } else if (!password) {
    res.status(400).send("Password is required");
  } else if (!firstName) {
    res.status(400).send("First name is required");
  } else if (!lastName) {
    res.status(400).send("Last name is required");
  } else {
    next();
  }
};

module.exports = checkBodyValues;
