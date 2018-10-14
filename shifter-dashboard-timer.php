<?php
/*
Plugin Name: Shifter – Dashboard Timer
Plugin URI: https://github.com/getshifter/shifter-dashboard-timer
Description: Notice before terminating Shifter Container
Version: 1.2.2
Author: Shifter Team
Author URI: https://getshifter.io
License: GPL2
*/

function notice_shifter_dashboard_timer() {
  
  $bootup_filename = '../.bootup';
  $hard_limit = 180;
  
  if (file_exists($bootup_filename)) {
    
    $unixtime = file_get_contents($bootup_filename, true);
    $shifter_remain = $hard_limit - round((time() - intval($unixtime)) / 60);
    
    if ( $shifter_remain < 3 ) { ?>
      <div class="notice notice-warning">
        <p>Shifter will power down WordPress in few minutes. Please restart your from the Shifter Dashboard.</p>
      </div>
  <?php } elseif ( $shifter_remain < 30 ) { ?>
    <div class="notice notice-error">
      <p>Shifter will power down WordPress in <?= $shifter_remain ?> minutes. Please restart your from the Shifter Dashboard.</p>
  </div>

<?php }}

}

add_action( 'admin_notices', 'notice_shifter_dashboard_timer' );

/*
 * JS Scripts
 * Admin and Front-End
 * Load after enqueue jQuery
 */

add_action('wp_enqueue_scripts', 'add_shifter_notify_js' );
add_action('admin_enqueue_scripts', 'add_shifter_notify_js' );
function add_shifter_notify_js() {

  $shifter_js = plugins_url( 'main/main.js', __FILE__ );

  wp_register_script("shifter-notify-js", $shifter_js, array( 'jquery' ));
  wp_localize_script('shifter-notify-js', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

  if (is_user_logged_in()) {
    wp_enqueue_script("shifter-notify-js");
  }
}