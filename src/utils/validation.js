// AUTH VALIDATION
export const Validation = (values) => {
    let errors = {};
    if (!values.firstName?.trim()) {
      errors.firstName = "*";
    }
    if (!values.lastName?.trim()) {
      errors.lastName = "*";
    }
    if (!values.email?.trim()) {
      errors.email = "*";
    } else if (!/\S+@\S+\.\S+/?.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.username?.trim()) {
      errors.username = "*";
    }
    if (!values.password?.trim()) {
      errors.password = "*";
    } else if (values.password?.trim()?.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!values.repeat_password?.trim()) {
      errors.repeat_password = "*";
    } else if (values.repeat_password !== values.password) {
      errors.repeat_password = "Passwords do not match";
    }
    return errors;
  };