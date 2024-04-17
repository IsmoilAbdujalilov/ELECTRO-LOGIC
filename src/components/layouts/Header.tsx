import { useState } from "react";
import { ElectricLogicLogo } from "../../assets/images/svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBIcon,
  MDBBadge,
  MDBNavbar,
  MDBCollapse,
  MDBDropdown,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarToggler,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";

const Header = () => {
  const [isAuthUser, _] = useState<boolean>(false);
  const [openNavText, setOpenNavText] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <MDBNavbar
      light
      sticky
      expand="lg"
      bgColor="white"
      style={{ zIndex: 3, padding: 0 }}
    >
      <MDBContainer>
        <MDBNavbarBrand className="fs-3 mb-1" href="#">
          <NavLink
            onClick={() => setOpenNavText(false)}
            to="/"
            className="text-dark"
          >
            <img
              src={ElectricLogicLogo}
              width={125}
              height={100}
              alt="ELECTRIC LOGIC"
              title="ELECTRIC LOGIC"
              style={{ width: "150px", height: "130px", objectFit: "cover" }}
            />
          </NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                  to="/"
                >
                  Дом
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                  to="/pages/about"
                >
                  О сайте
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                  to="/pages/posts"
                >
                  Пост
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                  to="/pages/team"
                >
                  Команда
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink
                  to="/pages/engineer"
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                >
                  Инжиниринг
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink>
              <MDBNavbarItem>
                <NavLink
                  to="/pages/product"
                  onClick={() => setOpenNavText(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark"
                  }
                >
                  Продукты
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarLink>
          </MDBNavbarNav>

          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              {isAuthUser ? (
                <MDBDropdown>
                  <MDBIcon
                    fas
                    icon="user"
                    color="primary"
                    className="icon me-2"
                    onClick={() => navigate("/pages/login")}
                  />
                </MDBDropdown>
              ) : (
                <MDBDropdown>
                  <MDBDropdownToggle
                    style={{ cursor: "pointer" }}
                    tag="a"
                    className="text-reset me-2 hidden-arrow"
                  >
                    Ismoil
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to="/pages/login" className="text-dark">
                      <MDBDropdownItem link>Logout</MDBDropdownItem>
                    </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              )}
            </div>
            {/* <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="me-3 hidden-arrow icon">
                  <MDBIcon className="m-0" flag="uz" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>
                    <MDBIcon flag="uz" />
                    Uzbek
                    <MDBIcon color="success" icon="check" className="ms-2" />
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem link>
                    <MDBIcon flag="uk" />
                    English
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem link>
                    <MDBIcon flag="ru" />
                    Русский
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div> */}
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <MDBBtn
                className="d-flex align-items-center"
                onClick={() => {
                  setOpenNavText(false);
                  navigate("/pages/cart");
                }}
              >
                <MDBIcon fas icon="shopping-cart" />
                <MDBBadge className="bg-white text-primary ms-2">3</MDBBadge>
                <span className="visually-hidden">unread messages</span>
              </MDBBtn>
            </div>
            {/* <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  style={{ cursor: "pointer" }}
                  className="text-reset me-3 hidden-arrow"
                >
                  <MDBIcon icon="bell" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Some news</MDBDropdownItem>
                  <MDBDropdownItem link>Another news</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div> */}
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
