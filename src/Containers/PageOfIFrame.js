import PageHeader from "./PageHeader";

export default function PageOfIframe({ page }) {
  return (
    <>
      <PageHeader title={page.title} number={page.number} qrcode={page.qrcode}></PageHeader>
      <div className="page-body h-3/4 ">
        <div className="flex">
          <a href={page.locationUrl} className="text-blue-500 underline">
            lien{" "}
           
          </a>
          <svg
              class="h-4 w-4 text-blue-500 underline"
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
              <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />{" "}
              <line x1="10" y1="14" x2="20" y2="4" />{" "}
              <polyline points="15 4 20 4 20 9" />
            </svg>
        </div>
        <iframe
          title="p"
          src={page.locationUrl}
          className="w-full h-full mt-4"
        ></iframe>
      </div>
    </>
  );
}
