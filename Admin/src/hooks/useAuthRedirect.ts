"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getLoggedinUser, getLoginState } from "@/redux/reducers/authReducer";

const useAuthRedirect = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getLoginState());
  }, [dispatch]);

  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
      //   dispatch(getAllRides());
      //   dispatch(getAllCoupons());
      dispatch(getLoggedinUser());
      //   dispatch(getCompanySettings());
    } else {
      setTimeout(() => {
        router.replace("/");
      }, 1100);
    }
  }, [isAuthenticated, token, router, dispatch]);
};

export default useAuthRedirect;
