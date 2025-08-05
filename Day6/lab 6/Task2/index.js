function daysToMilliSeconds(days) {
  console.log(1000 * (days * 24 * 60 * 60));
  return 1000 * (days * 24 * 60 * 60);
}

function cookieSetter(name, value, days = 15, path = "/") {
  var date = new Date();
  var timeInMilliSeconds = date.getTime();
  var expireTime = timeInMilliSeconds + daysToMilliSeconds(days);
  date.setTime(expireTime);

  var cookieStr =
    name + "=" + value + "; expires=" + date.toUTCString() + "; path=" + path;

  console.log(cookieStr);
  document.cookie = cookieStr;
}

function cookieGetter(name) {
  var cookies = document.cookie.split(";");
  var cookie = cookies.find((cookie) => cookie.includes(name));
  return cookie.split("=");
}

function cookieValueChecker(name, value) {
  var cookieToCheckValue = cookieGetter(name);
  console.log(cookieToCheckValue);
  return cookieToCheckValue[1] === value;
}

cookieSetter("username", "peter", 15);
console.log(cookieValueChecker("username", "peter"));
