// An object type lists each property and the type of its value.
type Book = {
  title: string;
  pages: number;
  available: boolean;
};

const dune: Book = { title: "Dune", pages: 412, available: true };
console.log(dune.title, dune.pages);
