import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function usePosts() {
      const context = useContext(PostContext)
  return context;
}

export default usePosts; 