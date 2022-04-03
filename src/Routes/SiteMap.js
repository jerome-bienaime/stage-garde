import { getPages } from "../Repositories/Pages";

export default function Pages() {
  const pages = getPages();
  const currentUrl = window.location.origin;

  return (
    <div className="App container mx-auto h-screen">
      <div className="w-full ">
        <div className="grid grid-cols-3 justify-center items-center h-full  gap-8">
          {pages.map((page) => {
            const link = `${currentUrl}/pages/${page.id}`
            return (
              <div className="flex gap-1 flex-col">
                <div>
                  <a href={link} class="text-blue-500 underline">{link}</a>
                  
                </div>
                <div>
                P. {page.number}
                </div>
                <div>
                  <img src={page.qrcode} alt="" className="w-24 h-24"></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
