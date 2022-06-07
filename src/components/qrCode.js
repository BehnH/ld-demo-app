import QRCode from "react-qr-code";

// const QRURL = "https://codyde.github.io/ld-demo-app/";
// const QRURL = "https://cody-ld-demo.netlify.app/"
const QRURL = "https://ld-demo-app.pages.dev/"

const qrCodeHome = () => {  
  return (
    <div className="mx-auto shadow-2xl">
      <div className="qr-wrapper">
        <QRCode size="200" value={QRURL} />
      </div>
    </div>
  )     
};

export default qrCodeHome;
