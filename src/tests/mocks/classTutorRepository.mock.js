class mockClassTutorRepository {
  constructor() {
    this.classTutors = [
      {
        tutor_id: '571cb226-78ac-439d-8632-484e4a5b0000',
        class_id: 2,
      },
      {
        tutor_id: '948b8f95-94e8-4172-be79-e2b0e51d1dd0',
        class_id: 1,
      },
      {
        tutor_id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10',
        class_id: 2,
      },
      {
        tutor_id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10',
        class_id: 3,
      },
    ];
  }

  async findClassesByTutorId(tutorData) {
    const { tutor_id } = tutorData;
    const tutorClasses = this.classTutors.filter(
      (classTutor) => classTutor.tutor_id === tutor_id
    );
    return tutorClasses;
  }

  async createClassTutor(classTutorEntity) {
    this.classTutors.push(classTutorEntity);
    return classTutorEntity;
  }
}

export default new mockClassTutorRepository();
