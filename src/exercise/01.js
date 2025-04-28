import { useEffect } from "react";

// ✅ Create the custom hook
export function useDocumentTitle(title = "Welcome to the home page!") {
  useEffect(() => {
    document.title = title;
  }, [title]); // 👀 Don't forget to add title to the dependencies array
}

export default function Home() {
  // ✅ Call the custom hook in your component
  useDocumentTitle("Welcome to the home page!");

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above.
      </p>
    </div>
  );
}
