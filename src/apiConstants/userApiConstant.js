
module.exports={
    login:"/User/login",
    SignUP:"/User/register",
    Forget:"/User/forgetPassword?emailAddress=",
    Reset:"/User/resetPassword",
    addNote:"/Notes/addNotes",
    getNote:"/Notes/retrieveNotes?userId=",
    archiveNote:"/Notes/retrieveAllArchieveNotes",
    Reminder:"/Notes/getAllNotesWhoseReminderIsSet",
    Lables:"/Lable/addLable",
    Trash:"/Notes/retrieveAllTrashNotes",
    TrashById:"/Notes/trashOrUntrash?noteId=",
    ArchiveNoteById:"/Notes/archieveOrUnarchieve",
    DelteForever:"/Notes/"
}