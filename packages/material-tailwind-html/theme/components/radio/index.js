const radio = (theme) => ({
  ".radio + .form-check-input": {
    "border-radius": "50%",
  },
  ".radio + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    content: '""',
    position: "absolute",
    width: ".8375rem",
    height: ".8375rem",
    "border-radius": "50%",
    "background-image": `linear-gradient(195deg, theme("colors.primary.400"), theme("colors.primary.600"))`,
    opacity: "0",
    left: "0px",
    right: "0",
    top: "0px",
    bottom: "0",
    margin: "auto",
  },
  ".radio[checked] + .form-check-input": {
    "border-color": theme("colors.pink.500"),
  },
  ".radio[checked] + .form-check-input:after": {
    opacity: "1",
  },
});

module.exports.radio = radio;
