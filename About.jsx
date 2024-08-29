import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Their About Us page is divided into three sections: Our Story, Our
            Athletes, and Our Collaborations. Their brand story page goes
            through a timeline of events, from their founding in 1966 through
            different product releases, accolades, and endorsements. This
            section of the About page helps establish their authority,
            reliability, and long history in the trade.
          </p>
          <p>
            Leesa keeps it simple at the top of the page, subtly demonstrating
            the portability of their mattress in a box product. Their mattresses
            aren’t only easily shipped to your door, but as they say, they’re
            “meticulously designed, exceptionally comfortable.” Leesa’s About
            page highlights the quality of their materials and process, bringing
            readers along on a visual journey. Scrolling down, readers encounter
            a section where they can flip through the different steps Leesa
            takes in creating a mattress.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            A compelling mission statement is essential for defining your
            boutique’s purpose and values. Emphasize uniqueness, empowering
            customers to express individuality through curated fashion choices.
            Incorporate sustainability and ethical practices to inspire positive
            contributions. Create a warm and welcoming shopping experience,
            fostering a sense of community and confidence. Let your mission
            statement reflect the essence of your brand, resonating with
            customers and guiding your boutique towards a successful and
            meaningful future.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600" >
            A robust quality assurance system ensures that all garments produced
            are of the highest quality possible. This means that each piece of
            clothing undergoes various checks and tests throughout its
            production lifecycle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600" >
            A robust quality assurance system ensures that all garments produced
            are of the highest quality possible. This means that each piece of
            clothing undergoes various checks and tests throughout its
            production lifecycle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600" >
            A robust quality assurance system ensures that all garments produced
            are of the highest quality possible. This means that each piece of
            clothing undergoes various checks and tests throughout its
            production lifecycle
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
