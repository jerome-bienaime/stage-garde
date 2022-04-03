import PageHeader from "./PageHeader";

export default function PageOfVCard({ page }) {
  return (
    <>
      <PageHeader title={page.title} number={page.number} qrcode={page.qrcode} />
      <div className="card shadow p-4 mt-8 w-96 mx-auto">
        <div className="card-title font-bold text-lg">{page.card.title}</div>
        <div className="card-address text-sm italic flex items-center">
          <svg
            class="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="label">
            <a
              href={"https://www.google.com/maps?q=" + page.card.address}
              className="text-blue-500 underline"
            >
              {page.card.address}
            </a>
          </span>
        </div>
        <div className="card-tel">
          {page.card.tel.map((tel) => {
            return (
              <div className="text-sm italic flex items-center">
                <svg
                  class="h-4 w-4 text-gray-500"
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
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <span className="label">
                  <a href={"tel:+33" + tel} className="text-blue-500 underline">
                    {tel}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
        <div className="card-websites">
          {page.card.websites.map((website) => {
            return (
              <div className="text-sm italic flex items-center">
                <svg
                  class="h-4 w-4 text-gray-500"
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
                <span className="label">
                  <a href={website.url} className="text-blue-500 underline">
                    {website.label}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
