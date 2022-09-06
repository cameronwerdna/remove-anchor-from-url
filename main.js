// function takes a url and removes anchor (#) and anything after it.
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

console.log(removeUrlAnchor('www.codewars.com#about')) // => 'www.codewars.com'
console.log(removeUrlAnchor('www.gmail.com/mail/user#gh45tyt99s')) // => 'www.gmail.com/mail/user'