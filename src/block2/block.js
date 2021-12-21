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
registerBlockType( 'atlb/single-timeline-item', {
	title: __( 'Timeline Item' ),
	icon: {
		src: icon
	},
	category: 'timeline-blocks',
	parent: [ 'atlb/timeline' ],
	keywords: [
		__( 'Single Item' ),
	],
	attributes, 
	edit,
	save,
} );
