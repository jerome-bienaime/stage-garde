export default function PageHeader({ number, title, qrcode }) {
  return (
    <div className="page page-of-list pt-2">
      <div className="page-header ">
        <div className="page-header-container  flex items-center justify-around">
          <div className="page-number flex bg-green-200 rounded-full w-10 h-10 justify-center items-center">
            <span>P.</span>
            <span>{number}</span>
          </div>
          <div className="page-title text-xl font-semibold">{title}</div>
          <img src={qrcode} alt="" className="w-24 h-24"></img>
        </div>
      </div>
    </div>
  );
}
