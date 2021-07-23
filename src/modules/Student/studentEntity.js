class StudentEntity {
  constructor({ id, class_id }) {
    this.id = id;
    this.class_id = class_id;
  }

  validateForm() {
    if (!this.id || !this.class_id) return false;
    else return true;
  }
}

export default StudentEntity;
