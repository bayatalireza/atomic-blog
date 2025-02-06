import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Main from "./components/Main";
import { PostProvider, PostContext} from "./context/PostContext";



function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    // 2-create a new context instance for every render
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

    <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
    </PostProvider>
      </section>
  );
}

export default App;
