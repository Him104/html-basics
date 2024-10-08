let age = 20;

switch (true) {
  case age < 10:
    console.log("You are a minor");
    break;

  case age <= 18:
    console.log("You are an adult");
    break;

  case age > 21:
    console.log("Yes , you are correct");
    break;

  default:
    console.log("You are a senior citizen");
}
