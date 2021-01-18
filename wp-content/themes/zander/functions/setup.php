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

} );