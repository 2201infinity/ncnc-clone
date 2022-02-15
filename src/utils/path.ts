enum Path {
  Home = "/",
  Categories = "/categories",
  Brands = "/brands",
  Items = "/items",
  Contacts = "/contacts",
}

export type PathValueTypes = typeof Path[keyof typeof Path];

export default Path;
