export const validateEmail = (email) => {

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        return { status: false, message: "Please provide a valid email id" };
    }
    return { status: true };
};


export const validateMobile = (num) => {
    console.log(num.length);
    console.log(num)
    if (num.length !== 10) {
        return { status: false, message: 'Please provide 10 digit valid mobile number' };
    }
    return { status: true };
};


