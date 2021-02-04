
//memvalidasi form
const UserValidation = (values) => {
    const errors = {};

    if(!values.nama || values.nama === ""){
        errors.nama= "Nama harus di isi"
    }

    if(!values.email || values.email === ""){
        errors.email= "Email harus di isi"
    }

    return errors
}

export default UserValidation
