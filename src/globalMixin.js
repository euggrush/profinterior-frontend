/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const dayjs = require("dayjs");

export default {
    methods: {
        async fetchData(arg) {
            let result = [];
            let response = await fetch(arg);
            if (response.ok) {
                result = await response.json();
            } else {
                alert(response.status);
            }
            return result
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
        // getDate(date) {
        //     return dayjs(date).format("MMMM D, YYYY h:mm A");
        // },
        fadePage(arg1, arg2){
            let page = document.querySelector(arg1);
            let pics = document.querySelectorAll(arg2);
            let navBar = document.querySelector(`.navbar`);
            navBar.classList.add(`visually-hidden`);
            page.classList.add(`faded-page`);
            pics.forEach((item)=>{
                item.classList.add(`faded-image`)
            })
        },
        unfadePage(arg1, arg2){
            let page = document.querySelector(arg1);
            let pics = page.querySelectorAll(arg2);
            let navBar = document.querySelector(`.navbar`);
            navBar.classList.remove(`visually-hidden`);
            page.classList.remove(`faded-page`);
            pics.forEach((item)=>{
                item.classList.remove(`faded-image`)
            })
        },
        getMenuWork() {
            window.addEventListener('DOMContentLoaded', event => {

                // Navbar shrink function
                var navbarShrink = function () {
                    const navbarCollapsible = document.body.querySelector('#mainNav');
                    // const logo = document.querySelector(`.logo`);
                    // const logoWhite = document.querySelector(`.logo-white`);
                    if (!navbarCollapsible) {
                        return;
                    }
                    if (window.scrollY === 0) {
                        navbarCollapsible.classList.remove('navbar-shrink');
                        // logo.classList.add(`d-none`);
                        // logoWhite.classList.remove(`d-none`);
                    } else {
                        navbarCollapsible.classList.add('navbar-shrink');
                        // logo.classList.remove(`d-none`);
                        // logoWhite.classList.add(`d-none`);
                    }

                };

                // Shrink the navbar 
                navbarShrink();

                // Shrink the navbar when page is scrolled
                document.addEventListener('scroll', navbarShrink);

                // Activate Bootstrap scrollspy on the main nav element
                // const mainNav = document.body.querySelector('#mainNav');
                // if (mainNav) {
                //     new bootstrap.ScrollSpy(document.body, {
                //         target: '#mainNav',
                //         offset: 74,
                //     });
                // }

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