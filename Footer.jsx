import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            © 2024 Condé Nast. All rights reserved. The New Yorker may earn a
            portion of sales from products that are purchased through our site
            as part of our Affiliate Partnerships with retailers. The material
            on this site may not be reproduced, distributed, transmitted, cached
            or otherwise used, except with the prior written permission of Condé
            Nast.
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb:5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600 ">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>

            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+92 21 99 230 149</li>
                <li>Contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ forever.com -  All rights reserved</p>

      </div>
    </div>
  );
};

export default Footer;
