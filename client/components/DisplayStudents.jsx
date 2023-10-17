
export function DisplayStudents({ students }) {
  return (
    <>
      <h1>All students at Kristiania</h1>
      {students.map((student) => (
        <StudentListing name={student.name} program={student.studyProgram} />
      ))}
    </>
  );
}

function StudentListing(props) {
  return (
    <div>
      {props.name + ": "} {props.program}
    </div>
  );
}