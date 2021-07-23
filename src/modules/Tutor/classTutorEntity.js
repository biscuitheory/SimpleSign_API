class ClassTutorEntity {
  constructor({ class_id, tutor_id }) {
    this.class_id = class_id;
    this.tutor_id = tutor_id;
  }

  validateForm() {
    if (!this.class_id || !this.tutor_id) return false;
    else return true;
  }
}

export default ClassTutorEntity;
