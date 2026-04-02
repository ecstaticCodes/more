import { useState, useEffect } from "react";

const fetchRandomQuote = () =>
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json());

const App = () => {
  const [quote, setQuote] = useState("Click the button to get a quote!");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 0) return;
    setLoading(true);
    fetchRandomQuote()
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        setQuote("Something went wrong. Try again!");
        setLoading(false);
      });
  }, [counter]); 

  return (
    <div className="flex flex-col h-screen bg-amber-50 items-center justify-center" onClick={() => setCounter(c => c + 1)}>
       
      <div className="h-[50vh] w-[50vw] p-2 rounded-lg bg-rose-400 hover:bg-rose-200"><p className="text-2xl">{loading ? "Loading..." : quote}</p> {author && <small>— {author}</small>}</div>
       <button className="bg-rose-200 p-2 mt-2 rounded-xl cursor-pointer hover:bg-rose-400 hover:text-amber-50" onClick={() => counter(c => c + 1)}>New Quote</button>
    </div>
  );
};

export default App;