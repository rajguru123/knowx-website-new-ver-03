<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'know-wordpress' );

/** Database username */
define( 'DB_USER', 'knowx-wordpress-user' );

/** Database password */
define( 'DB_PASSWORD', '9kiHG8qoeFQ8d0(*' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Kr#}~!221.L(?c{.| AU^_5s7Ogmx5a4Qj1QNg `mlJ8>WW1^&]?uDnqjt/+QgK6' );
define( 'SECURE_AUTH_KEY',  'C$@Vue0R7i) AV47>m{*Ko^pn-0b{~|;EG}Dc;3tK:f@/pPs?!j,cUJ>-H%AMdVn' );
define( 'LOGGED_IN_KEY',    'gz>ZZ]2~QHb].77$6t?+/(bjoK:*F$d[4HkQww<iDT8BO]zN _7Q6i)S+o+2v9>6' );
define( 'NONCE_KEY',        'J 6!GfT`q |0ZV[(/fAP`(>xrc:I+<PVSzX7idV=?c@<WjQFA@.M[> nfhC9)dY5' );
define( 'AUTH_SALT',        'P]/H(dU;Agm>L={b^jG,T!SU}dKq:OOd-Tmt>2Jqlhj6l*mL;RwHFJcJ$P8z4M`g' );
define( 'SECURE_AUTH_SALT', 'C8d7`p-pdNPt(z_%BMyc@c#B4[J`4YHesf0=$U32I1=JkseHtd^/F8aG-5WDMhha' );
define( 'LOGGED_IN_SALT',   ';)-O)$gf%>;#F6#33ix@ppnRLH%Z!mudEauPV3Ih[xe=SP647k5H0M07Y+W K?:A' );
define( 'NONCE_SALT',       '(GYD%(U#BxG&vmf>./zRhUw#iiEgi6F:#C=J[TV+_8FH{$g75:mP<g$FG}Ud3+n$' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpaf_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
