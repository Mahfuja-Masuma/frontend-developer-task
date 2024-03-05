import { Buttons_v_4 } from "./Buttons";
import team1 from "../../public/team1.png";
import team2 from "../../public/team2.png";
import team3 from "../../public/team3.png";
import teammember1 from "../../public/Mask_group-1.png";
import teammember2 from "../../public/Mask_group-2.png";
import teammember3 from "../../public/Mask_group-3.png";

const TeamMember = () => {
  return (
    <div className="container mx-auto py-[100px] text-center items-center">
      <h1 className="heading mx-auto">Loved by the world's best teams</h1>

      <div className="group mt-2 lg:mt-6 mb-3 lg:mb-10 ">
        <Buttons_v_4 className="buttons_v_2">
          See all customer stories
          <span className="arrow ml-2">&rarr;</span>
        </Buttons_v_4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 ">
        <div>
          <img src={team1} alt="team image" />
          <p className="pera w-[291px] text-left mt-[25px]">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”.
          </p>
          <div className="flex gap-5 mt-[55px]">
            <div>
              <img src={teammember1} alt="teammember" />
            </div>
            <div>
              <p className="pera text-left">Roxanne Mustafa</p>
              <p className="pera text-left">Design Team Lead at VMware</p>
            </div>
          </div>
        </div>
        <div className="sm:ml-4">
          <img src={team2} alt="team image" />
          <p className="pera w-[283px] text-left mt-[25px]">
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>
          <div className="flex gap-5 mt-[100px]">
            <div>
              <img src={teammember2} alt="teammember" />
            </div>
            <div>
              <p className="pera text-left">Jane Ashley</p>
              <p className="pera text-left">Head of Design at DocuSign</p>
            </div>
          </div>
        </div>
        <d iv className="">
          <img src={team3} alt="team image" />
          <p className="pera w-[283px] text-left mt-[25px]">
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>
          <div className="flex gap-5 mt-[95px]">
            <div>
              <img src={teammember3} alt="teammember" />
            </div>
            <div>
              <p className="pera text-left">Laura Baird</p>
              <p className="pera text-left">
                Associate Design Director at frog
              </p>
            </div>
          </div>
        </d>
      </div>
    </div>
  );
};

export default TeamMember;
