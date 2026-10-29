// Two type aliases with the same name are an error.
type Account = { id: number };
type Account = { name: string };
