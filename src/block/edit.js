const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { RangeControl, ColorPalette, SelectControl, PanelBody, ToggleControl } from '@wordpress/components';

const colors = [
    { name: 'red', color: '#E05D5D' },
    { name: 'white', color: '#ffffff' },
    { name: 'blue', color: '#290FBA' },
    { name: 'black', color: '#333333' },
    { name: 'gray', color: '#cccccc' },
    { name: 'orange', color: '#F6D155' },
];

const Edit = ({ className, attributes, setAttributes }) => {
    const { timebarColor } = attributes; 

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={ __( 'Timeline Settings' ) }
                    initialOpen={ true }
                >
                    <p>{__("Timeline Bar Color")}</p>
                    <div style={{ marginBottom: 10 + 'px' }}>
                        <ColorPalette 
                            colors={ colors } 
                            value={ timebarColor }
                            onChange={ ( timebarColor ) => setAttributes( { timebarColor } ) } 
                        />
                    </div>
                </PanelBody>
            </InspectorControls>
            <div className={`atlb-timeline-block ${className}`} >
                <InnerBlocks
                    allowedBlocks={['atlb/single-timeline-item']}
                    template={[
                        ['atlb/single-timeline-item']
                    ]}
                />
                <div className="timeline-after" style={{ backgroundColor: timebarColor }}></div>
            </div>
        </Fragment>
    );
}
export default Edit; 
