import Link from "next/link";

export default function Footer() {
  return (
    <div className="border mx-auto border-t-0 corner-accents max-w-5xl mx-auto">
      <div
        className="p-6 md:p-8"
        style={{
          backgroundImage: `url(/bg.png)`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex gap-1 items-center font-medium tracking-tighter text-foreground relative w-fit mb-4"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.28">
                  <path
                    d="M6.6867 2.83747C6.60714 2.35443 6.18956 2 5.7 2C5.21044 2 4.79286 2.35443 4.7133 2.83748C4.6133 3.44455 4.39371 3.8516 4.1155 4.1271C3.83631 4.40358 3.42903 4.61586 2.83748 4.7133C2.35443 4.79286 2 5.21044 2 5.7C2 6.18956 2.35443 6.60714 2.83747 6.6867C3.44455 6.7867 3.8516 7.00629 4.1271 7.2845C4.40358 7.56369 4.61586 7.97097 4.7133 8.56252C4.79286 9.04557 5.21044 9.4 5.7 9.4C6.18956 9.4 6.60714 9.04557 6.6867 8.56253C6.78414 7.97097 6.99642 7.56369 7.2729 7.2845C7.5484 7.00629 7.95545 6.7867 8.56253 6.6867C9.04557 6.60714 9.4 6.18956 9.4 5.7C9.4 5.21044 9.04557 4.79286 8.56252 4.7133C7.95545 4.6133 7.5484 4.39371 7.2729 4.1155C6.99642 3.83631 6.78414 3.42902 6.6867 2.83747Z"
                    fill="#FC3038"
                  />
                  <path
                    d="M6 17.65C6 17.0977 5.55228 16.65 5 16.65C4.44772 16.65 4 17.0977 4 17.65V18H3.65C3.09772 18 2.65 18.4477 2.65 19C2.65 19.5523 3.09772 20 3.65 20H4V20.35C4 20.9023 4.44772 21.35 5 21.35C5.55228 21.35 6 20.9023 6 20.35V20H6.35C6.90228 20 7.35 19.5523 7.35 19C7.35 18.4477 6.90228 18 6.35 18H6V17.65Z"
                    fill="#FC3038"
                  />
                </g>
                <path
                  d="M13.8921 2.87392C13.8286 2.3744 13.4036 2 12.9 2C12.3965 2 11.9715 2.3744 11.908 2.87392C11.5859 5.40808 10.9021 7.2346 9.78974 8.51626C8.69232 9.78066 7.07626 10.6306 4.64504 11.0121C4.15855 11.0884 3.80005 11.5076 3.80005 12C3.80005 12.4924 4.15855 12.9116 4.64504 12.9879C7.07626 13.3694 8.69232 14.2193 9.78974 15.4837C10.9021 16.7654 11.5859 18.5919 11.908 21.1261C11.9715 21.6256 12.3965 22 12.9 22C13.4036 22 13.8286 21.6256 13.8921 21.1261C14.2142 18.5919 14.898 16.7654 16.0104 15.4837C17.1078 14.2193 18.7238 13.3694 21.1551 12.9879C21.6415 12.9116 22 12.4924 22 12C22 11.5076 21.6415 11.0884 21.1551 11.0121C18.5917 10.6099 16.9738 9.7062 15.9072 8.42658C14.8209 7.12345 14.2012 5.30628 13.8921 2.87392Z"
                  fill="#FC3038"
                />
              </svg>
              Sticket
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              The first truly transparent ticketing platform powered by
              Ethereum. Own your tickets, trade them freely.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/discover"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  My Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Smart Contract
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Sticket. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors cursor-pointer"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
