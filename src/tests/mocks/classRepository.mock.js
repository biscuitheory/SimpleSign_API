class mockClassRepository {
  constructor() {
    this.classes = [
      {
        id: 1,
        name: 'CPROL',
        course: 'CDA',
        date_start: '2021-06-22T17:10:35.000Z',
        date_end: '2021-06-23T17:10:35.000Z',
      },
      {
        id: 2,
        name: 'CPRON',
        course: 'CDA',
        date_start: '2021-07-22T17:10:35.000Z',
        date_end: '2021-07-23T17:10:35.000Z',
      },
      {
        id: 2,
        name: 'CPROM',
        course: 'CDA',
        date_start: '2021-08-22T17:10:35.000Z',
        date_end: '2021-08-23T17:10:35.000Z',
      },
    ];
  }

  async findAll() {
    return this.classes;
  }

  async createClass(classEntity) {
    this.classes.push(classEntity);
    return classEntity;
  }

  async findById(classId) {
    const classes = this.classes.filter((singleclass) => singleclass.id === classId);
    return classes[0]
  }
}

export default new mockClassRepository();
