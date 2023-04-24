import React, { useContext } from "react";
import { StudentContext } from "../context";

export const Body = (props) => {
  const [students, setStudents] = useContext(StudentContext);
  const onDelete = (id) => {
    let result = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(result);
  };

  return (
    <div>
      {students.map((student) => {
        return (
          <div key={student.id}>
            {student.id} - {student.name} -{" "}
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
