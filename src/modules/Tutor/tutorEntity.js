class TutorEntity {
  constructor({ id }) {
    this.id = id;
  }

  validateForm() {
    if (!this.id) return false;
    else return true;
  }
}

export default TutorEntity;
