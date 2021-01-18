<?php
/**
 *  This is the callback that displays the block.
 *
 * @param   array  $block      The block settings and attributes.
 * @param   string $content    The block content (emtpy string).
 * @param   bool   $is_preview True during AJAX preview.
 */

function article_image( $block, $content = '', $is_preview = false ) {

    $context = Timber::context();

    // Store block values.
    $context['post'] = new TimberPost();

    // Store block values.
    $context['block'] = $block;

    // Store field values.
    $context['fields'] = get_fields();

    // Store $is_preview value.
    $context['is_preview'] = $is_preview;

    // Render the block.
    Timber::render( '/blocks/article-image.twig', $context );

}