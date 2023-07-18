import * as SC from "./Login.styled";
import { useFormik } from "formik";
import { useLoginMutation } from "redux/auth/authAPI";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values).then((res) => {
        if (res.data.status === "success") navigate("/home/all");
      });
    },
  });

  return (
    <SC.LoginWrapper>
      <SC.AuthTitle>Вхід</SC.AuthTitle>
      <SC.LoginForm onSubmit={formik.handleSubmit}>
        <SC.LoginInput
          id="login"
          name="login"
          type="text"
          placeholder="Логін"
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        <SC.LoginInput
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <SC.LoginButton type="submit">Увійти</SC.LoginButton>
      </SC.LoginForm>
    </SC.LoginWrapper>
  );
};
