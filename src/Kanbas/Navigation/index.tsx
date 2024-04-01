import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";
import "./subnav.css";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaSignOutAlt,
  FaRegQuestionCircle,
  FaAngleDown,
  FaTimes,
} from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { TfiBlackboard } from "react-icons/tfi";
import { courses } from "../Database";

export default function KanbasNavigation({
  children,
  subNav,
  title,
  breadcrumb,
}: {
  children?: ReactNode;
  subNav?: string[];
  title: string;
  breadcrumb?: string[];
}) {
  const links = [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    {
      label: "Courses",
      target: "Courses/" + courses[0]._id,
      icon: <FaBook />,
    },
    { label: "Calendar", target: "#", icon: <FaRegCalendarAlt /> },
    { label: "Inbox", target: "#", icon: <FaInbox /> },
    { label: "History", target: "#", icon: <FaHistory /> },
    { label: "Commons", target: "#", icon: <FaSignOutAlt /> },
    { label: "Studio", target: "#", icon: <TfiBlackboard /> },
    { label: "Help", target: "#", icon: <FaRegQuestionCircle /> },
  ];
  const { pathname } = useLocation();

  const [showingNav, showNav] = useState(false);
  const [showingDropNav, showDropNav] = useState(false);
  const [showingSubNav, showSubNav] = useState(true);

  useEffect(() => {
    showNav(false);
  }, [pathname]);

  useEffect(() => {
    showDropNav(false);
  }, [pathname]);

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="wd-kanbas-mobile-nav d-flex d-md-none">
        <div
          onClick={() => {
            showNav(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <HiMiniBars3 size="25" />
        </div>
        <div>{title}</div>
        <div
          onClick={() => {
            showDropNav(!showingDropNav);
          }}
          style={{ cursor: "pointer" }}
        >
          {subNav ? <FaAngleDown size="25" /> : <></>}
        </div>
      </div>
      <div
        className={"wd-kanbas-navigation" + (showingNav ? " wd-nav-show" : "")}
      >
        <div className="kanbas-nav-header d-flex d-md-none">
          <div>KANBAS</div>
          <div
            onClick={() => {
              showNav(false);
            }}
            style={{ cursor: "pointer" }}
          >
            <FaTimes size="25" />
          </div>
        </div>
        <ul>
          <li className="d-none d-md-block kanbas-logo">
            <Link to="/Kanbas">N</Link>
          </li>
          <li className={pathname.includes("Account") ? "wd-active" : ""}>
            <Link to="/Kanbas/Account">
              <i id="account-icon">
                <FaUserCircle />
              </i>
              <div>Account</div>
            </Link>
          </li>
          {links.map((link, index) => (
            <li
              key={index}
              className={pathname.includes(link.label) ? "wd-active" : ""}
            >
              <Link to={`/Kanbas/${link.target ?? link.label}`}>
                <i>{link.icon}</i> <div>{link.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="kanbas-wrapper">
        <div className="kanbas-breadcrumb d-none d-md-flex">
          {subNav ? (
            <div
              className="kanbas-subnav-toggle"
              onClick={(e) => {
                e.preventDefault();
                showSubNav(!showingSubNav);
              }}
            >
              <HiMiniBars3 size="35" />
            </div>
          ) : (
            <></>
          )}
          <span>{title}</span>
          {breadcrumb?.map((crumb, index) => (
            <span key={index}>
              <i>
                <IoIosArrowForward size="15" />
              </i>
              {crumb}
            </span>
          ))}
        </div>
        <div className="kanbas-content">
          {showingSubNav && subNav ? (
            <div
              className={
                "wd-navigation" + (showingDropNav ? " wd-subnav-show" : "")
              }
            >
              <ul>
                {subNav.map((link, index) => (
                  <li
                    key={index}
                    className={pathname.includes(link) ? "wd-active" : ""}
                  >
                    <Link to={link}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
