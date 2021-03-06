import axios from "axios";
import userApiConstant from "../apiConstants/userApiConstant";

export function login(loginData) {
    try {
       const response = axios.post("https://localhost:5001/api/User/login", loginData)
      //const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.login,loginData);
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function signUp(signUpData) {
    try {
      const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.SignUP,signUpData);
      return response;
    }
    catch (error) {
      return error;npm 
    }
  }

  export function forgot(email) {
    try {
      const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.Forget+email)
      return response;
    }
    catch (error) {
      return error;
    }
  }
  
  export function reset(resetData) {
    try {
      const response = axios.put(process.env.REACT_APP_SERVER_URL+userApiConstant.Reset,resetData)
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function createNote(noteData) {
    try {
      const response = axios.post("https://localhost:5001/api/Notes/addNotes", noteData,
    //  const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.addNote,noteData,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function displayNote(userId) {
    try {
      const response = axios.get("https://localhost:5001/api/Notes/retrieveNotes?userId="+userId,
      // const response = axios.get(process.env.REACT_APP_SERVER_URL+userApiConstant.getNote+userId,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function getAllArchiveNote() {
    try {
      const response = axios.get(process.env.REACT_APP_SERVER_URL+userApiConstant.archiveNote,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function getAllNoteWhoseReminderSet() {
    try {
      const response = axios.get(process.env.REACT_APP_SERVER_URL+userApiConstant.Reminder,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function addLable() {
    try {
      const response = axios.get(process.env.REACT_APP_SERVER_URL+userApiConstant.Lables,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function trashNotes() {
    try {
      const response = axios.get(process.env.REACT_APP_SERVER_URL+userApiConstant.Trash,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function trashNotesById(noteId) {
    try {
      const response = axios.put(process.env.REACT_APP_SERVER_URL+userApiConstant.TrashById+noteId,null,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

  export function emptyTrash() {
    try {
      const response = axios.delete(process.env.REACT_APP_SERVER_URL+userApiConstant.EmptyTrash,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {EmptyTrash
      return error;
    }
  }
  
  export function archiveNotesById(req) {
    try {
      const response = axios.post(process.env.REACT_APP_SERVER_URL+userApiConstant.ArchiveNoteById,req,
      {
        headers: {
            Authorization:"Bearer "+localStorage.getItem('token')
        }
      }
    );
      return response;
    }
    catch (error) {
      return error;
    }
  }

export function deleteNoteForever(noteId) {
  try {
    const response = axios.delete(process.env.REACT_APP_SERVER_URL+userApiConstant.DelteForever+noteId,
    {
      headers: {
          Authorization:"Bearer "+localStorage.getItem('token')
      }
    }
  );
    return response;
  }
  catch (error) {
    return error;
  }
} 
  
export function pinOrUnpin(noteId) {
  try {
    const response = axios.put(process.env.REACT_APP_SERVER_URL+userApiConstant.PinorUnpin+noteId,null,
    {
      headers: {
          Authorization:"Bearer "+localStorage.getItem('token')
      }
    }
  );
    return response;
  }
  catch (error) {
    return error;
  }
}
export function updatesNotes(notesData) {
  try {
    const response = axios.put(process.env.REACT_APP_SERVER_URL+userApiConstant.UpdateNotes,notesData,
    {
      headers: {
          Authorization:"Bearer "+localStorage.getItem('token')
      }
    }
  );
    return response;
  }
  catch (error) {
    return error;
  }
}

// export function addColor(noteId,color) {
//   try {
//     const response = axios.put(process.env.REACT_APP_SERVER_URL+userApiConstant.PinorUnpin+color,null,
//     {
//       headers: {
//           Authorization:"Bearer "+localStorage.getItem('token')
//       }
//     }
//   );
//     return response;
//   }
//   catch (error) {
//     return error;
//   }
// }
