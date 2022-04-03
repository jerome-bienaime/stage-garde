import {useEffect} from "react"
import PageHeader from "./PageHeader";


export default function PageOfIframe({ page }) {
    useEffect(() => {
        window.location.replace(page.redirectTo);
    })
  return (
    <>
      <PageHeader title={page.title} number={page.number} qrcode={page.qrcode}></PageHeader>
      <div className="page-body h-3/4 "></div>
    </>
  );
}
