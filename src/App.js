import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
