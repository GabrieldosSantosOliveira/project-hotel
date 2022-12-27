import * as Yup from 'yup';
export const schema = Yup.object({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Email é um campo requerido'),
  password: Yup.string()
    .min(6, 'A senha precisa ter mais de 6 caracteres')
    .max(255, 'A senha precisa ter menos de 255 caracteres')
    .required('Senha é um campo requerido'),
  remember: Yup.boolean().optional()
});
