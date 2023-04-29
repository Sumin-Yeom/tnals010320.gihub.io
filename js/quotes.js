const quotes = [
    {
        quote: "가장 작은 것, 가장 조용한 것, 가장 가벼운 것, 바스락거리는 도마뱀 몸짓, 숨결 하나, 휙 하는 소리, 한 순간. 작은 게 최상의 행복을 만든다.",
        author: "프리드리히 니체",
    },
    {
        quote: "과거는 반드시 지나간다. 단지 각자의 마음속에서 사라지는 형식만이 다를 뿐이다. 미래는 반드시 다가온다. 단지 미래를 맞이하는 각자의 태도만이 다를 뿐이다.",
        author: "후헤이옹, 왼손에는 명상록, 오른손에는 도덕경을 들어라",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
        author: "마크 트웨인",
    },
    {
        quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헨렌켈러",
    },
    {
        quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author: "나딘 스테어",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라.",
        author: "헨리포드",
    },
    {
        quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
        author: "알베르트 아인슈타인",
    },


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function randQuotes(){
    const quotesIndex = Math.floor(Math.random() * quotes.length);
    const todaysQuote = quotes[quotesIndex];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

randQuotes();