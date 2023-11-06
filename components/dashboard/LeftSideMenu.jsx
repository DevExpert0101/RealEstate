import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import account from "/public/images/icons/account.png";
import calendar from "/public/images/icons/calendar.png";
import dashboard from "/public/images/icons/dashboard.png";
import investments from "/public/images/icons/investments.png";
import logout from "/public/images/icons/logout.png";
import tokeinze from "/public/images/icons/transactions.png";
import income from "/public/images/icons/income.png";
import wallet from "/public/images/icons/wallet.png";
import stake from "/public/images/icons/stake.png";
import setting from "/public/images/icons/setting.png";
import property from "/public/images/icons/property.png"


const LeftSideMenu = ({ activSidebar, setActivSidebar }) => {
  // const [activSidebar, setActivSidebar] = useState(false);
  const router = useRouter();

  return (
    <div className="col-xxl-3">
      <div className={`sidebar ${activSidebar && "sidebar__active"}`}>
        <button
          type="button"
          className="close__sidebar bg-transparent"
          onClick={() => setActivSidebar(false)}
        >
          <i>
            <FaTimes />
          </i>
        </button>
        <div className="sidenav__wrapper">
          <ul>
            {[
              ["Profile", "/dashboard/profile", account],
              ["Dashboard", "/dashboard", dashboard],
              ["Investments", "/dashboard/investments", investments],
              ["My Property", "/dashboard/property", property],
              ["Tokenize Property", "/dashboard/tokenize", tokeinze],
              ["Stake", "/dashboard/stake", stake],
              ["Wallet", "/dashboard/wallet", wallet],
              ["Income Pools", "/dashboard/income/", income],
              ["Settings & Preferences", "/dashboard/account", setting],
            ].map(([item, url, icon], i) => (
              <li key={item}>
                <Link
                  href={url}
                  className={`${router.pathname === url && "sidenav__active"}`}
                  onClick={() => setActivSidebar(false)}
                >
                  <Image src={icon} alt="Withdraw" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="logout">
            <li>
              <Link href="/login">
                <Image src={logout} alt="Logout" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidenav__wrapper sidenav__footer">
          <h6>Last Login</h6>
          <hr />
          <div className="sidenav__time">
            <p className="secondary">
              <Image src={calendar} alt="calendar" />
              02.01.2022
            </p>
            <p className="secondary">15:48:13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
