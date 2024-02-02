const isLoggedIn = true;
const time24Hours = 1100; 


if (isLoggedIn === true) {
  if ((time24Hours < 1159)) {
    console.log("Good morning!");
  } else if (time24Hours >= 1859) {
    console.log("Good afternoon.");
  } else if (time24Hours < 1159) {
    console.log("Good evening.");
  }
} else {
  console.log("Your clock is wrong.");
}

