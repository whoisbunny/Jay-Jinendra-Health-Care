import API from "@/configs/API";

// Function to handle login API call
export const login = async (email: string, password: string) => {
  try {
    const response = await API.post("auth/login", { email, password });
    if (response.data) {
      localStorage.setItem("TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem(
        "expiryDate",
        JSON.stringify(response.data.expiryDate)
      );
    }
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error);
    throw error;
  }
};

// Function to handle signup API call
export const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await API.post("auth/signup", { name, email, password });

    return response.data;
  } catch (error) {
    console.error("Signup API Error:", error);
    throw error;
  }
};

// Function to get the logged-in user's details
export const LoggedinUser = async () => {
  try {
    const response = await API.get("auth/profile");

    return response.data;
  } catch (error) {
    console.error("Get Logged-in User API Error:", error);
    throw error;
  }
};

export const logoutService = async () => {
  try {
    const res = await API.get("auth/logout");

    if (res.status == 200) {
      localStorage.removeItem("TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
      localStorage.removeItem("expiryDate");
    }
    return res.data;
  } catch (error) {
    console.error("Get Logged-in User API Error:", error);
    throw error;
  }
};
