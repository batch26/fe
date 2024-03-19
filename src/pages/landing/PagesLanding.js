import "../../static/bootstrap/css/bootstrap.min.css";
import "../../static//assets/owl.carousel/owl.carousel.min.css";
import "../../static/assets/owl.carousel/owl.theme.default.css";
import "../../static/css/style.css"
import logo from "../../static/images/monster-admin-logo.png"
import hero from "../../static/images/hero.jpg"
import screen1 from "../../static/images/screen1.jpg"
import screen2 from "../../static/images/screen2.jpg"
import screen3 from "../../static/images/screen3.jpg"
import screen4 from "../../static/images/screen4.jpg"
import screen5 from "../../static/images/screen5.jpg"
import screen6 from "../../static/images/screen6.jpg"
import screen7 from "../../static/images/screen7.jpg"
import tablesformat from "../../static/images/tables.png"
import formimg from "../../static/images/forms.png"
import com from "../../static/images/e-com.png"
import multi from "../../static/images/multi-level.png"
import calender from "../../static/images/calendar.png"
import gallery from "../../static/images/gallery.png"
import docs from "../../static/images/docs.png"
import dedicated from "../../static/images/dedicated.png"
import regular from "../../static/images/ragular.png"
import screen8 from "../../static/images/screen8.jpg"
import light from "../../static/images/light-color-scheme.jpg"
import colorskin from "../../static/images/color-skim.png"
import multiple from "../../static/images/multi-upload.png"
import sidebars from "../../static/images/sidebars.png"
import widget from "../../static/images/widgets.png"
import pages from "../../static/images/pages.png"
import ui from "../../static/images/ui-component.png"
import custompng from "../../static/images/customized.png"
import chart from "../../static/images/charts.png"
import lespng from "../../static/images/less.png"
import bootstrap from "../../static/images/bootstraps.png"
import fonts from "../../static/images/fonts.png"
import respo from "../../static/images/respo.png"
import Navigation from "../../organism/navbar";

import Demo from "../../molecule/demo";
import Demo2 from "../../molecule/demo2";
import { Col, Row } from "react-bootstrap";
import Demo3 from "../../molecule/demo3";
import Demo4 from "../../molecule/demo4";
import Demo6 from "../../molecule/demo6";
import Footer from "../../organism/footer";
import { useEffect, useState } from "react";
import axios from "axios";


