export function list(req, res) {
  res.json([]);
}

export function create(req, res) {
  res.send("ok");
}

export function read(req, res) {
  res.json({ title: "a sample title", body: "this is my note" });
}

export function update(req, res) {
  res.send("ok");
}

export function deleteNote(req, res) {
  res.send("ok");
}
