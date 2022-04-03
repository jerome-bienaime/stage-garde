import PageHeader from "./PageHeader";

import { PLAY_STORE_TYPE, APP_STORE_TYPE } from "../Constants";

export default function PageOfList({ page }) {
  return (
    <>
      <PageHeader title={page.title} number={page.number} qrcode={page.qrcode}></PageHeader>
      <div className="page-body">
        <div className="links flex gap-8 justify-center items-center mt-8">
          {page.links.map((link) => {
            switch (link.type) {
              case PLAY_STORE_TYPE:
                return (
                  <a
                    href={link.url}
                    className="flex flex-col items-center justify-center underline text-blue-500"
                  >
                    {" "}
                    <svg
                      class="h-16 w-16 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    {link.label}
                  </a>
                );
              case APP_STORE_TYPE:
                return (
                  <a
                    href={link.url}
                    className="flex flex-col items-center justify-center underline text-blue-500"
                  >
                    <svg
                      class="h-16 w-16 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />{" "}
                      <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                    </svg>
                    {link.label}
                  </a>
                );
              default:
                return (
                  <a
                    href={link.url}
                    className="flex flex-col items-center justify-center underline text-blue-500"
                  >
                    <svg
                      class="h-16 w-16 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="12" r="9" />{" "}
                      <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
                      <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
                      <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    {link.label}
                  </a>
                );
            }
          })}
        </div>
      </div>
    </>
  );
}
