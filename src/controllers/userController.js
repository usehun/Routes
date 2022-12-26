export const login = (req, res) => res.send("Login");
export const join = (req, res) => res.send("Join");

export const user = (req, res) => res.send("User");
export const userId = (req, res) => {
  return res.send(`${req.params.id}`);
};
export const editProfile = (req, res) => res.send("Edit Profile");
