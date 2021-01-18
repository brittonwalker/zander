<?php

namespace Zander;

/**
* Registers a new post type
* @uses $wp_post_types Inserts new post type object into the list
*
* @param string  Post type key, must not exceed 20 characters
* @param array|string  See optional args description above.
* @return object|WP_Error the registered post type object, or an error object
*/
add_action( 'init', __NAMESPACE__ . '\\create_post_types' );
function create_post_types() {

	// Essays
	$labels = array(
		'name'                => __( 'Essays', 'text-domain' ),
		'singular_name'       => __( 'Essay', 'text-domain' ),
		'add_new'             => _x( 'Add New Essay', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Essay', 'text-domain' ),
		'edit_item'           => __( 'Edit Essay', 'text-domain' ),
		'new_item'            => __( 'New Essay', 'text-domain' ),
		'view_item'           => __( 'View Essay', 'text-domain' ),
		'search_items'        => __( 'Search Essays', 'text-domain' ),
		'not_found'           => __( 'No Essays found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Essays found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Essay:', 'text-domain' ),
		'menu_name'           => __( 'Essays', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => true,
		'rewrite'             => array(
			'slug' => 'essays',
			'with_front' => false
		),
		'supports'            => array(
			'title', 'thumbnail', 'editor'
		)
	);

	register_post_type( 'essays', $args );

	// Books
	$labels = array(
		'name'                => __( 'Books', 'text-domain' ),
		'singular_name'       => __( 'Book', 'text-domain' ),
		'add_new'             => _x( 'Add New Book', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Book', 'text-domain' ),
		'edit_item'           => __( 'Edit Book', 'text-domain' ),
		'new_item'            => __( 'New Book', 'text-domain' ),
		'view_item'           => __( 'View Book', 'text-domain' ),
		'search_items'        => __( 'Search Books', 'text-domain' ),
		'not_found'           => __( 'No Books found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Books found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Book:', 'text-domain' ),
		'menu_name'           => __( 'Books', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => false,
		'rewrite'             => array(
			'slug' => 'books',
			'with_front' => false
		),
		'supports'            => array(
			'title', 'thumbnail', 'editor'
		)
	);

	register_post_type( 'books', $args );

	// Strategy
	$labels = array(
		'name'                => __( 'Strategy', 'text-domain' ),
		'singular_name'       => __( 'Strategy', 'text-domain' ),
		'add_new'             => _x( 'Add New Strategy', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Strategy', 'text-domain' ),
		'edit_item'           => __( 'Edit Strategy', 'text-domain' ),
		'new_item'            => __( 'New Strategy', 'text-domain' ),
		'view_item'           => __( 'View Strategy', 'text-domain' ),
		'search_items'        => __( 'Search Strategy', 'text-domain' ),
		'not_found'           => __( 'No Strategy found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Strategy found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Strategy:', 'text-domain' ),
		'menu_name'           => __( 'Strategy', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => false,
		'rewrite'             => array(
			'slug' => 'strategy',
			'with_front' => false
		),
		'supports'            => array(
			'title', 'thumbnail', 'editor'
		)
	);

	register_post_type( 'strategy', $args );

}