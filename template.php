<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Boriana1 theme.
 */



/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */

function boriana1_preprocess_page(&$variables) {
  drupal_add_js(path_to_theme() . '/js/bd.js');
}
 
function boriana1_preprocess_node(&$variables, $hook) {
  //$variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // ncbc_preprocess_node_page() or ncbc_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}


function boriana1_preprocess_node_blog_post(&$variables, $hook) {
  $user = user_load($variables['uid']); // Make sure the user object is fully loaded
  $variables['author_bio'] = node_load($user->field_user_bio['und'][0]['target_id']);
}