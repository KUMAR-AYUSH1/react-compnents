
import {NewFlowingMenu,NewFlipCard,StickyBannerDemo,LoaderTwoDemo,StatefulButtonDemo,FlipWordsDemo} from "./test.8";
import { BackgroundBeams } from "./components/background-beams";
import {NewGooeyNav} from "./test7.jsx";
export default function Page3() {
    return(
        <>
        <BackgroundBeams/>
        <StickyBannerDemo/>
        <NewFlowingMenu/>
        <NewFlipCard/>
        <NewGooeyNav/>
        <LoaderTwoDemo/>
        <div>
            <StatefulButtonDemo/>
            <FlipWordsDemo/>
            <NewGooeyNav/>
        </div>
        </>
    )
}