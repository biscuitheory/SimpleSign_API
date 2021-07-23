class AttendanceEntity {
  constructor({ session_start, session_end, status }) {
    this.session_start = session_start;
    this.session_end = session_end;
    this.status = status;
  }

  validateClass() {
    if (!this.session_start || !this.session_end || !this.status) return false;
    else return true;
  }
}

export default AttendanceEntity;
