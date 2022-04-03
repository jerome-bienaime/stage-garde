import PageHeader from "./PageHeader";

export default function PageOfList({ page }) {
  return (
    <>
      <PageHeader title={page.title} number={page.number} qrcode={page.qrcode}></PageHeader>
      <div className="page-body">
        <div className="card shadow p-4 mt-8 w-96 mx-auto">
          {page.sources.map((source) => {
            return (
              <div className="text-sm italic flex items-center">
                <svg
                  className="h-4 w-4 text-gray-500"
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
                  <a href={source.url} className="text-blue-500 underline">
                    {source.label}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
        <div className="pt-4">
          {page.images.map((screenshot) => {
            return (
              <div className="w-64 mx-auto">
                <img src={screenshot} alt=""></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
