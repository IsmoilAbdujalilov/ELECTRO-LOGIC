import { useState } from "react";
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
import { Logo } from "../../assets/images/png";
import { ElectricLogicLogo } from "../../assets/images/svg";

export default function App() {
  const [isAuthUser, _] = useState<boolean>(false);
  const [openNavText, setOpenNavText] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <MDBNavbar light sticky expand="lg" bgColor="white" style={{ zIndex: 1, padding: 0 }}>
      <MDBContainer>
        <MDBNavbarBrand className="fs-3 mb-1" href="#">
          <NavLink to="/" className="text-dark">
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
              <MDBNavbarLink active aria-current="page">
                <NavLink to="/" className="text-dark">
                  Дом
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#about">
                О сайте
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#posts">
                Пост
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#products">
                Продукты
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#price">
                Price
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#team">
                Команда
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink className="text-dark" href="#testimonials">
                Testimonials
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink className="text-dark" to="/pages/contact">
                  Contact
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem> */}
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
                    {/* <Link className="text-dark" to="/pages/user">
                      <MDBDropdownItem link>My profile</MDBDropdownItem>
                    </Link> */}
                    <Link className="text-dark" to="/pages/login">
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
                onClick={() => navigate("/pages/cart")}
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
}
