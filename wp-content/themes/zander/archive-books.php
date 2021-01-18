<?php

$templates = array( 'archive-books.twig', 'index.twig' );

$context = Timber::context();

$context['posts'] = new Timber\PostQuery();

Timber::render( $templates, $context );