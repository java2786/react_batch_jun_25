// age >= 18 and age <75 => dont use &&

// You are valid to apply driving license.
// You are not valid to apply driving license.

let age = 30;

if (age >= 18) {
  if (age < 75) {
    console.log("You are valid to apply for a driving license.");
  } else {
    console.log("You are not valid to apply for a driving license.");
  }
} else {
  console.log("You are not valid to apply for a driving license.");
}

if (age < 18 || age >= 75) {
  console.log("You are not valid to apply for a driving license.");
} else {
  console.log("You are valid to apply for a driving license.");
}
