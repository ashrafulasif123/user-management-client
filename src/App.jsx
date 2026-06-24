import { Suspense } from "react";
import "./App.css";
import Users from "./components/Users";

const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>User Management</h1>
          {
            <Suspense fallback={<p>Loading...</p>}>
              <Users usersPromise={usersPromise}></Users>
            </Suspense>
          }
        </div>
      </section>
    </>
  );
}

export default App;
