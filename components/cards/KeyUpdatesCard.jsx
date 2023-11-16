import Image from "next/image";
import Link from "next/link";
import { BsBellFill } from "react-icons/bs";
import check from "/public/images/check.png";

const KeyUpdatesCard = () => {
  return (
    <>
      <h5>
        Key Updates
        <i>
          <BsBellFill />
        </i>
      </h5>
      <hr />
      <div className="singl__wrapper">
        <div className="singl">
          <Image src={check} alt="check" />
          <div>
            <p>15-NOV-2023</p>
            <Link href="/terms-conditions">Prspectus Released</Link>
          </div>
        </div>
        <div className="singl">
          <Image src={check} alt="check" />
          <div>
            <p>20-NOV-2023</p>
            <Link href="/privacy-policy">STO Live</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyUpdatesCard;
