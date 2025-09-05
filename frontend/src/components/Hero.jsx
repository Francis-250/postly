import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="text-center mt-8 mb-12 px-4">
      <div className="flex justify-center items-center mb-6">
        <nav className="flex items-center space-x-1 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const name =
              value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");

            return (
              <span key={to} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="text-blue-600 font-medium">{name}</span>
                ) : (
                  <a
                    href={to}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {name}
                  </a>
                )}
              </span>
            );
          })}
        </nav>
      </div>
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
        <span className="text-gray-900">IDEAS</span>
        <span
          className="mx-2 md:mx-4 text-transparent"
          style={{
            WebkitTextStroke: "2px #1a202c",
            textStroke: "2px #1a202c",
          }}
        >
          THAT
        </span>
        <span className="text-blue-600">INSPIRE</span>
      </h1>
    </div>
  );
}
