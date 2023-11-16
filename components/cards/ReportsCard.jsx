import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const ReportsCard = () => {
  return (
    <>
      <h5>Reports</h5>
      <hr />
      <h6>Property Valuation</h6>
      <p>Property Valuation Detailed Memorandum</p>
      <Link href="/" className="button">
        DOWNLOAD VALUATION REPORT <FaDownload className="ms-1" />
      </Link>

      <h6>Prospectus</h6>
      <p>
        Details Prospectus for the tokenized property
      </p>
      <Link href="/" className="button">
        DOWNLOAD PROSPECTUS <FaDownload className="ms-1" />
      </Link>
    </>
  );
};

export default ReportsCard;
