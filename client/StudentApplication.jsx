import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage.jsx";
import { StudentsPage, NewStudent } from "./StudentsPage.jsx";
import { useState } from "react";

function StudentRoutes() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Johan Svendsen",
      studyProgram: "Programming",
    },
    {
      id: 2,
      name: "Jovana Spasenic",
      studyProgram: "Frontend",
    },
    {
      id: 3,
      name: "William Våge",
      studyProgram: "Cyber Security",
    },
  ]);

  function HandleNewStudent(student) {
    setStudents((old) => [...old, student]);
  }

  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />}></Route>
      <Route
        path={"/students"}
        element={<StudentsPage students={students} />}
      ></Route>
      <Route
        path={"/students/new"}
        element={<NewStudent onNewStudent={HandleNewStudent} />}
      ></Route>
    </Routes>
  );
}

export function StudentApplication() {
  return (
    <BrowserRouter>
      <header>
        <h2>Student Data App</h2>
      </header>
      <nav>
        <Link to={"/"}>FrontPage</Link>
      </nav>
      <main>
        <StudentRoutes />
      </main>
      <footer>Made By Johan Svendsen 😎</footer>
    </BrowserRouter>
  );
}
