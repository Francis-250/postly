export const otpGenerator = () => {
  const otpGen = "1234567890qwertyuioplkjhgfadsmnbvczx";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += otpGen.charAt(Math.floor(Math.random() * otpGen.length));
  }
  return otp;
};
