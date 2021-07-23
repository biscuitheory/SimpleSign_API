class StudentAttendanceEntity {
  constructor({ student_id, class_id, attendance_id }) {
    this.student_id = student_id;
    this.class_id = class_id;
    this.attendance_id = attendance_id;
  }

  validateAttendance() {
    if (!this.student_id || !this.class_id || !this.attendance_id)
      return false;
    else return true;
  }
}

export default StudentAttendanceEntity;
