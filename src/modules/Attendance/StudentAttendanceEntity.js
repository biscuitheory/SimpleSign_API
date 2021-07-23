class StudentAttendanceEntity {
  constructor({ student_id, studentClass_id, attendance_id }) {
    this.student_id = student_id;
    this.studentClass_id = studentClass_id;
    this.attendance_id = attendance_id;
  }

  // validateStudentAttendance() {
  //   if (!this.student_id || !this.studentClass_id || !this.attendance_id)
  //     return false;
  //   else return true;
  // }
}

export default StudentAttendanceEntity;
