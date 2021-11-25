<?php
/**
 * Plugin Name: Advanced Timeline Block
 * Description: <strong>Advanced Timeline Block</strong> is a custom <strong>Gutenberg Block</strong> built with <strong>Gutenberg Native Components</strong>. You can build your story timeline with this block.
 * Author: Zakaria Binsaifullah
 * Author URI: https://makegutenblock.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package atlb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';

// Plugin Action Link 
function atlb_admin_settings_link( $links ) {
	$new_link = array(
		'<a href="'. esc_url( 'https://makegutenblock.com/contact/' ) .'" target="_blank" style="color: #A11637; font-weight: 600">Contact</a>'
	);
	return array_merge( $new_link, $links );
}
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'atlb_admin_settings_link' );

// Redirecting
function atlb_user_redirecting( $plugin ) {
	if( plugin_basename(__FILE__) == $plugin ){
		wp_redirect( admin_url( 'tools.php?page=atlb-timeline-block' ) );
		die();
	}
}
add_action( 'activated_plugin', 'atlb_user_redirecting' );
