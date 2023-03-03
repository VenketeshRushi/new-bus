import { ToastContainer, toast } from "react-toastify";
export const success = (title) => {
  return toast.success(title, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const error = (title) => {
  console.log(title);
  toast.error(title, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
