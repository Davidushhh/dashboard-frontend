import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "redux/API/authApi";
import { selectToken, selectIsLogin, selectUser } from "redux/auth/authSlice";

export const PrivateRoute = ({
  component: Component,
  access = [],
  accessDeniedRedirectTo = "/404",
  redirectTo = "/",
}) => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const { isLoading: isRefreshing } = useCurrentUserQuery(null, {
    skip: !token,
  });
  const isLoggedIn = useSelector(selectIsLogin);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  if (!shouldRedirect && user) {
    if (access.length > 0 && !access.includes(user.position)) {
      console.log("access", access);
      return <Navigate to={accessDeniedRedirectTo} />;
    }
  }
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
