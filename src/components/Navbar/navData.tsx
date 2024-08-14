export const navData = [
  { _id: 101, title: "Home", href: "/" },
  {
    _id: 102,
    title: "Categories",
    href: "/categories",
    submenu: [
      { _id: 201, title: "Sarees", href: "/categories/sarees" },
      { _id: 202, title: "Lehengas", href: "/categories/lehengas" },
      { _id: 203, title: "Kurtas", href: "/categories/kurtas" },
      { _id: 204, title: "Blouses", href: "/categories/blouses" },
      { _id: 205, title: "Family Sets", href: "/categories/family-set" },
    ],
  },
  { _id: 103, title: "About Us", href: "/about-us" },
  { _id: 104, title: "Customer Dairies", href: "/customers-diaries" },
  { _id: 105, title: "Contact Us", href: "/contact-us" },
];
