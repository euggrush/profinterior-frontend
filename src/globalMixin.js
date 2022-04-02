/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dayjs = require("dayjs");

export default {
    methods: {
        async fetchData(arg) {
            let response = await fetch(arg);
            if (response.ok) {
              this.categories = await response.json();
              console.log(this.categories)
            } else {
              alert(response.status);
            }
          },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        getTimeStamp(date) {
            let myDate = date;
            myDate = myDate.split("-");
            const timestamp = +new Date(
                Date.UTC(myDate[0], myDate[1] - 1, myDate[2])
            ).getTime();
            return timestamp;
        },
        getDate(date) {
            return dayjs(date).format("MMMM D, YYYY h:mm A");
        },

        getMenuWork() {
            window.addEventListener('DOMContentLoaded', event => {

                // Navbar shrink function
                var navbarShrink = function () {
                    const navbarCollapsible = document.body.querySelector('#mainNav');
                    if (!navbarCollapsible) {
                        return;
                    }
                    if (window.scrollY === 0) {
                        navbarCollapsible.classList.remove('navbar-shrink')
                    } else {
                        navbarCollapsible.classList.add('navbar-shrink')
                    }

                };

                // Shrink the navbar 
                navbarShrink();

                // Shrink the navbar when page is scrolled
                document.addEventListener('scroll', navbarShrink);

                // Activate Bootstrap scrollspy on the main nav element
                const mainNav = document.body.querySelector('#mainNav');
                if (mainNav) {
                    new bootstrap.ScrollSpy(document.body, {
                        target: '#mainNav',
                        offset: 74,
                    });
                }

                // Collapse responsive navbar when toggler is visible
                const navbarToggler = document.body.querySelector('.navbar-toggler');
                const responsiveNavItems = [].slice.call(
                    document.querySelectorAll('#navbarResponsive .nav-link')
                );
                responsiveNavItems.map(function (responsiveNavItem) {
                    responsiveNavItem.addEventListener('click', () => {
                        if (window.getComputedStyle(navbarToggler).display !== 'none') {
                            navbarToggler.click();
                        }
                    });
                });

            });
        }

    }
}