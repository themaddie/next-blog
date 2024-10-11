import Link from "next/link";

const Links = () => {
  const linksArray = [
    {
      title: "about",
      path: "/about",
    },
    {
      title: "admin",
      path: "/admin",
    },
    {
      title: "blog",
      path: "/blog",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];
  return (
    <>
      {linksArray.map(item => <Link href={item.path} key={item.title}>{item.title}</Link> )}
    </>
  );
};

export default Links;
