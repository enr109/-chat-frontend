import { animateScroll } from "react-scroll";
/* import { animateTopScroll } from "react-scroll/modules/mixins/animate-scroll"; */

export const scrollToBottom = ( id ) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });
}


export const scrollToBottomAnimated = ( id ) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    });
}