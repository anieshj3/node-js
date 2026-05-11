// formatName.js

function formatName(fullName) {

    // Split name into words
    const names = fullName.split(" ");

    // Format first name
    const firstName =
        names[0].charAt(0).toUpperCase() +
        names[0].slice(1);

    // Format last name
    const lastName =
        names[1].charAt(0).toUpperCase() +
        names[1].slice(1);

    // Return formatted name
    return firstName + " " + lastName;
}

module.exports = formatName;