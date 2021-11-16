export default (req, res) => {
  const body = JSON.parse(req.body);
  (body);
  res.status(200).json({ status: "Ok" });
};
