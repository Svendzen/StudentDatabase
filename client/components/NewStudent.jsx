import {useState} from "react";

export function NewStudent({ onNewStudent }) {
    const [name, setName] = useState();
    const [studyProgram, setStudyProgram] = useState();
    const newStudent = { name, studyProgram };

    function handleSubmitNewStudent(event) {
        event.preventDefault();
        onNewStudent(newStudent);
    }
    return (
        <>
            <form onSubmit={handleSubmitNewStudent}>
                <h2>Add a new student:</h2>
                <div>
                    Name: <br />
                    <input
                        type="text"
                        autoFocus={true} // automatically focus input field so you can type without clicking it
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    Study Program: <br />
                    <input
                        type="text"
                        value={studyProgram}
                        onChange={(event) => setStudyProgram(event.target.value)}
                    />
                </div>
                <button>Submit</button>
                <pre>{JSON.stringify(newStudent, null, "  ")}</pre>
            </form>
        </>
    );
}
