<?php
/**
 * Template Name: Books
 */

$context = Timber::get_context();
$context['post'] = new TimberPost();

$context['books'] = get_field('books', $context['post']->ID);

Timber::render( 'page-books.twig', $context );
