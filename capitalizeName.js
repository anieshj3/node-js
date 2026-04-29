function capitalizeName(fullName) {
  var parts = fullName.split(" ");

  var firstName = parts[0];
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  var lastName = parts[1];
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return firstName + " " + lastName;
}
module.exports = capitalizeName;
