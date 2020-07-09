import React, { Component } from "react";
class SideBar extends Component {
  state = {};
  render() {
    return (
      //  < !--Blueprint header-- >
      <React.Fragment>
        <header class="bp-header cf">
          <div class="dummy-logo">
            <div class="dummy-icon foodicon foodicon--coconut"></div>
            <h2 class="dummy-heading" style="color: rgb(88, 88, 199);">
              Road System
            </h2>
          </div>
        </header>
        <button class="action action--open" aria-label="Open Menu">
          <span class="icon icon--menu"></span>
        </button>
        <nav id="ml-menu" class="menu">
          <button class="action action--close" aria-label="Close Menu">
            <span class="icon icon--cross"></span>
          </button>
          <div class="menu__wrap">
            <ul
              data-menu="main"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="All"
            >
              <li class="menu__item" role="menuitem">
                <a
                  class="menu__link"
                  data-submenu="submenu-1"
                  aria-owns="submenu-1"
                  href="#"
                >
                  Major Roads
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a
                  class="menu__link"
                  data-submenu="submenu-2"
                  aria-owns="submenu-2"
                  href="#"
                >
                  Minor Roads
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a
                  class="menu__link"
                  data-submenu="submenu-3"
                  aria-owns="submenu-3"
                  href="#"
                >
                  Dashboard
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a
                  class="menu__link"
                  data-submenu="submenu-4"
                  aria-owns="submenu-4"
                  href="#"
                >
                  Mylk &amp; Drinks
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 1 --> */}
            <ul
              data-menu="submenu-1"
              id="submenu-1"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Major Roads"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Sections
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Intersections
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 1-1 --> */}
            <ul
              data-menu="submenu-1-1"
              id="submenu-1-1"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Sale %"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Fair Trade Roots
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Dried Veggies
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Our Brand
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Homemade
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 2 --> */}
            <ul
              data-menu="submenu-2"
              id="submenu-2"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Minor Roads"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Minor Roads &amp; regoins
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 2-1 --> */}
            <ul
              data-menu="submenu-2-1"
              id="submenu-2-1"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Special Selection"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Exotic Mixes
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Wild Pick
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Vitamin Boosters
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 3 --> */}
            <ul
              data-menu="submenu-3"
              id="submenu-3"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Dashboard"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Map
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Charts
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  blablabla
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  blablabla
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  blablabla
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 3-1 --> */}
            <ul
              data-menu="submenu-3-1"
              id="submenu-3-1"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Promo Packs"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Starter Kit
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  The Essential 8
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Bolivian Secrets
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Flour Packs
                </a>
              </li>
            </ul>
            {/* <!-- Submenu 4 --> */}
            <ul
              data-menu="submenu-4"
              id="submenu-4"
              class="menu__level"
              tabindex="-1"
              role="menu"
              aria-label="Mylk &amp; Drinks"
            >
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Grain Mylks
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Seed Mylks
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Nut Mylks
                </a>
              </li>
              <li class="menu__item" role="menuitem">
                <a class="menu__link" href="#">
                  Nutri Drinks
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* //ajax */}
      </React.Fragment>
    );
  }
}

export default SideBar;
