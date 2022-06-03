const badgeRoot = {
  display: "inline-block",
  padding: "0.55em 0.9em",
  "font-size": ".75em",
  "font-weight": "600",
  "line-height": "1",
  color: "#fff",
  "text-align": "center",
  "white-space": "nowrap",
  "vertical-align": "baseline",
  "border-radius": "0.45rem",
  "text-transform": "none",

  "&.badge-md": {
    padding: "0.65em 1em",
  },
  "&.badge-lg": {
    padding: ".85em 1.375em",
  },
};

const badgeVariant = (theme, background) => ({
  "background-color": theme(`${background}.100`),
  color: theme(`${background}.500`),

  "&.badge-gradient": {
    "background-image": `linear-gradient(to top right, ${theme(
      `${background}.600`
    )}, ${theme(`${background}.400`)})`,
  },
});

const badge = (theme) => ({
  ".badge": badgeRoot,
  ".badge-primary": badgeVariant(theme, "colors.primary"),
  ".badge-pink": badgeVariant(theme, "colors.pink"),
  ".badge-purple": badgeVariant(theme, "colors.purple"),
  ".badge-deep-purple": badgeVariant(theme, "colors.deep-purple"),
  ".badge-indigo": badgeVariant(theme, "colors.indigo"),
  ".badge-blue": badgeVariant(theme, "colors.blue"),
  ".badge-light-blue": badgeVariant(theme, "colors.light-blue"),
  ".badge-cyan": badgeVariant(theme, "colors.cyan"),
  ".badge-teal": badgeVariant(theme, "colors.teal"),
  ".badge-green": badgeVariant(theme, "colors.green"),
  ".badge-light-green": badgeVariant(theme, "colors.light-green"),
  ".badge-lime": badgeVariant(theme, "colors.lime"),
  ".badge-yellow": badgeVariant(theme, "colors.yellow"),
  ".badge-amber": badgeVariant(theme, "colors.amber"),
  ".badge-orange": badgeVariant(theme, "colors.orange"),
  ".badge-deep-orange": badgeVariant(theme, "colors.deep-orange"),
  ".badge-brown": badgeVariant(theme, "colors.brown"),
  ".badge-grey": badgeVariant(theme, "colors.grey"),
  ".badge-blue-grey": badgeVariant(theme, "colors.blue-grey"),
  ".badge-red": badgeVariant(theme, "colors.red"),
  ".badge-secondary": badgeVariant(theme, "colors.secondary"),
  ".badge-dark": badgeVariant(theme, "colors.dark"),
  ".badge-light": badgeVariant(theme, "colors.light"),
});

module.exports.badgeVariant = badgeVariant;
module.exports.badge = badge;
