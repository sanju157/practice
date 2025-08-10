export const validateEmail = (value) => {
    // const emailPettern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,5}$/
    const emailPettern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value.match(emailPettern)) {
        return true
    } else "Please enter valid email"
}