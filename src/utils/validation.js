const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }
  if (!isNameValid) {
    return "Name is not valid";
  }
};

export default checkValidData;
