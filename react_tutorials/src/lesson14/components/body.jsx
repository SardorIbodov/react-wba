import { Student } from "../context/context";

export const Body = () => {
  const [students, setStudents] = Student();
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
