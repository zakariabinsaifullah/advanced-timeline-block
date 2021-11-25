import { InnerBlocks, RichText } from '@wordpress/block-editor';
const Save = ({ className, attributes }) => {
    const { contentBg, enableBorder, borderWidth, borderColor, enableBorderRadius, borderRadius, enableBoxShadow, boxShadowStyle, showOppositeContent, oppositeContent, oppositeContentColor, oppositeContentBg, markerType, markerIcon, markerColor, markerBg, showConnector, connectorColor } = attributes; 
    // box shadow
    const shadowStyleClass = enableBoxShadow ? boxShadowStyle : null;

    return(
        <div className={`atlb-container ${className}`}>
            {
                showConnector &&
                <div className="container-before" style={{ backgroundColor: connectorColor }}></div>
            }
            {
                markerType === 'circle' ?
                <div className="container-after" style={{ borderColor: markerColor, backgroundColor: markerBg }}></div>
                :
                <div className="container-after icon-marker" style={{ backgroundColor: markerBg, borderColor: markerColor }}>
                    <i className={ markerIcon } style={{ color: markerColor }}></i>
                </div>
            }
            {
                showOppositeContent &&
                <div className="oppsite-content">
                    <RichText.Content
                        tagName="p"
                        value={ oppositeContent }
                        style={{ color: oppositeContentColor, backgroundColor: oppositeContentBg }}
                    />
                </div>
            }
            <div 
                className={`atlb-timeline-content ${shadowStyleClass}`} 
                style={{
                    backgroundColor: contentBg,
                    border: enableBorder ? `${borderWidth}px solid ${borderColor}` : null,
                    borderRadius: enableBorderRadius ? `${borderRadius}px` : null,
                }}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
export default Save; 