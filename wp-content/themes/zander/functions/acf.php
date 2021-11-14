<?php

namespace Zander;

if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page();
}

if ( function_exists( 'acf_set_options_page_menu' ) ) {
	acf_set_options_page_menu( __( 'ZA Settings' ) );
	acf_add_options_sub_page( 'Facts' );
	acf_add_options_sub_page( 'Newsletter' );
}