class mockAttendanceRepository {
  constructor() {
    this.attendances = [
      {
        id: 1,
        session_start: '2021-06-22T17:10:35.000Z',
        session_end: '2021-06-22T17:22:35.000Z',
        status: 'closed',
      },
      {
        id: 2,
        session_start: '2021-07-22T17:10:35.000Z',
        session_end: '2021-07-22T17:22:35.000Z',
        status: 'closed',
      },
      {
        id: 3,
        session_start: '2021-09-22T17:10:35.000Z',
        session_end: '2021-09-22T17:22:35.000Z',
        status: 'opened',
      },
      {
        id: 4,
        session_start: '2021-10-22T17:10:35.000Z',
        session_end: '2021-10-22T17:22:35.000Z',
        status: 'opened',
      },
    ];
  }

  async findAll() {
    return this.attendances;
  }

  async createAttendance(attendanceEntity) {
    this.attendances.push(attendanceEntity);
    return attendanceEntity;
  }

}

export default new mockAttendanceRepository();
