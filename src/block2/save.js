import { InnerBlocks, RichText } from '@wordpress/block-editor';
const Save = ({ className, attributes }) => {
    const { contentBg, enableBorder, borderWidth, borderColor, borderRadius, enableBoxShadow, boxShadowStyle, showOppositeContent, oppositeContent, oppositeContentColor, oppositeContentBg, oppositeContentTag, enableOppositeBorder, oppositeBorderWidth, oppositeBorderColor, oppositeBorderRadius, enableOppositeBoxShadow, oppositeBoxShadowStyle, markerType, markerIcon, markerColor, markerBg, showConnector, connectorColor } = attributes; 
    // box shadow
    const shadowStyleClass = enableBoxShadow ? boxShadowStyle : null;

    // opposite content box shadow 
    const oppositeShadowStyleClass = enableOppositeBoxShadow ? oppositeBoxShadowStyle : null;

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
                <div 
                    className={`oppsite-content ${oppositeShadowStyleClass}`}
                    style={{
                        backgroundColor: oppositeContentBg,
                        border: enableOppositeBorder ? `${oppositeBorderWidth}px solid ${oppositeBorderColor}` : 'none',
                        borderRadius: oppositeBorderRadius + 'px',
                    }}
                >
                    <RichText.Content
                        tagName={ oppositeContentTag }
                        value={ oppositeContent }
                        style={{ color: oppositeContentColor }}
                    />
                </div>
            }
            <div 
                className={`atlb-timeline-content ${shadowStyleClass}`} 
                style={{
                    backgroundColor: contentBg,
                    border: enableBorder ? `${borderWidth}px solid ${borderColor}` : null,
                    borderRadius: `${borderRadius}px`
                }}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
export default Save; 