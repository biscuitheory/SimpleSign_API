class ClassEntity {
  constructor({ id, name, course, date_start, date_end }) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.date_start = date_start;
    this.date_end = date_end;
  }

  validateClass() {
    if (!this.name || !this.course || !this.date_start || !this.date_end)
      return false;
    else return true;
  }
}

export default ClassEntity;
