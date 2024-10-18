type Navlink = {
  href: string;
  label: string;
};

export const links: Navlink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/favorites ", label: "favorites" },
  { href: "/bookings ", label: "bookings" },
  { href: "/reviews ", label: "reviews" },
  { href: "/reservations ", label: "reservations" },
  { href: "/rentals/create ", label: "create rental" },
  { href: "/rentals", label: "my rentals" },
  { href: "/profile ", label: "profile" },
  { href: "/admin ", label: "admin" },
];
