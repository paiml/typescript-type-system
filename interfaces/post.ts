type Post = { title: string; body: string };
type Timestamps = { createdAt: string; updatedAt: string };

// A SavedPost has every property of both types.
type SavedPost = Post & Timestamps;

const saved: SavedPost = {
  title: "Hello",
  body: "First post",
  createdAt: "2026-10-01",
  updatedAt: "2026-10-02",
};
console.log(saved.title, saved.createdAt);

const unsaved: SavedPost = { title: "Draft", body: "Not yet" };
