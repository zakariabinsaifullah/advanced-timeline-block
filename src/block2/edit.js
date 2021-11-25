const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { RangeControl, ColorPalette, SelectControl, PanelBody, ToggleControl } from '@wordpress/components';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import fontAwesomeIcons from './fontawesomeicons';

const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];

const colors = [
    { name: 'red', color: '#E05D5D' },
    { name: 'white', color: '#ffffff' },
    { name: 'blue', color: '#290FBA' },
    { name: 'black', color: '#333333' },
    { name: 'gray', color: '#cccccc' },
    { name: 'orange', color: '#F6D155' },
];

const shadowStyles = [
    { label: __('Style One'), value: 'bxs_one' },
    { label: __('Style Two'), value: 'bxs_two' },
    { label: __('Style Three'), value: 'bxs_three' },
    { label: __('Style Four'), value: 'bxs_four' },
    { label: __('Style Five'), value: 'bxs_five' }
];

const markerTypes = [
    { label: __('Circle'), value: 'circle' },
    { label: __('Custom Icon'), value: 'custom_icon' },
];

const Edit = ({ className, attributes, setAttributes }) => {
    const { contentBg, enableBorder, borderWidth, borderColor, enableBorderRadius, borderRadius, enableBoxShadow, boxShadowStyle, showOppositeContent, oppositeContent, oppositeContentColor, oppositeContentBg, markerType, markerIcon, markerColor, markerBg, showConnector, connectorColor } = attributes; 
    // box shadow
    const shadowStyleClass = enableBoxShadow ? boxShadowStyle : null;

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={ __( 'Content Container' ) }
                    initialOpen={ true }
                >
                    <p>{__("Container Background")}</p>
                    <div style={{ marginBottom: 10 + 'px' }}>
                        <ColorPalette 
                            colors={ colors } 
                            value={ contentBg }
                            onChange={ ( contentBg ) => setAttributes( { contentBg } ) } 
                        />
                    </div>
                    <ToggleControl
                        label={__( 'Enable Border' )}
                        checked={ enableBorder }
                        onChange={ () => setAttributes({ enableBorder: !enableBorder }) }
                    />
                    {
                        enableBorder &&
                        <Fragment>
                            <RangeControl
                                label={ __( 'Border Width' ) }
                                value={ borderWidth }
                                onChange={ ( borderWidth ) => setAttributes( { borderWidth } ) }
                                min={ 1 }
                                max={ 200 }
                            />
                            <p>{__("Border Color")}</p>
                            <div style={{ marginBottom: 10 + 'px' }}>
                                <ColorPalette 
                                    colors={ colors } 
                                    value={ borderColor }
                                    onChange={ ( borderColor ) => setAttributes( { borderColor } ) } 
                                />
                            </div>
                        </Fragment>
                    }
                    <ToggleControl
                        label={__( 'Enable Border Radius' )}
                        checked={ enableBorderRadius }
                        onChange={ () => setAttributes({ enableBorderRadius: !enableBorderRadius }) }
                    />
                    {
                        enableBorderRadius &&
                        <Fragment>
                            <RangeControl
                                label={ __( 'Border Radius' ) }
                                value={ borderRadius }
                                onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                                min={ 1 }
                                max={ 500 }
                            />
                        </Fragment>
                    }
                    <ToggleControl
                        label={__( 'Enable Box Shadow' )}
                        checked={ enableBoxShadow }
                        onChange={ () => setAttributes({ enableBoxShadow: !enableBoxShadow }) }
                    />
                    {
                        enableBoxShadow &&
                        <Fragment>
                            <SelectControl
                                label={ __( 'Box Shadow Style' ) }
                                value={ boxShadowStyle }
                                options={ shadowStyles }
                                onChange={ ( boxShadowStyle ) => { setAttributes( { boxShadowStyle } ) } }
                            />
                        </Fragment>
                    }
                </PanelBody>            
                <PanelBody 
                    title={ __( 'Story Date' ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={__( 'Show Story Date' )}
                        checked={ showOppositeContent }
                        onChange={ () => setAttributes({ showOppositeContent: !showOppositeContent }) }
                    />
                    {
                        showOppositeContent &&
                        <Fragment>
                            <p>{__("Color")}</p>
                            <div style={{ marginBottom: 10 + 'px' }}>
                                <ColorPalette 
                                    colors={ colors } 
                                    value={ oppositeContentColor }
                                    onChange={ ( oppositeContentColor ) => setAttributes( { oppositeContentColor } ) } 
                                />
                            </div>
                            <p>{__("Background")}</p>
                            <div style={{ marginBottom: 10 + 'px' }}>
                                <ColorPalette 
                                    colors={ colors } 
                                    value={ oppositeContentBg }
                                    onChange={ ( oppositeContentBg ) => setAttributes( { oppositeContentBg } ) } 
                                />
                            </div>
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody 
                    title={ __( 'Timeline Marker' ) }
                    initialOpen={ false }
                >
                    <SelectControl
                        label={ __( 'Marker Type' ) }
                        value={ markerType }
                        options={ markerTypes }
                        onChange={ ( markerType ) => { setAttributes( { markerType } ) } }
                    />
                    {
                        markerType === 'custom_icon' &&
                        <Fragment>
                            <p className="marker-icon">{__("Marker Icon")}</p>
                            <FontIconPicker
                                icons={ fontAwesomeIcons }
                                value={ markerIcon }
                                onChange={(markerIcon) => setAttributes({ markerIcon })}
                                appendTo=".marker-icon"
                            />
                        </Fragment>
                    }
                    <p>{__("Color")}</p>
                    <div style={{ marginBottom: 10 + 'px' }}>
                        <ColorPalette 
                            colors={ colors } 
                            value={ markerColor }
                            onChange={ ( markerColor ) => setAttributes( { markerColor } ) } 
                        />
                    </div>
                    <div style={{ marginBottom: 10 + 'px' }}>
                        <ColorPalette 
                            colors={ colors } 
                            value={ markerBg }
                            onChange={ ( markerBg ) => setAttributes( { markerBg } ) } 
                        />
                    </div>
                </PanelBody>
                <PanelBody 
                    title={ __( 'Connector' ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={__( 'Show Connector' )}
                        checked={ showConnector }
                        onChange={ () => setAttributes({ showConnector: !showConnector }) }
                    />
                    {
                        showConnector &&
                        <Fragment>
                            <p>{__("Color")}</p>
                            <div style={{ marginBottom: 10 + 'px' }}>
                                <ColorPalette 
                                    colors={ colors } 
                                    value={ connectorColor }
                                    onChange={ ( connectorColor ) => setAttributes( { connectorColor } ) } 
                                />
                            </div>
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
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
                        <RichText
                            tagName="p"
                            value={ oppositeContent }
                            onChange={ ( oppositeContent ) => setAttributes( { oppositeContent } ) }
                            placeholder={ __( 'Opposite Content' ) }
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
                    <InnerBlocks
                        allowedBlocks={ true }
                    />
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
