<?php

namespace Zander;

/**
 * Create taxonomies.
 *
 * @param  string        $taxonomy    Name of taxonomy object
 * @param  array|string  $object_type Name of the object type for the taxonomy object.
 * @param  array|string  $args        Taxonomy arguments
 * @return null|WP_Error              WP_Error if errors, otherwise null.
 */
add_action( 'init', function () {

	register_taxonomy(
		$taxonomy    = 'publication',
		$object_type = array( 
			'essays',
			'books',
		),
		$args        = array(
            'hierarchical'	=> false,
            'show_in_rest'  => true,
			'labels'		=> array(
				'name'              => _x( 'Publication', 'taxonomy general name' ),
				'singular_name'     => _x( 'Publication', 'taxonomy singular name' ),
				'search_items'      => __( 'Search Publications' ),
				'all_items'         => __( 'All Publications' ),
				'parent_item'       => __( 'Parent Publication' ),
				'parent_item_colon' => __( 'Parent Publication:' ),
				'edit_item'         => __( 'Edit Publication' ),
				'update_item'       => __( 'Update Publication' ),
				'add_new_item'      => __( 'Add New Publication' ),
				'new_item_name'     => __( 'New Publication' ),
				'menu_name'         => __( 'Publication' ),
			),
		)
    );
    
	register_taxonomy(
		$taxonomy    = 'year',
		$object_type = array( 
			'essays'
		),
		$args        = array(
            'hierarchical'	=> false,
            'show_in_rest'  => true,
			'labels'		=> array(
				'name'              => _x( 'Year', 'taxonomy general name' ),
				'singular_name'     => _x( 'Year', 'taxonomy singular name' ),
				'search_items'      => __( 'Search Years' ),
				'all_items'         => __( 'All Years' ),
				'parent_item'       => __( 'Parent Year' ),
				'parent_item_colon' => __( 'Parent Year:' ),
				'edit_item'         => __( 'Edit Year' ),
				'update_item'       => __( 'Update Year' ),
				'add_new_item'      => __( 'Add New Year' ),
				'new_item_name'     => __( 'New Year' ),
				'menu_name'         => __( 'Year' ),
			),
		)
	);

	register_taxonomy(
		$taxonomy    = 'field',
		$object_type = array( 
			'strategy'
		),
		$args        = array(
            'hierarchical'	=> false,
            'show_in_rest'  => true,
			'labels'		=> array(
				'name'              => _x( 'Field', 'taxonomy general name' ),
				'singular_name'     => _x( 'Field', 'taxonomy singular name' ),
				'search_items'      => __( 'Search Fields' ),
				'all_items'         => __( 'All Fields' ),
				'parent_item'       => __( 'Parent Field' ),
				'parent_item_colon' => __( 'Parent Field:' ),
				'edit_item'         => __( 'Edit Field' ),
				'update_item'       => __( 'Update Field' ),
				'add_new_item'      => __( 'Add New Field' ),
				'new_item_name'     => __( 'New Field' ),
				'menu_name'         => __( 'Field' ),
			),
		)
	);

} );
