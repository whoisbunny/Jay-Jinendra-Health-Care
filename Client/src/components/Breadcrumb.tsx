import Link from "next/link";
import { FC } from "react";

interface BreadcrumbProps {
  location: string;
  heading: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ location, heading }) => {
  return (
    <>
      <div className="breadcrumb-bar-two flex items-center justify-center">
        <div className="container">
          <div className="flex flex-row items-center justify-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">{heading}</h2>
              <nav
                aria-label="breadcrumb"
                className="page-breadcrumb flex justify-center "
              >
                <ol className="breadcrumb flex">
                  <li className="breadcrumb-item">
                    <Link href="/" prefetch={true}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item hover:cursor-pointer" aria-current="page">
                    {location}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
