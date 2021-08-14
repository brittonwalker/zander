<?php

namespace Athletics\Zander;

class Enqueue {

	/**
	 * @var string $version
	 */
	public $version = '';

	/**
	 * @var string $url
	 */
	public $url = '';

	/**
	 * @var string $namespace
	 */
	public $namespace = null;

	/**
	 * Public constructor
	 */
	public function __construct( $namespace ) {

		$this->namespace = $namespace;

		$this->url = get_stylesheet_directory_uri();

		if ( $this->is_development() ) {
			$this->version = time();
		} else {
			$theme = wp_get_theme();
			$this->version = $theme->get( 'Version' );
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'admin_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'site_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'site_scripts' ) );

	}

	/**
	 * Is development environment?
	 *
	 * @return boolean
	 */
	public function is_development() {

		if ( strpos( get_site_url(), '.test' ) !== false ) {
			return true;
		}

		return false;

	}

	/**
	 * Admin Styles
	 */
	public function admin_styles() {

		wp_enqueue_style(
			"{$this->namespace}-admin",
			"{$this->url}/admin-css/css/admin.css",
			false,
			$this->version,
			'screen'
		);

	}

	/**
	 * Site Styles
	 */
	public function site_styles() {
		if ( $this->is_development() ) {
			wp_enqueue_style(
				'wp_vip',
				get_theme_file_uri( '/assets/css/zander.css' ),
				false,
				time(),
				'screen, print'
			);
		} else {
			wp_enqueue_style(
				'wp_vip',
				get_theme_file_uri( '/assets/css/wp-vip.min.css' ),
				false,
				$this->version,
				'screen, print'
			);
		}
	}

	/**
	 * Site Scripts
	 */
	public function site_scripts() {

		if ( $this->is_development() ) {
			wp_enqueue_script(
				'zander',
				get_theme_file_uri( '/assets/js/zander.js' ),
				array(),
				false,
				true
			);
		} else {
			wp_enqueue_script(
				'zander',
				get_theme_file_uri( '/assets/js/zander.min.js' ),
				array(),
				false,
				true
			);
		}
		
	}

	private function get_file_path( $type, $file_prefix = 'zander') {
		if ( $this->is_development() ) {
			$file_path = "{$this->url}/assets/{$type}/{$file_prefix}.{$type}";
		} else {
			$files = array();
			$dir = new \DirectoryIterator(get_stylesheet_directory() . "/assets/{$type}/");

			foreach ( $dir as $file ) {
				$pathinfo = pathinfo( $file );
				if ( strpos( $pathinfo['filename'], $file_prefix ) !== false && $pathinfo['extension'] === $type ) {
					$files[$file->getMTime()][] = basename( $file );
				}
			}

			krsort( $files );
			$first = reset( $files );

			$file_path = "{$this->url}/assets/{$type}/{$first[0]}";
		}

		return $file_path;
	}

}
new Enqueue( 'zander' );