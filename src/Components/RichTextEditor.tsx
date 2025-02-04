import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import User from "../types/UserType";

const RichTextEditor: React.FC = () => {
  const users = useSelector((state: any) => state.user);
  const [content, setContent] = useState("");
   console.log(users.users)
   useEffect(() => {
    if (users && users.users.length > 0) {
      const userContent = users.users.map((user: User) => `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address}</p>
        <br />
      `).join('');
      setContent(userContent);
    }
  }, [users]);

  return <ReactQuill value={content} />;
};

export default RichTextEditor;
// import { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useSelector, useDispatch } from "react-redux";
// import { updateUser } from "../GlobalData/UserSlice"; // Import update action
// import User from "../types/UserType";

// const RichTextEditor: React.FC = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state: any) => state.user);
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     if (users && users.users.length > 0) {
//       const userContent = users.users
//         .map(
//           (user: User) => `
//           <p><strong>Name:</strong> ${user.name}</p>
//           <p><strong>Email:</strong> ${user.email}</p>
//           <p><strong>Phone:</strong> ${user.phone}</p>
//           <p><strong>Address:</strong> ${user.address}</p>
//           <br />
//         `
//         )
//         .join("");
//       setContent(userContent);
//     }
//   }, [users]);

//   const handleSave = () => {
//     // Extract updated content and update Redux store
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(content, "text/html");
    
//     // Extracting data from the HTML content
//     const updatedUser = {
//       name: doc.querySelector("p:nth-child(1)")?.textContent?.replace("Name: ", "") || "",
//       email: doc.querySelector("p:nth-child(2)")?.textContent?.replace("Email: ", "") || "",
//       phone: doc.querySelector("p:nth-child(3)")?.textContent?.replace("Phone: ", "") || "",
//       address: doc.querySelector("p:nth-child(4)")?.textContent?.replace("Address: ", "") || "",
//     };

//     // Dispatch action to update Redux store
//     dispatch(updateUser(updatedUser));
//     alert("User data updated!");
//   };

//   return (
//     <div>
//       <ReactQuill value={content} onChange={setContent} />
//       <button onClick={handleSave} style={{ marginTop: "10px", padding: "10px" }}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default RichTextEditor;
