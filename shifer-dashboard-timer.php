<?php
/*
Plugin Name: Shifer DashBoard Timer
Plugin URI:
Description: Notice before terminate
Version: 1.0.0
Author: Shifter Team
Author URI: https://github.com/getshifter
License: GPL2
*/

function notice_shifer_dashboard_timer() {
  $bootup_filename = '../.bootup';
  if (file_exists($bootup_filename)) {
  $unixtime = file_get_contents($bootup_filename, true);
  $shifter_uptime = round((time() - $unixtime) / 60);
  if ( $shifter_uptime > 150 ) {
?>
<div class="error"><ul>
Notice: <?php echo $shifter_uptime ?> minutes have passed since you started Dashboard. The period of continuous use is 180 minutes.
</ul></div>
<?php
}}
}
  add_action( 'admin_notices', 'notice_shifer_dashboard_timer' );
?>
