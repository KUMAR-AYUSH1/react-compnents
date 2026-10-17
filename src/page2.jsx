
import {BasicButtons,IconButtonWithBadge,Checkboxes,FloatingActionButtonSize,RadioButtonsGroup,RadioButtons,BasicRating,HoverRating,CustomizedRating,MultipleSelectPlaceholder,SliderSizes} from "./test3.jsx";
import {InputSlider,BasicSwitches,IOSSwitch,BasicTextFields, AvatarGroupBasic,BadgeAvatars,BadgeIntro} from "./test4.jsx";
import {BasicTable,DataTable} from "./test5.jsx";

import {TextNameLoop,WarpTextLoop,FoldTextLoop,DepthCarouselLoop,LanyardLoop} from "./test6.jsx";


export default function Page2() {
    return <div>
        <BasicButtons />
        <IconButtonWithBadge/>
        <Checkboxes />
        <FloatingActionButtonSize />
        <RadioButtonsGroup />
        <RadioButtons/>
        <BasicRating/>
        <HoverRating/>
        <CustomizedRating/>
        <MultipleSelectPlaceholder/>
        <SliderSizes/>
        <IOSSwitch onChange={() => console.log("hi")} />
        <div className="bg-gray-900 p-4 w-100" >
            <InputSlider />
            <BasicSwitches/>
            <BasicTextFields/>
            <BadgeIntro />
            <DataTable/>
        </div>
        < AvatarGroupBasic/>
        <BadgeAvatars/>
        <BasicTable/>
        <DataTable/>
        <TextNameLoop/>
        <WarpTextLoop/>
        <FoldTextLoop/>
        <DepthCarouselLoop/>
        {/* <LanyardLoop/> */}
       
    </div>
}

///////////////////////////////////////////////////////////////////////////////////
