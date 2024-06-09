"use client";
import React, { useState } from "react";
import Head from "next/head";

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
                  <span className="navbar-link">ABOUT</span>
                  <span className="navbar-link">VISION</span>
                  <span className="navbar-link">PALLETS</span>
                </div>
                <span className="navbar-logo-title">VIJAY PALLET & BOX</span>
                <div className="home-right">
                  <span className="navbar-link">BOXES</span>
                  <span className="navbar-link">POLICY</span>
                  <span className="navbar-link">CONTACT</span>
                </div>
              </div>
              <div className="home-icons home-image1"></div>
            </div>
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
                  <span className="home-text06">ABOUT</span>
                  <span className="home-text07">VISION</span>
                  <span className="home-text08">PALLETS</span>
                  <span className="home-text09">BOXES</span>
                  <span className="home-text10">POLICY</span>
                  <span className="home-text11">CONTACT</span>
                </div>
              </div>
              {/* <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div> */}
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
                    <button className="button">Explore the collection</button>
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
              <SectionHeading
                heading="SHOP BY BOX CATEGORIES"
                subtitle="Start shopping based on the categories you are interested in"
              ></SectionHeading>
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
                {/* <CategoryCard
                  name="Decoration"
                  categoryImg="https://images.unsplash.com/photo-1558882224-dda166733046?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGRlY29yYXRpb258ZW58MHx8fHwxNjUyODIyMDkx&amp;ixlib=rb-1.2.1&amp;h=200"
                ></CategoryCard> */}
                {/* <CategoryCard
                  name="Collections"
                  categoryImg="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjb2xsZWN0aW9uc3xlbnwwfHx8fDE2NTI4MjIxMTE&amp;ixlib=rb-1.2.1&amp;h=200"
                ></CategoryCard> */}
              </div>
            </div>
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
                  {/* <span>
                    Mobilio Stores Inc. are unique reseller of modern furnitors,
                    designer-made,
                  </span>
                  <br></br>
                  <span>home-decoration items, since 1997.</span> */}
                  <br></br>
                  <span>
                    With a legacy spanning over six decades, Vijay Pallet & Box
                    Manufacturers (India) Pvt. Ltd. stands as a premier name in
                    the wooden packaging industry. Our expertise lies in
                    crafting high-quality wooden pallets, boxes, cable drums,
                    and pallet collars tailored for diverse industrial needs. We
                    specialize in heat-treated wooden packaging solutions that
                    meet the stringent requirements of heavy engineering and
                    pharmaceutical industries. Under the dynamic leadership of
                    Mr. Abhay P. Thorat, our commitment to innovation and
                    quality has made us a trusted partner for businesses engaged
                    in export packing. Discover our durable, custom-made wooden
                    packaging solutions designed to protect and secure your
                    valuable products.
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
          </div>
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
                        value = "999"
                        imageSrc={nailedpine2}
                        rootClassName="rootClassName2"
                      ></ItemCard>
                    </div>
                    <div className="home-right2">
                      <ItemCard
                        name="Heavy Duty Wooden Box"
                        value="799"
                        imageSrc = {heavydutybox}
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
          <div className="home-full-width-banner section-container">
            <div className="home-left4">
              <div className="home-content">
                <span className="home-text29">LOOKBOOKS</span>
                <span className="home-text30">
                  Carefully curated furniture, well matched in style and looks
                </span>
              </div>
              <div className="home-btn button">
                <span className="home-text31">Explore now</span>
              </div>
            </div>
            <img /> {/* here background image will be there from broucher */}
          </div>
          <div className="section-container">
            <div className="max-width-container">
              <SectionHeading
                heading="Our blog"
                subtitle="Read the latest news and furniture related articles"
                rootClassName="section-heading-root-class-name"
              ></SectionHeading>
              <div className="home-container08">
                <BlogPostCard
                  imageSrc="https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  rootClassName="blog-post-card-root-class-name"
                ></BlogPostCard>
                <BlogPostCard
                  title="Unique natural color combinations"
                  newProp="Unique natural color combinations"
                  imageSrc="https://images.unsplash.com/photo-1550254478-ead40cc54513?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                ></BlogPostCard>
                <BlogPostCard
                  title="Special combinations for nature lovers"
                  newProp="Special combinations for nature lovers"
                  imageSrc="https://images.unsplash.com/photo-1615800002234-05c4d488696c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYzOQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                ></BlogPostCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="max-width-container">
            <footer className="home-footer1">
              <div className="home-container09">
                <h3 className="home-text32 Heading-3">MOBILLIO</h3>
                <span className="home-text33">
                  <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
                  <br></br>
                  <span>United States</span>
                </span>
                <span className="home-text36">(671) 555-0110</span>
                <span className="home-text37">contact@mobillio.com</span>
              </div>
              <div className="home-links-container">
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
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
