import React, { useState } from "react";

const Work = () => {
  // ===============SECOND LINK STARTS ==================/
  const openDesc2 = () => {
    setdescription3({ mainClass: "main-work-wrapper", mainFuction: openDesc3 });
    setdescription4({ mainClass: "main-work-wrapper", mainFuction: openDesc4 });

    setdescription2({
      mainClass: "main-work-wrapper--open",
      mainFuction: closeDesc2,
      childClassOne: "std-text work-wrapper_desc--show-one",
      childClassTwo: "std-text work-wrapper_desc--show-two",
      childClassThree: "std-text work-wrapper_desc--show-three",
      childClassFour: "std-text work-wrapper_desc--show-four",
      childClassFive:
        "std-text--black std-text--link work-wrapper_desc--show-five",
      childClassSix:
        "std-text--black std-text--link work-wrapper_desc--show-six",
    });
  };

  const closeDesc2 = () => {
    //e.target.nextSibling.className = 'main-work-wrapper--close'
    setdescription2({
      mainClass: "main-work-wrapper main-work-wrapper--close",
      mainFuction: openDesc2,
      childClassOne: "std-text work-wrapper_desc--hide-one",
      childClassTwo: "std-text work-wrapper_desc--hide-two",
      childClassThree: "std-text work-wrapper_desc--hide-three",
      childClassFour: "std-text work-wrapper_desc--hide-four",
      childClassFive: "std-text--black work-wrapper_desc--hide-five",
      childClassSix: "std-text--black work-wrapper_desc--hide-six",
    });
  };

  const [description2, setdescription2] = useState({
    mainClass: "main-work-wrapper",
    mainFuction: openDesc2,
    childClassOne: "std-text work-wrapper_desc",
    childClassTwo: "std-text work-wrapper_desc",
    childClassThree: "std-text work-wrapper_desc",
    childClassFour: "std-text work-wrapper_desc",
    childClassFive: "std-text--black std-text--link work-wrapper_desc",
    childClassSix: "std-text--black std-text--link work-wrapper_desc",
  });
  // ===============SECOND LINK ENDS ==================/

  // ===============THIRD LINK STARTS ==================/
  const openDesc3 = () => {
    setdescription2({ mainClass: "main-work-wrapper", mainFuction: openDesc2 });
    setdescription4({ mainClass: "main-work-wrapper", mainFuction: openDesc4 });

    setdescription3({
      mainClass: "main-work-wrapper--open",
      mainFuction: closeDesc3,
      childClassOne: "std-text work-wrapper_desc--show-one",
      childClassTwo: "std-text work-wrapper_desc--show-two",
      childClassThree: "std-text work-wrapper_desc--show-three",
      childClassFour: "std-text work-wrapper_desc--show-four",
      childClassFive:
        "std-text--black std-text--link work-wrapper_desc--show-five",
      childClassSix:
        "std-text--black std-text--link work-wrapper_desc--show-six",
    });
  };

  const closeDesc3 = () => {
    setdescription3({
      mainClass: "main-work-wrapper main-work-wrapper--close",
      mainFuction: openDesc3,
      childClassOne: "std-text work-wrapper_desc--hide-one",
      childClassTwo: "std-text work-wrapper_desc--hide-two",
      childClassThree: "std-text work-wrapper_desc--hide-three",
      childClassFour: "std-text work-wrapper_desc--hide-four",
      childClassFive: "std-text--black work-wrapper_desc--hide-five",
      childClassSix: "std-text--black work-wrapper_desc--hide-six",
    });
  };

  const [description3, setdescription3] = useState({
    mainClass: "main-work-wrapper",
    mainFuction: openDesc3,
    childClassOne: "std-text work-wrapper_desc",
    childClassTwo: "std-text work-wrapper_desc",
    childClassThree: "std-text work-wrapper_desc",
    childClassFour: "std-text work-wrapper_desc",
    childClassFive: "std-text--black std-text--link work-wrapper_desc",
    childClassSix: "std-text--black std-text--link work-wrapper_desc",
  });
  // ===============THIRD LINK ENDS ==================/

  // ===============FOURTH LINK STARTS ==================/
  const openDesc4 = () => {
    setdescription2({ mainClass: "main-work-wrapper", mainFuction: openDesc2 });
    setdescription3({ mainClass: "main-work-wrapper", mainFuction: openDesc3 });

    setdescription4({
      mainClass: "main-work-wrapper--open",
      mainFuction: closeDesc4,
      childClassOne: "std-text work-wrapper_desc--show-one",
      childClassTwo: "std-text work-wrapper_desc--show-two",
      childClassThree: "std-text work-wrapper_desc--show-three",
      childClassFour: "std-text work-wrapper_desc--show-four",
      childClassFive:
        "std-text--black std-text--link work-wrapper_desc--show-five",
      childClassSix:
        "std-text--black std-text--link work-wrapper_desc--show-six",
    });
  };

  const closeDesc4 = () => {
    //e.target.nextSibling.className = 'main-work-wrapper--close'

    setdescription4({
      mainClass: "main-work-wrapper main-work-wrapper--close",
      mainFuction: openDesc4,
      childClassOne: "std-text work-wrapper_desc--hide-one",
      childClassTwo: "std-text work-wrapper_desc--hide-two",
      childClassThree: "std-text work-wrapper_desc--hide-three",
      childClassFour: "std-text work-wrapper_desc--hide-four",
      childClassFive: "std-text--black work-wrapper_desc--hide-five",
      childClassSix: "std-text--black work-wrapper_desc--hide-six",
    });
  };

  const [description4, setdescription4] = useState({
    mainClass: "main-work-wrapper",
    mainFuction: openDesc4,
    childClassOne: "std-text work-wrapper_desc",
    childClassTwo: "std-text work-wrapper_desc",
    childClassThree: "std-text work-wrapper_desc",
    childClassFour: "std-text work-wrapper_desc",
    childClassFive: "std-text--black std-text--link work-wrapper_desc",
    childClassSix: "std-text--black std-text--link work-wrapper_desc",
  });

  // ===============FOURTH LINK ENDS ==================/
  return (
    <div className='work-wrapper'>
      {/*============= LINK TWO =========*/}
      <div
        className='std-text work-wrapper_work'
        onClick={description2.mainFuction}
      >
        xharcoal.com
      </div>
      <div className={description2.mainClass}>
        <div className='work-wrapper_border'>
          <h3 className='std-text--black'>Techonologies Used</h3>
          <div className={description2.childClassOne}>
            <div className='work-wrapper_svg'></div>MongoDb
          </div>
          <div className={description2.childClassTwo}>
            <div className='work-wrapper_svg'></div>Express
          </div>
          <div className={description2.childClassThree}>
            <div className='work-wrapper_svg'></div>React
          </div>
          <div className={description2.childClassFour}>
            <div className='work-wrapper_svg'></div>Node.js
          </div>
          <a
            href='http://www.xharcoal.com'
            className={description2.childClassFive}
          >
            <div className='work-wrapper_svg'></div>see it live
          </a>
          <a
            href='https://github.com/yodarango/xharcoal'
            className={description2.childClassSix}
          >
            <div className='work-wrapper_svg'></div>go git it
          </a>
        </div>
      </div>

      {/*============= LINK THREE =========*/}
      <div
        className='std-text work-wrapper_work'
        onClick={description3.mainFuction}
      >
        rangeledamiracle.com
      </div>
      <div className={description3.mainClass}>
        <div className='work-wrapper_border'>
          <h3 className='std-text--black'>Techonologies Used</h3>
          <div className={description3.childClassOne}>
            <div className='work-wrapper_svg'></div>HTML
          </div>
          <div className={description3.childClassTwo}>
            <div className='work-wrapper_svg'></div>CSS
          </div>
          <div className={description3.childClassThree}>
            <div className='work-wrapper_svg'></div>Vanilla Javascript
          </div>
          <div className={description3.childClassFour}>
            <div className='work-wrapper_svg'></div>Node.js
          </div>
          <a
            href='http://www.rangeledamiracle.com'
            className={description3.childClassFive}
          >
            <div className='work-wrapper_svg'></div>see it live
          </a>
          <a
            href='https://github.com/yodarango/rangeledamiracle'
            className={description3.childClassSix}
          >
            <div className='work-wrapper_svg'></div>go git it
          </a>
        </div>
      </div>

      {/*============= LINK FOURTH =========*/}
      <div
        className='std-text work-wrapper_work'
        onClick={description4.mainFuction}
      >
        savvysaute.com
      </div>
      <div className={description4.mainClass}>
        <div className='work-wrapper_border'>
          <h3 className='std-text--black'>Techonologies Used</h3>
          <div className={description4.childClassOne}>
            <div className='work-wrapper_svg'></div>EJS
          </div>
          <div className={description4.childClassTwo}>
            <div className='work-wrapper_svg'></div>SASS
          </div>
          <div className={description4.childClassThree}>
            <div className='work-wrapper_svg'></div>Vanilla Javascript
          </div>
          <div className={description4.childClassFour}>
            <div className='work-wrapper_svg'></div>Node.js
          </div>
          <a
            href='http://www.savvysaute.com'
            className={description4.childClassFive}
          >
            <div className='work-wrapper_svg'></div>see it live
          </a>
          <a
            href='https://github.com/yodarango/savvy-saute'
            className={description4.childClassSix}
          >
            <div className='work-wrapper_svg'></div>go git it
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
