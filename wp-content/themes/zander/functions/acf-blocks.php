<?php

namespace Zander;

add_action('acf/init', function() {

    // Bail out if function doesn’t exist.
    if ( ! function_exists( 'acf_register_block' ) ) {
        return;
	}
	
	// Register a new block.

	acf_register_block( array(
		'name'				=> 'article_image',
		'title'				=> __('Article Image'),
		'description'		=> __('Flexible grid article image'),
		'render_callback'	=> 'article_image',
		'category'			=> 'layout',
		'icon'              => 'format-image',
		'keywords'			=> array( 'image', 'article' ),
	) );

});