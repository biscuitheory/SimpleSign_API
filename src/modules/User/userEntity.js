class UserEntity {
  constructor({ id, firstname, lastname, email, password, role }) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  validateUser() {
    if (!this.email || !this.password) return false;
    else return true;
  }

  validateAdmin() {
    if (!this.email || !this.password) return false;
    if (!this.role || this.role !== 'admin') return false;
    else return true;
  }
}

export default UserEntity;
