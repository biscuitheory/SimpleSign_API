class mockTutorRepository {
  constructor() {
    this.tutors = [
      {
        id: '571cb226-78ac-439d-8632-484e4a5b0000',
      },
      {
        id: '948b8f95-94e8-4172-be79-e2b0e51d1dd0',
      },
      {
        id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10',
      },
    ];
  }

  async findAll() {
    return this.tutors;
  }

  async findById(tutorId) {
    const tutors = this.tutors.filter((tutor) => tutor.id === tutorId);
    return tutors[0];
  }

  async createTutor(tutorEntity) {
    this.tutors.push(tutorEntity);
    return tutorEntity;
  }

  async createClassTutor(classTutorEntity) {
    this.classTutors.push(classTutorEntity);
    return classTutorEntity;
  }
}

export default new mockTutorRepository();
