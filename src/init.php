<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Class
*/

final class ATLB_Blocks_Class {

	private function __construct(){
		$this->atlb_define_constants(); 
		add_action( 'init', [ $this, 'atlb_blocks_assets' ] );
		add_filter( 'block_categories', [ $this, 'atlb_custom_category' ] );
		add_action( 'enqueue_block_assets', [ $this, 'atlb_external_assets_load' ] );
	}

	/**
	 * Singleton Instanace 
	*/

	public static function atlb_init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Constants Define 
	*/
	public function atlb_define_constants(){
		define( 'ATLB_FILE', __FILE__ );
		define( 'ATLB_BLOCK', plugins_url( '', dirname( ATLB_FILE ) ) );
		define( 'ATLB_BLOCK_ASSETS', ATLB_BLOCK . '/dist' );
		define( 'ATLB_EXTERNAL_ASSETS', ATLB_BLOCK . '/assets' );
	}

	/**
	 * Blocks Registration 
	*/
	private function atlb_single_block_register( $block, $options=array() ){
		return register_block_type(
			'atlb/'. $block, 
			array_merge(
				array(
					'editor_script' => 'atlb-editor-script',
					'editor_style'  => 'atlb-editor-style',
					'style'         => 'atlb-style',
				),
				$options
			)
		);
	}

	/**
	 * Blocks Assets + Registration 
	*/
	public function atlb_blocks_assets(){

		// Frontend + Backend Style 
		wp_register_style(
			'atlb-style',
			ATLB_BLOCK_ASSETS . '/blocks.style.build.css',
			is_admin() ? array( 'wp-editor' ) : null,
			null
		);

		// Backend Style 
		wp_register_style(
			'atlb-editor-style',
			ATLB_BLOCK_ASSETS . '/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			null
		);

		// Editor Scripts
		wp_register_script(
			'atlb-editor-script',
			ATLB_BLOCK_ASSETS . '/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			null,
			true
		);

		// Register Single Block 
		$this->atlb_single_block_register('timeline-block');
		$this->atlb_single_block_register('single-timeline-item');
	
	}

	/**
	 * Block Custom Category 
	*/
	public function atlb_custom_category( $categories ){
		return array_merge(
			array(
				array(
					'title' => 'Timeline Blocks',
					'slug'  => 'timeline-blocks'
				)
			),
			$categories
		);
	}

	/**
	 * External Assets Enqueue 
	*/
	public function atlb_external_assets_load(){
		wp_enqueue_style( 'atlb-fontawesome', ATLB_EXTERNAL_ASSETS . '/css/all.min.css', array(), '5.0.9', 'all' );
		wp_enqueue_style( 'atlb-fontpicker-base-theme', ATLB_EXTERNAL_ASSETS . '/css/fonticonpicker.base-theme.react.css', array(), '1.2.0', 'all' );
		wp_enqueue_style( 'atlb-fontpicker-material-theme', ATLB_EXTERNAL_ASSETS . '/css/fonticonpicker.material-theme.react.css', array(), '1.2.0', 'all' );
	}
	
}
/**
 * Initialization 
*/
function atlb_blocks(){
	return ATLB_Blocks_Class::atlb_init();
}

// kick-off the plugin 
atlb_blocks();