const PagesLanding = () => {

    const [demo, setDemo] = useState([]);
    const token =  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcml6a3k4NjFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzEwODMxMzE2LCJpYXQiOjE3MTA4MTMzMTZ9.LDNw6A_jFqRTuICK1n0Ut-7hhm6P4Ujd4aplu-Iaq1walyQeYIh3gLbCJJVUrmekPlRjKtj-Lul2hQbcygCPqA"
    useEffect(()=>{
        axios.get("https://44a3-103-109-193-90.ngrok-free.app/api/demo",{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }).then((respon)=>{
            setDemo(respon.data.data)
        }).catch((error)=>{
            console.log(error.response)
        })

    })
    // let demo = [
    //     {
    //         image: "https://i.ibb.co/3fWy8kk/screen1.jpg",
    //         label: "Main Demo Version"
    //     },
    //     {
    //         image: screen2,
    //         label: "Minimal Demo Version"
    //     },
    //     {
    //         image: screen4,
    //         label: "Analytical Demo Version"
    //     },
    //     {
    //         image: screen5,
    //         label: "Horizontal Demo Version"
    //     },
    //     {
    //         image: screen6,
    //         label: "Dark Demo Version"
    //     },
    //     {
    //         image: screen7,
    //         label: "Angular 2/CLI Starter Demo"
    //     },
    //     {
    //         image: screen6,
    //         label: "RTL Demo Version"
    //     }
    // ]

    let demo2 = [
        {
            image: colorskin,
            title: "6 Color Schemes",
            paragrap: "We have included 6 pre-defined color schemes with Monster Admin"
        },
        {
            image: sidebars,
            title: "Dark &amp; Light Sidebar",
            paragrap: "Included Dark and Light Sidebar for getting desire look and feel."
        },
        {
            image: pages,
            title: "700+ Page Templates",
            paragrap: "Yes, we have 6 demos &amp; 120+ Pages per demo to make it easier."
        },
        {
            image: ui,
            title: "500+ UI Components",
            paragrap: "Almost 500+ UI Components being given with Monster Admin Pack."
        },
        {
            image: widget,
            title: "Lots of Widgets",
            paragrap: "Wide range of Widgets are available with Monster Admin Package"
        },
        {
            image: bootstrap,
            title: "Bootstrap 4x",
            paragrap: "Its been made with Bootstrap 4 and full responsive layout."
        },
        {
            image: fonts,
            title: "3000+ Font Icons",
            paragrap: "Lots of Icon Fonts are included here in the package of Monster Admin."
        },
        {
            image: respo,
            title: "Fully Responsive",
            paragrap: "IAll the layout of Monster Admin is Fully Responsive and widely tested."
        },
        {
            image: lespng,
            title: "SaSSBase CSS",
            paragrap: "Our Css is written Less Base to make your life easier."
        },
        {
            image: custompng,
            title: "Easy to Customize",
            paragrap: "Customization will be easy as we understand your pain"
        },
        {
            image: chart,
            title: "Lots of Chart Options",
            paragrap: "You name it and we have it, Yes lots of variations for Charts."
        },
        {
            image: multiple,
            title: "Mutiple File Upload",
            paragrap: "You can upload multiple files with our Multiple selector."
        }
    ]
    let demo4 = [
        {
            image: tablesformat,
            title: "Lots of Table Examples",
            paragrap: "Data Tables are an initial requirement and we added them.",
        },
        {
            image: formimg,
            title: "Validation Forms",
            paragrap: "Different Forms with Validation are included in the pack.",
        },
        {
            image: com,
            title: "eCommerce Pages",
            paragrap: "Yes, all related eCommerce pages are included.",
        },

        {
            image: com,
            title: "eCommerce Pages",
            paragrap: "Yes, all related eCommerce pages are included.",
        },
        {
            image: multi,
            title: "3 Level Dropdown Menu",
            paragrap: "We have added a 3 Level Dropdown Menu in Elite Pack.",
        },
        {
            image: calender,
            title: "Calendar Design",
            paragrap: " Calendar is available with our package & in nice design.",
        },
        {
            image: gallery,
            title: "Calendar Design",
            paragrap: " Calendar is available with our package & in nice design.",
        },
        {
            image: docs,
            title: "Detailed Documentation",
            paragrap: "We have made detailed documentation, so it will be easy to use."
        },
        {
            image: dedicated,
            title: "Dedicated Support",
            paragrap: "We believe in supreme support is key and we offer that.",
        },
        {
            image: regular,
            title: "Regular Updates",
            paragrap: "We are constantly updating our pack with new features.",
        },

    ]


    return (
        <div className="fix-header" >
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navigation logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="fix-width">
                            <div className="row justify-content-center banner-text">
                                <div className="col-md-10 m-b-20">
                                    <h1>The Only <span className="text-info">Admin Template</span> needed for your all <span className="text-info">Backend Needs</span> Don’t believe? Checkout Yourself</h1>
                                    <p className="subtext"><span className="font-medium">Bootstrap 4 </span>Admin Template + <span className="font-medium">Angular 2/CLI starter kit</span>, <span className="font-medium">Light &amp; Dark</span> Versions, Landing Page, <span className="font-medium">6 Demo</span> Variations, <span className="font-medium">5 Dashboard</span> Variations, <span className="font-medium">100+</span> Integrated Plugins, <span className="font-medium">600+</span> Pages, <span className="font-medium">3000+</span> Font Icons, <span className="font-medium">500+</span> UI Components &amp; much more...</p>
                                    <div className="down-btn"> <a href="#demos" className="btn btn-rounded btn-info m-b-10">VIEW DEMOS</a> <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-rounded btn-success m-b-10">BUY NOW</a> </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="hero-banner m-t-30"> <img src={hero} className="img-responsive" alt="Monster admin template" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row light-blue">
                            <div className="col-md-12" id="demos">
                                <div className="text-center"> <small className="text-info">The Most Complete Bootstrap Admin Template</small>
                                    <h2 className="display-7">Best Admin Template of 2017</h2>
                                    <p>Don’t go by our Words, checkout our awesome demos and verify yourself.
                                        <br />You will surely fall in love over the fresh design & brilliant code.</p>
                                </div>
                                <div className="fix-width">
                                    <div className="row text-center">
                                        {demo.map(data => {
                                            return (
                                                <Demo image={data.image} label={data.label} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row white-space">
                            <div className="col-md-12">
                                <div className="fix-width icon-section text-center"> <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    <h2 className="display-7">Amazing Features & Flexibility Provided</h2>
                                    <Row className={"m-t-40"}>
                                        {demo2.map(data => {
                                            return (
                                                <Demo2 image={data.image} title={data.title} paragrap={data.paragrap} />
                                            )
                                        })}
                                    </Row>
                                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                </div>
                            </div>
                        </div>
                        <Row className={"dual-bg"}>
                            <Col md={12}>
                                <div className="fix-width">
                                    <Demo3 image={light} />
                                </div>
                            </Col>
                        </Row>
                        <Row className={"white-space"}>
                            <Col onMouseDown={12}>
                                <div className="fix-width icon-section text-center">
                                    <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    <h2 className="display-7">We are proud on Features provided<br /> with Monster Template</h2>
                                    <Row className={"m-t-40"}>
                                        {demo4.map(data => {
                                            return (
                                                <Demo4 image={data.image} title={data.title} paragrap={data.paragrap} />
                                            )
                                        })}
                                    </Row>
                                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                </div>
                            </Col>
                        </Row>

                        <div className="row light-blue">
                            <div className="col-md-12">
                                <div className="fix-width text-center"> <small className="text-info">ALMOST COVERED EVERYTHING</small>
                                    <h2 className="display-7">What Real Buyers have to <br />Say about Monster Admin</h2>
                                    <div className="tesimonial-box owl-carousel owl-theme" id="owl-demo2">
                                        <div className="item">
                                            <p className="testimonial-text"><b className="font-500">The free version is incredible and it had everything I needed, however I bought this full template to support the developer. It’s a great, lightweight template which has loads of awesome little features and pre-made layouts to help kick-start your next admin panel, CMS, or CRM system. Keep up the good work!</b> </p>
                                            <div className="username"><b>Nick Stanbridge<br /><small className="text-danger"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></small></b></div>
                                        </div>
                                        <div className="item">
                                            <p className="testimonial-text"><b className="font-500">This front-end templates are very nice, very suitable for my background to do now, provide a lot of components for my use. Customer service is also very patient, very good, did not download the success of the beginning, and later also help me download finished, it is worth!</b> </p>
                                            <div className="username"><b>Shinwu Ch<br /><small className="text-danger"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></small></b></div>
                                        </div>
                                        <div className="item">
                                            <p className="testimonial-text"><b className="font-500">in my opinion, Monster Admin is a professional light-weight theme that will suit multiple projects types including MVC web-projects & dashboard-type user interface. I am yet to take a deep dive into the many features it offers. But from a first-hand experience, I would say it is really worth the money you pay for it… Go ahead & give it a try</b> </p>
                                            <div className="username"><b>Mohammed Shameem<br /><small className="text-danger"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></small></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 call-to-action bg-info">
                                <div className="fix-width">
                                    <Demo6 />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <script src="../../../static/js/jquery.min.js"></script>
            <script src="../../../static/bootstrap/js/tether.min.js"></script>
            <script src="../../../static/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sticky-kit.min.js"></script>
            <script src="../../../static/assets/owl.carousel/owl.carousel.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
        </div>
    )
}

export default PagesLanding