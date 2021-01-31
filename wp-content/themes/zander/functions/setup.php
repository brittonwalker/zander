<?php

namespace Zander;

/**
 * Add setup actives to the init
 */
add_action( 'init', function () {

    add_theme_support( 'title-tag' );
    add_theme_support( 'menus' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menu( 'footer-nav', __( 'Social Navigation' ) );
    register_nav_menu( 'primary-nav', __( 'Primary Navigation' ) );

    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

} );