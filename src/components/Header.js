import Results from "./Results.js";
import SearchPosts from "./SearchPosts.js";
import usePosts from "../hooks/usePosts.js";


function Header() {
  const {onClearPosts} = usePosts()

      return (
        <header>
          <h1>
            <span>⚛️</span>The Atomic Blog
          </h1>
          <div>
            <Results />
            <SearchPosts />
            <button onClick={onClearPosts}>Clear posts</button>
          </div>
        </header>
      );
    }
    export default Header;