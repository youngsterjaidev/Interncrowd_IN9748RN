import axios from "axios";

const SERVER_URI = "https://blackbaas.vercel.app/users";

interface Feedback {
  message: string;
  success: boolean;
  data: null | any;
}

const errorHandler = (err) => {
  return {
    message: err.message,
    success: false,
    data: null,
  };
};

const loginUser = async (
  email: string,
  password: string
): Promise<Feedback> => {
  try {
    console.log("Login User");
    if (!email || !password) {
      console.log("Please fill the email and password!");
      throw new Error("Please fill the email and password!");
    }

    const res = await axios({
      url: `${SERVER_URI}/login`,
      method: "POST",
      data: { email, password },
    });

    console.log(res);

    if (res.status === 204) {
      throw new Error("User is not registered!");
    }

    if (res.status === 200)
      return {
        message: "",
        data: res.data,
        success: true,
      };

    return {
      message: "",
      data: res.data,
      success: false,
    };
  } catch (e) {
    return errorHandler(e);
  }
};

const addUser = async (
  email: string,
  password: string,
  username: string
): Promise<Feedback> => {
  try {
    if (!email || !password || !username) {
      throw new Error("Please fill the email, username and password!");
    }

    const res = await axios({
      url: `${SERVER_URI}/add`,
      method: "POST",
    });

    if (res.status === 200)
      return {
        message: "",
        data: res.data,
        success: true,
      };

    return {
      message: "",
      data: res.data,
      success: false,
    };
  } catch (e) {
    return errorHandler(e);
  }
};

export { addUser, loginUser };
