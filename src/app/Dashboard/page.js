"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SectionHeading from "../components/section-heading";
import CategoryCard from "../components/category-card";
import ItemCard from "../components/item-card";
import BlogPostCard from "../components/blog-post-card";
import palletbox from "../image/palletbox.js";
import skidded from "../image/skidded.js";
import cratetypebox from "../image/cratetypebox";
import nailedpine from "../image/nailedpine";
import "./styles.css";
import nailless from "../image/nailless";
import standard from "../image/standard";
import cabledrums from "../image/cabledrums";
import nailedpine2 from "../image/nailedpine2";
import heavydutybox from "../image/heavydutybox";
import pallet from "../image/pallet";
import cratetypebox2 from "../image/cratetypebox2";
import industrybox from "../image/industrybox";
import lookbook from "../image/lookbook";
import european from "../image/european";
import pinewoodpallet from "../image/pinewoodpallet";
import fourwaypallet from "../image/fourwaypallet";
import rubberwoordcrate from "../image/rubberwoodcrate";
import woodenpackagingcrate from "../image/woodenpackagingcrate";

const Dashboard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Vijay Pallet & Box</title>
          <meta property="og:title" content="Vijay Pallet & Box" />
        </Head>
        <div className="home-navbar">
          <header
            data-role="Header"
            className="home-header max-width-container"
          >
            <div className="home-navbar1">
              <div className="home-middle">
                <div className="home-left">
                  <Link href="#about">
                    <span className="navbar-link">ABOUT</span>
                  </Link>
                  <Link href="#vision">
                    <span className="navbar-link">VISION</span>
                  </Link>
                  <Link href="#pallets">
                    <span className="navbar-link">PALLETS</span>
                  </Link>
                </div>
                <span className="navbar-logo-title">VIJAY PALLET & BOX</span>
                <div className="home-right">
                  <Link href="#boxes">
                    <span className="navbar-link">BOXES</span>
                  </Link>
                  <Link href="#policy">
                    <span className="navbar-link">POLICY</span>
                  </Link>
                  <Link href="#contact">
                    <span className="navbar-link">CONTACT</span>
                  </Link>
                </div>
              </div>
              <div className="home-icons home-image1"></div>
            </div>
            <span className="navbar-logo-title mobile-title">
              Vijay Pallet & Box
            </span>
            <div
              data-role="BurgerMenu"
              className="home-burger-menu"
              onClick={toggleMenu}
            >
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-role="MobileMenu"
              className={`home-mobile-menu ${menuOpen ? "active" : ""}`}
            >
              <div className="home-nav">
                <div className="home-container02">
                  <span className="home-logo-center1">Vijay Pallet & Box</span>
                  <div
                    data-role="CloseMobileMenu"
                    className="home-close-mobile-menu"
                    onClick={toggleMenu}
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-middle1">
                  <Link href="#about" onClick={toggleMenu}>
                    <span className="home-text06">ABOUT</span>
                  </Link>
                  <Link href="#vision" onClick={toggleMenu}>
                    <span className="home-text07">VISION</span>
                  </Link>
                  <Link href="#pallets" onClick={toggleMenu}>
                    <span className="home-text08">PALLETS</span>
                  </Link>
                  <Link href="#boxes" onClick={toggleMenu}>
                    <span className="home-text09">BOXES</span>
                  </Link>
                  <Link href="#policy" onClick={toggleMenu}>
                    <span className="home-text10">POLICY</span>
                  </Link>
                  <Link href="#contact" onClick={toggleMenu}>
                    <span className="home-text11">CONTACT</span>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-width-container">
              <div className="home-hero1">
                <div className="home-container03">
                  <div className="home-info">
                    <img
                      alt="Rectangle43271305"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                      className="home-image4"
                    />
                    <span className="home-text12">
                      <span>Leading Manufacturing Company</span>
                      <br></br>
                      <span>of Wooden pallet & Boxes</span>
                    </span>
                  </div>
                  <h1 className="home-text16 Heading-1">Durability</h1>
                  <div className="home-container04">
                    <span className="home-text17">FROM</span>
                    <span className="home-text18">₹999</span>
                  </div>
                  <div className="home-btn-group">
                    <Link href="#trending">
                      <button className="button">Explore the collection</button>
                    </Link>
                  </div>
                </div>
                <img
                  alt="Wooden pallet and box"
                  src={palletbox}
                  className="home-image5"
                />{" "}
                {/* here background image is there   */}
              </div>
            </div>
          </div>

          <div className="section-container column">
            <div className="max-width-container">
              <section id="boxes">
                <SectionHeading
                  heading="SHOP BY BOX CATEGORIES"
                  subtitle="Start shopping based on the categories you are interested in"
                ></SectionHeading>
              </section>
              <div className="home-cards-container">
                <CategoryCard
                  name="Skidded Base Box"
                  categoryImg={skidded}
                ></CategoryCard>
                <CategoryCard
                  name="Crate Type Box"
                  categoryImg={cratetypebox}
                ></CategoryCard>
                <CategoryCard
                  name="Nailed Pine & Plywood Boxes"
                  categoryImg={nailedpine}
                ></CategoryCard>
                <CategoryCard
                  name="Nailless Plywood Box"
                  categoryImg={nailless}
                ></CategoryCard>
                <CategoryCard
                  name="Standard Box"
                  categoryImg={standard}
                ></CategoryCard>
              </div>
            </div>
            <section id="about">
              <div className="home-banner">
                <div className="home-container05">
                  <h3 className="home-text19 Heading-3">VIJAY</h3>
                  <span className="home-text20">
                    <span></span>
                    <span>Pallet & Boxes</span>
                  </span>
                </div>
              </div>
              <div className="home-container06 max-width-container">
                <div className="home-container07">
                  <span className="home-text23">
                    <br></br>
                    <span>
                      With a legacy spanning over six decades, Vijay Pallet &
                      Box Manufacturers (India) Pvt. Ltd. stands as a premier
                      name in the wooden packaging industry. Our expertise lies
                      in crafting high-quality wooden pallets, boxes, cable
                      drums, and pallet collars tailored for diverse industrial
                      needs. We specialize in heat-treated wooden packaging
                      solutions that meet the stringent requirements of heavy
                      engineering and pharmaceutical industries. Under the
                      dynamic leadership of Mr. Abhay P. Thorat, our commitment
                      to innovation and quality has made us a trusted partner
                      for businesses engaged in export packing. Discover our
                      durable, custom-made wooden packaging solutions designed
                      to protect and secure your valuable products.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  {/* <img
                  alt="vpb"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                  className="home-svg"
                /> */}
                  {/* <button className="button">Read more</button> */}
                </div>
              </div>
            </section>
          </div>
          <br />
          <br />
          <div className="max-width-container">
            <section id="pallets">
              <SectionHeading
                heading="SHOP BY PALLET & CRATES"
                subtitle="Start shopping based on the categories you are interested in"
              ></SectionHeading>
            </section>
            <div className="home-cards-container">
              <CategoryCard
                name="European 4 Way Pallet"
                categoryImg={european}
              ></CategoryCard>
              <CategoryCard
                name="Pine Wood Pallet"
                categoryImg={pinewoodpallet}
              ></CategoryCard>
              <CategoryCard
                name="Fourway Close Board Pallet"
                categoryImg={fourwaypallet}
              ></CategoryCard>
              <CategoryCard
                name="Rubber Wood Crate"
                categoryImg={rubberwoordcrate}
              ></CategoryCard>
              <CategoryCard
                name="Wooden Packaging Crate"
                categoryImg={woodenpackagingcrate}
              ></CategoryCard>
            </div>
          </div>
          <section id="trending">
            <div className="section-container">
              <div className="max-width-container">
                <SectionHeading></SectionHeading>
                <div className="home-gallery">
                  <div className="home-left1">
                    <ItemCard
                      name="Cable Drums"
                      value="1499"
                      imageSrc={cabledrums}
                      rootClassName="rootClassName4"
                    ></ItemCard>
                  </div>
                  <div className="home-right1">
                    <div className="home-top">
                      <div className="home-left2">
                        <ItemCard
                          name="Plywood Box"
                          value="999"
                          imageSrc={nailedpine2}
                          rootClassName="rootClassName2"
                        ></ItemCard>
                      </div>
                      <div className="home-right2">
                        <ItemCard
                          name="Industry Wooden Box"
                          value="799"
                          imageSrc={industrybox}
                          rootClassName="rootClassName3"
                        ></ItemCard>
                      </div>
                    </div>
                    <div className="home-bottom">
                      <div className="home-left3">
                        <ItemCard
                          name="Pallet"
                          value="599"
                          imageSrc={pallet}
                          rootClassName="item-card-root-class-name1"
                        ></ItemCard>
                      </div>
                      <div className="home-right3">
                        <ItemCard
                          name="Crate Type Box"
                          value="899"
                          imageSrc={cratetypebox2}
                          rootClassName="item-card-root-class-name6"
                        ></ItemCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="vision">
            <div className="home-banner">
              <div className="home-container05">
                <h3 className="home-text19 Heading-3">VISION</h3>
                <span className="home-text20">
                  <span></span>
                  <span>and Values</span>
                </span>
              </div>
            </div>
            <div className="home-container06 max-width-container">
              <div className="home-container07">
                <span className="home-text23">
                  <span>
                    We are committed to be an innovative, most respected and
                    most preferred business partner for our customers and a
                    model of excellence for our industry by setting up a
                    reliable, dynamic, positive, target oriented organization
                    that believes in continuous improvement, team spirit and
                    high level of ethics based on trusting relationships. Our
                    goal is to exceed customer expectations through excellence
                    in manufacturing and delivering quality product.
                    {/* <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    /> */}
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section id="values">
            <div className="home-container06 max-width-container">
              <div className="home-container07 text-center">
                <h3 className="text-4xl  home-text19 Heading-3">Values</h3>
                <br/>
                <br/>
                <br/>
                <ul className="space-y-4 text-left lg:ml-52">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    On Time Delivery
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Aiming for Zero Defect
                    <br/>
                     / Zero Breakdown / Zero Accident.
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Customer Satisfaction.
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cost Effectiveness
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Continual Improvements
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Social & Environmental Responsibility.
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Practising Safety Measures at all Work areas.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="policy">
            <div className="home-full-width-banner section-container">
              <div className="home-left4">
                <div className="home-content">
                  <span className="home-text29">QUALITY POLICY</span>
                  <span
                    className="home-text30"
                    style={{
                      display: "block",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    At Vijay Pallet & Box Manufacturers India Pvt. Ltd., we
                    embrace ISO 9001:2015 standards, prioritizing quality
                    workmanship, on-time delivery, and superior after-sales
                    support to meet and exceed customer expectations. We are
                    committed to statutory and regulatory compliance, fostering
                    a fulfilling work environment, and continuously improving
                    our Quality Management System.
                  </span>
                </div>
              </div>
              <img alt="VPB" className="home-image6" src={lookbook} />{" "}
            </div>
          </section>
        </div>
        <div className="home-footer">
          <div className="max-width-container">
            <footer className="home-footer1">
              {/* <div className="home-container09">
                <h3 className="home-text32 Heading-3">MOBILLIO</h3>
                <span className="home-text33">
                  <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
                  <br></br>
                  <span>United States</span>
                </span>
                <section id="contact">
                  <span className="home-text36">(671) 555-0110</span>
                  <span className="home-text37">contact@mobillio.com</span>
                </section>
              </div> */}
              {/* <div className="home-links-container">
                <div className="home-container10">
                  <span className="home-text38">Categories</span>
                  <span className="home-text39">Collections</span>
                  <span className="home-text40">Desks</span>
                  <span className="home-text41">Furniture</span>
                  <span className="home-text42">Lamps</span>
                  <span className="home-text43">Plants</span>
                  <span className="home-text44">Decoration</span>
                </div>
                <div className="home-container11">
                  <span className="home-text45">Company</span>
                  <span className="home-text46">Shop</span>
                  <span className="home-text47">Lookbook</span>
                  <span className="home-text48">Specials</span>
                  <span className="home-text49">About</span>
                  <span className="home-text50">Blog</span>
                </div>
                <div className="home-container12">
                  <span className="home-text51">Resources</span>
                  <span className="home-text52">Contact us</span>
                  <span className="home-text53">Order</span>
                  <span className="home-text54">Track your order</span>
                  <span className="home-text55">Shipping &amp; Delivery</span>
                </div>
              </div> */}
              <div className="home-container09 p-4 sm:p-6 lg:p-8">
                <h3 className="home-text32 Heading-3 text-xl sm:text-2xl lg:text-3xl">
                  Vijay Pallet & Box
                </h3>
                <span className="home-text33 block text-base sm:text-lg lg:text-xl">
                  <span>
                    Plot No. 29, Vijay Sadan, Niranjan Housing Society
                  </span>
                  <br />
                  <span>Pune, Maharashtra</span>
                </span>
                <section id="contact" className="mt-4">
                  <span className="home-text36 block text-base sm:text-lg lg:text-xl">
                    9422314491, 9657222868
                  </span>
                  <span className="home-text37 block text-base sm:text-lg lg:text-xl">
                    contact@vijaypalletandbox.com
                  </span>
                </section>
                <br />
                <div className="google-map mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242221.3872836721!2d73.57675778671873!3d18.451509099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac13fffffff%3A0xe6710018343d0a80!2sVijay%20Pallet%20And%20Box%20Manufacturers%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1718907040817!5m2!1sen!2sus"
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>

              <div>
                <section class="bg-white dark:bg-gray-900">
                  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                      Contact Us
                    </h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      Need more details of our products & services? Let us know
                    </p>
                    <form action="#" class="space-y-8">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="name@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="subject"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Let us know how we can help you"
                          required
                        />
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="message"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
