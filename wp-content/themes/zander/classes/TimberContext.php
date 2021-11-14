<?php

namespace Athletics\Zander;

use TimberMenu;
use Timber;

class TimberContext {

	/**
	 * Add the `timber_context` filters.
	 */
	public static function init() {

		add_filter( 'timber_context', array( __CLASS__, 'add_menus' ) );
		add_filter( 'timber_context', array( __CLASS__, 'add_footer_facts' ) );
		add_filter( 'timber_context', array( __CLASS__, 'add_newsletter' ) );

	}

	public static function add_menus( $context ) {

		$context['menu'] = array(
			'primary' => new TimberMenu( 'Primary Navigation' ),
			'social' => new TimberMenu( 'Social Navigation' ),
		);

		return $context;

	}

	/**
	 * Add facts to context.
	 *
	 * @param  array $context Timber context.
	 * @return array $context Timber context.
	 */
	public static function add_footer_facts( $context ) {

		$context['facts'] = get_field( 'footer_facts', 'option' );

		return $context;

	}

	/**
	 * Add newsletter fields to context.
	 *
	 * @param  array $context Timber context.
	 * @return array $context Timber context.
	 */
	public static function add_newsletter( $context ) {

		$context['newsletter'] = get_field( 'newsletter', 'option' );

		return $context;

	}

}
TimberContext::init();