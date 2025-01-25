import { useState, useEffect } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL); 
        // const response = await axios.get("http://127.0.0.1:8000/api/student/");
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
    getAllStudents();
//   }, []);
});

  return (

    <div className="total">
    <div className="container">
      <header>
        <h1>Student Info</h1>
      </header>
        <table>
        <thead>
        <tr>
            <th>Roll no</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.stuname}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  );
}

export default Students;




// import { useState, useEffect } from "react";
// import axios from "axios";

// function Students() {
//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState({}); // Store attendance status for each student

//   useEffect(() => {
//     async function getAllStudents() {
//       try {
//         // const students = await axios.get(process.env.REACT_APP_API_URL); 
//         const response = await axios.get("http://127.0.0.1:8000/api/student/");
//         setStudents(response.data);

//         // Initialize attendance state for all students as false (not present)
//         const initialAttendance = response.data.reduce((acc, student, index) => {
//           acc[index] = false; // default attendance as false
//           return acc;
//         }, {});
//         setAttendance(initialAttendance);
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       }
//     }
//     getAllStudents();
//   }, []);

//   // Handle attendance change
//   const handleAttendanceChange = (index) => {
//     setAttendance((prevAttendance) => ({
//       ...prevAttendance,
//       [index]: !prevAttendance[index], // Toggle attendance status
//     }));
//   };

//   const submitAttendance = async () => {
//     const attendanceList = students.map((student, index) => ({
//       rollNo: index + 1,
//       name: student.stuname,
//       email: student.email,
//       present: attendance[index] || false,
//     }));
  
//     try {
//         // const students = await axios.get(process.env.REACT_APP_API_URL_POST); 
//       const response = await axios.post("http://127.0.0.1:8000/api/attendance/", attendanceList, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Attendance submitted successfully:", response.data);
//       alert("Attendance submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting attendance:", error);
//       alert("Failed to submit attendance. Please try again.");
//     }
//   };
  

//   return (
//     <div>
//         <div className="total">
//             <div className="container">
//                 <header>
//                 <h1>Student Info</h1>
//                 </header>
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>Roll No</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Present</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {students.map((student, index) => (
//                         <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>{student.stuname}</td>
//                         <td>{student.email}</td>
//                         <td>
//                             <input
//                             type="checkbox"
//                             checked={attendance[index] || false}
//                             onChange={() => handleAttendanceChange(index)}
//                             />
//                         </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//                 <button onClick={submitAttendance}>Submit Attendance</button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Students;
