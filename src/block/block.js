/**
 * Block Name: Timeline Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import save from './save';
import './style.scss';
import icon from '../icon';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Timeline Block.
 */
registerBlockType( 'atlb/timeline-block', {
	title: __( 'Timeline' ),
	icon: {
		src: icon
	},
	category: 'timeline-blocks',
	keywords: [
		__( 'Content Timeline' ),
		__( 'Timeline Block' ),
	],
	attributes, 
	edit,
	save,
} );
