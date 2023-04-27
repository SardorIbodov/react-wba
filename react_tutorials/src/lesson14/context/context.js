import React, { createContext, useContext ,useState } from "react";

export const StudentContext = createContext();
export const Student = () => useContext(StudentContext);
export const StudentList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Sardor", surname: "Ibodov" },
    { id: 2, name: "Ollomurod", surname: "Ahmedov" },
    { id: 3, name: "Ilhom", surname: "Muhammadiyev" },
    { id: 4, name: "Dilshod", surname: "Usmonov" },
    { id: 5, name: "Sodiq", surname: "Yarashev" },
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {children}
    </StudentContext.Provider>
  );
};
