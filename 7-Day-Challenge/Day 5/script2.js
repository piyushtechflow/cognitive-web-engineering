// WORK WITH API

// const URL = "https://official-joke-api.appspot.com/random_joke";
// const btn = document.querySelector("#btn");
// const jokePara = document.querySelector("#joke-para");

// const getJoke = async () => {
//   console.log("Getting Jokes...");
//   let response = await fetch(URL);
//   //   console.log(response);
//   let data = await response.json();
//   //   console.log(data);
//   let jokeEl = `${data.setup} \n\n ${data.punchline}`;
//   jokePara.innerText = jokeEl;
//   console.log("Joke Delivered!");
// };

// // The same work can also be done by promise chaining...

// function getNewJoke() {
//   fetch(URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let jokeEl = `${data.setup} \n\n ${data.punchline}`;
//       jokePara.innerText = jokeEl;
//     });
// }

// btn.addEventListener("click", getNewJoke);


