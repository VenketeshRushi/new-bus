import { useEffect } from "react";

const Alert = ({ variant, data, setShow, show }) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 2700);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className={`alert alert-${variant}`}
        role="alert"
        style={{ width: "max-content" }}
      >
        {data}
      </div>
    </div>
  );
};

Alert.defaultPros = {
  variant: "info",
};

export default Alert;
