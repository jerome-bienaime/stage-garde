import {
  PAGE_OF_LIST_TYPE,
  PAGE_OF_VCARD_TYPE,
  PAGE_OF_SCREENSHOTS_TYPE,
  PAGE_OF_IFRAME_TYPE,
  PAGE_OF_REDIRECT_TYPE,
  PAGE_OF_MOBILE_APP_TYPE,
} from "../Constants";
import PageOfList from "../Containers/PageOfList";
import PageOfVCard from "../Containers/PageOfVCard";
import PageOfScreenshots from "../Containers/PageOfScreenshots";
import PageOfIFrame from "../Containers/PageOfIFrame";
import PageOfRedirect from "../Containers/PageOfRedirect";
import PageOfMobileApp from "../Containers/PageOfMobileApp";
import { useParams } from "react-router-dom";
import { getPage } from "../Repositories/Pages";

export default function Page() {
  const params = useParams();
  const pages = getPage(params.pageId);

  return (
    <>
      {pages.map((page) => {
        switch (page.type) {
          case PAGE_OF_LIST_TYPE:
            return <PageOfList page={page}></PageOfList>;
          case PAGE_OF_VCARD_TYPE:
            return <PageOfVCard page={page}></PageOfVCard>;
          case PAGE_OF_SCREENSHOTS_TYPE:
            return <PageOfScreenshots page={page}></PageOfScreenshots>;
          case PAGE_OF_IFRAME_TYPE:
            return <PageOfIFrame page={page}></PageOfIFrame>;
          case PAGE_OF_REDIRECT_TYPE:
            return <PageOfRedirect page={page}></PageOfRedirect>;
          case PAGE_OF_MOBILE_APP_TYPE:
            return <PageOfMobileApp page={page}></PageOfMobileApp>;
          default:
            return <>No item</>;
        }
      })}
    </>
  );
}
