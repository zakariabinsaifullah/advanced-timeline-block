import { InnerBlocks } from '@wordpress/block-editor';
const Save = ({ className, attributes }) => {
    const { timebarColor, timelineStyle } = attributes; 

    return(
        <div className={`atlb-timeline-block ${className} ${timelineStyle}`} >
            <InnerBlocks.Content />
            <div className="timeline-after" style={{ backgroundColor: timebarColor }}></div>
        </div>
    );
}
export default Save; 