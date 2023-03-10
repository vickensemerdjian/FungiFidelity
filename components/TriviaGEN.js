//define variables
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const { Configuration, OpenAIApi } = require("openai");


let songName = null
let artistName = null

//startbutton, textbox1, textbox2 are placeholders
let startbutton = document.getElementById("startbutton");
startbutton.addEventListener('click', (event) => {
  // setScreen ("triviascreen");
  event.preventDefault()
  console.log('event handler');
  songName = document.getElementById('title').text;
  artistName= document.getElementById("artist").text;
  console.log('testing');
  let response = testOpenAi();
  console.log(response);
})
// OnEvent ("startbutton", "click");{
//   songName = getText("title");
//   artistnName= getText("artist");
//   setScreen ("triviascreen");
//   console.log('testing');
//   let response = await testOpenAi();
//   console.log(response);
// };

function testAI() {
  console.log("weclicked");
  let response = testOpenAi();
  console.log(response);
}

async function testOpenAi() {
  

  const configuration = new Configuration({
    apiKey: process.env.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,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `create a little known trivia question about the song/album \"${songName}\" by \"${artistName}\", that doesnt involve the title, and generate four answers, with one of them being correct. in the format: [\"question\",\"correct_answer\",\"incorrect_answer\",\"incorrect_answer\", \"incorrect_answer\"]\n`,
    temperature: 0.61,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(response);
  
}

//buttons with answers clicked stored need ID soon to insert into it
//need IDs for screens 

var score = 0
let rightanswerbutton = document.getElementById ("rightanswerbutton");
rightanswerbutton.addEventListener('click', (event) => {
  event.preventDefault()
setScreen ("rightscreen");
score = score + 1;
};

let wronganswerbutton1= document.getElementById ("wronganswerbutton1");
wronganswerbutton1.addEventListener('click', (event) => {
  event.preventDefault()
  setScreen ("wrongscreen");
};

let wronganswerbutton2= document.getElementById ("wronganswerbutton2");
wronganswerbutton2.addEventListener('click', (event) => {
  event.preventDefault()
  setScreen ("wrongscreen");
};

let wronganswerbutton3= document.getElementById ("wronganswerbutton3");
wronganswerbutton3.addEventListener('click', (event) => {
  event.preventDefault()
  setScreen ("wrongscreen");
};

//Reset to trivia page 
let gobackwin= document.getElementById ("wronganswerbutton2");
gobackwin.addEventListener('click', (event) => {
  event.preventDefault()
let gobackwin = document.getElementById ("gobackwin");
(OnEvent ("gobackwin","click" );{
  setScreen("trivia.html");
};

let goback = document.getElementById ("goback");
OnEvent ("goback", "click");{
  setScreen("trivia.html");
};

let goback = document.getElementById ("goback");
OnEvent ("goback", "click");{
  setScreen("trivia.html");
};

let goback = document.getElementById ("goback");
OnEvent ("goback", "click");{
  setScreen("trivia.html");
};





