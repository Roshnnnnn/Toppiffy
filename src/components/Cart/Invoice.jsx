import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/logo_here.avif";
import {
  clearCart,
  clearFirestoreCart,
  selectShippingInfo,
} from "../redux/slices/cartSlice";
import { FaHandPointLeft, FaDownload } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Invoice = () => {
  const shippingInfo = useSelector(selectShippingInfo);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPriceWithTaxes = useSelector(
    (state) => state.cart.totalPriceWithTaxes
  );

  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  useEffect(() => {
    const randomInvoiceNumber = Math.floor(1000 + Math.random() * 9000);
    const today = new Date();
    const formattedDate = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`;

    setInvoiceNumber(`IN-${randomInvoiceNumber}`);
    setInvoiceDate(formattedDate);
  }, []);

  const handleEmptyCart = async () => {
    dispatch(clearCart());
    await clearFirestoreCart();
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("invoice");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = imgProps.width;
      const imgHeight = imgProps.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save(`invoice_${invoiceNumber}.pdf`);
    });
  };

  return (
    <>
      <Helmet>
        <title>Invoice - ChocoKart</title>
        <meta
          name="description"
          content="View your detailed invoice for your ChocoKart order, including itemized charges, taxes, and shipping information. Thank you for shopping with us!"
        />
      </Helmet>
      <div className="bg-gray-400">
        <div className="flex justify-between p-4">
          <Link to="/">
            <FaHandPointLeft
              onClick={handleEmptyCart}
              className="text-5xl text-amber-600 hover:text-amber-900"
            />
          </Link>
          <button onClick={handleDownloadPDF}>
            <FaDownload className="text-5xl text-blue-600 hover:text-blue-900" />
          </button>
        </div>
        <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">
          <div
            id="invoice"
            className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl"
          >
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Chocokart Logo" className="h-16" />
              <div className="text-right">
                <h2 className="text-2xl font-bold">
                  Tax Invoice/Bill of Supply/Cash Memo
                </h2>
                <p className="text-gray-600">Original for Recipient</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Sold By :</p>
                  <p>Roshan Kumar Yadav</p>
                  <p>D D Nagar, Gwalior</p>
                  <p>Gwalior, Madhya Pradesh, 474020, IN</p>
                  <p>PAN No: BGDPY6702M</p>
                  <p>GST Registration No: 29AACFV3325K1ZY</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Billing Address :</p>
                  <p>{shippingInfo.name}</p>
                  <p>{shippingInfo.address}</p>
                  <p>
                    {shippingInfo.city}, {shippingInfo.state},{" "}
                    {shippingInfo.pincode}, IN
                  </p>
                  <p>State/UT Code: 29</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Shipping Address :</p>
                  <p>{shippingInfo.name}</p>
                  <p>{shippingInfo.address}</p>
                  <p>
                    {shippingInfo.city}, {shippingInfo.state},{" "}
                    {shippingInfo.pincode}, IN
                  </p>
                  <p>State/UT Code: 29</p>
                  <p>Place of supply: KARNATAKA</p>
                  <p>Place of delivery: {shippingInfo.state}</p>
                </div>
                <div className="text-right">
                  <p>Order Number: {orderId}</p>
                  <p>Order Date: {invoiceDate}</p>
                  <p>Invoice Number: {invoiceNumber}</p>
                  <p>Invoice Date: {invoiceDate}</p>
                </div>
              </div>
            </div>

            <table className="w-full mt-4 border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-2 border-r border-gray-200">Sl. No</th>
                  <th className="p-2 border-r border-gray-200">Description</th>
                  <th className="p-2 border-r border-gray-200 text-right">
                    Unit Price
                  </th>
                  <th className="p-2 border-r border-gray-200 text-right">
                    Qty
                  </th>
                  <th className="p-2 border-r border-gray-200 text-right">
                    Net Amount
                  </th>
                  <th className="p-2 border-r border-gray-200 text-right">
                    Tax Rate
                  </th>
                  <th className="p-2 border-r border-gray-200 text-right">
                    Tax Type
                  </th>
                  <th className="p-2 text-right">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-2 border-r border-gray-200">
                      {index + 1}
                    </td>
                    <td className="p-2 border-r border-gray-200">
                      {item.name}
                    </td>
                    <td className="p-2 border-r border-gray-200 text-right">
                      {item.price.toFixed(2)}
                    </td>
                    <td className="p-2 border-r border-gray-200 text-right">
                      {item.amount}
                    </td>
                    <td className="p-2 border-r border-gray-200 text-right">
                      {item.price.toFixed(2)}
                    </td>
                    <td className="p-2 border-r border-gray-200 text-right">
                      18%
                    </td>
                    <td className="p-2 border-r border-gray-200 text-right">
                      GST
                    </td>
                    <td className="p-2 text-right">
                      {(item.price * item.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td
                    colSpan="7"
                    className="border-t border-gray-200 p-2 text-right"
                  >
                    Total Amount
                  </td>
                  <td className="border-t border-gray-200 p-2 text-right">
                    {totalPriceWithTaxes.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8">
              <p className="font-bold">Declaration:</p>
              <p className="text-gray-600">
                We declare that this invoice shows the actual price of the goods
                described and that all particulars are true and correct.
              </p>
            </div>

            <div className="text-center mt-8">
              <p>Thank you for your purchase!</p>
              <p className="text-gray-600">Please visit again</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
