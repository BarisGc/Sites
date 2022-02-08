import * as yup from "yup";

const Validations = yup.object().shape({
    email: yup
        .string()
        .email('Geçerli bir email girin')
        .required('zorunlu alan'),
    password: yup
        .string()
        .min(5, 'parolanız en az 5 karakter olmalı')
        .required('zorunlu alan'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "parolalar uyuşmuyor")
        .required('zorunlu alan'),
});

export default Validations