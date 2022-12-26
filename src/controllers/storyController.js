export const home = (req, res) => res.send("Mainpage");
export const trending = (req, res) => res.send("Homepage Video");
export const recent = (req, res) => res.send("new Video");

export const number = (req, res) => {
  return res.send(`${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit: ${req.params.id}`);
};
export const storyDelete = (req, res) => {
  return res.send(`Story Delete :${req.params.id}`);
};
