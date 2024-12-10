"use client";
import React, { useEffect, useState } from "react";
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
import { getCookieObject, setCookieDetails } from "@/utility/loginUtils";
import { ENGLISH_LANGUAGE, LANGUAGE, MARATHI_LANGUAGE } from "@/language/lang";
import ItemModal from "../components/item-modal";
import Modal from "../components/modal";
import { CATEGORY_DETAIL_LABELS, getCategoryDetail } from "@/utility/dataUtil";
import { sendEmail } from "@/utility/emailService";
import BrandCard from "../components/brand-card";
import ResponsiveTabs from "../components/simple-tab";
import SectionInfo from "../components/section-info";
import PalletCollarCard from "../components/pallet-collar-card";

const Dashboard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [websiteDetails, setWebsiteDetails] = useState(null);
  const { language } = getCookieObject();
  const [itemSelected, setItemSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setLanguage = (langString) => {
    setCookieDetails({ lang: langString });
    window.location.reload();
  };
  useEffect(() => {
    const currentWebData =
      language === LANGUAGE.MARATHI ? MARATHI_LANGUAGE : ENGLISH_LANGUAGE;
    setWebsiteDetails({ ...currentWebData });
  }, [language]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onClickCategory = (categoryCode) => {
    const selectedCategoryDetails = getCategoryDetail(
      categoryCode,
      websiteDetails
    );
    setItemSelected(selectedCategoryDetails);
    openModal();
  };

  const sendEmailForEnquiry = () => {
    const emailPayload = {
      subject: subject,
      to_name: username,
      message: message,
      from_email: emailId,
      reply_to: emailId,
    };
    sendEmail(emailPayload).then((emailRes) => {
      if (emailRes) {
        alert("Your Message is send to the admin, we will contact you soon");
      }
    });
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ItemModal
          selectedCategoryDetails={itemSelected}
          heading={"Products"}
          closeModal={closeModal}
          featureHeading={"Features"}
        />
      </Modal>
      {websiteDetails && (
        <div className="home-container">
          <Head>
            <title>{websiteDetails.title}</title>
            <meta property="og:title" content="Vijay Pallet & Box" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Mukta:wght@300&family=Roboto+Slab:wght@100..900&display=swap"
              rel="stylesheet"
            ></link>
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
                      <span className="navbar-link">
                        {websiteDetails.about}
                      </span>
                    </Link>
                    <Link href="#vision">
                      <span className="navbar-link">
                        {websiteDetails.vision}
                      </span>
                    </Link>
                    <Link href="#products">
                      <span className="navbar-link">
                        {websiteDetails.products}
                      </span>
                    </Link>
                  </div>
                  <span className="navbar-logo-title">
                    <img src="./assets/logovijay.png" width={300} />
                  </span>
                  <div className="home-right">
                    <Link href="#boxes">
                      <span className="navbar-link">
                        {websiteDetails.productGallery}
                      </span>
                    </Link>
                    <Link href="#policy">
                      <span className="navbar-link">
                        {websiteDetails.policy}
                      </span>
                    </Link>
                    <Link href="#contact">
                      <span className="navbar-link">
                        {websiteDetails.contact}
                      </span>
                    </Link>
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
                    <span className="home-logo-center1">
                      <img src="./assets/logovijay.png" width={300} />
                    </span>
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
                      <span className="home-text06">
                        {websiteDetails.about}
                      </span>
                    </Link>
                    <Link href="#vision" onClick={toggleMenu}>
                      <span className="home-text07">
                        {websiteDetails.vision}
                      </span>
                    </Link>
                    <Link href="#products" onClick={toggleMenu}>
                      <span className="home-text08">
                        {websiteDetails.products}
                      </span>
                    </Link>
                    <Link href="#boxes" onClick={toggleMenu}>
                      <span className="home-text09">
                        {websiteDetails.productGallery}
                      </span>
                    </Link>
                    <Link href="#policy" onClick={toggleMenu}>
                      <span className="home-text10">
                        {websiteDetails.policy}
                      </span>
                    </Link>
                    <Link href="#contact" onClick={toggleMenu}>
                      <span className="home-text11">
                        {websiteDetails.contact}
                      </span>
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
                        <span>{websiteDetails.leadingManufacturing}</span>
                        <br></br>
                        <span>{websiteDetails.ofWoodenPallet}</span>
                        <br></br>
                        <span>{websiteDetails.cableDrumsPallet}</span>
                        <br></br>
                        <span>{websiteDetails.specialPurposeWooden}</span>
                      </span>
                    </div>
                    <h1 className="home-text16 Heading-title1">
                      {websiteDetails.title}
                    </h1>
                    <div
                      className="home-container04"
                      onClick={() =>
                        window.open(
                          "/assets/Vijay_Pallet_Brochure.pdf",
                          "_blank"
                        )
                      }
                    >
                      <span className="home-text17 download">
                        {websiteDetails.downloadBrochure}
                      </span>
                    </div>
                    <div className="home-btn-group">
                      <Link href="#trending">
                        <button className="button">
                          {websiteDetails.exploreTheCollection}
                        </button>
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
            <br />
            <br />
            <br />
            <section id="whatweprovide">
              <div className="home-banner">
                <div className="home-container05">
                  <h3 className="home-text19 Heading-3">
                    {websiteDetails.about}
                  </h3>
                  {/* <span className="home-text20">
                      <span></span>
                      <span>{websiteDetails.palletAndBoxes}</span>
                    </span> */}
                </div>
              </div>
              <div className="home-container06 max-width-container">
                <div className="home-container07">
                  <span className="home-text23">
                    <span>
                      {websiteDetails.intro}
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
            <br />
            <br />
            <br />
            <section id="about">
              <div className="home-banner">
                <div className="home-container05">
                  <h3 className="home-text19 Heading-custom">
                    {websiteDetails.whatwedo}
                  </h3>
                  {/* <span className="home-text20 ">
                    <span></span>
                    <span>{websiteDetails.whatwedo}</span>
                  </span> */}
                </div>
              </div>
              <div className="home-container06 max-width-container">
                <div className="home-container07">
                  <h3 className="point-title">{websiteDetails.whatWeDoP1}</h3>
                  <h3 className="point-title">{websiteDetails.whatWeDoP2}</h3>
                  <h3 className="point-title">{websiteDetails.whatWeDoP3}</h3>
                  <h3 className="point-title">{websiteDetails.whatWeDoP4}</h3>
                </div>
              </div>
            </section>
            <br />
            <br />
            <br />
            <section id="vision">
              <div className="home-banner">
                <div className="home-container05">
                  <h3 className="home-text19 Heading-3">
                    {websiteDetails.vision}
                  </h3>
                  <span className="home-text20">
                    <span></span>
                    <span>{websiteDetails.andValues}</span>
                  </span>
                </div>
              </div>
              <div className="home-container06 max-width-container">
                <div className="home-container07">
                  <span className="home-text23">
                    <span>
                      {websiteDetails.visionPara}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <section>
                <div>
                  <h3 className="text-4xl  home-text19 text-center mt-10">
                    {websiteDetails.values}
                  </h3>
                  <br />
                  <ul className="space-y-4 text-left">
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
                      {websiteDetails.onTimeDelivery2}
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
                      {websiteDetails.aimingZeroDefect}
                      <br />/ {websiteDetails.zeroBreakdown} /{" "}
                      {websiteDetails.zeroAccident}
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
                      {websiteDetails.customerSatisfaction}
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
                      {websiteDetails.costEffectiveness}
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
                      {websiteDetails.continualImprovements}
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
                      {websiteDetails.socialAndEnvironmental}
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
                      {websiteDetails.practisingSafety}
                    </li>
                  </ul>
                </div>
              </section>
              {/* <FeaturesSection sectionTitle="Our Values" data={featureListData} /> */}
            </section>
            <br />
            <br />
            <br />
            <section id="policy">
              <div className="home-full-width-banner section-container">
                <div className="home-left4">
                  <div className="home-content">
                    <span className="home-textQuality">
                      {websiteDetails.qualityPolicy}
                    </span>
                    <span
                      className="home-text30"
                      style={{
                        display: "block",
                        textAlign: "justify",
                        lineHeight: "1.5",
                      }}
                    >
                      {websiteDetails.qualityPara}
                    </span>
                    <span className="home-text17 mt-10 mb-4">
                      {websiteDetails.ourCoreValues}
                    </span>
                    <span
                      className="home-text30"
                      style={{
                        display: "block",
                        textAlign: "justify",
                        lineHeight: "1.5",
                      }}
                    >
                      <ul class="list-disc">
                        <li>{websiteDetails.qualityWorkmanship}</li>
                        <li>{websiteDetails.onTimeDelivery}</li>
                        <li>{websiteDetails.superiorAfterSales}</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <img alt="VPB" className="home-image6" src={lookbook} />{" "}
              </div>
            </section>
            <br />
            <br />
            <br />
            <section id="Zero defect philosophy">
              <div className="home-banner">
                <div className="home-container05">
                  <span className="home-text19 Heading-custom">
                    <h3>{websiteDetails.zeroDefect}</h3>
                    <br />
                    <h3>{websiteDetails.philosophy}</h3>
                  </span>
                </div>
              </div>
              <div className="home-container06 max-width-container">
                <div className="home-container07">
                  <h3 className="point-title">
                    {websiteDetails.zeroComplaints}
                  </h3>
                  <h3 className="point-title">
                    {websiteDetails.zeroInefficiency}
                  </h3>
                  <h3 className="point-title">{websiteDetails.zeroWastage}</h3>
                  <h3 className="point-title">
                    {websiteDetails.zeroPollution}
                  </h3>
                </div>
              </div>
            </section>
            <br />
            <br />
            <br />
            <section id="products">
              <div className="home-banner">
                <div className="home-container05">
                  <span className="home-text19 Heading-custom">
                    <h3>{websiteDetails.products}</h3>
                  </span>
                </div>
              </div>
              <div>
                <ResponsiveTabs websiteDetails={websiteDetails} />
              </div>
            </section>
            <div className="section-container column">
              <div className="max-width-container">
                <section id="boxes">
                  <SectionHeading
                    heading={websiteDetails.shopByBoxCategories}
                    subtitle={websiteDetails.startShopping}
                  ></SectionHeading>
                </section>
                <div className="home-cards-container">
                  <CategoryCard
                    name={websiteDetails.skiddedBaseBox}
                    categoryImg={skidded}
                    onClickCategory={onClickCategory}
                    categoryCode={CATEGORY_DETAIL_LABELS.SKIDDED_BASE_BOX}
                  ></CategoryCard>
                  <CategoryCard
                    name={websiteDetails.crateTypeBox}
                    categoryImg={cratetypebox}
                    onClickCategory={onClickCategory}
                    categoryCode={CATEGORY_DETAIL_LABELS.CRATE_TYPE_BOX}
                  ></CategoryCard>
                  <CategoryCard
                    name={websiteDetails.nailedPine}
                    categoryImg={nailedpine}
                    onClickCategory={onClickCategory}
                    categoryCode={CATEGORY_DETAIL_LABELS.NAILED_PINE}
                  ></CategoryCard>
                  <CategoryCard
                    name={websiteDetails.naillessPlywoodBox}
                    categoryImg={nailless}
                    onClickCategory={onClickCategory}
                    categoryCode={CATEGORY_DETAIL_LABELS.NAIL_LESS_PLYWOOD_BOX}
                  ></CategoryCard>
                  <CategoryCard
                    name={websiteDetails.standardBox}
                    categoryImg={standard}
                    onClickCategory={onClickCategory}
                    categoryCode={CATEGORY_DETAIL_LABELS.STANDARD_BOX}
                  ></CategoryCard>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="max-width-container">
              <section id="pallets">
                <SectionHeading
                  heading={websiteDetails.shopByPalletAndCrates}
                  subtitle={websiteDetails.shopByCategories}
                ></SectionHeading>
              </section>
              <div className="home-cards-container">
                <CategoryCard
                  name={websiteDetails.europeanWayPallet}
                  categoryImg={european}
                  onClickCategory={onClickCategory}
                  categoryCode={CATEGORY_DETAIL_LABELS.EUROPEAN_WAY_PALLET}
                ></CategoryCard>
                <CategoryCard
                  name={websiteDetails.pineWoodPallet}
                  categoryImg={pinewoodpallet}
                  onClickCategory={onClickCategory}
                  categoryCode={CATEGORY_DETAIL_LABELS.PINE_WOOD_PALLET}
                ></CategoryCard>
                <CategoryCard
                  name={websiteDetails.fourwatCloseBoardPallet}
                  categoryImg={fourwaypallet}
                  onClickCategory={onClickCategory}
                  categoryCode={
                    CATEGORY_DETAIL_LABELS.FOUR_WAY_CLOSE_BOARD_PALLET
                  }
                ></CategoryCard>
              </div>
            </div>
            <br />
            <br />
            <div className="max-width-container">
              <section id="pallets">
                <SectionHeading
                  heading={websiteDetails.shopByPalletAndCollars}
                  subtitle={websiteDetails.shopByPalletCollarsDesc}
                ></SectionHeading>
              </section>
              <div className="home-cards-container">
                <PalletCollarCard
                  name={websiteDetails.europeanWayPallet}
                  categoryImg={"./assets/pc1.png"}
                ></PalletCollarCard>
                <PalletCollarCard
                  name={websiteDetails.pineWoodPallet}
                  categoryImg={"./assets/pc2.png"}
                ></PalletCollarCard>
                <PalletCollarCard
                  name={websiteDetails.fourwatCloseBoardPallet}
                  categoryImg={"./assets/pc3.png"}
                ></PalletCollarCard>
                <PalletCollarCard
                  name={websiteDetails.fourwatCloseBoardPallet}
                  categoryImg={"./assets/pc4.png"}
                ></PalletCollarCard>
              </div>
            </div>
            <section id="trending">
              <div className="section-container">
                <div className="max-width-container">
                  <SectionHeading
                    heading={websiteDetails.trendingItems}
                    subtitle={websiteDetails.exploreOurMostTrending}
                  ></SectionHeading>
                  <div className="home-gallery">
                    <div className="home-left1">
                      <ItemCard
                        name={websiteDetails.cableDrums}
                        value="1499"
                        imageSrc={cabledrums}
                        rootClassName="rootClassName4"
                      ></ItemCard>
                    </div>
                    <div className="home-right1">
                      <div className="home-top">
                        <div className="home-left2">
                          <ItemCard
                            name={websiteDetails.plywoodBox}
                            value="999"
                            imageSrc={nailedpine2}
                            rootClassName="rootClassName2"
                          ></ItemCard>
                        </div>
                        <div className="home-right2">
                          <ItemCard
                            name={websiteDetails.industryWoodenBox}
                            value="799"
                            imageSrc={industrybox}
                            rootClassName="rootClassName3"
                          ></ItemCard>
                        </div>
                      </div>
                      <div className="home-bottom">
                        <div className="home-left3">
                          <ItemCard
                            name={websiteDetails.pallet}
                            value="599"
                            imageSrc={pallet}
                            rootClassName="item-card-root-class-name1"
                          ></ItemCard>
                        </div>
                        <div className="home-right3">
                          <ItemCard
                            name={websiteDetails.crateTypeBox}
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
          </div>
          <div className="section-container column">
            <div className="max-width-container">
              <section id="boxes">
                <SectionInfo
                  heading1={websiteDetails.custom}
                  heading2={websiteDetails.packaging}
                  subtitle={websiteDetails.productBrandingPara1}
                ></SectionInfo>
                <SectionInfo
                  heading1={websiteDetails.product}
                  heading2={websiteDetails.branding}
                  subtitle={websiteDetails.productBrandingPara2}
                ></SectionInfo>
              </section>
              <div className="home-cards-container">
                <BrandCard
                  name={websiteDetails.skiddedBaseBox}
                  categoryImg={skidded}
                  onClickCategory={onClickCategory}
                  categoryCode={CATEGORY_DETAIL_LABELS.SKIDDED_BASE_BOX}
                ></BrandCard>
              </div>
            </div>
          </div>
          <div className="home-footer">
            <div className="max-width-container">
              <footer className="home-footer1">
                <div className="home-container09 p-4 sm:p-6 lg:p-8">
                  <h3 className="home-text32 Heading-3 text-xl sm:text-2xl lg:text-3xl">
                    {websiteDetails.title}
                  </h3>
                  <span className="home-text33 block text-base sm:text-lg lg:text-xl">
                    <span>
                      <h1 className="home-text17 mt-10 mb-4">
                        {websiteDetails.officeAddress}
                      </h1>
                      {websiteDetails.plotNo}
                    </span>
                    <br />
                    <span>{websiteDetails.puneMaha}</span>
                  </span>
                  <span className="home-text33 block text-base sm:text-lg lg:text-xl">
                    <span>
                      <h1 className="home-text17 mt-10 mb-4">
                        {websiteDetails.factoryAddress}
                      </h1>
                      {websiteDetails.factoryRealAddress}
                    </span>
                    <br />
                  </span>
                  <section id="contact" className="mt-4">
                    <span className="home-text36 block text-base sm:text-lg lg:text-xl">
                      {websiteDetails.contactNumber} :{" "}
                      {websiteDetails.mobileNumber}
                    </span>
                    <span className="home-text36 block text-base sm:text-lg lg:text-xl">
                      {websiteDetails.office} : {websiteDetails.officeNumber}
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
                        {websiteDetails.contactUs}
                      </h2>
                      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        {websiteDetails.needMoreDetail}
                      </p>
                      <form action="#" class="space-y-8">
                        <div>
                          <label
                            for="username"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {websiteDetails.yourName}
                          </label>
                          <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@gmail.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {websiteDetails.yourEmail}
                          </label>
                          <input
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
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
                            {websiteDetails.subject}
                          </label>
                          <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
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
                            {websiteDetails.yourMessage}
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            rows="6"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                          ></textarea>
                        </div>
                        <button
                          onClick={sendEmailForEnquiry}
                          type="button"
                          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          {websiteDetails.sendMessage}
                        </button>
                      </form>
                      <div class="mt-10">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                          {websiteDetails.selectLanguage}
                        </h2>
                        <p
                          onClick={() => setLanguage(LANGUAGE.ENGLISH)}
                          class="mb-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white cursor-pointer"
                        >
                          {websiteDetails.english}
                        </p>
                        <p
                          onClick={() => setLanguage(LANGUAGE.MARATHI)}
                          class="mb-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white cursor-pointer"
                        >
                          {websiteDetails.marathi}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
